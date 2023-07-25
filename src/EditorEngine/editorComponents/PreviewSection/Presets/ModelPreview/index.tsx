// @ts-nocheck
//modelPreview/index.tsx
import React, {
  Suspense,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import "./index.scss";
import { Canvas, useThree } from "@react-three/fiber";
import { Html, OrbitControls, PerformanceMonitor } from "@react-three/drei";
import UploadModel from "../UploadModel";
import { useDispatch, useSelector } from "react-redux";
import OnPreviewControls from "../OnPreviewControls";
import { MaterialControl, NewMeshAdder } from "../SceneControls";
import MtumxLoadPng from "../../../../../assets/gif/mtumxGIf.png";
import Text3d from "../TextControls/Text3d";
import styled from "styled-components";
import MtumxLoaderLogo from "../../../../../assets/svgs/MtumxLogoLoader.svg";
import { Perf } from "r3f-perf";
import { DoubleSide, TextureLoader, WebGLRenderer } from "three";
import { updateTriggerHD } from "../../../../../redux/materialApplication";

const ModelPreview = (props) => {
  const { file } = useContext(props.context);
  const OrbitalController = () => {
    const { camera: threeCamera } = useThree();
    const camera = useRef(threeCamera);
    const { fov, rotSpeed, zoomSpeed, horRan, vertAngle, rotInert, zoomRange } =
      useSelector((state) => state.cameraRedux.cameraStatus);
    useEffect(() => {
      camera.current.fov = fov.value;
      camera.current.zoom = 2;
      camera.current.updateProjectionMatrix();
    }, [camera, fov]);
    return (
      <OrbitControls
        enableZoom={true}
        enablePan={false}
        zoomSpeed={zoomSpeed.value}
        panSpeed={1}
        camera={camera.current}
        rotateSpeed={rotSpeed.value}
        enableDamping={true}
        minAzimuthAngle={(horRan.value[0] * Math.PI) / 180}
        maxAzimuthAngle={(horRan.value[1] * Math.PI) / 180}
        minPolarAngle={(vertAngle.value[0] * Math.PI) / 180}
        maxPolarAngle={(vertAngle.value[1] * Math.PI) / 180}
        dampingFactor={rotInert.value / 1000}
        minZoom={zoomRange.value[0] / 100}
        maxZoom={zoomRange.value[1] / 100}
      />
    );
  };
  const OrbitalControllerPos = () => {
    const { camera: threeCamera } = useThree();
    const camera = useRef(threeCamera);
    const { x, y, z } = useSelector(
      (state) => state.savedCameraControls.cameraProps
    );
    camera.current.position.set(x, y, z);
    return <OrbitControls camera={camera.current} />;
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

  function HDRender() {
    const triggerHDRender = useSelector(
      (state) => state.materialApplication.triggerHDRender
    );
    const TiggerRender = () => {
      const { scene, camera } = useThree();
      const dispatch = useDispatch();
      const captureImage = useCallback(async () => {
        const renderer = new WebGLRenderer({ antialias: true, alpha: true });
        const width = triggerHDRender.width;
        const height = triggerHDRender.height;
        const cameraClone = camera.clone();
        cameraClone.aspect = width / height;
        cameraClone.updateProjectionMatrix();
        renderer.setSize(width, height);
        const offscreenCanvas = document.createElement("canvas");
        offscreenCanvas.width = width;
        offscreenCanvas.height = height;
        renderer.setRenderTarget(null);

        renderer.render(scene, cameraClone, renderer.getRenderTarget());
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const screenshotDataUrl = renderer.domElement.toDataURL("image/png");

        const link = document.createElement("a");
        link.href = screenshotDataUrl;
        link.download = "render.png";
        link.click();
        dispatch(updateTriggerHD(null));
      }, [camera, scene, dispatch]);

      useEffect(() => {
        captureImage();
      }, [captureImage]);
    };

    return triggerHDRender && <TiggerRender />;
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
          <OrbitalControllerPos />
          <OrbitalController />
          <PolyCountController />
          <HDRender />
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
