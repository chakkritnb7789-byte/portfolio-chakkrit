import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Stars } from "@react-three/drei";
import { Suspense, useRef } from "react";
import type { Mesh } from "three";

function DistortedSphere({ position, color, scale = 1, speed = 1 }: { position: [number, number, number]; color: string; scale?: number; speed?: number }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15 * speed;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2 * speed;
  });
  return (
    <Float speed={1.4} rotationIntensity={0.6} floatIntensity={1.2}>
      <mesh ref={ref} position={position} scale={scale}>
        <icosahedronGeometry args={[1, 8]} />
        <MeshDistortMaterial
          color={color}
          distort={0.45}
          speed={2}
          roughness={0.15}
          metalness={0.8}
          emissive={color}
          emissiveIntensity={0.25}
        />
      </mesh>
    </Float>
  );
}

function Torus({ position, color }: { position: [number, number, number]; color: string }) {
  const ref = useRef<Mesh>(null);
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.3;
    ref.current.rotation.y = state.clock.elapsedTime * 0.4;
  });
  return (
    <Float speed={1} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={ref} position={position}>
        <torusKnotGeometry args={[0.7, 0.22, 128, 16]} />
        <meshStandardMaterial color={color} metalness={0.9} roughness={0.2} emissive={color} emissiveIntensity={0.3} />
      </mesh>
    </Float>
  );
}

export function Scene3D() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <Canvas
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={[1, 1.5]}
        gl={{ antialias: true, alpha: true }}
      >
        <Suspense fallback={null}>
          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffd89b" />
          <pointLight position={[-5, -3, -2]} intensity={1.5} color="#6ec4ff" />
          <pointLight position={[3, -4, 2]} intensity={1.2} color="#ff8a5c" />

          <Stars radius={60} depth={40} count={2500} factor={3} saturation={0} fade speed={0.6} />

          <DistortedSphere position={[-3.2, 1.2, -1]} color="#e8b866" scale={1.3} speed={0.8} />
          <DistortedSphere position={[3.4, -1.5, -2]} color="#5aa9e6" scale={1.6} speed={0.5} />
          <DistortedSphere position={[0, 2.5, -3]} color="#c86b5c" scale={0.9} speed={1.2} />
          <Torus position={[2.5, 2, -1.5]} color="#f0c674" />
          <Torus position={[-2.8, -1.8, -1]} color="#7bb5d6" />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60" />
    </div>
  );
}
