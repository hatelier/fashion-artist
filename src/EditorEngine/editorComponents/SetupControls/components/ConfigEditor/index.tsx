// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import AddPic from "../../../../../assets/svgs/sectionFour/addPic.svg";
import { ExaNumberLabelledInputMui } from "../../../PreviewSection/EditorControls/CameraControls";
import { RedOnWhite, WhiteOnRed } from "../../Presets/SectionFive/CommentBox";
import { useSelector } from "react-redux";
const ConfigEditor = ({ onClose, current }) => {
  const materialList = useSelector(
    (state) => state.materialControl.materialArray
  );
  const inputRef = useRef(null);
  const pictureRef = useRef(null);
  const [defaultData, setDefaultData] = useState({
    name: "",
    position: { x: 0, y: 0, z: 0 },
    scale: { x: 0, y: 0, z: 0 },
    rotation: { x: 0, y: 0, z: 0 },
  });
  useEffect(() => {
    materialList.forEach((vls) => {
      if (vls.name === current) {
        setDefaultData({
          name: vls.name,
          position: { ...vls.position },
          scale: { x: vls.scale.x, y: vls.scale.y, z: vls.scale.z },
          rotation: {
            x: vls.rotation.x,
            y: vls.rotation.y,
            z: vls.rotation.z,
          },
        });
      }
    });
  }, [current, materialList]);
  return (
    <ConfigEditDiv>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p className={"midBoldclass"}>Configuration</p>
        <GrClose
          size={10}
          onClick={() => {
            onClose();
          }}
        />
      </div>
      <div>
        <p
          className={"midBoldclass"}
          style={{
            marginTop: "20px",
          }}
        >
          Name
        </p>
        <GreyInput
          type={"text"}
          placeholder={"Configuration Name"}
          defaultValue={defaultData.name}
        />
      </div>
      <div style={{ marginTop: "15px" }}>
        <p className={"midBoldclass"}>Configuration Image</p>
        <input
          accept="image/*"
          type={"file"}
          style={{ display: "none" }}
          ref={inputRef}
          onChange={(e) => {
            var file = e.target.files[0];
            var reader = new FileReader();

            reader.onloadend = function () {
              pictureRef.current.src = reader.result;
            };

            if (file) {
              reader.readAsDataURL(file);
            }
          }}
        />
        <div
          style={{
            width: "126px",
            maxHeight: "126px",
            overflow: "hidden",
            borderRadius: "20px",
          }}
          onClick={() => {
            inputRef.current.click();
          }}
        >
          <img
            src={AddPic}
            alt={""}
            ref={pictureRef}
            width={"100%"}
            style={{
              marginTop: "5px",
            }}
          />
        </div>
      </div>
      {/*Position*/}
      <div style={{ marginTop: "15px" }}>
        <p className={"midBoldclass"}>Position</p>
        <div style={{ display: "flex", gap: "6px", marginTop: "6px" }}>
          <ExaNumberLabelledInputMui
            label={"X"}
            width={"33%"}
            value={defaultData.position.x}
            required={true}
            onChange={() => {}}
          />
          <ExaNumberLabelledInputMui
            label={"Y"}
            width={"33%"}
            value={defaultData.position.y}
            required={true}
            onChange={() => {}}
          />
          <ExaNumberLabelledInputMui
            label={"Z"}
            width={"33%"}
            value={defaultData.position.z}
            required={true}
            onChange={() => {}}
          />
        </div>
      </div>

      {/*rotation*/}
      <div style={{ marginTop: "15px" }}>
        <p className={"midBoldclass"}>Rotation</p>
        <div style={{ display: "flex", gap: "6px", marginTop: "6px" }}>
          <ExaNumberLabelledInputMui
            label={"X"}
            width={"33%"}
            value={defaultData.rotation.x}
            required={true}
            onChange={() => {}}
          />
          <ExaNumberLabelledInputMui
            label={"Y"}
            width={"33%"}
            value={defaultData.rotation.y}
            required={true}
            onChange={() => {}}
          />
          <ExaNumberLabelledInputMui
            label={"Z"}
            width={"33%"}
            value={defaultData.rotation.z}
            required={true}
            onChange={() => {}}
          />
        </div>
      </div>

      {/*scale*/}
      <div style={{ marginTop: "15px" }}>
        <p className={"midBoldclass"}>Scale</p>
        <div style={{ display: "flex", gap: "6px", marginTop: "6px" }}>
          <ExaNumberLabelledInputMui
            label={"X"}
            width={"33%"}
            value={defaultData.scale.x}
            required={true}
            onChange={() => {}}
          />
          <ExaNumberLabelledInputMui
            label={"Y"}
            width={"33%"}
            value={defaultData.scale.y}
            required={true}
            onChange={() => {}}
          />
          <ExaNumberLabelledInputMui
            label={"Z"}
            width={"33%"}
            value={defaultData.scale.z}
            required={true}
            onChange={() => {}}
          />
        </div>
      </div>

      {/*mesh size*/}
      <div style={{ marginTop: "15px" }}>
        <p className={"midBoldclass"}>Individual mesh size</p>
        <p style={{ marginTop: "3px" }}>256 Kb</p>
      </div>

      {/*    update*/}
      <div
        style={{
          marginTop: "20px",
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <WhiteOnRed>Update</WhiteOnRed>
        <RedOnWhite>Remove</RedOnWhite>
      </div>
    </ConfigEditDiv>
  );
};
export default ConfigEditor;

export const GreyInput = styled.input`
  height: 22px;
  padding: 5px 9px 5px 10px;
  border: none;
  background: #eaeaea;
  outline: none;
  font-size: 12px;
  width: 100%;
  margin-top: 5px;
`;
const ConfigEditDiv = styled.div`
  position: fixed;
  right: 0px;
  bottom: 0px;
  width: 302.4px;
  background: #ffffff;
  padding: 15px 20px;
  border-radius: 10px;
  box-shadow: 0px 15px 25px 0px rgba(0, 0, 0, 0.1);
  .midBoldclass {
    font-weight: 430;
  }
`;
