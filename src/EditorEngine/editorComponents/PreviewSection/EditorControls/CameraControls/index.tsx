import React, { useState } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp, faX } from "@fortawesome/free-solid-svg-icons";
import Draggable from "react-draggable";
import { MenuItem, Select } from "@mui/material";

const HybridLists = () => {
  return (
    <div className={"hybridList"}>
      <p>+ add point</p>
      <p>+ add fusion</p>
    </div>
  );
};

const CameraControls = () => {
  const [defSelected, setDefSelected] = useState(0);
  return (
    <div className={"cameraControlsPop"}>
      {["Hybrids", "Add points", "Add Fusion"].map((item, index) => {
        return (
          <>
            <p
              className={"mainPropControl"}
              onClick={() => {
                setDefSelected(index);
              }}
            >
              {item} &nbsp;&nbsp;
              <FontAwesomeIcon
                icon={index === defSelected ? faAngleUp : faAngleDown}
              />
            </p>
            {defSelected === 0 && index == 0 && <HybridLists />}
          </>
        );
      })}
    </div>
  );
};
// here are all the configs for camera drag component
export const CameraControlsDraggable = () => {
  return (
    <Draggable>
      <div className={"cameraControlsDraggable"}>
        <div className={"dragHeader"}>
          <p>Point</p>
          <FontAwesomeIcon icon={faX} />
        </div>
        <div className={"nameSection"}>
          <p>Name</p>
          <p>Long Sleeve</p>
        </div>

        {/*  material section*/}
        <div className={"materialSection"}>
          <p>Material</p>
          <div className={"materialSelector"}>
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
              }}
            >
              <MenuItem value={10} disabled>
                Choose individual mesh
              </MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>

            <button className={"redButtonClass"}>Open Material</button>
          </div>
        </div>

        {/*  position controls*/}
        <div className={"positionControls"}>
          <p>Position</p>
        </div>
      </div>
    </Draggable>
  );
};
export default CameraControls;
