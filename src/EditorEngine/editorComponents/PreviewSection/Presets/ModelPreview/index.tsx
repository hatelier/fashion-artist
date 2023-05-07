// @ts-nocheck
import React, { Suspense, useContext } from "react";
import "./index.scss";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  PerformanceMonitor,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import UploadModel from "../UploadModel";
import { Perf } from "r3f-perf";

const ModelPreview = (props) => {
  const { file, dimensions } = useContext(props.context);

  return (
    <div className={"canvas-container"}>
      <Canvas
        dpr={[1, 2]}
        shadows
        frameloop={"always"}
        camera={{
          fov: 50,
          position: [0, 0, 10],
          zoom: 4,
        }}
      >
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <Perf position="top-right" />
        <PerformanceMonitor onDecline={() => set(true)} />
        <color attach="background" args={["#f0f0f0"]} />
        <PresentationControls global rotation={[Math.PI / 8, Math.PI / 4, 0]}>
          <Stage environment={"city"} intensity={0.6} castShadow={false}>
            <Suspense fallback={null}>
              {/*{file && <UploadModel model={file} settings={props.settings} />}*/}

              <UploadModel model={file} settings={props.settings} />

              <OrbitControls enableZoom={true} zoomSpeed={0.8} />
            </Suspense>
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
};
export default ModelPreview;
