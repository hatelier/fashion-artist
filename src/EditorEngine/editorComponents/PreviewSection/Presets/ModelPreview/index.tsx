// @ts-nocheck
//modelPreview/index.tsx
import React, { Suspense, useContext, useEffect, useState } from "react";
import "./index.scss";
import { Canvas, useThree } from "@react-three/fiber";
import { Html, OrbitControls, PerformanceMonitor } from "@react-three/drei";
import UploadModel from "../UploadModel";
import { useSelector } from "react-redux";
import OnPreviewControls from "../OnPreviewControls";
import { MaterialControl, NewMeshAdder } from "../SceneControls";
import MtumxLoadPng from "../../../../../assets/gif/mtumxGIf.png";
import Text3d from "../TextControls/Text3d";
import styled from "styled-components";
import MtumxLoaderLogo from "../../../../../assets/svgs/MtumxLogoLoader.svg";
import { Perf } from "r3f-perf";
import { DoubleSide, TextureLoader } from "three";

const ModelPreview = (props) => {
  const { file } = useContext(props.context);
  // const ref = useRef();
  const OrbitalController = () => {
    const { camera } = useThree();
    //here are the controllable camera properties
    const { x, y, z } = useSelector(
      (state) => state.savedCameraControls.cameraProps
    );
    camera.fov = 50;
    console.log("first load", x, y, z);
    camera.position.set(x, y, z);
    camera.zoom = 2;
    camera.updateProjectionMatrix();
    return (
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        zoomSpeed={0.8}
        panSpeed={1}
        camera={camera}
      />
    );
  };
  const modelURL = useSelector(
    (state: any) => state.materialApplication.modelUrl
  );
  const PolyCountController = () => {
    const polycount = useSelector(
      (state: any) => state.settingsPanel.polycount
    );
    return (
      polycount && (
        <>
          <Perf position="bottom-right" deepAnalyze={true} />
          <PerformanceMonitor onDecline={() => set(true)} />
        </>
      )
    );
  };
  const LightingControls = () => {
    const toggleLights = useSelector(
      (state: any) => state.settingsPanel.toggleLights
    );
    const colorControl = useSelector(
      (state) => state.materialApplication.currentBackground
    );

    return (
      <>
        <color attach="background" args={[colorControl]} />
        <ambientLight intensity={1} />
        <directionalLight
          position={[10, 10, 10]}
          intensity={toggleLights ? 5 : 0}
        />
      </>
    );
  };

  function Skybox() {
    const [texture, setTexture] = useState(null);
    const currBackgroundImage = useSelector(
      (state) => state.materialApplication.currentBackgroundImage
    );
    useEffect(() => {
      if (currBackgroundImage) {
        const loader = new TextureLoader();
        loader.load(currBackgroundImage, setTexture);
      } else {
        setTexture(null);
      }
    }, [currBackgroundImage]);

    if (texture) {
      return (
        <mesh>
          <sphereBufferGeometry attach="geometry" args={[500, 60, 40]} />
          <meshBasicMaterial
            attach="material"
            map={texture}
            side={DoubleSide}
          />
        </mesh>
      );
    }
  }

  return (
    <div
      className={"canvas-container"}
      style={{
        height: "calc(100% - 65px)",
      }}
    >
      <OnPreviewControls />
      <Canvas dpr={[1, 2]} shadows frameloop={"always"}>
        {/*all these are external components*/}
        {/*<DynamicLight />*/}
        <MaterialControl />
        <NewMeshAdder />
        <Text3d />
        <LightingControls />
        <Suspense
          fallback={
            <Html
              center={true}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                position: "relative",
              }}
            >
              {/*<h1>{modelLoadRate}%</h1>*/}
              <AnimatedLoader
                src={MtumxLoadPng}
                width={"600px"}
                alt={"mtumxLoad"}
              />
              <img
                src={MtumxLoaderLogo}
                style={{ position: "absolute", margin: "auto" }}
                alt={""}
              />
            </Html>
          }
        >
          <Skybox />
          {modelURL && <UploadModel model={file} settings={props.settings} />}
          <OrbitalController />
          <PolyCountController />
        </Suspense>
      </Canvas>
    </div>
  );
};
const AnimatedLoader = styled.img`
  @keyframes rotation {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(359deg);
    }
  }
  animation: rotation 2s infinite linear;
`;
export default ModelPreview;
