import React from 'react';
import { createRoot } from 'react-dom/client';
import { Canvas } from '@react-three/fiber';

function Scene() {
  return <><ambientLight intensity={1.5} /><directionalLight position={[4,8,4]} intensity={2} /><mesh rotation={[-Math.PI/2,0,0]} receiveShadow><planeGeometry args={[30,30]} /><meshStandardMaterial color="#b7c8ad" /></mesh><mesh position={[0,1,0]}><boxGeometry args={[2,2,2]} /><meshStandardMaterial color="#d5bd8d" /></mesh></>;
}
function App(){return <main style={{height:'100vh',background:'#101a20',color:'white'}}><header style={{position:'absolute',zIndex:2,padding:20}}><strong>DUNYA</strong><p>Original open-world prototype — constructive missions coming soon.</p></header><Canvas camera={{position:[5,5,8],fov:60}}><Scene /></Canvas></main>}

createRoot(document.getElementById('root')!).render(<React.StrictMode><App /></React.StrictMode>);
