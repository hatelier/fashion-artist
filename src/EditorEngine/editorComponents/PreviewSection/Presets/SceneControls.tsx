//SceneControls.tsx
import React, { useEffect } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useSelector } from "react-redux";
import { materialControl } from "../../../../redux/materialControl";
import { materialApplication } from "../../../../redux/materialApplication";
import { useTexture } from "@react-three/drei";

export const DynamicLight = () => {
  const { scene } = useThree();
  const { lightType, lightColor, lightIntensity, distance, x, y, z } =
    useSelector((state: any) => state.materialControl.currentLight);
  useEffect(() => {
    if (lightType) {
      let newLight: any;
      switch (lightType) {
        case "point":
          newLight = new THREE.PointLight(lightColor, lightIntensity, distance);
          break;
        case "directional":
          newLight = new THREE.DirectionalLight(lightColor, lightIntensity);
          break;
        case "spot":
          newLight = new THREE.SpotLight(lightColor, lightIntensity);
          break;
        case "rectArea":
          newLight = new THREE.RectAreaLight(lightColor, lightIntensity);
          break;
        case "ambient":
          newLight = new THREE.AmbientLight(lightColor, lightIntensity);
          break;
        default:
          newLight = new THREE.PointLight(lightColor, lightIntensity, distance);
          break;
      }

      newLight.position.set(x, y, z);
      scene.add(newLight);

      // Don't forget to clean up on component unmount
      return () => {
        scene.remove(newLight);
      };
    }
  }, [lightType, lightColor, lightIntensity, distance, x, y, z]);
  return null;
};

// here is the material control component
export const MaterialControl = () => {
  const materialReq = useSelector(
    (state: any) => state.materialApplication.materialReqs
  );
  const currentPart = useSelector(
    (state: any) => state.materialApplication.currentPart
  );

  function testFunc() {
    // const newMaterial = useTexture({
    //   ...materialReq,
    // });
  }

  useEffect(() => {
    if (!currentPart) {
      // testFunc();
    }
  }, []);
  return null;
};
