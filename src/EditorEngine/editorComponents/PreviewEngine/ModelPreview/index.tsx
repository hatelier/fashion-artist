// @ts-nocheck
import React, { Suspense, useEffect } from "react";
import "./index.scss";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useDispatch, useSelector } from "react-redux";
import {
  // updateArModel,
  updateMaterialListPreview,
} from "../../../../redux/previewRedux";
import MtumxLoadGif from "../../../../assets/gif/mtumxGif.gif";
import ObjectUrlCreator from "../ObjectUrlCreator";
// import { GLTFExporter } from "three/examples/jsm/exporters/GLTFExporter";
const ModelPreview = () => {
  const currentModel = useSelector(
    (state: any) => state.previewRedux.currentModel
  );
  const enableAR = useSelector((state: any) => state.previewRedux.enableAR);
  return (
    <div className={"modelPreviewEngine"}>
      <Canvas dpr={[1, 2]} shadows frameloop={"always"}>
        <color attach="background" args={["#FCFBFB"]} />
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        {enableAR && <ObjectUrlCreator />}
        <Suspense
          fallback={
            <Html
              center={true}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {/*<h1>{modelLoadRate}%</h1>*/}
              <img src={MtumxLoadGif} width={"120px"} alt=""/>
            </Html>
          }
        >
          {currentModel && <UploadModelEngine />}
          <OrbitalController />
        </Suspense>
      </Canvas>
    </div>
  );
};

// model canvas
const UploadModelEngine = () => {
  const dispatch = useDispatch();
  const currentModel = useSelector(
    (state: any) => state.previewRedux.currentModel
  );
  const gltf = useLoader(GLTFLoader, currentModel);

  useEffect(() => {
    let materialList = [];
    gltf.scene.traverse((obj) => {
      if (obj.type === "Mesh") {
        if (obj.name !== "") {
          materialList.push(obj);
        }
      }
    });
    dispatch(updateMaterialListPreview(materialList));
  }, [gltf, dispatch]);

  return (
    <>
      <primitive
        object={gltf.scene}
        scale={[1, 1, 1]}
        position={[0, -1, 0]}
        rotation={[0, 0, 0]}
      />
    </>
  );
};

const OrbitalController = () => {
  const { camera } = useThree();
  camera.fov = 50;
  camera.zoom = 1.8;
  camera.position.set(0, 0, 12);
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

export default ModelPreview;
