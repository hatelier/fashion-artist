// @ts-nocheck
//modelPreview/index.tsx
import React, { Suspense, useContext, useRef } from "react";
import "./index.scss";
import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, PerformanceMonitor, PresentationControls, Stage } from "@react-three/drei";
import UploadModel from "../UploadModel";
import { Perf } from "r3f-perf";
import { useSelector } from "react-redux";
import OnPreviewControls from "../OnPreviewControls";
import { DynamicLight, MaterialControl, NewMeshAdder } from "../SceneControls";

const ModelPreview = (props) => {
  const { file, dimensions } = useContext(props.context);
  const ref = useRef();
  const OrbitalController = () => {
    const { camera } = useThree();

    //here are the controllable camera properties
    const { x, y, z } = useSelector(
      (state) => state.savedCameraControls.cameraProps
    );
    // useEffect(() => {
    camera.fov = 50;
    console.log("first load", x, y, z);
    camera.position.set(x, y, z);
    camera.zoom = 3;
    camera.updateProjectionMatrix();
    // invalidate();
    // }, [fov, x, y, z, zoom]);
    return (
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        // enableRotate={false}
        zoomSpeed={0.8}
        panSpeed={1}
        // enableRotate={false}
        camera={camera}
      />
      // <OrbitControls makeDefault minPolarAngle={Math.PI/2} maxPolarAngle={Math.PI/2} enableZoom={true}
      //                enablePan={true}
      //                zoomSpeed={0.3}
      //                minAzimuthAngle={0}
      //                maxAzimuthAngle={Math.PI / 2}
      // />
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

  // material related

  return (
    <div
      className={"canvas-container"}
      style={{
        height: "calc(100% - 129px)"
      }}
    >
      <OnPreviewControls />
      <Canvas dpr={[1, 2]} shadows frameloop={"always"}>
        {/*all these are external components*/}
        <DynamicLight />
        <MaterialControl />
        <NewMeshAdder />

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

              {/*<Reflector*/}
              {/*  resolution={1024}*/}
              {/*  blur={[800, 50]}*/}
              {/*  mirror={0.4}*/}
              {/*  mixBlur={1}*/}
              {/*  mixStrength={0.5}*/}
              {/*  depthScale={1}*/}
              {/*  minDepthThreshold={0.7}*/}
              {/*  maxDepthThreshold={1}*/}
              {/*  rotation-x={-Math.PI / 2}*/}
              {/*  args={[100, 100]}*/}
              {/*  color="#d0d0d0"*/}
              {/*  metalness={1}*/}
              {/*  roughness={0.75}*/}
              {/*/>*/}
            </Suspense>
          </Stage>
        </PresentationControls>
      </Canvas>
    </div>
  );
};
export default ModelPreview;
