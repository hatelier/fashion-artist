// @ts-nocheck
//modelPreview/index.tsx
import React, { Suspense, useContext, useRef } from "react";
import "./index.scss";
import { Canvas, useThree } from "@react-three/fiber";
import { Html, OrbitControls, PerformanceMonitor } from "@react-three/drei";
import UploadModel from "../UploadModel";
import { Perf } from "r3f-perf";
import { useSelector } from "react-redux";
import OnPreviewControls from "../OnPreviewControls";
import { DynamicLight, MaterialControl, NewMeshAdder } from "../SceneControls";
import MtumxLoadGif from "../../../../../assets/gif/mtumxGif.gif";
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
  const modelLoadRate = useSelector(
    (state: any) => state.materialApplication.modelLoadRate
  );
  const modelURL = useSelector(
    (state: any) => state.materialApplication.modelUrl
  );
  return (
    <div
      className={"canvas-container"}
      style={{
        height: "calc(100% - 129px)",
      }}
    >
      <OnPreviewControls />
      <Canvas dpr={[1, 2]} shadows frameloop={"always"}>
        {/*all these are external components*/}
        <DynamicLight />
        <MaterialControl />
        <NewMeshAdder />
        <AmbientLightComponent />
        {/*<Perf position="top-right" />*/}
        {/*<PerformanceMonitor onDecline={() => set(true)} />*/}
        <color attach="background" args={["#f0f0f0"]} />
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Suspense
          fallback={
            <Html
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/*<h1>{modelLoadRate}%</h1>*/}
              <img src={MtumxLoadGif} width={"120px"} />
            </Html>
          }
        >
          {modelURL && <UploadModel model={file} settings={props.settings} />}
          <OrbitalController />
        </Suspense>
      </Canvas>
    </div>
  );
};
export default ModelPreview;
