import React, { Suspense } from "react";
import "./index.scss";
import { Canvas } from "@react-three/fiber";
import {
  Environment,
  MeshReflectorMaterial,
  OrbitControls,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import UploadModel from "../UploadModel";

const ModelPreview = () => {
  return (
    <div className={"modelPreview"}>
      <Canvas
        dpr={[1, 2]}
        shadows
        frameloop={"demand"}
        camera={{
          fov: 50,
          position: [0, 0, 7],
          // rotation: [0,0,0]
        }}
      >
        <ambientLight intensity={1.2} />
        <Environment preset="city" />
        <color attach="background" args={["#dcdcdc"]} />
        <fog attach="fog" args={["#101010", 10, 20]} />
        {/*    This part is the main model config*/}
        <PresentationControls rotation={[Math.PI / 8, Math.PI / 4, 0]}>
          <Stage environment={"city"} intensity={0.6} castShadow={false}>
            <Suspense fallback={null}>
              <UploadModel />
              <OrbitControls enableZoom={true} zoomSpeed={0.8} />
            </Suspense>
          </Stage>
          <mesh rotation={[-Math.PI / 2, 0, 0]}>
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={2048}
              mixBlur={1}
              mixStrength={40}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#101010"
              metalness={0.5}
              mirror={10}
            />
          </mesh>
        </PresentationControls>
      </Canvas>
    </div>
  );
};
export default ModelPreview;
