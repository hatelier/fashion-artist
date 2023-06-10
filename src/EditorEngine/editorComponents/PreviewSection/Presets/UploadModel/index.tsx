// @ts-nocheck
//uploadModel/index.tsx
import React, {useEffect, useRef} from "react";
import {useLoader, useThree} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import {useDispatch, useSelector} from "react-redux";
import {updateMaterialDimensions, updateMaterialList,} from "../../../../../redux/materialControl";
import {useControls} from "leva";

const UploadModel = () => {
  //this has been disabled temporarily
  // const {scene} = useGLTF(props.model);

  const {scene} = useThree();

  const gltf = useLoader(GLTFLoader, "/models/defaultCude.glb");

  const dispatch = useDispatch();

  //const useRef
  const modelRef = useRef<THREE.Group>();
  const materialListed = useSelector(
    (state) => state.materialControl.materialArray
  );
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
  const { mode } = useControls({
    mode: { value: "translate", options: ["translate", "rotate", "scale"] },
  });

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
export default UploadModel;
