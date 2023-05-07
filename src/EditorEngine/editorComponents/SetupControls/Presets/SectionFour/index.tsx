//sectionFour/index.tsx
// @ts-nocheck
import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {updateAmbientLight, updateDirLight,} from "../../../../../redux/materialControl";

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
      </div>
    </div>
  );
};

export default SectionFour;
