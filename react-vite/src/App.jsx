import {Canvas}  from '@react three/fiber';
import {OrbitControls} from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';




const RotatingCube = () => {

  const meshref = useRef();

  useFrame(() => {
    if (meshref.current) {
      meshref.current.rotation.x += 0.01;
      meshref.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshref} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color="orange" />
    </mesh>
  );
};

function App() {
  

  return (
    <Canvas id="canvas" style={{ height: '100vh', width: '100vw' , display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      {/* Your 3D scene goes here */}
      <OrbitControls enableZoom enablePan enableRotate />


      <directionalLight position={[0, 10, 5]} intensity={1} color={"white"} />


      <color args={["red"]} position={[0, 0, 0]} />

    </Canvas>
  )
}

export default App
