import React, { useState } from "react";
import "./index.scss";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { LabelledInputMui } from "../CameraControls";
import { SketchPicker } from "react-color";

const GraphicsControls = () => {
  return (
    <div className={"graphicControlPop"}>
      <p className={"headerPop"} onClick={() => {}}>
        + Add graphics &nbsp; &nbsp;
      </p>
    </div>
  );
};

export const GraphicsControlsDrag = () => {
  const [pickerState, setPickerState] = useState(false);
  return (
    <Draggable>
      <div className={"graphicsControlDrag"}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ fontFamily: "NHbold" }}>Customizable text</p>
          <FontAwesomeIcon icon={faX} />
        </div>

        <div style={{ marginTop: "20px" }}>
          <LabelledInputMui label={"Content"} width={"163px"} />
        </div>

        <div style={{ marginTop: "10px", position: "relative" }}>
          <p style={{ fontFamily: "NHmed" }}>Text Color & Image</p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginTop: "5px",
            }}
          >
            <div
              style={{
                background: "#D9D9D9",
                height: "46px",
                width: "46px",
                borderRadius: "10px",
              }}
            ></div>
            <div
              style={{
                width: "79px",
                height: "31px",
                background: "#2829D8",
                borderRadius: "8px",
                border: "#f0f0f0 solid 4px",
              }}
              onClick={() => {
                setPickerState((state) => !state);
              }}
            ></div>
            {pickerState && (
              <div
                style={{
                  position: "absolute",
                  zIndex: 2,
                  top: "75px",
                  left: "58px",
                }}
              >
                <SketchPicker width={"178px"} disableAlpha={true} />
              </div>
            )}
          </div>
        </div>

        <div style={{ marginTop: "20px" }}>
          <LabelledInputMui label={"Size"} width={"163px"} />
        </div>

        {/*Position*/}
        <div style={{ marginTop: "10px" }}>
          <p>Position</p>
          <div style={{ display: "flex", gap: "6px", marginTop: "6px" }}>
            <LabelledInputMui label={"X"} width={"63px"} />
            <LabelledInputMui label={"Y"} width={"63px"} />
            <LabelledInputMui label={"Z"} width={"63px"} />
          </div>
        </div>

        {/*rotation*/}
        <div style={{ marginTop: "10px" }}>
          <p>Rotation</p>
          <div style={{ display: "flex", gap: "6px", marginTop: "6px" }}>
            <LabelledInputMui label={"X"} width={"63px"} />
            <LabelledInputMui label={"Y"} width={"63px"} />
            <LabelledInputMui label={"Z"} width={"63px"} />
          </div>
        </div>

        <div style={{ display: "flex", gap: "5px", marginTop: "12px" }}>
          <input type={"checkbox"} />
          <span
            style={{
              fontSize: "11px",
              fontFamily: "NHreg",
            }}
          >
            Lock camera position
          </span>
        </div>

        {/*    button*/}
        <div style={{ marginTop: "20px" }}>
          <button className={"redButtonClass"}>Create</button>
        </div>
      </div>
    </Draggable>
  );
};

export default GraphicsControls;
