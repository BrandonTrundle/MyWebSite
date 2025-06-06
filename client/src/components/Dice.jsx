import { forwardRef, useImperativeHandle } from "react";
import { useGLTF } from "@react-three/drei";
import { useConvexPolyhedron } from "@react-three/cannon";

// Physics collision shape (still based on simplified icosahedron)
const vertices = [
  [0, 0.618, 1.618],
  [0, 0.618, -1.618],
  [0, -0.618, 1.618],
  [0, -0.618, -1.618],
  [1.618, 0, 0.618],
  [1.618, 0, -0.618],
  [-1.618, 0, 0.618],
  [-1.618, 0, -0.618],
  [0.618, 1.618, 0],
  [0.618, -1.618, 0],
  [-0.618, 1.618, 0],
  [-0.618, -1.618, 0],
  [1, 1, 1],
  [1, 1, -1],
  [1, -1, 1],
  [1, -1, -1],
  [-1, 1, 1],
  [-1, 1, -1],
  [-1, -1, 1],
  [-1, -1, -1],
];
const faces = [
  [0, 2, 4],
  [0, 4, 8],
  [0, 8, 10],
  [0, 10, 6],
  [0, 6, 2],
  [2, 6, 11],
  [2, 11, 9],
  [2, 9, 4],
  [4, 9, 5],
  [4, 5, 8],
  [8, 5, 1],
  [8, 1, 10],
  [10, 1, 7],
  [10, 7, 6],
  [6, 7, 11],
  [3, 1, 5],
  [3, 5, 9],
  [3, 9, 11],
  [3, 11, 7],
  [3, 7, 1],
];

useGLTF.preload("/models/d20.glb");

const Dice = forwardRef((_, ref) => {
  const { nodes } = useGLTF("/models/d20.glb");

  const [bodyRef, api] = useConvexPolyhedron(() => ({
    mass: 1,
    position: [0, 1.5, 0],
    args: [vertices, faces],
  }));

  useImperativeHandle(ref, () => ({
    roll: () => {
      api.velocity.set(
        (Math.random() - 0.5) * 3,
        6 + Math.random() * 2,
        (Math.random() - 0.5) * 3
      );
      api.angularVelocity.set(
        Math.random() * 5,
        Math.random() * 5,
        Math.random() * 5
      );
    },
  }));

  return (
    <primitive
      ref={bodyRef}
      object={nodes["D20"] || Object.values(nodes)[0]}
      scale={0.03}
      castShadow
    />
  );
});

export default Dice;
