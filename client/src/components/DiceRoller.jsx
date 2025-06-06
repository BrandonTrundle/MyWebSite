import { useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, OrthographicCamera } from "@react-three/drei";
import { Physics, useBox } from "@react-three/cannon";
import Dice from "./Dice";

// Ground
function Ground() {
  const [ref] = useBox(() => ({
    args: [8, 0.5, 8],
    position: [0, -0.25, 0],
    type: "Static",
  }));
  return (
    <mesh ref={ref} receiveShadow>
      <boxGeometry args={[8, 0.5, 8]} />
      <meshStandardMaterial color="#666" />
    </mesh>
  );
}

// Wall
function Wall({ position, args }) {
  const [ref] = useBox(() => ({
    args,
    position,
    type: "Static",
  }));
  return (
    <mesh ref={ref}>
      <boxGeometry args={args} />
      <meshStandardMaterial color="#444" />
    </mesh>
  );
}

export default function DiceRoller() {
  const diceRef = useRef();

  return (
    <div className="w-full h-[600px] mt-10">
      <Canvas shadows>
        <OrthographicCamera
          makeDefault
          position={[0, 10, 0]}
          rotation={[-Math.PI / 2, 0, 0]}
          zoom={60}
        />
        <ambientLight intensity={0.6} />
        <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
        <OrbitControls
          enableZoom={false}
          enableRotate={false}
          enablePan={false}
        />

        <Physics gravity={[0, -9.81, 0]}>
          <Ground />
          <Wall position={[4, 1, 0]} args={[0.5, 2, 8]} />
          <Wall position={[-4, 1, 0]} args={[0.5, 2, 8]} />
          <Wall position={[0, 1, 4]} args={[8, 2, 0.5]} />
          <Wall position={[0, 1, -4]} args={[8, 2, 0.5]} />
          <Dice ref={diceRef} />
        </Physics>
      </Canvas>

      <button
        onClick={() => diceRef.current?.roll()}
        className="mx-auto mt-4 block px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition"
      >
        Roll the Die
      </button>

      <p className="text-center text-sm text-gray-600 mt-2">
        Orthographic top-down view. Click or use the button to roll.
      </p>
    </div>
  );
}
