import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { useGLTF, OrbitControls, PerspectiveCamera, Environment } from '@react-three/drei';
import * as THREE from 'three';

// Fallback geometry when no 3D model is loaded
function AvatarGeometry() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame(({ clock }) => {
    if (meshRef.current) {
      const t = clock.getElapsedTime();
      meshRef.current.rotation.y = Math.sin(t / 2) * 0.5;
      meshRef.current.rotation.x = Math.cos(t / 2) * 0.2;
    }
  });

  return (
    <mesh ref={meshRef}>
      <torusKnotGeometry args={[1, 0.3, 100, 16]} />
      <meshStandardMaterial 
        color="#00FFFF"
        emissive="#00FFFF"
        emissiveIntensity={0.5}
        metalness={0.8}
        roughness={0.2}
      />
    </mesh>
  );
}

// Animated light setup
function LightRig() {
  const pointLightRef = useRef<THREE.PointLight>(null);
  
  useFrame(({ clock }) => {
    if (pointLightRef.current) {
      const t = clock.getElapsedTime();
      const x = Math.sin(t * 0.5) * 3;
      const z = Math.cos(t * 0.5) * 3;
      
      pointLightRef.current.position.set(x, 2, z);
    }
  });

  return (
    <>
      <pointLight 
        ref={pointLightRef} 
        color="#FF00FF" 
        intensity={10} 
        distance={10} 
      />
      <pointLight 
        position={[0, 3, 0]} 
        color="#00FFFF" 
        intensity={5} 
        distance={8} 
      />
    </>
  );
}

const AnimatedAvatar: React.FC = () => {
  return (
    <Canvas className="w-full h-full">
      <PerspectiveCamera makeDefault position={[0, 0, 4]} />
      <color attach="background" args={['#121212']} />
      
      <LightRig />
      <AvatarGeometry />
      
      <Environment preset="city" />
      <OrbitControls 
        enablePan={false}
        enableZoom={false}
        rotateSpeed={0.5}
        autoRotate
        autoRotateSpeed={1}
      />
    </Canvas>
  );
};

export default AnimatedAvatar;