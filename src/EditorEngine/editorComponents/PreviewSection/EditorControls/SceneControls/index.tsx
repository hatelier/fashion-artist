import React from "react";
import "./index.scss";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { Slider } from "@mui/material";

export const SceneControlsDrag = () => {
  const cameraAngles = [
    "Field of View",
    "Initial horizontal angle",
    "Horizontal range",
    "Initial vertical angle",
    "Vertical range",
    "Rotation speed",
    "Rotation inertia",
    "Auto rotation speed",
    "Initial zoom",
    "Zoom speed",
    "Zoom range",
  ];
  return (
    <Draggable>
      <div className={"sceneControlDrag"}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ fontFamily: "NHbold" }}>Camera</p>
          <FontAwesomeIcon icon={faX} />
        </div>

        {/*range bars*/}
        <div
          style={{ height: "400px", overflowX: "scroll", marginTop: "15px" }}
        >
          {cameraAngles.map((item, index) => {
            return (
              <div style={{ marginTop: "15px" }}>
                <p>{item}</p>
                <div
                  style={{ display: "flex", gap: "15px", alignItems: "center" }}
                >
                  <Slider
                    size="small"
                    defaultValue={70}
                    aria-label="Small"
                    valueLabelDisplay="auto"
                  />
                  <input
                    type={"text"}
                    style={{
                      height: "29px",
                      width: "49px",
                      fontFamily: "NHreg",
                      fontSize: "11px",
                      border: "0.5px solid #979797",
                      borderRadius: "5px",
                      padding: "4px",
                    }}
                  />
                </div>
              </div>
            );
          })}
        </div>

        {/*default*/}
        <button className={"sceneResetButton"}>Reset to default values</button>
      </div>
    </Draggable>
  );
};
