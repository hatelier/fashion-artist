// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import AddPic from "../../../../../assets/svgs/sectionFour/addPic.svg";
import { ExaNumberLabelledInputMui } from "../../../PreviewSection/EditorControls/CameraControls";
import { RedOnWhite, WhiteOnRed } from "../../Presets/SectionFive/CommentBox";
import { useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-hot-toast";

const ConfigEditor = ({ onClose, current }) => {
  const materialList = useSelector(
    (state) => state.materialControl.materialArray
  );
  const inputRef = useRef(null);
  const pictureRef = useRef(null);
  const [defaultData, setDefaultData] = useState(null);
  const [networkData, setNetworkData] = useState(null);
  const [loadImageUpload, setLoadImageUpload] = useState(false);
  const { userID, projectID } = useSelector(
    (state: any) => state.accountManagement
  );
  useEffect(() => {
    axios
      .get("/manage/meshConfigIndi", {
        params: {
          userId: userID,
          productId: projectID,
          materialName: current,
        },
      })
      .then((res) => {
        if (res.data.data) {
          setDefaultData(res.data.data);
        } else {
          materialList.forEach((vls) => {
            if (vls.name === current) {
              setDefaultData({
                name: vls.name,
                defaultName: vls.name,
                position: { ...vls.position },
                scale: { x: vls.scale.x, y: vls.scale.y, z: vls.scale.z },
                rotation: {
                  x: vls.rotation.x,
                  y: vls.rotation.y,
                  z: vls.rotation.z,
                },
                fullPath: null,
                userId: userID,
                projectId: projectID,
              });
            }
          });
        }
        if (res.data.fullImageSrc) {
          setNetworkData(res.data.fullImageSrc);
        }
      });
  }, [current, materialList, userID, projectID]);
  return (
    defaultData && (
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
            onChange={(e) => {
              setDefaultData((state) => {
                return {
                  ...state,
                  name: e.target.value,
                };
              });
            }}
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
              const postman = new FormData();
              postman.append("file", e.target.files[0]);
              postman.append("userId", userID);
              postman.append("productId", projectID);
              postman.append("folderName", "meshDraws");
              setLoadImageUpload(true);
              axios
                .post("/product/uploadAndGetPath", postman)
                .then((res) => {
                  toast.success("Uploaded Image successfully");
                  setDefaultData((state) => {
                    return {
                      ...state,
                      fullPath: res.data.fullPath,
                    };
                  });
                  setLoadImageUpload(false);
                })
                .catch((err) => {
                  toast.error("Failed to upload image");
                  setLoadImageUpload(false);
                });
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
              src={networkData ? networkData : AddPic}
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
              onChange={(e) => {
                setDefaultData((state) => {
                  return {
                    ...state,
                    position: {
                      ...state.position,
                      x: e.target.value,
                    },
                  };
                });
                materialList.forEach((vls) => {
                  if (vls.name === current) {
                    vls.position.set(
                      e.target.value,
                      defaultData.position.y,
                      defaultData.position.z
                    );
                  }
                });
              }}
            />
            <ExaNumberLabelledInputMui
              label={"Y"}
              width={"33%"}
              value={defaultData.position.y}
              required={true}
              onChange={(e) => {
                setDefaultData((state) => {
                  return {
                    ...state,
                    position: {
                      ...state.position,
                      y: e.target.value,
                    },
                  };
                });
                materialList.forEach((vls) => {
                  if (vls.name === current) {
                    vls.position.set(
                      defaultData.position.x,
                      e.target.value,
                      defaultData.position.z
                    );
                  }
                });
              }}
            />
            <ExaNumberLabelledInputMui
              label={"Z"}
              width={"33%"}
              value={defaultData.position.z}
              required={true}
              onChange={(e) => {
                setDefaultData((state) => {
                  return {
                    ...state,
                    position: {
                      ...state.position,
                      z: e.target.value,
                    },
                  };
                });
                materialList.forEach((vls) => {
                  if (vls.name === current) {
                    vls.position.set(
                      defaultData.position.x,
                      defaultData.position.y,
                      e.target.value
                    );
                  }
                });
              }}
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
              onChange={(e) => {
                setDefaultData((state) => {
                  return {
                    ...state,
                    rotation: {
                      ...state.rotation,
                      x: e.target.value,
                    },
                  };
                });
                materialList.forEach((vls) => {
                  if (vls.name === current) {
                    vls.rotation.set(
                      e.target.value,
                      defaultData.rotation.y,
                      defaultData.rotation.z
                    );
                  }
                });
              }}
            />
            <ExaNumberLabelledInputMui
              label={"Y"}
              width={"33%"}
              value={defaultData.rotation.y}
              required={true}
              onChange={(e) => {
                setDefaultData((state) => {
                  return {
                    ...state,
                    rotation: {
                      ...state.rotation,
                      y: e.target.value,
                    },
                  };
                });
                materialList.forEach((vls) => {
                  if (vls.name === current) {
                    vls.rotation.set(
                      defaultData.rotation.x,
                      e.target.value,
                      defaultData.rotation.z
                    );
                  }
                });
              }}
            />
            <ExaNumberLabelledInputMui
              label={"Z"}
              width={"33%"}
              value={defaultData.rotation.z}
              required={true}
              onChange={(e) => {
                setDefaultData((state) => {
                  return {
                    ...state,
                    rotation: {
                      ...state.rotation,
                      z: e.target.value,
                    },
                  };
                });
                materialList.forEach((vls) => {
                  if (vls.name === current) {
                    vls.rotation.set(
                      defaultData.rotation.x,
                      defaultData.rotation.y,
                      e.target.value
                    );
                  }
                });
              }}
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
              onChange={(e) => {
                setDefaultData((state) => {
                  return {
                    ...state,
                    scale: {
                      ...state.scale,
                      x: e.target.value,
                    },
                  };
                });
                materialList.forEach((vls) => {
                  if (vls.name === current) {
                    vls.scale.set(
                      e.target.value,
                      defaultData.scale.y,
                      defaultData.scale.z
                    );
                  }
                });
              }}
            />
            <ExaNumberLabelledInputMui
              label={"Y"}
              width={"33%"}
              value={defaultData.scale.y}
              required={true}
              onChange={(e) => {
                setDefaultData((state) => {
                  return {
                    ...state,
                    scale: {
                      ...state.scale,
                      y: e.target.value,
                    },
                  };
                });
                materialList.forEach((vls) => {
                  if (vls.name === current) {
                    vls.scale.set(
                      defaultData.scale.x,
                      e.target.value,
                      defaultData.scale.z
                    );
                  }
                });
              }}
            />
            <ExaNumberLabelledInputMui
              label={"Z"}
              width={"33%"}
              value={defaultData.scale.z}
              required={true}
              onChange={(e) => {
                setDefaultData((state) => {
                  return {
                    ...state,
                    scale: {
                      ...state.scale,
                      z: e.target.value,
                    },
                  };
                });
                materialList.forEach((vls) => {
                  if (vls.name === current) {
                    vls.scale.set(
                      defaultData.scale.x,
                      defaultData.scale.y,
                      e.target.value
                    );
                  }
                });
              }}
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
          <WhiteOnRed
            onClick={() => {
              axios
                .post("/manage/meshConfig", defaultData)
                .then((res) => {
                  toast.success("Changes to config made");
                })
                .catch((err) => {
                  toast.success("Failed to make changes.");
                });
            }}
            disabled={loadImageUpload}
          >
            Update
          </WhiteOnRed>
          <RedOnWhite>Remove</RedOnWhite>
        </div>
      </ConfigEditDiv>
    )
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
