// @ts-nocheck
import React, { useRef } from "react";
import styled from "styled-components";
import { RedOnWhite, WhiteOnRed } from "../../Presets/SectionFive/CommentBox";
import { toast } from "react-hot-toast";
const CustomPopUp = ({ header, placeholder, onCancel, onSubmit }) => {
  const inputRef = useRef(null);
  return (
    <CustomPopUpDiv>
      <p
        style={{
          fontSize: "18px",
        }}
      >
        {header}
      </p>
      <input
        type={"text"}
        className={"customPopInput"}
        placeholder={placeholder}
        ref={inputRef}
      />
      <div
        style={{
          marginTop: "15px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <WhiteOnRed
          onClick={() => {
            if (inputRef.current.value.length === 0) {
              toast.error("Preset name can't be blank");
            } else {
              onSubmit(inputRef.current.value);
            }
          }}
        >
          Save
        </WhiteOnRed>
        <RedOnWhite onClick={onCancel}>Cancel</RedOnWhite>
      </div>
    </CustomPopUpDiv>
  );
};
export default CustomPopUp;
const CustomPopUpDiv = styled.div`
  position: fixed;
  top: 50%;
  //transform: translateY(-100%);
  transform: translate(-50%, -50%);
  left: 50%;
  //transform: translateX(-50%);
  background: #ffffff;
  width: 308px;
  padding: 20px;
  border-radius: 20px;
  box-shadow: 0px 15px 25px 0px rgba(0, 0, 0, 0.1);
  .customPopInput {
    padding: 4px 15px;
    height: 34px;
    border: none;
    background: var(--box-fill-wt, #f4f4f4);
    outline: none;
    font-size: 14px;
    width: 100%;
    margin-top: 10px;
  }
`;
