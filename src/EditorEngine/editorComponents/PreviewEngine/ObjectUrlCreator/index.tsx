// @ts-nocheck
// import React from "react";
import {useThree} from "@react-three/fiber";
import {GLTFExporter} from "three/examples/jsm/exporters/GLTFExporter";
import {useDispatch} from "react-redux";
import {updateArModel} from "../../../../redux/previewRedux";
const ObjectUrlCreator = () => {
  const {scene} = useThree();
  let exporter = new GLTFExporter();
  const dispatch = useDispatch();
  exporter.parse(scene, function (result) {
    if (result instanceof ArrayBuffer) {
      throw new Error("Unsupported result format: ArrayBuffer");
    }
    let blob = new Blob([JSON.stringify(result)], { type: 'application/octet-stream' });
    let url = URL.createObjectURL(blob);
    dispatch(updateArModel(url))
  }, { binary: true });

  return null;
};
export default ObjectUrlCreator;
