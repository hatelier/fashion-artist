// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import * as THREE from "three";
import {
  MeshPhysicalMaterial,
  MeshStandardMaterial,
  TextureLoader,
} from "three";
import "./index.scss";
import AddImage from "../../../../../assets/svgs/add-image (1) 1.svg";
import AddConfig from "../../../../../assets/svgs/AddConfig.svg";
import { accountManagement } from "../../../../../redux/accountManagement";
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
  //redux mechanism state
  const allCustomMaterials = useSelector(
    (state: any) => state.accountManagement.allCustomMaterials
  );
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
      <div
        style={{
          margin: "5px 20px",
        }}
      >
        {allCustomMaterials &&
          allCustomMaterials.map((vls, index) => {
            return (
              <label
                onClick={() => {
                  let openMaterial = {};
                  ["baseMap", "roughnessMap", "normalMap", "occlusionMap"].map(
                    (mater, index) => {
                      const texture = new TextureLoader().load(
                        vls[`${mater}`].imgName
                      );
                      if (mater === "occlusionMap") {
                        mater = "aoMap";
                      } else if (mater === "baseMap") {
                        mater = "map";
                      }
                      openMaterial = {
                        ...openMaterial,
                        [`${mater}`]: texture,
                      };
                    }
                  );
                  openMaterial.map.repeat.set(30, 30);
                  openMaterial.normalMap.repeat.set(30, 30);
                  openMaterial.roughnessMap.repeat.set(30, 30);
                  openMaterial.aoMap.repeat.set(30, 30);

                  openMaterial.map.wrapS =
                    openMaterial.map.wrapT =
                    openMaterial.normalMap.wrapS =
                    openMaterial.normalMap.wrapT =
                    openMaterial.roughnessMap.wrapS =
                    openMaterial.roughnessMap.wrapT =
                    openMaterial.aoMap.wrapS =
                    openMaterial.aoMap.wrapT =
                      THREE.RepeatWrapping;

                  materialList[4].material = new MeshPhysicalMaterial({
                    ...openMaterial,
                  });

                  console.log(openMaterial);
                }}
              >
                <input type={"checkbox"} />
                &nbsp; &nbsp;
                {vls.materialName}
              </label>
            );
          })}
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
                {/*{true &&*/}
                {/*  ["green"].map((vls, index) => {*/}
                {/*    return (*/}
                {/*      <IndiConfig*/}
                {/*        indiMaterial={materialList[indexs]}*/}
                {/*        vls={vls}*/}
                {/*      />*/}
                {/*    );*/}
                {/*  })}*/}
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
