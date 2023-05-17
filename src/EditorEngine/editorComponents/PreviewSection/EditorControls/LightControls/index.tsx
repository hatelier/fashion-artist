import React, { useState } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faX } from "@fortawesome/free-solid-svg-icons";
import Draggable from "react-draggable";
import { MenuItem, Select, Slider } from "@mui/material";
import { SketchPicker } from "react-color";
import { LabelledInputMui } from "../CameraControls";

const LightControls = () => {
  let lightTypes = ["Directional", "Spot", "Point", "Ambient", "Rect Area"];
  const [toggleState, setToggleState] = useState(false);
  return (
    <div className={"lightControlPop"}>
      <p
        className={"headerPop"}
        onClick={() => {
          setToggleState((state) => !state);
        }}
      >
        Add light &nbsp;&nbsp;
        <FontAwesomeIcon icon={toggleState ? faAngleUp : faAngleDown} />
      </p>
      <div className={"hybridList"}>
        {toggleState &&
          lightTypes.map((item, index) => {
            return <p>{item}</p>;
          })}
      </div>
    </div>
  );
};
export const LightControlDrag = () => {
  return (
    <Draggable>
      <div className={"lightControlDrag"}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ fontFamily: "NHbold" }}>Light</p>
          <FontAwesomeIcon icon={faX} />
        </div>

        <div style={{ marginTop: "16.45px" }}>
          <p style={{ fontFamily: "NHmed" }}>Name</p>
          <input
            type={"text"}
            placeholder={"New name"}
            style={{
              border: "none",
              fontSize: "11px",
              fontFamily: "NHreg",
              height: "20px",
            }}
          />
        </div>

        <div>
          <p style={{ margin: "10px 0 5px 0" }}>Light Kind</p>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={10}
            // onChange={handleChange}
            style={{
              borderRadius: "8px",
              height: "31px",
              fontFamily: "NHreg",
              fontSize: "11px",
              width: "100%",
            }}
          >
            <MenuItem value={10} disabled>
              Directional
            </MenuItem>
            <MenuItem value={20}>Spot</MenuItem>
            <MenuItem value={30}>Point</MenuItem>
            <MenuItem value={40}>Ambient</MenuItem>
            <MenuItem value={50}>Rect Area</MenuItem>
          </Select>
          <div style={{ display: "flex", gap: "5px", marginTop: "12px" }}>
            <input type={"checkbox"} />
            <span
              style={{
                color: "#9E9E9E",
                fontSize: "11px",
                fontFamily: "NHreg",
              }}
            >
              Switchable
            </span>
          </div>
        </div>

        <div>
          <p style={{ margin: "10px 0 10px 0" }}>Color</p>
          <SketchPicker width={"178px"} disableAlpha={true} />
        </div>

        <div style={{ marginTop: "15px" }}>
          <p>Intensity</p>
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
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

        <div style={{ marginTop: "15px" }}>
          <p>Distance</p>
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
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

        <div>
          <p>Position</p>
          <div style={{ display: "flex", gap: "6px", marginTop: "6px" }}>
            <LabelledInputMui label={"X"} width={"63px"} />
            <LabelledInputMui label={"Y"} width={"63px"} />
            <LabelledInputMui label={"Z"} width={"63px"} />
          </div>
        </div>

        {/*  button controls*/}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "13px",
          }}
        >
          <button className={"redButtonClass"}>Save</button>
          <button className={"saveButton"}>Delete</button>
        </div>
      </div>
    </Draggable>
  );
};
export default LightControls;
