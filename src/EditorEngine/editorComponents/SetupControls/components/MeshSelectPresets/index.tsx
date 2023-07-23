// @ts-nocheck
import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { WhiteOnRed } from "../../Presets/SectionFive/CommentBox";
import { useDispatch } from "react-redux";
import { updateUnUsedObjects } from "../../../../../redux/savedConfigs";
const MeshSelectPresets = ({
  unSelectedObjects,
  current,
  setReqPreset,
  reqPreset,
  setToggleAdd,
}) => {
  const dispatch = useDispatch();
  const [updatedList, setUpdatedList] = useState([]);
  return (
    <MeshPopUpDiv>
      {unSelectedObjects.map((objectConfig) => {
        return (
          <div className={"optionsPop"}>
            <div className={"flexer"}>
              <input
                type={"checkbox"}
                onChange={(e) => {
                  if (e.target.checked) {
                    setUpdatedList((upState) => {
                      return [...upState, objectConfig];
                    });
                  } else {
                    setUpdatedList((upState) => {
                      let retArray = upState.filter((v) => v !== objectConfig);
                      return [...retArray];
                    });
                  }
                }}
              />
              <p className={"confName midBoldclass"}>{objectConfig}</p>
            </div>
            <FontAwesomeIcon
              icon={faEye}
              style={{ fontSize: "12px", color: "#000000" }}
            />
          </div>
        );
      })}
      <WhiteOnRed
        style={{ width: "90%" }}
        onClick={() => {
          //selected the objects of the preset
          let presetObject = reqPreset.map((prVakl) => {
            if (prVakl.name === current) {
              return {
                ...prVakl,
                materialList: [...prVakl.materialList, ...updatedList],
                visibility: [
                  ...prVakl.visibility,
                  ...Array(updatedList.length).fill(true),
                ],
              };
            }
            return prVakl;
          });
          dispatch(
            updateUnUsedObjects(
              unSelectedObjects.filter((cuvls) => !updatedList.includes(cuvls))
            )
          );
          setReqPreset(presetObject);
          setToggleAdd((state) => !state);
        }}
      >
        Add to <span style={{ fontWeight: 700 }}>{current}</span>
      </WhiteOnRed>
    </MeshPopUpDiv>
  );
};
export default MeshSelectPresets;
const MeshPopUpDiv = styled.div`
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background: rgba(244, 244, 244, 0.9);
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.1);
  margin: 12px 0 0;
  padding: 14px 0;
  align-items: center;
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
    background: rgba(244, 244, 244, 0.9);
    border: 1px solid #e3e3e3;
    border-radius: 5px;
    margin: 0 15px 0 15px;
    padding: 0 9px;
    width: 90%;
  }
`;
