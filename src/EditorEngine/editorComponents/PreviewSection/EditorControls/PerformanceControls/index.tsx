import React from "react";
import "./index.scss";
import Draggable from "react-draggable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { MenuItem, Select, Slider } from "@mui/material";

export const PerformanceControlsDrag = () => {
  return (
    <Draggable>
      <div className={"performanceCtrlDrag"}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <p style={{ fontFamily: "NHbold" }}>Environment</p>
          <FontAwesomeIcon icon={faX} />
        </div>

        <div style={{ marginTop: "15px" }}>
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
            <MenuItem value={10}>Fast Performance</MenuItem>
            <MenuItem value={20}>Better visuals</MenuItem>
          </Select>
        </div>

        {/*    range bars*/}
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
      </div>
    </Draggable>
  );
};
