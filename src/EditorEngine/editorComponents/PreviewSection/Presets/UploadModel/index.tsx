// @ts-nocheck
//uploadModel/index.tsx
import React, {useEffect, useRef} from "react";
import {useLoader, useThree} from "@react-three/fiber";
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import {Mesh, MeshBasicMaterial} from "three";
import {useDispatch, useSelector} from "react-redux";
import {updateMaterialDimensions, updateMaterialList,} from "../../../../../redux/materialControl";
import {updateUnUsedObjects} from "../../../../../redux/savedConfigs";
import {updateModelLoadRate} from "../../../../../redux/materialApplication";
import {FontLoader} from "three/examples/jsm/loaders/FontLoader";
import {TextGeometry} from "three/examples/jsm/geometries/TextGeometry";
// import {FontLoader, MeshBasicMaterial, Mesh, TextGeomentry} from "three";

const UploadModel = () => {
  //this has been disabled temporarily
  // const {scene} = useGLTF(props.model);

  const dispatch = useDispatch();

  const modelURL = useSelector(
    (state: any) => state.materialApplication.modelUrl
  );
  console.log("tesstestset", modelURL);
  const { scene } = useThree();

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
  // const { mode } = useControls({
  //   mode: { value: "translate", options: ["translate", "rotate", "scale"] },
  // });

  //this section deals with addition of fonts to the viewer
  const loader = new FontLoader();
  let font = null;
  useEffect(() => {
    loader.load('https://threejs.org/examples/fonts/helvetiker_regular.typeface.json', (response) => {
      font = response;
      createTextMesh();
    });
  }, []);

  const createTextMesh=()=>{
    const textGeo = new TextGeometry('MomentumX', {
      font: font,
      size: .4, // size of the text
      height: 0.05, // how much extrusion (how thick / deep are the letters)
      curveSegments: 12,
      bevelEnabled: false,
      bevelThickness: 0.01,
      bevelSize: 0.01,
      bevelOffset: 0.0,
      bevelSegments: 5
    });
    const material = new MeshBasicMaterial({ color: "red" });
    const textMesh = new Mesh(textGeo, material);
    textMesh.position.set(1, 0, 0);
    scene.add(textMesh);
  }

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
export default UploadModel;
