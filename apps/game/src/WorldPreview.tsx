import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { ContactShadows } from '@react-three/drei';
import { BOUNDS, NPCS, deliverPantry, freshState, migrateSave, move, nearbyNpc, serializeSave, talk, tick, type GameState, type Persona } from '@dunya/game-core';
import { PANTRY_MISSION } from '@dunya/content';
import * as THREE from 'three';

type Quality = 'low' | 'high';
const SAVE_KEY = 'dunya-save-v1';
const buttonStyle: React.CSSProperties = { background: '#203d47', color: '#fff', border: '1px solid #9eb7b8', borderRadius: 7, padding: '10px 12px', cursor: 'pointer', fontSize: 14 };

function Building({ x, z, height, tone, label }: { x: number; z: number; height: number; tone: string; label?: string }) {
  return <group position={[x, 0, z]}>
    <mesh position={[0, height / 2, 0]} castShadow receiveShadow>
      <boxGeometry args={[3.3, height, 3.3]} /><meshStandardMaterial color={tone} roughness={0.85} />
    </mesh>
    {Array.from({ length: Math.floor(height / 1.35) }, (_, floor) =>
      [-0.95, 0.95].map(dx => <mesh key={floor + ':' + dx} position={[dx, floor * 1.35 + 1.05, z < 0 ? 1.67 : -1.67]}>
        <planeGeometry args={[0.65, 0.75]} /><meshStandardMaterial color="#263b49" metalness={0.15} roughness={0.35} />
      </mesh>))}
    <mesh position={[0, height + 0.12, 0]} castShadow>
      <boxGeometry args={[3.65, 0.24, 3.65]} /><meshStandardMaterial color="#e2d7c3" />
    </mesh>
    {label && <mesh position={[0, 1.5, z < 0 ? 1.72 : -1.72]}>
      <boxGeometry args={[2.7, 0.5, 0.08]} /><meshStandardMaterial color="#385d5b" />
    </mesh>}
  </group>;
}
function Avatar({ persona, position }: { persona: Persona; position: { x: number; z: number } }) {
  const isFatimah = persona === 'Fatimah';
  return <group position={[position.x, 0.02, position.z]}>
    <mesh position={[0, 0.56, 0]} castShadow><capsuleGeometry args={[0.18, 0.72, 8, 12]} /><meshStandardMaterial color={isFatimah ? '#334e60' : '#b9a07d'} /></mesh>
    <mesh position={[0, 1.35, 0]} castShadow><capsuleGeometry args={[0.27, 0.65, 8, 12]} /><meshStandardMaterial color={isFatimah ? '#4a6170' : '#eee0c8'} /></mesh>
    <mesh position={[0, 1.94, 0]} castShadow><sphereGeometry args={[0.23, 16, 12]} /><meshStandardMaterial color={isFatimah ? '#445a68' : '#825a46'} /></mesh>
    {isFatimah && <mesh position={[0, 1.64, -0.09]} castShadow><coneGeometry args={[0.36, 0.8, 12]} /><meshStandardMaterial color="#445a68" side={THREE.DoubleSide} /></mesh>}
  </group>;
}
function FollowCamera({ position }: { position: { x: number; z: number } }) {
  const { camera } = useThree();
  useFrame((_, delta) => {
    const desired = new THREE.Vector3(position.x + 5.5, 5, position.z + 7);
    camera.position.lerp(desired, Math.min(1, delta * 5));
    camera.lookAt(position.x, 1.2, position.z);
  });
  return null;
}
function NeighborhoodScene({ game, quality, onTick }: { game: GameState; quality: Quality; onTick: (dt: number) => void }) {
  const accumulator = useRef(0);
  useFrame((_, delta) => { accumulator.current += Math.min(delta, 0.1); if (accumulator.current >= 0.05) { onTick(accumulator.current); accumulator.current = 0; } });
  return <>
    <color attach="background" args={['#b8d4e5']} /><fog attach="fog" args={['#b8d4e5', 32, 95]} />
    <ambientLight intensity={0.85} /><hemisphereLight args={['#e7f3ff', '#7d7565', 1.4]} />
    <directionalLight position={[12, 22, 9]} intensity={game.timeMinutes > 1100 || game.timeMinutes < 360 ? 0.5 : 2} castShadow={quality === 'high'} shadow-mapSize={[1024, 1024]} />
    <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow><planeGeometry args={[100, 100]} /><meshStandardMaterial color="#b5b7a5" /></mesh>
    <mesh position={[0, 0.02, 0]} receiveShadow><boxGeometry args={[48, 0.04, 8]} /><meshStandardMaterial color="#4e595c" /></mesh>
    {Array.from({ length: 16 }, (_, i) => <Building key={i} x={(i % 8 - 3.5) * 5.4} z={i < 8 ? -10 : 11} height={3.4 + (i * 7 % 5) * 1.35} tone={['#c4b7a1','#d8c9b0','#b7b8ad','#a9b3ad'][i % 4]} label={i === 3 ? 'Pantry' : undefined} />)}
    {NPCS.map((npc, i) => <group key={npc.id} position={[npc.x, 0, npc.z]}>
      <mesh position={[0, 0.9, 0]} castShadow><capsuleGeometry args={[0.2, 1, 6, 10]} /><meshStandardMaterial color={['#b58367','#5d7c7b','#9c8168'][i]} /></mesh>
      <mesh position={[0, 1.7, 0]} castShadow><sphereGeometry args={[0.21, 12, 8]} /><meshStandardMaterial color="#936f57" /></mesh>
    </group>)}
    <Avatar persona={game.persona} position={game.position} />
    <FollowCamera position={game.position} />
    {quality === 'high' && <ContactShadows position={[0, 0.035, 0]} opacity={0.3} scale={42} blur={2.4} far={15} />}
  </>;
}
function loadGame(): GameState {
  try { const raw = localStorage.getItem(SAVE_KEY); return raw ? migrateSave(JSON.parse(raw)) : freshState(); }
  catch { return freshState(); }
}
export function WorldPreview() {
  const [game, setGame] = useState<GameState>(freshState);
  const [quality, setQuality] = useState<Quality>('low');
  const [paused, setPaused] = useState(true);
  const [dialogue, setDialogue] = useState('');
  const [loaded, setLoaded] = useState(false);
  const pressed = useRef(new Set<string>());
  const gameRef = useRef(game);
    useEffect(() => { gameRef.current = game; }, [game]);
  useEffect(() => {
    setGame(loadGame()); setLoaded(true);
    const down = (e: KeyboardEvent) => {
      if (['KeyW','KeyA','KeyS','KeyD','ArrowUp','ArrowDown','ArrowLeft','ArrowRight','KeyE','Space'].includes(e.code)) e.preventDefault();
      pressed.current.add(e.code);
    };
    const up = (e: KeyboardEvent) => pressed.current.delete(e.code);
    const blur = () => pressed.current.clear();
    window.addEventListener('keydown', down); window.addEventListener('keyup', up); window.addEventListener('blur', blur);
    return () => { window.removeEventListener('keydown', down); window.removeEventListener('keyup', up); window.removeEventListener('blur', blur); };
  }, []);
  const interact = useCallback(() => {
    const current = gameRef.current;
    const npc = nearbyNpc(current);
    if (!npc) { setDialogue('Move closer to a neighbor to talk.'); return; }
    setDialogue(npc.name + ': ' + npc.text);
    setGame(previous => {
      const talked = talk(previous, npc.id);
      return npc.id === 'amina' ? deliverPantry(talked) : talked;
    });
  }, []);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.code === 'KeyE' && !e.repeat && !paused) interact(); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [interact, paused]);
  const onTick = useCallback((dt: number) => {
    if (paused) return;
    const keys = pressed.current;
    let dx = Number(keys.has('KeyD') || keys.has('ArrowRight')) - Number(keys.has('KeyA') || keys.has('ArrowLeft'));
    let dz = Number(keys.has('KeyS') || keys.has('ArrowDown')) - Number(keys.has('KeyW') || keys.has('ArrowUp'));
    const pad = navigator.getGamepads?.()[0];
    if (pad) { dx += Math.abs(pad.axes[0] ?? 0) > 0.18 ? pad.axes[0] : 0; dz += Math.abs(pad.axes[1] ?? 0) > 0.18 ? pad.axes[1] : 0; }
    setGame(s => tick(move(s, dx, dz, dt), dt));
  }, [paused]);
  const save = () => { try { localStorage.setItem(SAVE_KEY, serializeSave(gameRef.current)); setDialogue('Saved locally on this device.'); } catch { setDialogue('Save failed: storage unavailable.'); } };
  useEffect(() => {
    if (!loaded) return;
    const handle = window.setInterval(() => { if (!paused) { try { localStorage.setItem(SAVE_KEY, serializeSave(gameRef.current)); } catch { /* storage may be disabled */ } } }, 5000);
    return () => window.clearInterval(handle);
  }, [loaded, paused]);
  const nearby = nearbyNpc(game);
  const clock = Math.floor(game.timeMinutes / 60).toString().padStart(2,'0') + ':' + Math.floor(game.timeMinutes % 60).toString().padStart(2,'0');
  return <main style={{ width:'100%', height:'100dvh', background:'#101a20', color:'#fff', fontFamily:'system-ui,sans-serif', position:'relative', overflow:'hidden' }}>
    <header style={{ position:'absolute', top:0, left:0, zIndex:3, padding:'12px 16px', maxWidth:360, background:'rgba(10,22,29,.88)', borderRadius:'0 0 12px 0' }}>
      <strong style={{ fontSize:21, letterSpacing:3 }}>DUNYA</strong>
      <p style={{ fontSize:12, margin:'6px 0' }}>Original playable blockout · {clock} fictional time · {game.coins} fictional coins</p>
      <div style={{ display:'flex', gap:6, flexWrap:'wrap' }}>
        <button style={buttonStyle} onClick={() => setGame(freshState('Ahmed'))} aria-pressed={game.persona==='Ahmed'}>Ahmed</button>
        <button style={buttonStyle} onClick={() => setGame(freshState('Fatimah'))} aria-pressed={game.persona==='Fatimah'}>Fatimah</button>
        <button style={buttonStyle} onClick={() => setPaused(p => !p)}>{paused ? 'Play' : 'Pause'}</button>
        <button style={buttonStyle} onClick={save}>Save</button>
        <button style={buttonStyle} onClick={() => setGame(loadGame())}>Load</button>
        <button style={buttonStyle} onClick={() => setQuality(q => q==='low'?'high':'low')}>Graphics: {quality}</button>
      </div>
      <p style={{ fontSize:12, margin:'8px 0 0' }}>{PANTRY_MISSION.chapter} · {game.quest==='available'?'Speak to Sara':game.quest==='active'?'Visit Amina at the pantry':'Pantry helped — thank you!'}</p>
    </header>
    <Canvas shadows={quality==='high'} dpr={quality==='high'?[1,1.75]:[1,1.25]} camera={{ position:[6,5,8], fov:55 }} gl={{ antialias:quality==='high', powerPreference:'high-performance' }}>
      <NeighborhoodScene game={game} quality={quality} onTick={onTick} />
    </Canvas>
    <aside aria-live="polite" style={{ position:'absolute', bottom:115, left:12, right:12, zIndex:3, pointerEvents:'none', textAlign:'center', textShadow:'0 1px 4px black', fontSize:14 }}>
      {dialogue || (nearby ? 'Near '+nearby.name+' — press E or Talk' : 'WASD / arrows to walk · gamepad supported')}
    </aside>
    <nav aria-label="Touch movement" style={{ position:'absolute', bottom:14, left:12, zIndex:3, display:'grid', gridTemplateColumns:'repeat(3,48px)', gap:4 }}>
      {[['','KeyW',''],['KeyA','KeyS','KeyD']].flat().map((key,i) => key ? <button key={i} style={buttonStyle}
        onPointerDown={e=>{e.currentTarget.setPointerCapture(e.pointerId);pressed.current.add(key);}}
        onPointerUp={()=>pressed.current.delete(key)} onPointerCancel={()=>pressed.current.delete(key)}
        aria-label={({'KeyW':'Forward','KeyS':'Backward','KeyA':'Left','KeyD':'Right'} as Record<string,string>)[key]}>{({KeyW:'↑',KeyS:'↓',KeyA:'←',KeyD:'→'} as Record<string,string>)[key]}</button> : <span key={i}/>)}
    </nav>
    <button style={{...buttonStyle,position:'absolute',bottom:20,right:15,zIndex:3,padding:'15px 22px'}} onClick={interact} disabled={paused}>Talk / Interact (E)</button>
    {paused && <div style={{position:'absolute',inset:0,zIndex:2,background:'rgba(0,0,0,.36)',display:'grid',placeItems:'center',pointerEvents:'none'}}>
      <div style={{background:'rgba(12,31,39,.9)',padding:24,borderRadius:12,textAlign:'center'}}><strong>Paused</strong><p>Choose a character, then press Play.</p><small>Draft community mission; no religious rulings.</small></div>
    </div>}
  </main>;
}
