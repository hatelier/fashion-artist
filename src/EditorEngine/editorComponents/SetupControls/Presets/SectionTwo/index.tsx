// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
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
import axios from "axios";
import { toast } from "react-toastify";
// color picker

const SectionTwo = () => {
  //here is the material saved configs
  const materialConfigObject = useSelector(
    (state) => state.savedConfigs.materialConfiguration
  );
  const materialList = useSelector(
    (state) => state.materialControl.materialArray
  );
  //control the config pop up state
  const [configPopUp, setConfigPopUp] = useState(null);
  //redux mechanism state
  const allCustomMaterials = useSelector(
    (state: any) => state.accountManagement.allCustomMaterials
  );
  // here is the main config login.
  const [appliedTextures, setAppliedTextures] = useState({});
  const [selectedMesh, setSelectedMesh] = useState(null);
  const { userID, projectID } = useSelector(
    (state: any) => state.accountManagement
  );
  // the coolest function. For applying the materials.
  const [status, setStatus] = useState(true);
  function ApplyMaterials({ configData }) {
    for (let i = 0; i < materialList.length; i++) {
      if (configData.hasOwnProperty(materialList[i].name)) {
        if (configData[materialList[i].name].selected !== null) {
          let requi_material = allCustomMaterials.filter(
            (query) =>
              query.materialName === configData[materialList[i].name].selected
          );
          let main_mat = requi_material[0];
          let openMaterial = {};
          ["baseMap", "roughnessMap", "normalMap", "occlusionMap"].map(
            (mater, index) => {
              const texture = new TextureLoader().load(
                main_mat[`${mater}`].imgName
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

          materialList[i].material = new MeshPhysicalMaterial({
            ...openMaterial,
            side: THREE.DoubleSide,
          });
        }
      }
      if (i === materialList.length - 1 && materialList.length > 1) {
        setStatus(false);
        console.log("playstaiton4", materialList, configData);
      }
    }
    return null;
  }
  async function getConfig() {
    axios
      .get("/manage/config", {
        params: {
          userId: userID,
          projectId: projectID,
        },
      })
      .then((res) => {
        setAppliedTextures(res.data);
      })
      .catch((err) => {
        toast.error("Failed to retrieve config");
      });
  }
  useEffect(() => {
    if (projectID && userID) {
      getConfig();
    }
  }, []);

  const IndiConfig = ({ indiMaterial, vls, appliDetails, changeAppli }) => {
    const [toggleState, setToggleState] = useState(false);
    // here is the material fixtures
    function materialFixture(materialName) {
      let requi_material = allCustomMaterials.filter(
        (query) => query.materialName === materialName
      );
      let main_mat = requi_material[0];
      let openMaterial = {};
      ["baseMap", "roughnessMap", "normalMap", "occlusionMap"].map(
        (mater, index) => {
          const texture = new TextureLoader().load(
            main_mat[`${mater}`].imgName
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

      indiMaterial.material = new MeshPhysicalMaterial({
        ...openMaterial,
        side: THREE.DoubleSide,
      });
    }
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
            // indiMaterial.material = new MeshStandardMaterial({
            //   color: vls,
            //   side: THREE.DoubleSide,
            //   name: `${indiMaterial.name}${vls}`,
            // });
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
                background: `#c7c7c7`,
                borderRadius: "50%",
              }}
            ></div>
            <p className={"confName"}>{vls}</p>
          </div>
          <FontAwesomeIcon
            icon={appliDetails.selected === vls ? faEye : faEyeSlash}
            style={{ fontSize: "12px", color: "lightgrey" }}
            onClick={() => {
              if (appliDetails.selected === vls) {
                appliDetails.selected = null;
                changeAppli((state) => {
                  return {
                    ...state,
                    appliDetails,
                  };
                });
              } else {
                appliDetails.selected = vls;
                changeAppli((state) => {
                  return {
                    ...state,
                    appliDetails,
                  };
                });
                materialFixture(vls);
              }
            }}
          />
        </div>
      </>
    );
  };

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
      {allCustomMaterials &&
        Object.keys(appliedTextures).length &&
        appliedTextures &&
        status && <ApplyMaterials configData={appliedTextures} />}
      {selectedMesh && (
        <div
          style={{
            margin: "5px 20px",
            display: "flex",
            flexDirection: "column",
          }}
        >
          {allCustomMaterials &&
            allCustomMaterials.map((vls, index) => {
              return (
                <label>
                  <input
                    type={"checkbox"}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setAppliedTextures((state) => {
                          let status = false;
                          if (state[`${selectedMesh}`]) {
                            status = true;
                          }
                          return {
                            ...state,
                            [`${selectedMesh}`]: {
                              selected: null,
                              list: status
                                ? [
                                    ...state[`${selectedMesh}`].list,
                                    vls.materialName,
                                  ]
                                : [vls.materialName],
                            },
                          };
                        });
                      } else {
                        setAppliedTextures((state) => {
                          let new_val = [];
                          state[`${selectedMesh}`].list.map((value) => {
                            if (value !== vls.materialName) {
                              new_val.push(value);
                            }
                          });
                          return {
                            ...state,
                            [`${selectedMesh}`]: {
                              selected: null,
                              list: new_val,
                            },
                          };
                        });
                      }
                    }}
                  />
                  &nbsp; &nbsp;
                  {vls.materialName}
                </label>
              );
            })}
          <button
            onClick={() => {
              setSelectedMesh(null);
            }}
          >
            save
          </button>
        </div>
      )}
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
                      setSelectedMesh(vlss.name);
                    }}
                  />
                </div>
                {appliedTextures[vlss.name] &&
                  appliedTextures[vlss.name].list.map((matNames) => {
                    return (
                      <IndiConfig
                        indiMaterial={materialList[indexs]}
                        vls={matNames}
                        appliDetails={appliedTextures[vlss.name]}
                        changeAppli={setAppliedTextures}
                      />
                    );
                  })}
              </div>
              {/*{configPopUp == indexs && <ConfigBox />}*/}
            </>
          );
        })}
      <button
        className={"uploadAsset"}
        onClick={() => {
          axios
            .put("/manage/config", {
              userId: userID,
              projectId: projectID,
              config: appliedTextures,
            })
            .then((res) => {
              toast.success("Updated the configuration successfully");
            })
            .catch((err) => {
              toast.error(err.message);
            });
        }}
      >
        Add Configuration
      </button>
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
export default SectionTwo;
