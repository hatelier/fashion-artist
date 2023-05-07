// @ts-nocheck
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { MaterialControlsProps } from "../../../../PropsControls";
import {
  massUpdatePresets,
  updatePresets,
  updateUnUsedObjects,
} from "../../../../../redux/savedConfigs";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";

const SectionThree = () => {
  const { materialArray }: MaterialControlsProps = useSelector(
    (state: any) => state.materialControl
  );
  const { presets, unUsedObjects } = useSelector((state) => state.savedConfigs);
  const [currentPreset, setCurrentPreset] = useState("");
  const [toggleAdd, setToggleAdd] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    let materialNameList = [];
    materialArray.map((vls) => {
      materialNameList.push(vls.name);
    });
    dispatch(updateUnUsedObjects(materialNameList));
  }, [materialArray]);

  const MaterialSelection = ({ unSelectedObjects, current }) => {
    const [updatedList, setUpdatedList] = useState([]);
    return (
      <div style={{ border: "1px solid black" }}>
        <h3>{current}</h3>
        {unSelectedObjects.map((objectConfig) => {
          return (
            <div style={{ display: "flex", gap: "5px", margin: "3px" }}>
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
            </div>
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
      </div>
    );
  };

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          margin: "5px",
        }}
      >
        <p>Preset controls</p>
        <button
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
        >
          Add+
        </button>
      </div>
      ;{/*here is the material selection section*/}
      {toggleAdd && (
        <MaterialSelection
          unSelectedObjects={unUsedObjects}
          current={currentPreset}
        />
      )}
      <div>
        {presets.map((preset) => {
          return (
            <div
              style={{
                border: "1px solid black",
                margin: "4px",
                padding: "4px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <p>{preset.name}</p>
                <button
                  onClick={() => {
                    setCurrentPreset(preset.name);
                    setToggleAdd((state) => !state);
                  }}
                >
                  +
                </button>
              </div>
              <div>
                {preset.materialList.map((matVal) => {
                  return (
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        margin: "5px 0",
                        alignItems: "center",
                      }}
                    >
                      <p>{matVal}</p>
                      <FontAwesomeIcon
                        icon={faEye}
                        style={{ fontSize: "14px", color: "darkgrey" }}
                      />
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
      ;
    </div>
  );
};
export default SectionThree;
