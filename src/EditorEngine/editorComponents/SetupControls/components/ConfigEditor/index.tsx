import  React from "react";
import styled from "styled-components";
import {GrClose} from "react-icons/gr";
import AddPic from "../../../../../assets/svgs/sectionFour/addPic.svg"
import {LabelledInputMui} from "../../../PreviewSection/EditorControls/CameraControls";
import {RedOnWhite, WhiteOnRed} from "../../Presets/SectionFive/CommentBox";
const ConfigEditor=()=>{
    return <ConfigEditDiv>
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
            }}
        >
            <p className={"midBoldclass"}>Configuration</p>
            <GrClose size={10} />
        </div>
        <div>
            <p className={"midBoldclass"} style={{
                marginTop:"20px"
            }}>Name
            </p>
            <GreyInput type={"text"} placeholder={"Configuration Name"}/>
        </div>
        <div style={{marginTop:"15px"}}>
            <p className={"midBoldclass"}>Configuration Image</p>
            <img src={AddPic} alt={""} width={"126px"} style={{
                marginTop:"5px"
            }}/>
        </div>
        {/*Position*/}
        <div style={{ marginTop: "15px" }}>
            <p className={"midBoldclass"}>Position</p>
            <div style={{ display: "flex", gap: "6px", marginTop: "6px" }}>
                <LabelledInputMui label={"X"} width={"33%"} />
                <LabelledInputMui label={"Y"} width={"33%"} />
                <LabelledInputMui label={"Z"} width={"33%"} />
            </div>
        </div>

        {/*rotation*/}
        <div style={{ marginTop: "15px" }}>
            <p className={"midBoldclass"}>Rotation</p>
            <div style={{ display: "flex", gap: "6px", marginTop: "6px" }}>
                <LabelledInputMui label={"X"} width={"33%"} />
                <LabelledInputMui label={"Y"} width={"33%"} />
                <LabelledInputMui label={"Z"} width={"33%"} />
            </div>
        </div>

        {/*scale*/}
        <div style={{ marginTop: "15px" }}>
            <p className={"midBoldclass"}>Scale</p>
            <div style={{ display: "flex", gap: "6px", marginTop: "6px" }}>
                <LabelledInputMui label={"X"} width={"33%"} />
                <LabelledInputMui label={"Y"} width={"33%"} />
                <LabelledInputMui label={"Z"} width={"33%"} />
            </div>
        </div>

       {/*mesh size*/}
        <div style={{marginTop:"15px"}}>
            <p className={"midBoldclass"}>Individual mesh size</p>
            <p style={{marginTop:"3px"}}>256 Kb</p>
        </div>

    {/*    update*/}
        <div style={{marginTop:"20px", display:"flex",justifyContent:"space-between"}}>
            <WhiteOnRed>
                Update
            </WhiteOnRed>
            <RedOnWhite>
                Remove
            </RedOnWhite>
        </div>
    </ConfigEditDiv>
}
export default ConfigEditor;

export const GreyInput = styled.input`
  height: 22px;
  padding: 5px 9px 5px 10px;
  border: none;
  background: #EAEAEA;
  outline: none;
  font-size: 12px;
  width: 100%;
  margin-top: 5px;
`
const ConfigEditDiv = styled.div`
  position: fixed;
  right: 290px;
  bottom: 0px;
  width: 302.4px;
  background: #FFFFFF;
  padding: 15px 20px;
  border-radius: 10px;
  .midBoldclass {
    font-weight: 430;
  }
`
