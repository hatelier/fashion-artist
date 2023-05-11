// @ts-nocheck
//uploadModel/index.tsx
import React, {useEffect, useRef} from "react";
import {useLoader, useThree} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import {useDispatch} from "react-redux";
import {updateMaterialDimensions, updateMaterialList,} from "../../../../../redux/materialControl";

const UploadModel = () => {
  //this has been disabled temporarily
  // const {scene} = useGLTF(props.model);

  const {scene} = useThree();

  const gltf = useLoader(GLTFLoader, "./models/MtumXfirstVarationTrial.glb");

  const dispatch = useDispatch();

  //const useRef
  const modelRef = useRef<THREE.Group>();

  useEffect(() => {
    let materialList = [];
    gltf.scene.traverse((obj) => {
      if (obj.type === "Mesh") {
        if (obj.name !== "") {
          materialList.push(obj);
        }
      }
    });
    //   calculate the dimensions of the object
    // const bbox = new THREE.Box3().setFromObject(scene);

    dispatch(updateMaterialList(materialList));

    const bbox = new THREE.Box3().setFromObject(gltf.scene);

    // dimensions calculations
    const dimensions = new THREE.Vector3();
    bbox.getSize(dimensions);
    dispatch(
      updateMaterialDimensions({
        x: dimensions.x,
        y: dimensions.y,
        z: dimensions.z,
      })
    );
  }, []);

  return (
    <>
      <primitive
        ref={modelRef}
        object={gltf.scene}
        scale={[0.01, 0.01, 0.01]}
        position={[0, 0, 0]}
        rotation={[0, 0, 0]}
      />
    </>
  );
};
export default UploadModel;
