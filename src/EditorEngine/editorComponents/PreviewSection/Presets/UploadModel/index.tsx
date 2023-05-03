// @ts-nocheck
import React, { useEffect } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";

const UploadModel = () => {
  const { scene } = useThree();
  const gltf = useLoader(GLTFLoader, "./models/MtumX_trial.glb");
  useEffect(() => {
    let materialList = [];
    scene.traverse((obj) => {
      if (obj.type === "Mesh") {
        if (obj.name !== "") {
          materialList.push(obj);
        }
      }
    });
  }, []);
  return <primitive object={gltf.scene} scale={[0.01, 0.01, 0.01]} />;
};
export default UploadModel;
