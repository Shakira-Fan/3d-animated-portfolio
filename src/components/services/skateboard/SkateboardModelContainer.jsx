import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";

import { OrbitControls, PerspectiveCamera, Stage } from "@react-three/drei";
import { SkateboardModel } from "./SkateboardModel";

const SkateboardModelContainer = () => {
  return (
    <Canvas>
      <Suspense fallback="loading...">
        <Stage environment="city" intensity={0.1}>
          <SkateboardModel/>
        </Stage>
        <OrbitControls enableZoom={false} autoRotate/>
        <PerspectiveCamera position={[2,-1,2]} zoom={0.8} makeDefault/>
      </Suspense>
    </Canvas>
  );
};

export default SkateboardModelContainer;
