import React from "react"
import styled from "styled-components";
import {GrClose} from "react-icons/gr";
import {PiCaretDownBold} from "react-icons/pi";
import {MenuItem, Select} from "@mui/material";
import {WhiteOnRed} from "../../Presets/SectionFive/CommentBox";
const MaterialSwap=()=>{
    return <MaterialSDiv>
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
                marginTop:"20px",
                marginBottom:"5px"
            }}>Material</p>
            <Select
                value={"Select materials"}
                IconComponent={PiCaretDownBold}
                sx={{
                    height: "35px",
                    width: "100%",
                    backgroundColor: "#E3E3E3",
                    border: "none",
                    fontSize: "14px",
                    marginBottom: "15px",
                    "& .MuiOutlinedInput-notchedOutline": {
                        border: "none",
                    },
                    "& .MuiListItem-root": {
                        height: "20px",
                    },
                }}
            >
                <MenuItem value={"Select materials"}>
                    Select materials
                </MenuItem>
            </Select>
        </div>
        <WhiteOnRed>
            Swap the material
        </WhiteOnRed>
    </MaterialSDiv>
}
export default MaterialSwap;

const MaterialSDiv = styled.div`
  width: 273px;
  background: #FFFFFF;
  bottom: 0;
  right: 600px;
  position: fixed;
  border-radius: 10px;
  padding: 15px 20px;
  .midBoldclass {
    font-weight: 430;
  }
`
