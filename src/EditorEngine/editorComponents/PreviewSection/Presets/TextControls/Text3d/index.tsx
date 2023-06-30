// @ts-nocheck
import { useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { useThree } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { Mesh, MeshBasicMaterial } from "three";

const Text3d = () => {
  const { userID, projectID } = useSelector(
    (state: any) => state.accountManagement
  );
  const { scene } = useThree();
  useEffect(() => {
    if (userID) {
      axios
        .get("/manage/addtext", {
          params: {
            userId: userID,
            projectId: projectID,
          },
        })
        .then((res) => {
          const loader = new FontLoader();
          let font = null;
          loader.load(
            "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
            (response) => {
              font = response;
              res.data.map((vls) => {
                const textGeo = new TextGeometry(vls.textContent, {
                  font: font,
                  size: vls.textSize, // size of the text
                  height: 0.05, // how much extrusion (how thick / deep are the letters)
                  curveSegments: 12,
                  bevelEnabled: false,
                  bevelThickness: 0.01,
                  bevelSize: 0.01,
                  bevelOffset: 0.0,
                  bevelSegments: 5,
                });
                const material = new MeshBasicMaterial({
                  color: vls.textColor,
                });
                const textMesh = new Mesh(textGeo, material);
                textMesh.position.set(
                  vls.position.x,
                  vls.position.y,
                  vls.position.z
                );
                textMesh.rotation.set(
                  vls.rotation.x,
                  vls.rotation.y,
                  vls.rotation.z
                );
                scene.add(textMesh);
              });
            }
          );
        })
        .catch((e) => {
          toast.error("Failed to load 3d Text");
        });
    }
  }, [userID]);
  return null;
};
export default Text3d;
