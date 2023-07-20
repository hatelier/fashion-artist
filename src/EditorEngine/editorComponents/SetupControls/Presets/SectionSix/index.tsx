import styled from "styled-components";
import AddConfig from "../../../../../assets/svgs/AddConfig.svg";
import React from "react";

const SectionSix=()=>{
    const reptConf = ["AR Filter"," Fashion for Avatar","Virtual Try-on","Virtual  Measurement"]
    return <SectionSixDiv>
        {
            reptConf.map(vls=>{
                return <>
                    <div className={"comeSoon"}>
                        <p>Coming Soon!</p>
                    </div>
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            margin: "15px 0 13px 0",
                            justifyContent: "space-between",
                            width:"100%",
                        }}
                    >
                        <p className={"midBoldclass"} style={{
                            fontSize:"16px"
                        }}>{vls}</p>
                        <img src={AddConfig} style={{ width: "21.35px" }} alt=""/>
                    </div>
                </>
            })
        }
    </SectionSixDiv>
}
export default SectionSix;
const SectionSixDiv = styled.div`
  margin-top: 30px;
  width: 90%;
  display: flex;
  flex-flow: column;
  align-items: center;
  margin-left: auto;
  margin-right: auto;
    .comeSoon {
      border-radius: 5px;
      background: #F4F4F4;
      box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.16);
      width: 100%;
      padding: 8px;
    }
`
