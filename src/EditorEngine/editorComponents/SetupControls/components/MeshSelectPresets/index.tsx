import React from "react"
import styled from "styled-components";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";
const MeshSelectPresets=()=>{
    return <MeshPopUpDiv>
        <div
            className={"optionsPop"}
        >
            <div className={"flexer"}>
                <input type={'checkbox'} />
                <p className={"confName midBoldclass"}>{"matVal"}</p>
            </div>
            <FontAwesomeIcon
                icon={faEye}
                style={{ fontSize: "12px", color: "#000000" }}
            />
        </div>
        <div
            className={"optionsPop"}
        >
            <div className={"flexer"}>
                <input type={'checkbox'} />
                <p className={"confName midBoldclass"}>{"matVal"}</p>
            </div>
            <FontAwesomeIcon
                icon={faEye}
                style={{ fontSize: "12px", color: "#000000" }}
            />
        </div>
    </MeshPopUpDiv>
}
export default MeshSelectPresets;
const MeshPopUpDiv = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: rgba(244, 244, 244, 0.90);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.10);
  margin: 12px 0 0;
  padding: 14px 0;
  .flexer {
    display: flex;
    gap: 4px;
  }
  .midBoldclass {
    font-weight: 430;
  }
  .optionsPop {
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    height: 22px;
    background: rgba(244, 244, 244, 0.90);
    border: 1px solid #E3E3E3;
    border-radius: 5px;
    margin: 0 15px 0 15px;
    padding: 0 9px;
  }
`
