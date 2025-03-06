import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { SkatieModel } from "./SkatieModel";


const SkatieModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="lobby" intensity={0.8}>
          <SkatieModel/>
        </Stage>
        <OrbitControls enableZoom={false} autoRotate/>
        <PerspectiveCamera position={[-30,-100,0]} zoom={1.2} makeDefault/>
      </Suspense>
    </Canvas>
  );
};

export default SkatieModelContainer;
