import React from "react";
import styled from "styled-components";
import {
  AiOutlineAlignCenter,
  AiOutlineAlignLeft,
  AiOutlineAlignRight,
  AiOutlineOrderedList,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { FiCode } from "react-icons/fi";
import { GrAttachment } from "react-icons/gr";
const CommentBox = () => {
  return (
    <ComBox>
      <div className={"compDiv"}>
        <p className={"header"}>Write</p>
        <p className={"header"}>Preview</p>
      </div>
      <OptionBox />
      <textarea
        className={"inputCompBox"}
        placeholder={"Add a comment"}
        autoFocus={true}
      />
      <div className={"btCtrlComp"}>
        <RedOnWhite>Cancel</RedOnWhite>
        <WhiteOnRed>Resolve</WhiteOnRed>
        <WhiteOnRed>Reply</WhiteOnRed>
      </div>
    </ComBox>
  );
};
export const RedOnWhite = styled.button`
  background: #ffffff;
  border-radius: 5px;
  padding: 5px 7px;
  border: 1px solid #d31027;
  color: #d31027;
  height: 34px;
`;
export const WhiteOnRed = styled.button`
  background: #d31027;
  border-radius: 5px;
  padding: 5px 10px;
  border: 1px solid #d31027;
  color: #ffffff;
  height: 34px;
`;
const OptionBox = () => {
  return (
    <div className={"iconControls"}>
      <p>H</p>
      <p>B</p>
      <i>I</i>
      <AiOutlineAlignLeft />
      <AiOutlineAlignCenter />
      <AiOutlineAlignRight />
      <FiCode />
      <GrAttachment />
      <AiOutlineOrderedList />
      <AiOutlineUnorderedList />
    </div>
  );
};
const ComBox = styled.div`
  height: 230px;
  background: rgba(244, 244, 244, 1);
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background: #f4f4f4;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  .btCtrlComp {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 10px;
    margin-top: 7px;
  }
  .inputCompBox {
    width: 93%;
    height: 100px;
    margin-top: 15px;
    border: 2px solid rgba(227, 227, 227, 1);
    background: rgba(244, 244, 244, 0.9);
    border-radius: 10px;
    padding: 5px;
    outline: none;
  }
  .iconControls {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    font-size: 16px;
    margin-top: 10px;
    p {
      font-size: 15px;
    }
  }
  .compDiv {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    .header {
      font-size: 16px;
      width: 50%;
      text-align: center;
      padding: 7px 0;
      &:nth-child(2) {
        background: #ffffff;
      }
    }
  }
`;
export default CommentBox;
