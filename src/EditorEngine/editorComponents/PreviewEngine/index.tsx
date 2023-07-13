// @ts-nocheck
import "./index.scss";
import ModelPreview from "./ModelPreview";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
// import ObjectCube from "../../../assets/svgs/cube 1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  updateCurrentModel,
  updateEnableAR,
} from "../../../redux/previewRedux";
import { MeshPhysicalMaterial, TextureLoader } from "three";
import * as THREE from "three";
import XRengine from "../XRengine";

const PreviewEngine = () => {
  const dispatch = useDispatch();
  return (
    <div>
      <div className="preview-page">
        <div className="preview-block">
          <div className="preview-main">
            <img
              src={require("../../../assets/pngs/mx-logo-dark.png")}
              alt=""
              className="preview-mtum-logo"
            />
            <div
              className="preview-view-ar"
              onClick={() => {
                dispatch(updateEnableAR());
              }}
            >
              View in AR
            </div>
            <SideMenu />
            <div className="preview-area" style={{ width: "100%" }}>
              <ModelPreview />
            </div>
            <div className="preview-options">
              <div>
                <button
                  onClick={() => {
                    //window.open("");
                  }}
                >
                  <img
                    src={require("../../../assets/pngs/preview-1.png")}
                    alt=""
                  />
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    //window.open("");
                  }}
                >
                  <img
                    src={require("../../../assets/pngs/preview-2.png")}
                    alt=""
                  />
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    //window.open("");
                  }}
                >
                  <img
                    src={require("../../../assets/pngs/preview-3.png")}
                    alt=""
                  />
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    //window.open("");
                  }}
                >
                  <img
                    src={require("../../../assets/pngs/preview-4.png")}
                    alt=""
                  />
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    //window.open("");
                  }}
                >
                  <img
                    src={require("../../../assets/pngs/preview-5.png")}
                    alt=""
                  />
                </button>
              </div>
              <div>
                <button
                  onClick={() => {
                    //window.open("");
                  }}
                >
                  <img
                    src={require("../../../assets/pngs/preview-6.png")}
                    alt=""
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const SideMenu = () => {
  //dispatches
  const dispatch = useDispatch();
  // useStates
  const [presetData, setPresetData] = useState(null);
  const [configData, setConfigData] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);
  const [customMattList, setCustomMattList] = useState(null);
  const materialList = useSelector(
    (state: any) => state.previewRedux.materialList
  );
  const arModel = useSelector((state: any) => state.previewRedux.arModel);
  const enableAR = useSelector((state: any) => state.previewRedux.enableAR);
  const { userID, projectID, name } = useParams();
  useEffect(() => {
    axios
      .get("/product/get", {
        params: {
          userid: userID,
          productName: name,
        },
      })
      .then((res) => {
        dispatch(updateCurrentModel(res.data.asset.location));
      });
  }, [name, userID, dispatch]);
  useEffect(() => {
    if (materialList && materialList.length > 1) {
      axios
        .get("/materials/getpreset", {
          params: {
            projectId: projectID,
            userId: userID,
          },
        })
        .then((res) => {
          setPresetData(res.data.preset.configuration.preset);
          const reqPreset = res.data.preset.configuration.preset;
          let entire_list = [];
          reqPreset.forEach((prVal, index) => {
            // entire_list
            entire_list = entire_list.concat(prVal.materialList);
            prVal.materialList.forEach((matName, matIndex) => {
              //now toggle the visibility
              materialList.forEach((modMaterial, modIndex) => {
                if (modMaterial.name === matName) {
                  modMaterial.visible = prVal.visibility[matIndex];
                }
              });
            });
          });
          materialList.forEach((materValue) => {
            if (!entire_list.includes(materValue.name)) {
              materValue.visible = false;
            }
          });
        })
        .catch((err) => {
          toast.error("Failed to load the configs.");
        });
      axios
        .get("/manage/config", {
          params: {
            projectId: projectID,
            userId: userID,
          },
        })
        .then((res) => {
          setConfigData(res.data);
          const configData = res.data;
          axios
            .get("/materials/get", {
              params: {
                userId: userID,
                projectId: projectID,
              },
            })
            .then((mat_res) => {
              const allCustomMaterials = mat_res.data;
              setCustomMattList(allCustomMaterials);
              for (let i = 0; i < materialList.length; i++) {
                if (configData.hasOwnProperty(materialList[i].name)) {
                  if (configData[materialList[i].name].selected !== null) {
                    let requi_material = allCustomMaterials.filter(
                      (query) =>
                        query.materialName ===
                        configData[materialList[i].name].selected
                    );

                    let main_mat = requi_material[0];
                    let openMaterial = {};
                    [
                      "baseMap",
                      "roughnessMap",
                      "normalMap",
                      "occlusionMap",
                    ].forEach((mater, index) => {
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
                    });

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
              }
            });
        })
        .catch((err) => {
          toast.error("Failed to load the configs");
        });
    }
  }, [materialList, projectID, userID]);

  // material transform function.
  function materialFixture(materialName, indiMaterial) {
    let requi_material = customMattList.filter(
      (query) => query.materialName === materialName
    );
    let main_mat = requi_material[0];
    let openMaterial = {};
    ["baseMap", "roughnessMap", "normalMap", "occlusionMap"].forEach(
      (mater) => {
        const texture = new TextureLoader().load(main_mat[`${mater}`].imgName);
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
      openMaterial[materr].rotation = main_mat.tilingRotation * (Math.PI / 180);
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
      {enableAR && arModel && (
        <div
          style={{
            position: "fixed",
            height: "100vh",
            width: "100vw",
            zIndex: "2",
            top: 0,
            left: 0,
            background: "#000000",
          }}
        >
          <XRengine />
        </div>
      )}
      <div className="preview-sidemenu">
        {presetData &&
          presetData.map((presData, index) => {
            return (
              <div
                className="dropdown"
                style={{
                  position: "relative",
                  background: "#eeeeee",
                  borderRadius: "20px",
                  width: "300px",
                }}
              >
                <button className="preview-sidemenu-label">
                  <span>{presData.name}</span>
                  <img
                    src={require("../../../assets/pngs/plus-white.png")}
                    alt=""
                    onClick={() => {
                      setSelectedTab(index);
                    }}
                  />
                </button>
                <div
                  style={{
                    display: selectedTab === index ? "flex" : "none",
                    flexWrap: "wrap",
                    justifyContent: "center",
                  }}
                >
                  {presData.materialList.map((mateList, inx) => {
                    return (
                      presData.visibility[inx] && (
                        <div
                          style={{
                            margin: "5px",
                            width: "90px",
                            // background: "red",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            padding: "10px 5px",
                          }}
                        >
                          <input
                            type={"checkbox"}
                            style={{ marginBottom: "5px" }}
                            defaultChecked={presData.visibility[inx]}
                            onChange={(e) => {
                              if (e.target.checked) {
                                materialList.forEach((modMaterial) => {
                                  if (modMaterial.name === mateList) {
                                    modMaterial.visible = true;
                                  }
                                });
                              } else {
                                materialList.forEach((modMaterial) => {
                                  if (modMaterial.name === mateList) {
                                    modMaterial.visible = false;
                                  }
                                });
                              }
                              presetData[index] = presData;
                              setPresetData(presetData);
                            }}
                          />
                          <FontAwesomeIcon
                            icon={faCube}
                            style={{
                              fontSize: "50px",
                            }}
                          />
                          <p
                            style={{
                              fontSize: "12px",
                            }}
                          >
                            {mateList.substring(0, 13)}
                          </p>

                          {/*here is the material list*/}
                          {configData && (
                            <div
                              style={{
                                marginTop: "5px",
                                display: "flex",
                                gap: "10px",
                                flexWrap: "wrap",
                                justifyContent: "center",
                              }}
                            >
                              {configData[mateList] &&
                                configData[mateList].list.map((name) => {
                                  return (
                                    <div
                                      style={{
                                        background:
                                          configData[mateList].selected === name
                                            ? "green"
                                            : "red",
                                        width: "10px",
                                        height: "10px",
                                      }}
                                      onClick={() => {
                                        let selectedMaterial =
                                          materialList.filter(
                                            (matt) => matt.name === mateList
                                          );
                                        materialFixture(
                                          name,
                                          selectedMaterial[0]
                                        );
                                        setConfigData((state) => {
                                          return {
                                            ...state,
                                            [`${mateList}`]: {
                                              ...state[`${mateList}`],
                                              selected: name,
                                            },
                                          };
                                        });
                                      }}
                                    ></div>
                                  );
                                })}
                            </div>
                          )}
                        </div>
                      )
                    );
                  })}
                </div>
              </div>
            );
          })}
      </div>
    </>
  );
};
export default PreviewEngine;
