// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MaterialControlsProps } from "../../../../PropsControls";
import "./index.scss";
import AddImage from "../../../../../assets/svgs/add-image (1) 1.svg";
import AddConfig from "../../../../../assets/svgs/AddConfig.svg";
import {
  massUpdatePresets,
  setFirstLoad,
  updatePresets,
  updateUnUsedObjects,
} from "../../../../../redux/savedConfigs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";

const SectionThree = () => {
  const { materialArray }: MaterialControlsProps = useSelector(
    (state: any) => state.materialControl
  );
  const { presets, unUsedObjects, firstLoad } = useSelector(
    (state) => state.savedConfigs
  );
  const modelURL = useSelector(
    (state: any) => state.materialApplication.modelUrl
  );
  const [currentPreset, setCurrentPreset] = useState("");
  const [toggleAdd, setToggleAdd] = useState(false);
  const dispatch = useDispatch();
  const [reqPreset, setReqPreset] = useState(null);

  //this here is a sophisticated loading mechanism for the visibility factors
  useEffect(() => {
    if (materialArray.length && reqPreset) {
      // dispatch(massUpdatePresets(reqPreset));
      reqPreset.map((prVal, index) => {
        console.log(prVal);
        prVal.materialList.map((matName, matIndex) => {
          //now toggle the visibility
          materialArray.map((modMaterial, modIndex) => {
            if (modMaterial.name === matName) {
              modMaterial.visible = prVal.visibility[matIndex];
            }
          });
        });
      });
    }
  }, [materialArray, reqPreset]);

  useEffect(() => {
    if (firstLoad && materialArray.length) {
      console.log("fisrt trigger", firstLoad);

      let materialNameList = [];
      materialArray.map((vls) => {
        materialNameList.push(vls.name);
      });
      dispatch(updateUnUsedObjects(materialNameList));
      dispatch(setFirstLoad(false));
    }
  }, [materialArray]);

  const MaterialSelection = ({ unSelectedObjects, current }) => {
    const [updatedList, setUpdatedList] = useState([]);
    return (
      <div style={{ border: "1px solid black" }}>
        <h3>{current}</h3>
        {unSelectedObjects.map((objectConfig) => {
          return (
            <label style={{ display: "flex", gap: "5px", margin: "3px" }}>
              <input
                type={"checkbox"}
                onChange={(e) => {
                  if (e.target.checked) {
                    setUpdatedList((upState) => {
                      return [...upState, objectConfig];
                    });
                  } else {
                    setUpdatedList((upState) => {
                      let retArray = upState.filter((v) => v != objectConfig);
                      return [...retArray];
                    });
                  }
                }}
              />
              <p>{objectConfig}</p>
            </label>
          );
        })}
        <button
          onClick={() => {
            //selected the objects of the preset
            let presetObject = presets.map((prVakl) => {
              if (prVakl.name == current) {
                return {
                  ...prVakl,
                  materialList: [...prVakl.materialList, ...updatedList],
                  visibility: [
                    ...prVakl.visibility,
                    ...Array(updatedList.length).fill(true),
                  ],
                };
              }
              return prVakl;
            });
            dispatch(
              updateUnUsedObjects(
                unSelectedObjects.filter(
                  (cuvls) => !updatedList.includes(cuvls)
                )
              )
            );
            dispatch(massUpdatePresets(presetObject));
            setToggleAdd((state) => !state);
          }}
        >
          Save
        </button>
        ;
      </div>
    );
  };
  //here are the states of the of the userID and projectID
  const { userID, projectID } = useSelector(
    (state: any) => state.accountManagement
  );
  // check whether the preset already exists
  useEffect(() => {
    if (projectID) {
      let test = axios
        .get("/materials/getpreset", {
          params: {
            projectId: projectID,
            userId: userID,
          },
        })
        .then((res) => {
          console.log("icomign data", res.data.preset.configuration.preset);
          setReqPreset(res.data.preset.configuration.preset);
        })
        .catch((err) => {
          toast.error(err);
        });
    }
  }, [projectID, userID]);
  return (
    <div className={"sectionThreeDiv"}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "36px 0 6px 0",
          justifyContent: "space-between",
        }}
      >
        <p className={"sectionThreeTitle"}>Preset controls</p>
        <img
          src={AddConfig}
          onClick={() => {
            let name = window.prompt("Enter the name of the project");
            let innerObject = {
              name,
              materialList: [],
              visibility: [],
            };
            setCurrentPreset(name);
            dispatch(updatePresets(innerObject));
            setToggleAdd((state) => !state);
          }}
          style={{ width: "21.35px" }}
        />
      </div>
      {/*here is the material selection section*/}
      {toggleAdd && (
        <MaterialSelection
          unSelectedObjects={unUsedObjects}
          current={currentPreset}
        />
      )}
      <div>
        {(reqPreset ? reqPreset : presets).map((preset) => {
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
                <p className={"configHead"}>{preset.name}</p>
                <img
                  onClick={() => {
                    setCurrentPreset(preset.name);
                    setToggleAdd((state) => !state);
                  }}
                  src={AddImage}
                  style={{ width: "20px" }}
                />
              </div>
              <div>
                {preset.materialList.map((matVal, matInx) => {
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
                    >
                      <p className={"confName"}>{matVal}</p>
                      <FontAwesomeIcon
                        icon={preset.visibility[matInx] ? faEye : faEyeSlash}
                        style={{ fontSize: "12px", color: "lightgrey" }}
                        onClick={() => {
                          materialArray.map((matArr, arrIndex) => {
                            if (matArr.name === matVal) {
                              //   TODO: Here the preset value itself is not being updated.
                              matArr.visible = !preset.visibility[matInx];
                            }
                          });
                          //toggle the visibility across the component phase
                          // dispatch(
                          //   toggleVisiblityPresets({
                          //     presetName: preset.name,
                          //     matName: matVal,
                          //     requiredState: !preset.visibility[matInx],
                          //   })
                          // );
                        }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      <div className={"DupDelDiv"}>
        <button
          className={"uploadAsset"}
          style={{ width: "40%" }}
          onClick={() => {
            axios
              .put("/materials/preset", {
                presetName: "Preset",
                configuration: {
                  preset: presets,
                },
                projectId: projectID,
                userId: userID,
              })
              .then((res) => {
                toast.success("Successfully updated the preset.");
              });
          }}
        >
          Save
        </button>
        <button className={"uploadAsset"} style={{ width: "60%" }}>
          Cancel
        </button>
      </div>
    </div>
  );
};
export default SectionThree;
