// @ts-nocheck
import React, {useEffect, useRef, useState} from "react";
import {useLoader, useThree} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {SimplifyModifier} from "three/examples/jsm/modifiers/SimplifyModifier";
import {useGesture} from "react-use-gesture";
import {useGLTF} from "@react-three/drei";
import * as THREE from "three";
import {useSelector} from "react-redux";

const UploadModel = (props) => {
    const {scene} = useGLTF(props.model);
    useEffect(() => {
        let materialList = [];
        scene.traverse((obj) => {
            if (obj.type === "Mesh") {
                if (obj.name !== "") {
                    materialList.push(obj);
                }
            }
        });
        //   calculate the dimensions of the object
        const bbox = new THREE.Box3().setFromObject(scene);
        // dimensions calculations
        const dimensions = new THREE.Vector3();
        bbox.getSize(dimensions);
        console.log("test", dimensions);
        props.settings((state) => {
            return {
                ...state,
                dimensions: {
                    x: dimensions.x,
                    y: dimensions.y,
                    z: dimensions.z,
                },
            };
        });
    }, []);
    return (
        <>
            (
            <primitive
                object={scene}
                scale={[0.01, 0.01, 0.01]}
                position={[0, 0, 0]}
            />
            )
        </>
  );
};
export default UploadModel;
