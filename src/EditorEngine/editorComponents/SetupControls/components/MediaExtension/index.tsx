// @ts-nocheck
import { BiDotsVerticalRounded } from "react-icons/bi";
import React, { useState } from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { WhiteOnRed } from "../../Presets/SectionFive/CommentBox";
import { Slider, TextField } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import {
  updateCameraState,
  updateResetCameraState,
} from "../../../../../redux/cameraRedux";
import { updateTriggerHD } from "../../../../../redux/materialApplication";

const MediaExtension = () => {
  const cameraProps = useSelector((state) => state.cameraRedux.cameraStatus);
  // const [cameraProps, setCameraProps] = useState(cameraPropsData);
  const [mediaDropState, setMediaDropState] = useState(false);
  const [optDropState, setOptDropState] = useState({
    camera: false,
    render: false,
  });
  const dispatch = useDispatch();
  return (
    <MediaCss>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          cursor: "pointer",
        }}
        onClick={() => {
          setMediaDropState((state) => !state);
        }}
      >
        <p
          className={"midBoldclass"}
          style={{
            fontSize: "16px",
          }}
        >
          Media
        </p>
        {mediaDropState ? (
          <GrClose size={12} />
        ) : (
          <BiDotsVerticalRounded size={16} />
        )}
      </div>

      {/*    camera work*/}
      {mediaDropState && (
        <div className={"cameraClass"}>
          <div
            className={"cameraHeader"}
            onClick={() => {
              setOptDropState((state) => {
                return {
                  ...state,
                  camera: !state.camera,
                };
              });
            }}
          >
            <p
              className={"midBoldclass"}
              style={{
                fontSize: "12px",
              }}
            >
              Camera
            </p>
            {optDropState.camera && <GrClose size={12} />}
          </div>
          {optDropState.camera && (
            <>
              {Object.keys(cameraProps).map((key) => {
                const prop = cameraProps[key];
                return (
                  <div style={{ width: "100%" }}>
                    <div style={{ marginTop: "9px" }}>
                      <p style={{ fontWeight: 400 }}>{prop.name}</p>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "space-between",
                        }}
                      >
                        {prop.type === "def" ? (
                          <>
                            <Slider
                              size="small"
                              value={prop.value}
                              aria-label="Small"
                              max={100}
                              onChange={(e) => {
                                dispatch(
                                  updateCameraState({
                                    [key]: {
                                      ...cameraProps[key],
                                      value: e.target.value,
                                    },
                                    key: key,
                                  })
                                );
                              }}
                              sx={{
                                color: "#000000",
                                "& .MuiSlider-thumb": {
                                  backgroundColor: "#000000",
                                },
                                "& .MuiSlider-valueLabel": {
                                  color: "#ffffff",
                                },
                              }}
                              style={{
                                width: "55%",
                                marginLeft: "5px",
                              }}
                              valueLabelDisplay="auto"
                              min={0}
                            />
                            <input
                              type={"number"}
                              disabled={true}
                              style={{
                                width: "55px",
                                height: "27px",
                                background: "none",
                                marginRight: "10px",
                                border: "rgba(222, 222, 222, 1) 1px solid",
                                fontSize: "13px",
                                padding: "0 0 0 5px",
                              }}
                              value={prop.value}
                            />
                          </>
                        ) : (
                          <Slider
                            value={prop.value}
                            size="small"
                            aria-label="Small"
                            max={360}
                            onChange={(e) => {
                              dispatch(
                                updateCameraState({
                                  [key]: {
                                    ...cameraProps[key],
                                    value: e.target.value,
                                  },
                                  key: key,
                                })
                              );
                            }}
                            sx={{
                              color: "#000000",
                              "& .MuiSlider-thumb": {
                                backgroundColor: "#000000",
                              },
                              "& .MuiSlider-valueLabel": {
                                color: "#ffffff",
                              },
                            }}
                            valueLabelDisplay="auto"
                            style={{
                              marginLeft: "5px",
                              marginRight: "10px",
                            }}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              <WhiteOnRed
                style={{ width: "100%", fontSize: "14px", marginTop: "15px" }}
                onClick={() => {
                  dispatch(updateResetCameraState());
                }}
              >
                Reset to default values
              </WhiteOnRed>
            </>
          )}
        </div>
      )}
      {mediaDropState && (
        <div className={"HdRenderClass"}>
          <div
            className={"cameraHeader"}
            onClick={() => {
              setOptDropState((state) => {
                return {
                  ...state,
                  render: !state.render,
                };
              });
            }}
          >
            <p
              className={"midBoldclass"}
              style={{
                fontSize: "12px",
              }}
            >
              HD Render
            </p>
            {optDropState.render && <GrClose size={12} />}
          </div>
          {optDropState.render && (
            <>
              <form
                style={{
                  width: "100%",
                  marginTop: "15px",
                }}
                onSubmit={(e) => {
                  e.preventDefault();
                  dispatch(
                    updateTriggerHD({
                      height: e.target.height.value,
                      width: e.target.width.value,
                    })
                  );
                }}
              >
                <p>Resolution</p>
                <div
                  style={{
                    marginTop: "8px",
                    display: "flex",
                    gap: "10px",
                  }}
                >
                  <TextField
                    variant="outlined"
                    size="small"
                    id="filled-size-small"
                    label={"Height"}
                    name={"height"}
                    required={true}
                    type={"number"}
                    defaultValue={1080}
                    style={{
                      width: "45%",
                    }}
                    inputProps={{
                      style: {
                        fontSize: "11px",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "11px",
                      },
                    }}
                  />
                  <TextField
                    variant="outlined"
                    size="small"
                    id="filled-size-small"
                    label={"width"}
                    name={"width"}
                    required={true}
                    defaultValue={1920}
                    type={"number"}
                    style={{
                      width: "45%",
                    }}
                    inputProps={{
                      style: {
                        fontSize: "11px",
                      },
                    }}
                    InputLabelProps={{
                      style: {
                        fontSize: "11px",
                      },
                    }}
                  />
                </div>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "5px",
                    marginTop: "10px",
                  }}
                >
                  <input type={"checkbox"} />
                  <p className={"midBoldclass"}>No shadow</p>
                </label>
                <WhiteOnRed
                  style={{
                    width: "100%",
                    marginTop: "10px",
                  }}
                >
                  Download HD render
                </WhiteOnRed>
              </form>
            </>
          )}
        </div>
      )}
    </MediaCss>
  );
};
export default MediaExtension;
const MediaCss = styled.div`
  width: 100%;
  background: #f4f4f4;
  border-radius: 10px;
  .cameraClass {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0px auto 10px auto;
    align-items: center;
    padding: 8px;
    background: var(--text, #eaeaea);
    border-radius: 5px;
    .cameraHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      cursor: pointer;
    }
  }
  .HdRenderClass {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0px auto 15px auto;
    align-items: center;
    padding: 8px;
    background: var(--text, #eaeaea);
    border-radius: 5px;
    .cameraHeader {
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      cursor: pointer;
    }
  }
`;
