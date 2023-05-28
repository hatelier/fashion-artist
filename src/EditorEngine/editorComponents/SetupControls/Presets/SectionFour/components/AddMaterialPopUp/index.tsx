import "./index.scss";
// image imports
import addPic from "../../../../../../../assets/svgs/sectionFour/addPic.svg"
import {Slider} from "@mui/material";
import React from "react";

const AddMaterialPopUp = () => {
  return (
      <div className={"addMaterialPopUp"}>
        <p style={{fontSize: "11px", fontWeight: 600}}>Material</p>
        <div>
          <p>Name</p>
          <p>Material 1</p>
        </div>

        {/*color map*/}
        <div className={"bcolor"}>
          <div style={{display: "flex", alignItems: 'center'}}>
            <div style={{width: "46px", height: "46px", background: "lightgrey", borderRadius: "10px"}}></div>
            &nbsp;
            &nbsp;
            &nbsp;
            <label style={{fontFamily: "Open Sans", fontWeight: 400, fontSize: "11px"}}>
              <input type={"checkbox"}/>
              &nbsp; Use transparent
            </label>
          </div>
        </div>

        {/*  metalness map*/}
        <div>
          <p>Metalness Map</p>
          <div style={{display: "flex"}}>
            <img src={addPic}/>
            <div>
              <p>Metalness factor</p>
              <Slider
                  size="small"
                  defaultValue={70}
                  aria-label="Small"
                  valueLabelDisplay="auto"
              />
            </div>
          </div>
        </div>
      </div>
  );
};
export default AddMaterialPopUp;
