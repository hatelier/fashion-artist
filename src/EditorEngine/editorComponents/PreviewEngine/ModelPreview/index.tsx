// @ts-nocheck
import React, { Suspense, useEffect } from "react";
import "./index.scss";
import { Canvas, useLoader, useThree } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { useDispatch, useSelector } from "react-redux";
import { updateMaterialListPreview } from "../../../../redux/previewRedux";
const ModelPreview = () => {
  return (
    <div className={"modelPreviewEngine"}>
      <Canvas dpr={[1, 2]} shadows frameloop={"always"}>
        <color attach="background" args={["#FCFBFB"]} />
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={1} />
        <Suspense
          fallback={
            <Html>
              <h1>{"loading"}%</h1>
            </Html>
          }
        >
          <UploadModelEngine />
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
  }, [gltf]);
  return (
    <>
      <primitive
        object={gltf.scene}
        scale={[1, 1, 1]}
        position={[0, 0, 0]}
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
