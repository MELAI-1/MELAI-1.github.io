"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";

function QubitLattice() {
  const group = useRef<THREE.Group>(null);
  const points = useMemo(() => {
    const geometry = new THREE.IcosahedronGeometry(2.6, 1);
    return geometry;
  }, []);

  const particles = useMemo(() => {
    const count = 220;
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 4.5 + Math.random() * 3.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);
    }
    return positions;
  }, []);

  useFrame((_, delta) => {
    if (group.current) {
      group.current.rotation.y += delta * 0.08;
      group.current.rotation.x += delta * 0.02;
    }
  });

  return (
    <group ref={group}>
      <lineSegments>
        <edgesGeometry args={[points]} />
        <lineBasicMaterial color="#22d3ee" transparent opacity={0.35} />
      </lineSegments>
      <points>
        <primitive object={points} attach="geometry" />
        <pointsMaterial color="#a78bfa" size={0.06} transparent opacity={0.8} />
      </points>
      <points>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[particles, 3]} />
        </bufferGeometry>
        <pointsMaterial color="#34d399" size={0.035} transparent opacity={0.5} />
      </points>
    </group>
  );
}

export function QuantumScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 9], fov: 45 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true }}
      className="!absolute inset-0"
    >
      <ambientLight intensity={0.6} />
      <QubitLattice />
    </Canvas>
  );
}
