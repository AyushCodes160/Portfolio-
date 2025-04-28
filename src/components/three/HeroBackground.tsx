import React, { useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { PointMaterial, Points } from '@react-three/drei';
import * as THREE from 'three';

function ParticleField() {
  const pointsRef = useRef<THREE.Points>(null);
  
  useFrame(({ clock }) => {
    if (pointsRef.current) {
      const time = clock.getElapsedTime() * 0.2;
      pointsRef.current.rotation.y = time * 0.05;
      pointsRef.current.rotation.x = time * 0.03;
    }
  });

  return (
    <Points ref={pointsRef} limit={2000}>
      <PointMaterial 
        transparent
        vertexColors
        size={0.4}
        sizeAttenuation={true}
        depthWrite={false}
      />
      <Stars count={2000} />
    </Points>
  );
}

function Stars({ count = 5000 }) {
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  for (let i = 0; i < count; i++) {
    const i3 = i * 3;
    
    // Position
    positions[i3] = (Math.random() - 0.5) * 10;
    positions[i3 + 1] = (Math.random() - 0.5) * 10;
    positions[i3 + 2] = (Math.random() - 0.5) * 10;
    
    // Color
    const colorChoice = Math.random();
    if (colorChoice < 0.33) {
      // Cyan
      colors[i3] = 0;
      colors[i3 + 1] = 1;
      colors[i3 + 2] = 1;
    } else if (colorChoice < 0.66) {
      // Magenta
      colors[i3] = 1;
      colors[i3 + 1] = 0;
      colors[i3 + 2] = 1;
    } else {
      // Electric blue
      colors[i3] = 0;
      colors[i3 + 1] = 0.5;
      colors[i3 + 2] = 1;
    }
  }

  return (
    <primitive object={new THREE.BufferGeometry()}>
      <primitive
        attach="attributes-position"
        object={new THREE.BufferAttribute(positions, 3)}
      />
      <primitive
        attach="attributes-color"
        object={new THREE.BufferAttribute(colors, 3)}
      />
    </primitive>
  );
}

const HeroBackground: React.FC = () => {
  return (
    <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
      <ParticleField />
    </Canvas>
  );
};

export default HeroBackground;