// @ts-nocheck
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { useThree } from "@react-three/fiber";
import { FontLoader } from "three/examples/jsm/loaders/FontLoader";
import { TextGeometry } from "three/examples/jsm/geometries/TextGeometry";
import { Mesh, MeshBasicMaterial } from "three";
import {
  // materialApplication,
  updateTextMesh,
} from "../../../../../../redux/materialApplication";
const Text3d = () => {
  const { userID, projectID } = useSelector(
    (state: any) => state.accountManagement
  );
  const textTrigger = useSelector(
    (state) => state.materialApplication.textTrigger
  );
  const { scene } = useThree();
  const dispatch = useDispatch();
  const modelLoadRate = useSelector(
    (state: any) => state.materialApplication.modelLoadRate
  );
  useEffect(() => {
    if (userID && modelLoadRate === 100) {
      axios
        .get("/manage/addtext", {
          params: {
            userId: userID,
            projectId: projectID,
          },
        })
        .then((res) => {
          // removing existing text meshes from the scene of any
          for (let i = scene.children.length - 1; i >= 0; i--) {
            let obj = scene.children[i];
            if (
              obj instanceof Mesh &&
              obj.name === "textmesh" &&
              obj.geometry instanceof TextGeometry
            ) {
              obj.geometry.dispose();
              obj.material.dispose();
              scene.remove(obj);
            }
          }

          let arrText = [];
          const loader = new FontLoader();
          let font = null;
          loader.load(
            "https://threejs.org/examples/fonts/helvetiker_regular.typeface.json",
            (response) => {
              font = response;
              res.data.forEach((vls) => {
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
                  -1 + vls.position.y,
                  vls.position.z
                );
                textMesh.rotation.set(
                  vls.rotation.x,
                  vls.rotation.y,
                  vls.rotation.z
                );
                textMesh.name = "textmesh";
                scene.add(textMesh);
                arrText.push({
                  name: vls.textContent,
                  id: vls._id,
                });
              });
              dispatch(updateTextMesh(arrText));
            }
          );
        })
        .catch((e) => {
          toast.error("Failed to load 3d Text");
        });
    }
  }, [modelLoadRate, projectID, userID, textTrigger, scene, dispatch]);
  return null;
};
export default Text3d;
