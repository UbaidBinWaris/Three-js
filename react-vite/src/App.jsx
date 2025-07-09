import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Sparkles } from '@react-three/drei';
import React, { useRef } from 'react';

const RotatingCube = () => {
  const meshRef = useRef();

  useFrame(() => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01;
      meshRef.current.rotation.y += 0.01;
    }
  });

  return (
    <mesh ref={meshRef} rotation={[Math.PI / 4, Math.PI / 4, 0]}>
      <cylinderGeometry args={[0.5, 0.5, 1, 32]} />
      <meshLambertMaterial color="orange" emissive="red" />
    </mesh>
  );
};

function App() {
  return (
    <Canvas
      id="canvas"
      style={{
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* Controls */}
      <OrbitControls enableZoom enablePan enableRotate />

      {/* Lighting */}
      <directionalLight position={[0, 10, 5]} intensity={1} />
      <ambientLight intensity={0.3} />

      {/* Background color */}
      <color attach="background" args={['#f0f0f0']} />

      {/* The rotating cylinder */}
      <RotatingCube />

      {/* Sparkles effect */}
      <Sparkles count={100} size={1} color="blue" scale={3} speed={0.5} noise={0.2} />
    </Canvas>
  );
}

export default App;
