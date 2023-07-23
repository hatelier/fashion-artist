// @ts-nocheck
import React from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { PiCaretDownBold } from "react-icons/pi";
import { MenuItem, Select } from "@mui/material";
import { WhiteOnRed } from "../../Presets/SectionFive/CommentBox";
const MaterialSwap = ({ onClose, selectedMat, allCustomMaterials }) => {
  return (
    <MaterialSDiv>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p className={"midBoldclass"}>Configuration</p>
        <GrClose size={10} onClick={onClose} />
      </div>
      <div>
        <p
          className={"midBoldclass"}
          style={{
            marginTop: "20px",
            marginBottom: "5px",
          }}
        >
          {selectedMat}
        </p>
        <Select
          value={allCustomMaterials[0].materialName}
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
          {allCustomMaterials && (
            <>
              {allCustomMaterials.map((vls) => {
                return (
                  <MenuItem value={vls.materialName}>
                    {vls.materialName}
                  </MenuItem>
                );
              })}
            </>
          )}
        </Select>
      </div>
      <WhiteOnRed>Swap the material</WhiteOnRed>
    </MaterialSDiv>
  );
};
export default MaterialSwap;

const MaterialSDiv = styled.div`
  width: 273px;
  background: #ffffff;
  bottom: 0;
  right: 0;
  position: fixed;
  border-radius: 10px;
  padding: 15px 20px;
  box-shadow: 0px 15px 25px 0px rgba(0, 0, 0, 0.1);
  .midBoldclass {
    font-weight: 430;
  }
`;
