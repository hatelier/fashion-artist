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
import axios from "axios";
import { toast } from "react-hot-toast";
import { faPencil, faExchange } from "@fortawesome/free-solid-svg-icons";
import AddMaterialPopUp from "../SectionFour/components/AddMaterialPopUp";
import styled from "styled-components";
import ConfigVarients from "../../components/ConfigVarients";
import { AiFillEdit } from "react-icons/ai";
import ConfigEditor from "../../components/ConfigEditor";
import MaterialSwap from "../../components/MaterialSwap";
import { WhiteOnRed } from "../SectionFive/CommentBox";

const SectionTwo = () => {
  const materialList = useSelector(
    (state) => state.materialControl.materialArray
  );
  const allCustomMaterials = useSelector(
    (state: any) => state.accountManagement.allCustomMaterials
  );
  // here is the main config login.
  const [appliedTextures, setAppliedTextures] = useState({});
  const [newSELMesh, setNewSELMesh] = useState(null);
  const [currentConfig, setCurrentConfig] = useState(null);
  const [materialDataSwap, setMaterialDataSwap] = useState(null);
  const { userID, projectID } = useSelector(
    (state: any) => state.accountManagement
  );
  // the coolest function. For applying the materials.
  const [status, setStatus] = useState(true);
  const [updatedName, setUpdatedNames] = useState({});
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

          ["map", "roughnessMap", "normalMap", "aoMap"].forEach((materr) => {
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
          });

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
        axios
          .get("/manage/meshConfig", {
            params: {
              userId: userID,
              productId: projectID,
            },
          })
          .then((ress) => {
            if (ress.data.data.length) {
              let resData = ress.data.data;
              // a filter for materialList,
              materialList.filter((materss) =>
                resData.some((cnfData) => {
                  if (cnfData.defaultName === materss.name) {
                    setUpdatedNames((state) => {
                      return {
                        ...state,
                        [materss.name]: cnfData.name,
                      };
                    });
                    materss.position.set(
                      cnfData.position.x,
                      cnfData.position.y,
                      cnfData.position.z
                    );
                    materss.rotation.set(
                      cnfData.rotation.x,
                      cnfData.rotation.y,
                      cnfData.rotation.z
                    );
                    materss.scale.set(
                      cnfData.scale.x,
                      cnfData.scale.y,
                      cnfData.scale.z
                    );
                  }
                  return 0;
                })
              );
              setAppliedTextures(res.data);
            } else {
              setAppliedTextures(res.data);
            }
          });
      })
      .catch((err) => {
        toast.error("Failed to retrieve config");
      });
  }, [projectID, userID, materialList]);

  useEffect(() => {
    if (projectID && userID) {
      getConfig();
    }
  }, [projectID, userID, getConfig]);

  const IndiConfig = ({
    indiMaterial,
    vls,
    appliDetails,
    changeAppli,
    matSwap,
  }) => {
    console.log("appidate", appliDetails);
    function materialFixture(materialName) {
      let requi_material = allCustomMaterials.filter(
        (query) => query.materialName === materialName
      );
      let main_mat = requi_material[0];
      let openMaterial = {};
      [
        "baseMap",
        "metalMap",
        "roughnessMap",
        "normalMap",
        "emissionMap",
        "occlusionMap",
      ].forEach((mater) => {
        if (main_mat[`${mater}`].path !== null) {
          const texture = new TextureLoader().load(main_mat[`${mater}`].path);
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
      });

      ["map", "roughnessMap", "normalMap", "aoMap"].forEach((materr) => {
        if (openMaterial[materr] !== undefined) {
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
          openMaterial[materr].wrapS = openMaterial[materr].wrapT =
            THREE.RepeatWrapping;
        }
      });

      //ranges from 0 to 1, along U and V
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
            borderRadius: "5px",
            border: "1px solid #E3E3E3",
            background: "rgba(244, 244, 244, 0.90)",
            margin: "0 15px 10px 15px",
            padding: "0 9px",
          }}
          onClick={() => {}}
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
              icon={faExchange}
              style={{
                color: "#000000",
                fontSize: "10px",
              }}
              onClick={() => {
                matSwap(vls);
              }}
            />
            &nbsp;&nbsp;
            <FontAwesomeIcon
              icon={faPencil}
              style={{
                color: "#000000",
                fontSize: "10px",
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
                fontSize: "10px",
                color: "#000000",
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
          ["map", "roughnessMap", "normalMap", "aoMap"].forEach((materr) => {
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
          });
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
      {newSELMesh && (
        <ConfigVarients
          allCustomMaterials={allCustomMaterials}
          materialName={newSELMesh}
          setAppliedTextures={setAppliedTextures}
          onClose={() => {
            setNewSELMesh(null);
          }}
        />
      )}
      {currentConfig && (
        <ConfigEditor
          current={currentConfig}
          onClose={() => {
            setCurrentConfig(null);
          }}
        />
      )}
      {materialDataSwap && (
        <MaterialSwap
          selectedMat={materialDataSwap}
          allCustomMaterials={allCustomMaterials}
          onClose={() => {
            setMaterialDataSwap(null);
          }}
        />
      )}
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
        {/*<img src={AddConfig} style={{ width: "21.35px" }} alt="config" />*/}
      </div>
      {allCustomMaterials &&
        Object.keys(appliedTextures).length !== 0 &&
        appliedTextures &&
        status && <ApplyMaterials configData={appliedTextures} />}
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
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p className={"configHead"}>
                      {updatedName[`${vlss.name}`]
                        ? updatedName[`${vlss.name}`]
                        : vlss.name}
                    </p>
                    &nbsp;
                    <AiFillEdit
                      size={14}
                      onClick={() => {
                        setCurrentConfig(vlss.name);
                      }}
                    />
                  </div>
                  {/*<button>Choose</button>*/}
                  <img
                    src={AddImage}
                    style={{ width: "20px", height: "20px" }}
                    onClick={() => {
                      setNewSELMesh(vlss.name);
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
                        matSwap={(name) => {
                          setMaterialDataSwap(name);
                        }}
                      />
                    );
                  })}
              </div>
            </>
          );
        })}
      <WhiteOnRed
        style={{
          width: "90%",
          margin: "20px 15px",
        }}
        // className={"uploadAsset"}
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
      </WhiteOnRed>
    </div>
  );
};
export const SaveConfig = styled.button`
  height: 38px;
  border-radius: 10px;
  border: 2px solid rgba(255, 255, 255, 0.14);
  background: var(--btn, #d31027);
  color: #ffffff;
  font-size: 16px;
  appearance: none;
  margin: 20px 15px;
  width: 90%;
  //position: absolute;
`;

export default SectionTwo;
