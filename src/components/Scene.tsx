import { useRef, useMemo, useState, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Float, Stars, Sphere } from "@react-three/drei";
import * as THREE from "three";

function ShootingStar() {
  const ref = useRef<THREE.Mesh>(null!);
  const [active, setActive] = useState(false);
  const [speed] = useState(() => Math.random() * 0.2 + 0.1);
  const [pos] = useState(() => new THREE.Vector3());

  useFrame((state) => {
    if (!active && Math.random() < 0.005) {
      setActive(true);
      pos.set(
        (Math.random() - 0.5) * 50,
        Math.random() * 20 + 10,
        (Math.random() - 0.5) * 20
      );
      ref.current.position.copy(pos);
    }

    if (active) {
      ref.current.position.y -= speed * 1.5;
      ref.current.position.x += speed * 0.5;
      
      if (ref.current.position.y < -20) {
        setActive(false);
      }
    }
  });

  return (
    <mesh ref={ref} visible={active}>
      <sphereGeometry args={[0.02, 8, 8]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={active ? 1 : 0} />
      {/* Trail effect using a long thin cylinder */}
      <mesh rotation={[Math.PI / 4, 0, 0]} position={[0, 1, 0]}>
        <cylinderGeometry args={[0, 0.015, 3, 4]} />
        <meshBasicMaterial color="#2563eb" transparent opacity={0.3} />
      </mesh>
    </mesh>
  );
}

function ShootingStars() {
  return (
    <group>
      {Array.from({ length: 5 }).map((_, i) => (
        <ShootingStar key={i} />
      ))}
    </group>
  );
}

function Planet({ 
  size, 
  color, 
  distance, 
  speed, 
  rotationSpeed,
  hasRings = false,
  atmosphereColor = null
}: { 
  size: number; 
  color: string; 
  distance: number; 
  speed: number; 
  rotationSpeed: number;
  hasRings?: boolean;
  atmosphereColor?: string | null;
}) {
  const groupRef = useRef<THREE.Group>(null!);
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    // Orbit
    groupRef.current.rotation.y = time * speed * 0.2; // Slower orbits for better viewing
    // Self rotation
    meshRef.current.rotation.y = time * rotationSpeed;
  });

  return (
    <group ref={groupRef}>
      <mesh ref={meshRef} position={[distance, 0, 0]}>
        <sphereGeometry args={[size, 64, 64]} />
        <meshStandardMaterial 
          color={color} 
          roughness={0.8}
          metalness={0.2}
          emissive={color}
          emissiveIntensity={0.1}
        />
        
        {/* Atmosphere/Glow layer */}
        {atmosphereColor && (
          <mesh scale={[1.15, 1.15, 1.15]}>
            <sphereGeometry args={[size, 32, 32]} />
            <meshBasicMaterial 
              color={atmosphereColor} 
              transparent 
              opacity={0.15} 
              side={THREE.BackSide}
            />
          </mesh>
        )}

        {hasRings && (
          <group rotation={[Math.PI / 2.5, 0, 0]}>
            <mesh>
              <ringGeometry args={[size * 1.4, size * 2.2, 64]} />
              <meshStandardMaterial 
                color={color} 
                transparent 
                opacity={0.4} 
                side={THREE.DoubleSide} 
              />
            </mesh>
          </group>
        )}
      </mesh>
    </group>
  );
}

function SolarSystem() {
  const planets = [
    { name: "Mercury", size: 0.08, color: "#a5a5a5", distance: 2, speed: 1.5, rotationSpeed: 1 },
    { name: "Venus", size: 0.14, color: "#e3bb76", distance: 3, speed: 1.0, rotationSpeed: 0.5, atmosphereColor: "#ff9d00" },
    { name: "Earth", size: 0.15, color: "#22d3ee", distance: 4.5, speed: 0.8, rotationSpeed: 2, atmosphereColor: "#22d3ee" },
    { name: "Mars", size: 0.1, color: "#ef4444", distance: 6, speed: 0.6, rotationSpeed: 1.8, atmosphereColor: "#ef4444" },
    { name: "Jupiter", size: 0.45, color: "#fb923c", distance: 8.5, speed: 0.3, rotationSpeed: 4, atmosphereColor: "#fb923c" },
    { name: "Saturn", size: 0.38, color: "#fcd34d", distance: 11.5, speed: 0.2, rotationSpeed: 3.5, hasRings: true, atmosphereColor: "#fcd34d" },
    { name: "Uranus", size: 0.28, color: "#60a5fa", distance: 14, speed: 0.15, rotationSpeed: 2.5, atmosphereColor: "#60a5fa" },
    { name: "Neptune", size: 0.28, color: "#3b82f6", distance: 16, speed: 0.1, rotationSpeed: 2.2, atmosphereColor: "#3b82f6" },
  ];

  return (
    <group rotation={[Math.PI / 12, 0, 0]}>
      {/* Sun with central light source */}
      <group>
        <mesh>
          <sphereGeometry args={[0.8, 64, 64]} />
          <meshBasicMaterial color="#fbbf24" />
        </mesh>
        <pointLight intensity={10} distance={50} color="#fbbf24" decay={1} />
        {/* Sun Glow */}
        <mesh scale={[1.5, 1.5, 1.5]}>
          <sphereGeometry args={[0.8, 32, 32]} />
          <meshBasicMaterial color="#fbbf24" transparent opacity={0.15} />
        </mesh>
      </group>
      
      {planets.map((p) => (
        <Planet key={p.name} {...p} />
      ))}
    </group>
  );
}

function Particles() {
  const ref = useRef<THREE.Points>(null!);
  
  const positions = useMemo(() => {
    const pos = new Float32Array(5000 * 3);
    for (let i = 0; i < 5000; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 10;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return pos;
  }, []);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    ref.current.rotation.x = time * 0.05;
    ref.current.rotation.y = time * 0.03;
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#2563eb"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.4}
      />
    </Points>
  );
}

function FloatingShape({ shape, color, position, speed }: { 
  shape: "box" | "sphere" | "torus"; 
  color: string;
  position: [number, number, number];
  speed: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    meshRef.current.rotation.x = time * speed;
    meshRef.current.rotation.y = time * speed * 0.8;
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef} position={position}>
        {shape === "box" && <boxGeometry args={[0.5, 0.5, 0.5]} />}
        {shape === "sphere" && <sphereGeometry args={[0.3, 32, 32]} />}
        {shape === "torus" && <torusGeometry args={[0.4, 0.1, 16, 100]} />}
        <meshStandardMaterial color={color} emissive={color} emissiveIntensity={2} toneMapped={false} transparent opacity={0.6} />
      </mesh>
    </Float>
  );
}

export default function Scene() {
  return (
    <div className="fixed inset-0 -z-10 bg-[#020202] pointer-events-none">
      <Canvas camera={{ position: [0, 5, 15], fov: 60 }}>
        <Suspense fallback={null}>
          <ambientLight intensity={0.2} />
          <Stars radius={100} depth={50} count={7000} factor={4} saturation={0} fade speed={1} />
          <Particles />
          <ShootingStars />
          <SolarSystem />
          
          <FloatingShape shape="torus" color="#2563eb" position={[-5, 3, -5]} speed={0.4} />
          <FloatingShape shape="box" color="#2563eb" position={[5, -2, -6]} speed={0.3} />
          <FloatingShape shape="sphere" color="#2563eb" position={[-4, -4, -8]} speed={0.5} />
        </Suspense>
      </Canvas>
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black pointer-events-none" />
    </div>
  );
}
