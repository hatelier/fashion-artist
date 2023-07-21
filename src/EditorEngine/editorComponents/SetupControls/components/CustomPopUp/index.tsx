// @ts-nocheck
import React from "react";
import styled from "styled-components";
import {RedOnWhite, WhiteOnRed} from "../../Presets/SectionFive/CommentBox";
const CustomPopUp=({header,placeholder})=>{
    return <CustomPopUpDiv>
        <p style={{
            fontSize:"18px"
        }}>{header}</p>
        <input type={"text"} className={"customPopInput"} placeholder={placeholder}/>
        <div style={{marginTop:"15px", display:"flex", justifyContent:"space-between"}}>
            <WhiteOnRed>
                Save
            </WhiteOnRed>
            <RedOnWhite>
                Cancel
            </RedOnWhite>
        </div>
    </CustomPopUpDiv>
}
export default CustomPopUp;
const CustomPopUpDiv = styled.div`
  position: fixed;
  top: 50%;
  transform: translateY(-50%);
  left: 50%;
  background: #FFFFFF;
  width: 308px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 15px 25px 0px rgba(0, 0, 0, 0.10);
  .customPopInput {
    padding: 4px 15px;
    height: 34px;
    border: none;
    background: var(--box-fill-wt, #F4F4F4);
    outline: none;
    font-size: 14px;
    width: 100%;
    margin-top: 10px;
  }
`
