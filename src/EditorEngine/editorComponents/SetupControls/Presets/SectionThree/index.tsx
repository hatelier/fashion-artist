// @ts-nocheck
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { MaterialControlsProps } from "../../../../PropsControls";
import { updatePresets } from "../../../../../redux/savedConfigs";

const SectionThree = () => {
  //this here is the material redux control
  const { materialArray }: MaterialControlsProps = useSelector(
    (state: any) => state.materialControl
  );
  const { presets } = useSelector((state) => state.savedConfigs);
  const dispatch = useDispatch();
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
            dispatch(updatePresets(innerObject));
          }}
        >
          Add+
        </button>
      </div>
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
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <p>{preset.name}</p>
                <button>+</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SectionThree;
