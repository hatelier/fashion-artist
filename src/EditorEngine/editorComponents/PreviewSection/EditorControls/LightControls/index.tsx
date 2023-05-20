import React, { useState } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faX } from "@fortawesome/free-solid-svg-icons";
import Draggable from "react-draggable";
import { MenuItem, Select, Slider } from "@mui/material";
import { SketchPicker } from "react-color";
import { LabelledInputMui } from "../CameraControls";
import { useSelector } from "react-redux";

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
  const [lightDetails, setLightDetails] = useState({
    lightType: "directional",
  });
  const { lightType, lightColor, lightIntensity, distance, x, y, z } =
    useSelector((state: any) => state.materialControl.currentLight);
  const xRef: any = React.createRef();
  const yRef: any = React.createRef();
  const zRef: any = React.createRef();

  return (
    <Draggable handle={".dragClassLight"}>
      <div className={"lightControlDrag"}>
        <div
          style={{ display: "flex", justifyContent: "space-between" }}
          className={"dragClassLight"}
        >
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
            defaultValue={"directional"}
            // onChange={handleChange}
            style={{
              borderRadius: "8px",
              height: "31px",
              fontFamily: "NHreg",
              fontSize: "11px",
              width: "100%",
            }}
            onChange={(e) => {
              setLightDetails((state) => {
                return {
                  ...state,
                  lightType: e.target.value,
                };
              });
            }}
          >
            <MenuItem value={"directional"}>Directional</MenuItem>
            <MenuItem value={"spot"}>Spot</MenuItem>
            <MenuItem value={"point"}>Point</MenuItem>
            <MenuItem value={"ambient"}>Ambient</MenuItem>
            <MenuItem value={"rectArea"}>Rect Area</MenuItem>
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
          <SketchPicker
            width={"178px"}
            color={"#ffffff"}
            onChangeComplete={(e) => {
              setLightDetails((state) => {
                return {
                  ...state,
                  lightColor: e.hex,
                };
              });
            }}
          />
        </div>

        <div style={{ marginTop: "15px" }}>
          <p>Intensity</p>
          <div style={{ display: "flex", gap: "15px", alignItems: "center" }}>
            <Slider
              size="small"
              defaultValue={lightIntensity}
              aria-label="Small"
              valueLabelDisplay="auto"
              min={0}
              max={100}
              onChange={(e: any) => {
                if (e) {
                  setLightDetails((state) => {
                    return {
                      ...state,
                      lightIntensity: e.target.value,
                    };
                  });
                }
              }}
            />
            <input
              type={"number"}
              value={lightIntensity}
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
              defaultValue={distance}
              aria-label="Small"
              valueLabelDisplay="auto"
              min={0}
              max={100}
              onChange={(e: any) => {
                if (e) {
                  setLightDetails((state) => {
                    return {
                      ...state,
                      distance: e.target.value,
                    };
                  });
                }
              }}
            />
            <input
              type={"number"}
              value={distance}
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
          <form style={{ display: "flex", gap: "6px", marginTop: "6px" }}>
            <LabelledInputMui label={"X"} width={"63px"} ref={xRef} />
            <LabelledInputMui label={"Y"} width={"63px"} ref={yRef} />
            <LabelledInputMui label={"Z"} width={"63px"} ref={zRef} />
          </form>
        </div>

        {/*  button controls*/}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "13px",
          }}
        >
          <button
            onClick={() => {
              console.log(xRef.current.querySelector("input").value);
            }}
            className={"redButtonClass"}
          >
            Save
          </button>
          <button className={"saveButton"}>Delete</button>
        </div>
      </div>
    </Draggable>
  );
};
export default LightControls;
