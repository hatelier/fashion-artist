// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import * as THREE from "three";
import { MeshStandardMaterial } from "three";
import "./index.scss";
import AddImage from "../../../../../assets/svgs/add-image (1) 1.svg";
import AddConfig from "../../../../../assets/svgs/AddConfig.svg";
// color picker

const SectionTwo = () => {
  //here is the material saved configs
  const materialConfigObject = useSelector(
    (state) => state.savedConfigs.materialConfiguration
  );
  const materialList = useSelector(
    (state) => state.materialControl.materialArray
  );
  useEffect(() => {
    console.log("reigger");
  }, [materialList]);
  //control the config pop up state
  const [configPopUp, setConfigPopUp] = useState(null);
  return (
    <div className={"sectionTwoDiv"}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "36px 20px 6px 20px",
          justifyContent: "space-between",
        }}
      >
        <p className={"sectionTwoTitle"}>Configurations</p>
        <img src={AddConfig} style={{ width: "21.35px" }} />
      </div>
      {materialList.length &&
        materialList.map((vlss, indexs) => {
          return (
            <>
              <div className={"configBox"}>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    margin: "0 15px 10px 15px",
                    alignItems: "center",
                  }}
                >
                  <p className={"configHead"}>{vlss.name}</p>
                  {/*<button>Choose</button>*/}
                  <img
                    src={AddImage}
                    style={{ width: "20px", height: "20px" }}
                    onClick={() => {
                      setConfigPopUp(indexs);
                    }}
                  />
                </div>
                {materialConfigObject[vlss.name] &&
                  ["green"].map((vls, index) => {
                    return (
                      <IndiConfig
                        indiMaterial={materialList[indexs]}
                        vls={vls}
                      />
                    );
                  })}
              </div>
              {configPopUp == indexs && <ConfigBox />}
            </>
          );
        })}
      <button className={"uploadAsset"}>Add Configuration</button>
    </div>
  );
};
const ConfigBox = () => {
  return (
    <div className={"configPopUp"}>
      <div className={"configColor"}>
        <p>Choose color</p>
      </div>
      <div className={"configTexture"}>
        <p>Choose texture</p>
      </div>
    </div>
  );
};
const IndiConfig = ({ indiMaterial, vls }) => {
  const [toggleState, setToggleState] = useState(false);
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          cursor: "pointer",
          height: "22px",
          background: "#FFFFFF",
          border: "1px solid #EDEDED",
          borderRadius: "5px",
          margin: "0 15px 10px 15px",
          padding: "0 9px",
        }}
        onClick={() => {
          indiMaterial.material = new MeshStandardMaterial({
            color: vls,
            side: THREE.DoubleSide,
            name: `${indiMaterial.name}${vls}`,
          });
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
          }}
        >
          <div
            style={{
              height: "13px",
              width: "13px",
              background: `${vls}`,
              borderRadius: "50%",
            }}
          ></div>
          <p className={"confName"}>{vls}</p>
        </div>
        <FontAwesomeIcon
          icon={faEye}
          style={{ fontSize: "12px", color: "lightgrey" }}
        />
      </div>
    </>
  );
};
export default SectionTwo;
