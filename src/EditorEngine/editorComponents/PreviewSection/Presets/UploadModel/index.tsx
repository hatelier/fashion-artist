// @ts-nocheck
//uploadModel/index.tsx
import React, { useEffect, useRef, useState } from "react";
import { useFrame, useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { useDispatch, useSelector } from "react-redux";
import {
  updateMaterialDimensions,
  updateMaterialList,
} from "../../../../../redux/materialControl";
import { updateUnUsedObjects } from "../../../../../redux/savedConfigs";
import { updateModelLoadRate } from "../../../../../redux/materialApplication";
import { Html, Sphere, Text } from "@react-three/drei";
import { commentsRedux } from "../../../../../redux/commentsRedux";
import { Vector3 } from "three";
// import {FontLoader, MeshBasicMaterial, Mesh, TextGeomentry} from "three";

const UploadModel = () => {
  //this has been disabled temporarily
  // const {scene} = useGLTF(props.model);

  const dispatch = useDispatch();

  const modelURL = useSelector(
    (state: any) => state.materialApplication.modelUrl
  );
  console.log("tesstestset", modelURL);
  const { camera, raycaster, scene, pointer } = useThree();

  const gltf = useLoader(
    GLTFLoader,
    modelURL,
    () => {},
    (e) => {
      dispatch(updateModelLoadRate(e.loaded / e.total));
    }
  );
  //const useRef
  const modelRef = useRef<THREE.Group>();
  const materialListed = useSelector(
    (state) => state.materialControl.materialArray
  );
  useEffect(() => {
    let materialList = [];
    let materialNameList = [];
    gltf.scene.traverse((obj) => {
      if (obj.type === "Mesh") {
        if (obj.name !== "") {
          materialList.push(obj);
          materialNameList.push(obj.name);
        }
      }
    });
    //   calculate the dimensions of the object
    // const bbox = new THREE.Box3().setFromObject(scene);

    dispatch(updateMaterialList(materialList));
    dispatch(updateUnUsedObjects(materialNameList));
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
  }, [gltf]);

  const [comments, setComments] = useState([]);
  const [groupRef, setGroupRef] = useState(null);

  useEffect(() => {
    if (groupRef) {
      groupRef.updateMatrixWorld();
    }
  }, [groupRef]);

  const [predefinedComments, setPredefinedComments] = useState([]);

  const onClick = (event) => {
    event.stopPropagation();
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(scene.children, true); // add the second parameter as true to check against the children of the group as well.
    if (intersects.length > 0) {
      const [first] = intersects;
      let promptvalue = window.prompt("Enter the comment");

      let localPoint = groupRef.worldToLocal(first.point.clone());

      setPredefinedComments([
        ...predefinedComments,
        {
          text: promptvalue,
          position: localPoint,
          align: localPoint.x > 0 ? "left" : "right",
        },
      ]);
    }
  };

  const enableComments = useSelector(
    (state) => state.commentsRedux.enableComments
  );

  useEffect(() => {
    if (groupRef) {
      const localComments = [
        {
          text: "This point is on the skirts",
          position: {
            x: 1.5001597657170542,
            y: -0.9732854976524127,
            z: -0.17885697426801686,
          },
          align: "left",
        },
        {
          text: "Here is the right sleeves",
          position: {
            x: 0.19566462410873853,
            y: 1.2511553054728206,
            z: -0.05809420069266275,
          },
          align: "left",
        },
        {
          text: "Why is there no mateiral on this seleves?",
          position: {
            x: -0.2900776347042662,
            y: 0.5380493587110178,
            z: 0.07240324611240968,
          },
          align: "right",
        },
      ].map((comment) => {
        let vector = new Vector3(
          comment.position.x,
          comment.position.y,
          comment.position.z
        );
        console.log("her eis thes ", vector);
        let localPoint = groupRef.worldToLocal(vector);
        return {
          ...comment,
          position: localPoint,
        };
      });
      setPredefinedComments(localComments);
    }
  }, [groupRef]);

  return (
    <>
      <group ref={setGroupRef} onPointerDown={onClick}>
        <primitive
          object={gltf.scene}
          scale={[1, 1, 1]}
          position={[0, -1, 0]}
          rotation={[0, 0, 0]}
        />
        {enableComments &&
          predefinedComments.map((comment, index) => {
            return (
              <>
                <Text
                  position={comment.position}
                  key={index}
                  color={"green"}
                  fontSize={0.07}
                  anchorX={comment.align}
                  maxWidth={1.7}
                  anchorY={"bottom"}
                  textAlign={comment.align}
                >
                  {comment.text}
                </Text>
                <Sphere
                  onDoubleClick={(e) => {
                    e.stopPropagation();
                    setComments(
                      comments.filter((_, indexs) => indexs !== index)
                    );
                  }}
                  position={comment.position}
                  args={[0.03, 10, 10]}
                >
                  <meshBasicMaterial attach="material" color="red" />
                </Sphere>
              </>
            );
          })}
      </group>
    </>
  );
};
export default UploadModel;
