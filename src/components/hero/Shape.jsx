import { MeshDistortMaterial, Sphere } from "@react-three/drei";

const Shape = () => {
  return (
    <>
      <Sphere args={[1, 96, 160]} position={[1.4, -0.2, 0]} scale={2.6}>
        <MeshDistortMaterial color="#ff3f8e" distort={0.42} speed={1.8} />
      </Sphere>
      <Sphere args={[1, 64, 96]} position={[-1.8, 1.15, -0.8]} scale={0.85}>
        <MeshDistortMaterial color="#b8ff2c" distort={0.36} speed={2.4} />
      </Sphere>
      <ambientLight intensity={1.8} />
      <directionalLight position={[2, 3, 4]} intensity={1.3} />
    </>
  );
};

export default Shape;
