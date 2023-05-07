// @ts-nocheck
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import * as THREE from "three";
import { MeshStandardMaterial } from "three";
import "./index.scss";
import AddImage from "../../../../../assets/svgs/add-image (1) 1.svg";
import AddConfig from "../../../../../assets/svgs/AddConfig.svg";

const SectionTwo = () => {
  const materialList = useSelector(
    (state) => state.materialControl.materialArray
  );
  useEffect(() => {
    console.log("reigger");
  }, [materialList]);
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
                <img src={AddImage} style={{ width: "20px", height: "20px" }} />
              </div>
              {["green", "red"].map((vls, index) => {
                return (
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
                      materialList[indexs].material = new MeshStandardMaterial({
                        color: vls,
                        side: THREE.DoubleSide,
                        name: `${materialList[indexs].name}${vls}`,
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
                      style={{ fontSize: "12px" }}
                    />
                  </div>
                );
              })}
            </div>
          );
        })}
      <button className={"uploadAsset"}>Add Configuration</button>
    </div>
  );
};
export default SectionTwo;
