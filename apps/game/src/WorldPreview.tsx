import React, { useMemo, useState } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

type Persona = 'Ahmed' | 'Fatimah';
type Quality = 'low' | 'high';

function Building({ x, z, height, tone }: { x: number; z: number; height: number; tone: string }) {
  return (
    <group position={[x, 0, z]}>
      <mesh position={[0, height / 2, 0]} castShadow receiveShadow>
        <boxGeometry args={[3.3, height, 3.3]} />
        <meshStandardMaterial color={tone} roughness={0.82} />
      </mesh>
      {Array.from({ length: Math.floor(height / 1.35) }, (_, floor) => (
        <group key={floor} position={[0, floor * 1.35 + 1.05, 1.665]}>
          {[-0.95, 0.95].map((dx) => (
            <mesh key={dx} position={[dx, 0, 0]}>
              <planeGeometry args={[0.65, 0.75]} />
              <meshStandardMaterial color="#273c4a" metalness={0.12} roughness={0.32} />
            </mesh>
          ))}
        </group>
      ))}
      <mesh position={[0, height + 0.12, 0]} castShadow>
        <boxGeometry args={[3.65, 0.24, 3.65]} />
        <meshStandardMaterial color="#d7cbb5" />
      </mesh>
    </group>
  );
}

function Character({ persona }: { persona: Persona }) {
  const isFatimah = persona === 'Fatimah';
  return (
    <group position={[0, 0.02, 1.1]}>
      <mesh position={[0, 0.52, 0]} castShadow>
        <capsuleGeometry args={[0.19, 0.66, 8, 12]} />
        <meshStandardMaterial color={isFatimah ? '#364b5a' : '#c2aa86'} roughness={0.92} />
      </mesh>
      <mesh position={[0, 1.3, 0]} castShadow>
        <capsuleGeometry args={[0.27, 0.6, 8, 12]} />
        <meshStandardMaterial color={isFatimah ? '#4c6070' : '#f0e7d7'} roughness={0.92} />
      </mesh>
      <mesh position={[0, 1.93, 0]} castShadow>
        <sphereGeometry args={[0.235, 18, 12]} />
        <meshStandardMaterial color={isFatimah ? '#445565' : '#805a45'} roughness={0.94} />
      </mesh>
      {isFatimah && <mesh position={[0, 1.58, -0.09]} castShadow>
        <coneGeometry args={[0.38, 0.92, 12]} />
        <meshStandardMaterial color="#445565" side={THREE.DoubleSide} roughness={0.9} />
      </mesh>}
    </group>
  );
}

export function NeighborhoodScene({ persona, quality }: { persona: Persona; quality: Quality }) {
  const buildings = useMemo(() => Array.from({ length: 16 }, (_, i) => ({
    x: (i % 8 - 3.5) * 5.4,
    z: i < 8 ? -10 : 11,
    height: 3.4 + (i * 7 % 5) * 1.35,
    tone: ['#c4b7a1', '#d8c9b0', '#b7b8ad', '#a9b3ad'][i % 4],
  })), []);
  return (
    <>
      <color attach="background" args={['#b8d4e5']} />
      <fog attach="fog" args={['#b8d4e5', 30, 90]} />
      <ambientLight intensity={0.8} />
      <hemisphereLight args={['#e7f3ff', '#8b806f', 1.5]} />
      <directionalLight position={[12, 22, 9]} intensity={2.2} castShadow={quality === 'high'} shadow-mapSize={[1024, 1024]} />
      <mesh rotation={[-Math.PI / 2, 0, 0]} receiveShadow>
        <planeGeometry args={[100, 100]} />
        <meshStandardMaterial color="#b5b7a5" roughness={1} />
      </mesh>
      <mesh position={[0, 0.02, 0]} receiveShadow>
        <boxGeometry args={[48, 0.04, 6.5]} />
        <meshStandardMaterial color="#505b5e" roughness={0.96} />
      </mesh>
      <mesh position={[0, 0.05, 0]} receiveShadow>
        <boxGeometry args={[0.16, 0.03, 0.8]} />
        <meshStandardMaterial color="#f4e8c9" />
      </mesh>
      {buildings.map((b, i) => <Building key={i} {...b} />)}
      <Character persona={persona} />
      {quality === 'high' && <ContactShadows position={[0, 0.035, 0]} opacity={0.35} scale={40} blur={2.6} far={15} />}
      <OrbitControls makeDefault target={[0, 1.2, 0]} minDistance={4} maxDistance={30} maxPolarAngle={Math.PI / 2.05} />
    </>
  );
}

export function WorldPreview() {
  const [persona, setPersona] = useState<Persona>('Ahmed');
  const [quality, setQuality] = useState<Quality>('low');
  return (
    <main style={{ width: '100%', height: '100vh', background: '#101a20', color: '#fff', fontFamily: 'system-ui, sans-serif', position: 'relative' }}>
      <header style={{ position: 'absolute', top: 0, left: 0, zIndex: 3, padding: '18px 22px', maxWidth: 360, background: 'linear-gradient(90deg,rgba(10,22,29,.92),rgba(10,22,29,.2))' }}>
        <strong style={{ fontSize: 24, letterSpacing: 4 }}>DUNYA</strong>
        <p style={{ fontSize: 13, lineHeight: 1.45 }}>Original procedural neighborhood preview. These blockout characters are placeholders, not photorealistic final assets.</p>
        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
          <button onClick={() => setPersona('Ahmed')} aria-pressed={persona === 'Ahmed'}>Ahmed</button>
          <button onClick={() => setPersona('Fatimah')} aria-pressed={persona === 'Fatimah'}>Fatimah</button>
          <button onClick={() => setQuality(quality === 'low' ? 'high' : 'low')}>Quality: {quality}</button>
        </div>
      </header>
      <Canvas shadows={quality === 'high'} dpr={quality === 'high' ? [1, 1.75] : [1, 1.25]} camera={{ position: [7, 5, 10], fov: 50 }} gl={{ antialias: quality === 'high', powerPreference: 'high-performance' }}>
        <NeighborhoodScene persona={persona} quality={quality} />
      </Canvas>
      <footer style={{ position: 'absolute', bottom: 12, left: 20, right: 20, fontSize: 12, color: '#fff', textShadow: '0 1px 5px #000' }}>Orbit to inspect • Prototype only • No character animation or missions yet</footer>
    </main>
  );
}
