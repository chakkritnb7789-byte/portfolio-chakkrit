import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial, Stars } from "@react-three/drei";
import { Suspense, useEffect, useRef, useState } from "react";
import type { Mesh } from "three";

/**
 * ขับ render loop ด้วย FPS ที่จำกัด (คู่กับ frameloop="demand")
 * ฉากหลังเป็นแค่ของตกแต่ง จึงไม่จำเป็นต้องวาดที่ 60fps —
 * การลดเหลือ 30fps คืน main thread ให้การ scroll ไปครึ่งหนึ่ง
 * requestAnimationFrame จะถูกเบรกเองเมื่อสลับแท็บ จึงหยุดวาดอัตโนมัติ
 */
function ThrottledRenderLoop({ fps = 30 }: { fps?: number }) {
  const invalidate = useThree((s) => s.invalidate);

  useEffect(() => {
    const interval = 1000 / fps;
    let raf = 0;
    let last = 0;

    const loop = (time: number) => {
      raf = requestAnimationFrame(loop);
      if (time - last < interval) return;
      last = time;
      invalidate();
    };

    raf = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(raf);
  }, [fps, invalidate]);

  return null;
}

function DistortedSphere({ position, color, scale = 1, speed = 1, movementSpeed = 1 }: { position: [number, number, number]; color: string; scale?: number; speed?: number; movementSpeed?: number }) {
  const ref = useRef<Mesh>(null);
  const initialPosition = useRef(position);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * movementSpeed;
    
    // Strong rotation animation - clearly visible
    ref.current.rotation.x += 0.008 * speed;
    ref.current.rotation.y += 0.012 * speed;
    ref.current.rotation.z += 0.006 * speed;
    
    // Larger position animation - obvious movement
    ref.current.position.x = initialPosition.current[0] + Math.sin(t * 0.8) * 2.0 + Math.cos(t * 0.5) * 1.2;
    ref.current.position.y = initialPosition.current[1] + Math.cos(t * 0.6) * 1.8 + Math.sin(t * 0.4) * 1.0;
    ref.current.position.z = initialPosition.current[2] + Math.sin(t * 0.7) * 1.5 + Math.cos(t * 0.3) * 0.8;
  });
  return (
    <mesh ref={ref} position={position} scale={scale}>
      <icosahedronGeometry args={[1, 6]} />
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
  );
}

function Torus({ position, color, movementSpeed = 1 }: { position: [number, number, number]; color: string; movementSpeed?: number }) {
  const ref = useRef<Mesh>(null);
  const initialPosition = useRef(position);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime * movementSpeed;
    
    // Strong rotation animation - clearly visible
    ref.current.rotation.x += 0.015;
    ref.current.rotation.y += 0.018;
    ref.current.rotation.z += 0.010;
    
    // Larger position animation - obvious movement
    ref.current.position.x = initialPosition.current[0] + Math.cos(t * 0.7) * 2.0 + Math.sin(t * 0.4) * 1.3;
    ref.current.position.y = initialPosition.current[1] + Math.sin(t * 0.65) * 1.9 + Math.cos(t * 0.35) * 1.1;
    ref.current.position.z = initialPosition.current[2] + Math.cos(t * 0.6) * 1.2 + Math.sin(t * 0.5) * 0.9;
  });
  return (
    <mesh ref={ref} position={position}>
      <torusKnotGeometry args={[0.7, 0.22, 96, 12]} />
      <meshStandardMaterial color={color} metalness={0.9} roughness={0.2} emissive={color} emissiveIntensity={0.3} />
    </mesh>
  );
}

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = (e: MediaQueryListEvent) => setReduced(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}

export function Scene3D() {
  const reducedMotion = usePrefersReducedMotion();

  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <div
        className="absolute inset-0"
        style={{ background: "var(--gradient-hero)" }}
      />
      <Canvas
        // Allow continuous animation while keeping it optimized
        frameloop="always"
        camera={{ position: [0, 0, 6], fov: 55 }}
        dpr={[1, 1.25]}
        gl={{
          // ปิด MSAA: เต็มจอ + วัตถุเป็นก้อนกลมมนอยู่แล้ว แทบไม่เห็นความต่าง แต่ประหยัด fill-rate มาก
          antialias: false,
          alpha: true,
          stencil: false,
          depth: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={null}>
          {!reducedMotion && <ThrottledRenderLoop fps={30} />}

          <ambientLight intensity={0.4} />
          <directionalLight position={[5, 5, 5]} intensity={1.2} color="#ffd89b" />
          <pointLight position={[-5, -3, -2]} intensity={1.5} color="#6ec4ff" />
          <pointLight position={[3, -4, 2]} intensity={1.2} color="#ff8a5c" />

          <Stars radius={60} depth={40} count={1200} factor={3} saturation={0} fade speed={0.6} />

          <DistortedSphere position={[-3.2, 1.2, -1]} color="#e8b866" scale={1.3} speed={0.8} movementSpeed={0.6} />
          <DistortedSphere position={[3.4, -1.5, -2]} color="#5aa9e6" scale={1.6} speed={0.5} movementSpeed={0.5} />
          <DistortedSphere position={[0, 2.5, -3]} color="#c86b5c" scale={0.9} speed={1.2} movementSpeed={0.7} />
          <Torus position={[2.5, 2, -1.5]} color="#f0c674" movementSpeed={0.55} />
          <Torus position={[-2.8, -1.8, -1]} color="#7bb5d6" movementSpeed={0.65} />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background/60" />
    </div>
  );
}
