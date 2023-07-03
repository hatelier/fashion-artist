import React from "react";
import { useDispatch } from "react-redux";
import {
  updateDiableComments,
  updateEnableComments,
} from "../../../../../redux/commentsRedux";
import AddConfig from "../../../../../assets/svgs/AddConfig.svg";
import "./index.scss";
const SectionFive = () => {
  const dispatch = useDispatch();
  return (
    <div
      style={{
        margin: "0 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "36px 0 6px 0",
          justifyContent: "space-between",
        }}
      >
        <p className={"sectionFiveTitle"}>Collaboration Feedback</p>
        <img
          src={AddConfig}
          style={{ width: "21.35px", filter: "invert(.5)" }}
          onClick={() => {
            dispatch(updateEnableComments());
          }}
        />
        <img
          src={AddConfig}
          style={{ width: "21.35px" }}
          onClick={() => {
            dispatch(updateDiableComments());
          }}
        />
      </div>
    </div>
  );
};
export default SectionFive;
