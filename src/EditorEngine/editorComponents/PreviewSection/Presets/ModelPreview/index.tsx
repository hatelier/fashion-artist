// @ts-nocheck
//modelPreview/index.tsx
import React, {Suspense, useContext,} from "react";
import "./index.scss";
import {Canvas} from "@react-three/fiber";
import {OrbitControls, PerformanceMonitor, PresentationControls, Stage,} from "@react-three/drei";
import UploadModel from "../UploadModel";
import {Perf} from "r3f-perf";
import {useSelector} from "react-redux";

const ModelPreview = (props) => {
  const {file, dimensions} = useContext(props.context);
  const cameraPosition = useSelector(
      (state) => state.materialControl.cameraPosition
  );
  const AmbientLightComponent = () => {
    const ambientLight = useSelector(
        (state) => state.materialControl.ambientLight
    );
    const directionalLight = useSelector(
        (state) => state.materialControl.directionalLight
    );
    return (
        <>
          <ambientLight intensity={ambientLight}/>
          <directionalLight position={[10, 10, 5]} intensity={directionalLight}/>
        </>
    );
  };
  return (
    <div className={"canvas-container"}>
      <Canvas
        dpr={[1, 2]}
        shadows
        frameloop={"always"}
        camera={{
          fov: 50,
          position: cameraPosition,
          zoom: 4,
        }}
      >
        <AmbientLightComponent />
        <Perf position="top-right" />
        <PerformanceMonitor onDecline={() => set(true)} />
        <color attach="background" args={["#f0f0f0"]} />
        <PresentationControls
          global
          rotation={[Math.PI / 8, Math.PI / 4, 0]}
          // polar={[-0.1, Math.PI / 2]}
        >
          <Stage environment={"city"} intensity={0.6} castShadow={false}>
            <Suspense fallback={null}>
              {/*{file && <UploadModel model={file} settings={props.settings} />}*/}

              <UploadModel model={file} settings={props.settings} />

              <OrbitControls
                enableZoom={true}
                zoomSpeed={0.8}
                panSpeed={1}
                enableRotate={false}
              />
            </Suspense>
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
};
export default ModelPreview;
