// @ts-nocheck
import React, {useContext, useEffect, useRef, useState} from "react";
import {extend, useFrame, useLoader, useThree} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {SimplifyModifier} from "three/examples/jsm/modifiers/SimplifyModifier";
import {useGesture} from "react-use-gesture";
import {useGLTF} from "@react-three/drei";
import * as THREE from "three";
import {useDispatch, useSelector} from "react-redux";
import {updateMaterialList} from "../../../../../redux/materialControl";
import {ContextParams} from "../../../../index";

const UploadModel = (props) => {
  //this has been disabled temporarily
  // const {scene} = useGLTF(props.model);

  const {scene} = useThree();

  const gltf = useLoader(GLTFLoader, "./models/MtumXfirstVarationTrial.glb");
  const materialList = useSelector(
      (state) => state.materialControl.materialArray
  );
  const triggerRender = useSelector((state) => state.renderSlice.trigger);
  const dispatch = useDispatch();
  const {modelObjects} = useContext(ContextParams);

  useEffect(() => {
    scene.traverse((obj) => {
      return modelObjects;
    });
  }, [modelObjects]);

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

    // dispatch(updateMaterialList(materialList));

    const bbox = new THREE.Box3().setFromObject(gltf.scene);

    // dimensions calculations
    const dimensions = new THREE.Vector3();
    bbox.getSize(dimensions);
    props.settings((state) => {
      return {
        ...state,
        dimensions: {
          x: dimensions.x,
          y: dimensions.y,
          z: dimensions.z,
        },
        modelObjects: materialList,
      };
    });
  }, []);

  return (
    <>
      <primitive
        object={gltf.scene}
        scale={[0.01, 0.01, 0.01]}
        position={[0, 0, 0]}
      />
    </>
  );
};
export default UploadModel;
