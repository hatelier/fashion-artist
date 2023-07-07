// @ts-nocheck
import React, { useCallback, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import * as THREE from "three";
import {
  MeshPhysicalMaterial,
  // MeshStandardMaterial,
  TextureLoader,
} from "three";
import "./index.scss";
import AddImage from "../../../../../assets/svgs/add-image (1) 1.svg";
import AddConfig from "../../../../../assets/svgs/AddConfig.svg";
// import { accountManagement } from "../../../../../redux/accountManagement";
import axios from "axios";
import { toast } from "react-toastify";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import AddMaterialPopUp from "../SectionFour/components/AddMaterialPopUp";
// color picker

const SectionTwo = () => {
  //here is the material saved configs
  // const materialConfigObject = useSelector(
  //   (state) => state.savedConfigs.materialConfiguration
  // );
  const materialList = useSelector(
    (state) => state.materialControl.materialArray
  );
  //control the config pop up state
  // const [configPopUp, setConfigPopUp] = useState(null);
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

          ["baseMap", "roughnessMap", "normalMap", "occlusionMap"].forEach(
            (mater) => {
              
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

          ["map", "roughnessMap", "normalMap", "aoMap"].forEach(
            (materr) => {
              
              openMaterial[materr].repeat.set(
                main_mat.tiling[0],
                main_mat.tiling[1]
              );
              openMaterial[materr].offset.set(
                main_mat.tilingOffset[0],
                main_mat.tilingOffset[1]
              );
              openMaterial[materr].rotation =
                main_mat.tilingRotation * (Math.PI / 180);
            }
          );

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
            aoMapIntensity: main_mat.occlusionMap.factor,
            roughness: main_mat.roughnessMap.factor,
            metalness: main_mat.metalMap.factor,
            emissiveIntensity: main_mat.metalMap.factor,
            color: main_mat.color,
            clearcoat: main_mat.clearcoat, //float
            ior: main_mat.ior, //this value ranges from 1 to 2.33 def is 1.5,
            transmission: main_mat.transmission, //float
          });
        }
      }
      if (i === materialList.length - 1 && materialList.length > 1) {
        setStatus(false);
      }
    }
    return null;
  }

  const getConfig = useCallback(async () => {
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
  },[projectID, userID])

  /*async function getConfig() {
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
  }*/


  useEffect(() => {
    if (projectID && userID) {
      getConfig();
    }
  }, [projectID, userID, getConfig]);

  const IndiConfig = ({ indiMaterial, vls, appliDetails, changeAppli }) => {
    // const [toggleState, setToggleState] = useState(false);
    // here is the material fixtures
    function materialFixture(materialName) {
      let requi_material = allCustomMaterials.filter(
        (query) => query.materialName === materialName
      );
      let main_mat = requi_material[0];
      console.log("retro testing", main_mat);
      let openMaterial = {};
      ["baseMap", "roughnessMap", "normalMap", "occlusionMap"].forEach(
        (mater,) => {

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

      ["map", "roughnessMap", "normalMap", "aoMap"].forEach((materr) => {
        openMaterial[materr].repeat.set(main_mat.tiling[0], main_mat.tiling[1]);
        openMaterial[materr].offset.set(
          main_mat.tilingOffset[0],
          main_mat.tilingOffset[1]
        );
        openMaterial[materr].rotation =
          main_mat.tilingRotation * (Math.PI / 180);
      });

      // //ranges from 0 to 1, along U and V

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
        aoMapIntensity: main_mat.occlusionMap.factor,
        roughness: main_mat.roughnessMap.factor,
        metalness: main_mat.metalMap.factor,
        emissiveIntensity: main_mat.metalMap.factor,
        color: main_mat.color,
        clearcoat: main_mat.clearcoat, //float
        ior: main_mat.ior, //this value ranges from 1 to 2.33 def is 1.5,
        transmission: main_mat.transmission, //float
      });
    }
    return (
      <>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
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
          <div>
            <FontAwesomeIcon
              icon={faPencil}
              style={{
                color: "lightgrey",
                fontSize: "12px",
              }}
              onClick={() => {
                let requi_material = allCustomMaterials.filter(
                  (query) => query.materialName === vls
                );
                setMaterialPopUpData(requi_material[0]);
              }}
            />
            &nbsp;&nbsp;
            <FontAwesomeIcon
              icon={appliDetails.selected === vls ? faEye : faEyeSlash}
              style={{
                fontSize: "12px",
                color: "lightgrey",
                cursor: "pointer",
              }}
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
        </div>
      </>
    );
  };
  
  const postUpdateApply = (configData, materialCustomList) => {
    for (let i = 0; i < materialList.length; i++) {
      if (configData.hasOwnProperty(materialList[i].name)) {
        if (configData[materialList[i].name].selected !== null) {
          let requi_material = materialCustomList.filter(
            (query) =>
              query.materialName === configData[materialList[i].name].selected
          );
          let main_mat = requi_material[0];
          let openMaterial = {};
          ["baseMap", "roughnessMap", "normalMap", "occlusionMap"].forEach(
            (mater) => {
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
          ["map", "roughnessMap", "normalMap", "aoMap"].forEach(
            (materr) => {
              openMaterial[materr].repeat.set(
                main_mat.tiling[0],
                main_mat.tiling[1]
              );
              openMaterial[materr].offset.set(
                main_mat.tilingOffset[0],
                main_mat.tilingOffset[1]
              );
              openMaterial[materr].rotation =
                main_mat.tilingRotation * (Math.PI / 180);
            }
          );
          openMaterial.map.wrapS =
            openMaterial.map.wrapT =
            openMaterial.normalMap.wrapS =
            openMaterial.normalMap.wrapT =
            openMaterial.roughnessMap.wrapS =
            openMaterial.roughnessMap.wrapT =
            openMaterial.aoMap.wrapS =
            openMaterial.aoMap.wrapT =
              THREE.RepeatWrapping;
          // materialList[4].position.set(0, 0, 0);
          materialList[i].material = new MeshPhysicalMaterial({
            ...openMaterial,
            side: THREE.DoubleSide,
            aoMapIntensity: main_mat.occlusionMap.factor,
            roughness: main_mat.roughnessMap.factor,
            metalness: main_mat.metalMap.factor,
            emissiveIntensity: main_mat.metalMap.factor,
            color: main_mat.color,
            clearcoat: main_mat.clearcoat, //float
            ior: main_mat.ior, //this value ranges from 1 to 2.33 def is 1.5,
            transmission: main_mat.transmission, //float
          });
        }
      }
      if (i === materialList.length - 1 && materialList.length > 1) {
        setStatus(false);
      }
    }
  };
  // material edit PopUp controls
  const [materialPopData, setMaterialPopUpData] = useState(null);
  return (
    <div className={"sectionTwoDiv"}>
      {materialPopData && (
        <AddMaterialPopUp
          updateMode={true}
          updateData={materialPopData}
          setState={setMaterialPopUpData}
          loadAPI={(materialCustomList) => {
            postUpdateApply(appliedTextures, materialCustomList);
          }}
        />
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "36px 20px 6px 20px",
          justifyContent: "space-between",
        }}
      >
        <p className={"sectionTwoTitle"}>Configurations</p>
        <img src={AddConfig} style={{ width: "21.35px" }} alt="config" />
      </div>
      {allCustomMaterials &&
        Object.keys(appliedTextures).length !== 0 &&
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
                          state[`${selectedMesh}`].list.forEach((value) => {
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
                    margin: appliedTextures[vlss.name]
                      ? "0 15px 10px 15px"
                      : "0 15px 0px 15px",
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
                    alt="Add"
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
        Save Configuration
      </button>
    </div>
  );
};

/*const ConfigBox = () => {
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
};*/

export default SectionTwo;
