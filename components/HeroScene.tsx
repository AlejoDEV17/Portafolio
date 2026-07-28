"use client";

import { Float, Line, Points, PointMaterial } from "@react-three/drei";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function DataCore() {
  const group = useRef<THREE.Group>(null);
  const inner = useRef<THREE.Mesh>(null);
  const pointer = useThree((state) => state.pointer);

  const particlePositions = useMemo(() => {
    const points = new Float32Array(420 * 3);
    const sample = (seed: number) => {
      const value = Math.sin(seed * 12.9898) * 43758.5453;
      return value - Math.floor(value);
    };
    for (let i = 0; i < 420; i += 1) {
      const radius = 2.2 + sample(i + 1) * 2.8;
      const theta = sample(i + 421) * Math.PI * 2;
      const phi = Math.acos(2 * sample(i + 841) - 1);
      points[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      points[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      points[i * 3 + 2] = radius * Math.cos(phi);
    }
    return points;
  }, []);

  useFrame((state, delta) => {
    if (!group.current || !inner.current) return;
    group.current.rotation.y += delta * 0.08;
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      pointer.y * 0.18,
      0.035,
    );
    group.current.rotation.z = THREE.MathUtils.lerp(
      group.current.rotation.z,
      -pointer.x * 0.16,
      0.035,
    );
    inner.current.rotation.x += delta * 0.18;
    inner.current.rotation.y -= delta * 0.12;
    const pulse = 1 + Math.sin(state.clock.elapsedTime * 1.4) * 0.025;
    inner.current.scale.setScalar(pulse);
  });

  return (
    <group ref={group}>
      <Float speed={1.2} rotationIntensity={0.18} floatIntensity={0.25}>
        <mesh ref={inner}>
          <icosahedronGeometry args={[1.36, 2]} />
          <meshPhysicalMaterial
            color="#d7ff3f"
            emissive="#7e981b"
            emissiveIntensity={0.45}
            roughness={0.2}
            metalness={0.25}
            wireframe
            transparent
            opacity={0.85}
          />
        </mesh>
        <mesh rotation={[1.1, 0.2, 0.5]}>
          <torusGeometry args={[2.05, 0.012, 8, 180]} />
          <meshBasicMaterial color="#ff2ba6" transparent opacity={0.8} />
        </mesh>
        <mesh rotation={[0.25, 1.15, 0.1]}>
          <torusGeometry args={[2.5, 0.007, 8, 200]} />
          <meshBasicMaterial color="#718dff" transparent opacity={0.58} />
        </mesh>
        <mesh rotation={[-0.45, 0.2, 1.2]}>
          <torusGeometry args={[1.72, 0.006, 8, 160]} />
          <meshBasicMaterial color="#f6f5ef" transparent opacity={0.34} />
        </mesh>
        <Line
          points={[
            [-2.8, -1.6, 0],
            [-1.5, -0.7, 0.6],
            [0, 0, 1.4],
            [1.7, 0.7, 0.2],
            [2.9, 1.5, -0.5],
          ]}
          color="#d7ff3f"
          transparent
          opacity={0.32}
          lineWidth={0.6}
        />
        <Points positions={particlePositions} stride={3} frustumCulled={false}>
          <PointMaterial
            transparent
            color="#f6f5ef"
            size={0.025}
            sizeAttenuation
            depthWrite={false}
            opacity={0.58}
          />
        </Points>
      </Float>
    </group>
  );
}

export default function HeroScene() {
  return (
    <div className="hero-scene" aria-hidden="true">
      <Canvas
        camera={{ position: [0, 0, 7], fov: 48 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      >
        <ambientLight intensity={0.6} />
        <pointLight position={[4, 4, 4]} color="#d7ff3f" intensity={15} />
        <pointLight position={[-4, -2, 3]} color="#ff2ba6" intensity={10} />
        <DataCore />
      </Canvas>
    </div>
  );
}
