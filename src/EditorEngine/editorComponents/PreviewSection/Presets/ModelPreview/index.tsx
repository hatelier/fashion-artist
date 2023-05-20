// @ts-nocheck
//modelPreview/index.tsx
import React, { Suspense, useContext } from "react";
import "./index.scss";
import { Canvas, useThree } from "@react-three/fiber";
import {
  OrbitControls,
  PerformanceMonitor,
  PresentationControls,
  Stage,
} from "@react-three/drei";
import UploadModel from "../UploadModel";
import { Perf } from "r3f-perf";
import { useSelector } from "react-redux";
import OnPreviewControls from "../OnPreviewControls";
import { DynamicLight } from "../SceneControls";

const ModelPreview = (props) => {
  const { file, dimensions } = useContext(props.context);
  const cameraPosition = useSelector(
    (state) => state.savedCameraControls.cameraPosition
  );
  const OrbitalController = () => {
    const { camera } = useThree();

    //here are the controllable camera properties
    const { fov, x, y, z, zoom, tx, ty, tz } = useSelector(
      (state) => state.savedCameraControls.cameraProps
    );

    // useEffect(() => {
    camera.fov = 50;
    camera.position.set(x, y, z);
    camera.zoom = zoom;
    camera.updateProjectionMatrix();
    // invalidate();
    // }, [fov, x, y, z, zoom]);

    return (
      <OrbitControls
        enableZoom={true}
        zoomSpeed={0.8}
        panSpeed={1}
        enableRotate={false}
        camera={camera}
        // target={new Vector3(tx, ty, tz)}
      />
    );
  };
  const AmbientLightComponent = () => {
    const ambientLight = useSelector(
      (state) => state.savedCameraControls.ambientLight
    );
    const directionalLight = useSelector(
      (state) => state.savedCameraControls.directionalLight
    );
    return (
      <>
        {/*<ambientLight intensity={ambientLight} />*/}
        {/*<directionalLight position={[10, 10, 5]} intensity={directionalLight} />*/}
      </>
    );
  };
  return (
    <div
      className={"canvas-container"}
      style={{
        height: "calc(100% - 129px)",
      }}
    >
      <OnPreviewControls />
      <Canvas dpr={[1, 2]} shadows frameloop={"always"}>
        <DynamicLight />
        <AmbientLightComponent />
        <Perf position="top-right" />
        <PerformanceMonitor onDecline={() => set(true)} />
        <color attach="background" args={["#f0f0f0"]} />
        <PresentationControls
          global
          // rotation={[Math.PI / 8, 0, 0]}
          // polar={[-0.1, Math.PI / 2]}
        >
          <Stage environment={"city"} intensity={0.6} castShadow={false}>
            <Suspense fallback={null}>
              {/*{file && <UploadModel model={file} settings={props.settings} />}*/}

              <UploadModel model={file} settings={props.settings} />

              <OrbitalController />
            </Suspense>
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
};
export default ModelPreview;
