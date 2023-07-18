import styled from "styled-components";
import {GrClose} from "react-icons/gr";
import React from "react";
import {GreyInput} from "../ConfigEditor";
import AddPic from "../../../../../assets/svgs/sectionFour/addPic.svg"
import {WhiteOnRed} from "../../Presets/SectionFive/CommentBox";

const AddMeshPopUpMain=()=>{
    return <AddPopUpDiv>
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <p className={"midBoldclass"}>Mess</p>
            <GrClose size={10} />
        </div>
        <div>
            <p className={"midBoldclass"} style={{
                marginTop:"20px"
            }}>Name</p>
            <GreyInput placeholder={"Add Mesh name"}/>
        </div>
        <div style={{display:"flex",gap:"5px", marginTop:"15px"}}>
            <input type={"checkbox"}/>
            <p>Camera Ignore</p>
        </div>
        <div style={{marginTop:"15px"}}>
            <p className={"midBoldclass"}>Add Mesh</p>
            <img src={AddPic} alt={""} width={"68px"}
            style={{
                marginTop:"5px"
            }}
            />
        </div>
        {/*mesh size*/}
        <div style={{marginTop:"10px",marginBottom:"20px"}}>
            <p className={"midBoldclass"}>Individual mesh size</p>
            <p style={{marginTop:"3px"}}>256 Kb</p>
        </div>

        <WhiteOnRed style={{
            width:"100%"
        }}>
            Save
        </WhiteOnRed>
    </AddPopUpDiv>
}
export default AddMeshPopUpMain;
const AddPopUpDiv = styled.div`
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 15px;
  background: #FFFFFF;
  width: 224px;
  border-radius: 10px;
`
