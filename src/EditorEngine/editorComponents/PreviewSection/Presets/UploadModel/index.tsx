// @ts-nocheck
import React, {useEffect, useRef} from "react";
import {useLoader, useThree} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {SimplifyModifier} from "three/examples/jsm/modifiers/SimplifyModifier";
import {useGesture} from "react-use-gesture";

const UploadModel = () => {
  const {scene} = useThree();
  const gltf = useLoader(GLTFLoader, "./models/MtumX_trial.glb");
  const modifier = new SimplifyModifier();
  // rotating constraint
  const RotatingModel = ({model}) => {
    const modelRef = useRef();
    const bind = useGesture({
      onDrag: ({movement: [mx, my]}) => {
        modelRef.current.rotation.z = Math.atan2(my, mx);
      },
    });
    return (
        <group ref={modelRef} {...bind()}>
          {model}
        </group>
    );
  };

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
  return (
      <primitive
          object={gltf.scene}
          scale={[0.01, 0.01, 0.01]}
          position={[0, 0, 0]}
      />
  );
};
export default UploadModel;
