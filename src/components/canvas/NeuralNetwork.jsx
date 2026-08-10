/* eslint-disable react/no-unknown-property */
import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import { EffectComposer, Bloom } from '@react-three/postprocessing';
import * as THREE from 'three';
import { useReducedMotion } from 'framer-motion';

const ProceduralNetwork = () => {
  const groupRef = useRef();
  const { mouse } = useThree();
  const baseRotation = useRef({ x: 0, y: 0 });
  const targetRotation = useRef({ x: 0, y: 0 });
  const prefersReducedMotion = useReducedMotion();
  
  const count = 800; // Optimal node count for performance and aesthetics

  const { positions, linePositions } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const nodes = [];

    // 1. Generate spherical point cloud
    for (let i = 0; i < count; i++) {
      const radius = 20;
      const u = Math.random();
      const v = Math.random();
      const theta = 2 * Math.PI * u;
      const phi = Math.acos(2 * v - 1);
      const r = Math.cbrt(Math.random()) * radius;

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      pos[i * 3] = x;
      pos[i * 3 + 1] = y;
      pos[i * 3 + 2] = z;
      
      nodes.push(new THREE.Vector3(x, y, z));
    }

    // 2. Generate connections (synapses)
    const lPos = [];
    for (let i = 0; i < count; i++) {
      // Connect to a few nearby nodes
      let connections = 0;
      for (let j = i + 1; j < count; j++) {
        if (nodes[i].distanceTo(nodes[j]) < 3.5) {
          lPos.push(nodes[i].x, nodes[i].y, nodes[i].z);
          lPos.push(nodes[j].x, nodes[j].y, nodes[j].z);
          connections++;
          if (connections >= 3) break; // limit connections per node for performance
        }
      }
    }

    return { 
      positions: pos, 
      linePositions: new Float32Array(lPos) 
    };
  }, []);

  useFrame((state, delta) => {
    if (prefersReducedMotion) return;
    
    if (groupRef.current) {
      // Accumulate base rotation
      baseRotation.current.y -= delta * 0.05;
      baseRotation.current.x -= delta * 0.02;

      // Add mouse parallax offset
      targetRotation.current.x = baseRotation.current.x + (mouse.y * Math.PI) / 12;
      targetRotation.current.y = baseRotation.current.y + (mouse.x * Math.PI) / 12;

      // Smooth interpolation towards target rotation
      groupRef.current.rotation.x += (targetRotation.current.x - groupRef.current.rotation.x) * 0.05;
      groupRef.current.rotation.y += (targetRotation.current.y - groupRef.current.rotation.y) * 0.05;
    }
  });

  return (
    <group ref={groupRef}>
      <Points positions={positions} stride={3} frustumCulled={false}>
        <PointMaterial
          transparent
          color="#00F0FF"
          size={0.08}
          sizeAttenuation={true}
          depthWrite={false}
          opacity={0.8}
        />
      </Points>
      
      <lineSegments frustumCulled={false}>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            count={linePositions.length / 3}
            array={linePositions}
            itemSize={3}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#4F46E5"
          transparent
          opacity={0.15}
          depthWrite={false}
        />
      </lineSegments>
    </group>
  );
};

const NeuralNetwork = () => {
  return (
    <Canvas camera={{ position: [0, 0, 18], fov: 60 }} gl={{ powerPreference: "high-performance", antialias: false }}>
      <color attach="background" args={['#050505']} />
      <ambientLight intensity={0.5} />
      <ProceduralNetwork />
      
      <EffectComposer disableNormalPass>
        <Bloom 
          luminanceThreshold={0.2}
          mipmapBlur 
          intensity={1.5} 
        />
      </EffectComposer>
      
      <fog attach="fog" args={['#050505', 10, 30]} />
    </Canvas>
  );
};

export default NeuralNetwork;
