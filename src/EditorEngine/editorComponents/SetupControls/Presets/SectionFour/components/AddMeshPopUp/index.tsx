// @ts-nocheck
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import addPic from "../../../../../../../assets/svgs/sectionFour/addPic.svg";
import { InvisibleFileUploader, RedButtonClass, WhiteButtonClass } from "../../../../../../StyledComponents";
import { useDispatch } from "react-redux";
import { updateModelGLB } from "../../../../../../../redux/meshControls";

const AddMeshPopUp = () => {
  const dispatch = useDispatch();
  return (
    <div className={"addMeshPopUp"}>
      <InvisibleFileUploader
        type={"file"}
        name={"meshInput"}
        className={"meshInput"}
        onChange={(e) => {
          dispatch(updateModelGLB(e.target.files[0]));
        }}
      />
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <p style={{
          fontWeight: 600
        }}>Mesh</p>
        <FontAwesomeIcon icon={faXmark} />
      </div>

      {/*  naming*/}
      <div style={{ marginTop: "10px" }}>
        <p style={{ fontSize: "11px", fontWeight: 600 }}>Name</p>
        <p style={{ marginLeft: "10px" }}>Material 1</p>
        <label style={{ display: "flex", marginTop: "18px", gap: "5px" }}>
          <input type={"checkbox"} />
          <p style={{ fontWeight: 500 }}>Camera Ignore</p>
        </label>
      </div>

      {/*  mesh upload section*/}
      <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginTop: "18px" }}>
        <p style={{ fontWeight: 550 }}>Add Mesh</p>
        <img src={addPic} style={{
          width: "68px"
        }}
             onClick={() => {
               document.querySelector(".meshInput").click();
             }}
        />
      </div>

      {/*  mesh upload section*/}
      <div style={{ display: "flex", flexDirection: "column", gap: "5px", marginTop: "18px" }}>
        <p style={{ fontWeight: "550" }}>Download size</p>
        <p style={{ fontWeight: "450" }}>250B</p>
      </div>

      {/*  button section*/}
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between"
        }}
      >
        <RedButtonClass>Update</RedButtonClass>
        <WhiteButtonClass>Cancel</WhiteButtonClass>
      </div>

    </div>
  );
};
export default AddMeshPopUp;
