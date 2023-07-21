// @ts-nocheck
import React from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import {BsEyeFill} from "react-icons/bs";
import {WhiteOnRed} from "../../Presets/SectionFive/CommentBox";
const ConfigVarients = ({onClose}) => {
    const test = ["alwin", "alwin2", "alwin3"]
  return (
    <ConfigStls>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p>Varient</p>
        <GrClose size={10} onClick={()=>onClose()}/>
      </div>
      <p style={{ fontSize: "15px", marginTop: "20px", fontWeight: "450" }}>
        Material
      </p>
      {/*    here is the material options*/}
        <div style={{background:"#F4F4F4", padding:"15px", borderRadius:"10px",marginTop:"10px"}}>
            <p style={{fontWeight:"430"}}>Select Materials</p>
            {
                test.map((vls)=>{
                    return <>
                        <label className={"labelBoxer"}>
                            <div style={{display:"flex",alignItems:"center"}}>
                                <input type={"checkbox"}/>
                                <p style={{marginLeft:"5px",display:"inline", fontWeight:400}}>{vls}</p>
                            </div>
                            <BsEyeFill size={14}/>
                        </label>
                    </>
                })
            }
        </div>
        <WhiteOnRed style={{width:"100%", marginTop:"20px"}}>
            Add
        </WhiteOnRed>
    </ConfigStls>
  );
};
const ConfigStls = styled.div`
  width: 273px;
  position: fixed;
  bottom: 0;
  right: 0;
  background: #ffffff;
  padding: 15px 20px;
  border-radius: 10px;
  box-shadow: 0px 15px 25px 0px rgba(0, 0, 0, 0.10);
  .labelBoxer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 10px 10px;
    height: 22px;
    background: #FFFFFF;
    border-radius: 5px;
    margin-top: 12px;
  }
`;
export default ConfigVarients;
