import React, {useState} from "react";
import "./index.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp, faX} from "@fortawesome/free-solid-svg-icons";
import Draggable from "react-draggable";
import {MenuItem, Select, TextField} from "@mui/material";

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
          <div className={"positionSelector"}>
            <LabelledInputMui label={"X"} width={"63px"}/>
            <LabelledInputMui label={"Y"} width={"63px"}/>
            <LabelledInputMui label={"Z"} width={"63px"}/>
            <button className={"saveButton"}>save</button>
          </div>
        </div>

        {/*rotation controls*/}
        <div className={"positionControls"}>
          <p>Rotation</p>
          <div className={"positionSelector"}>
            <LabelledInputMui label={"X"} width={"63px"}/>
            <LabelledInputMui label={"Y"} width={"63px"}/>
            <LabelledInputMui label={"Z"} width={"63px"}/>
            <button className={"saveButton"}>save</button>
          </div>
        </div>

        {/*  scale controls*/}
        <div className={"positionControls"}>
          <p>Scale</p>
          <div className={"positionSelector"}>
            <LabelledInputMui label={"X"} width={"63px"}/>
            <LabelledInputMui label={"Y"} width={"63px"}/>
            <LabelledInputMui label={"Z"} width={"63px"}/>
            <button className={"saveButton"}>save</button>
          </div>
        </div>

        {/*  rest of part*/}
        <p
          style={{
            fontFamily: "NHbold",
            fontSize: "14px",
            marginTop: "10px",
          }}
        >
          Download Size
        </p>
        <p
          style={{
            fontSize: "13px",
          }}
        >
          250KB
        </p>

        {/*  button controls*/}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <button className={"redButtonClass"}>Create</button>
          <button className={"saveButton"}>Remove</button>
        </div>
      </div>
    </Draggable>
  );
};

// here is the fusion control component
export const FusionControlComp = () => {
  return (
    <Draggable>
      <div className={"fusionDragComp"}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <p style={{ fontFamily: "NHbold" }}>Fusion</p>
          <FontAwesomeIcon icon={faX} />
        </div>
        <div className={"nameSection"}>
          <p>Name</p>
          <p>Long Sleeve</p>
        </div>

        {/*  position controls*/}
        <div className={"positionControls"}>
          <p>Position</p>
          <div className={"positionSelector"}>
            <LabelledInputMui label={"X"} width={"63px"}/>
            <LabelledInputMui label={"Y"} width={"63px"}/>
            <LabelledInputMui label={"Z"} width={"63px"}/>
            <button className={"saveButton"}>save</button>
          </div>
        </div>

        {/*rotation controls*/}
        <div className={"positionControls"}>
          <p>Rotation</p>
          <div className={"positionSelector"}>
            <LabelledInputMui label={"X"} width={"63px"}/>
            <LabelledInputMui label={"Y"} width={"63px"}/>
            <LabelledInputMui label={"Z"} width={"63px"}/>
            <button className={"saveButton"}>save</button>
          </div>
        </div>

        {/*  scale controls*/}
        <div className={"positionControls"}>
          <p>Scale</p>
          <div className={"positionSelector"}>
            <LabelledInputMui label={"X"} width={"63px"}/>
            <LabelledInputMui label={"Y"} width={"63px"}/>
            <LabelledInputMui label={"Z"} width={"63px"}/>
            <button className={"saveButton"}>save</button>
          </div>
        </div>

        {/*  button controls*/}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "20px",
          }}
        >
          <button className={"redButtonClass"}>Duplicate</button>
          <button className={"saveButton"}>Remove</button>
        </div>
      </div>
    </Draggable>
  );
};

export const LabelledInputMui = ({label, width}: { label: string, width: string }) => {
  return (
      <TextField
          label={`${label}`}
          id="filled-size-small"
          variant="outlined"
          size="small"
          style={{width: `${width}`}}
          inputProps={{
            style: {
              fontSize: "11px",
            },
          }}
      InputLabelProps={{
        style: {
          fontSize: "11px",
        },
      }}
    />
  );
};
export default CameraControls;
