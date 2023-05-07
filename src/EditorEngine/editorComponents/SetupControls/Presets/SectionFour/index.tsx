//sectionFour/index.tsx
// @ts-nocheck
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateAmbientLight, updateDirLight,} from "../../../../../redux/materialControl";
import * as THREE from "three";
import {AmbientLight, DirectionalLight, Mesh, PerspectiveCamera, Scene, WebGLRenderer} from "three";
//image imports
import ObjectPng from "../../../../../assets/pngs/objectLogo.gif";

const SectionFour = () => {
  const materialArray = useSelector(
    (state) => state.materialControl.materialArray
  );
  const ambientLight = useSelector(
    (state) => state.materialControl.ambientLight
  );
  const directionalLight = useSelector(
    (state) => state.materialControl.directionalLight
  );
  const dispatch = useDispatch();
  // image preview
  const createMaterialThumbnail = (material, size = 128) => {
    // Create a WebGLRenderer
    const renderer = new WebGLRenderer();
    renderer.setSize(size, size);

    // Create a scene and a camera
    const scene = new Scene();
    const camera = new PerspectiveCamera(75, 1, 0.1, 1000);
    camera.position.z = 2;

    const ambientLight = new AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new DirectionalLight(0xffffff, 0.5);
    directionalLight.position.set(1, 1, 1);
    scene.add(directionalLight);

    // Create a mesh with the input material
    const geometry = new THREE.SphereGeometry(1, 32, 32);
    const mesh = new Mesh(geometry, material);
    scene.add(mesh);

    // Render the scene
    renderer.render(scene, camera);

    // Get the data URL from the renderer and return it
    const dataURL = renderer.domElement.toDataURL("image/png");
    return dataURL;
  };
  return (
    <div>
      <div className={"lightcontrols"}>
        <div>Ambient Occlusion lighting</div>
        <input
          type={"range"}
          min={0}
          max={10}
          value={ambientLight}
          onChange={(e) => {
            dispatch(updateAmbientLight(e.target.value));
          }}
        />
        <div>Directional lighting</div>
        <input
          type={"range"}
          min={0}
          max={10}
          value={directionalLight}
          onChange={(e) => {
            dispatch(updateDirLight(e.target.value));
          }}
        />
      </div>
      <div className={"productMeshes"}>
        <h3>Product Meshes</h3>
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {materialArray.map((mesh, index) => (
          <div
            key={index}
            className="mesh-preview"
            style={{
              display: "flex",
              flexDirection: "column",
              width: "46px",
              height: "70px",
              overflow: "hidden",
              background: "#000000",
              margin: "5px",
              alignItems: "center",
              justifyContent: "space-evenly",
              borderRadius: "10px",
            }}
          >
            <img
              src={ObjectPng}
              style={{
                height: "33px",
                width: "33px",
              }}
            />
            <p
              style={{
                width: "30px",
                overflow: "hidden",
                color: "#ffffff",
              }}
            >
              {mesh.name}
            </p>
          </div>
        ))}
      </div>
      <div className={"productMeshes"}>
        <h3>Product Materials</h3>
        {materialArray.map((mesh, index) => (
          <div
            key={index}
            className="material-preview"
            style={{ margin: "5px" }}
          >
            <img
              src={createMaterialThumbnail(mesh.material)}
              alt={mesh.name}
              style={{
                width: "128px",
                height: "128px",
                borderRadius: "10px",
              }}
            />
            <p>{mesh.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SectionFour;
