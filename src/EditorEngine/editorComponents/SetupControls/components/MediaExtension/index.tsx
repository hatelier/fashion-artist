// @ts-nocheck
import { BiDotsVerticalRounded } from "react-icons/bi";
import React, { useState } from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { WhiteOnRed } from "../../Presets/SectionFive/CommentBox";
import { mediaDataJson } from "../../../Banner";
import { Slider } from "@mui/material";

const MediaExtension = () => {
  const [cameraProps, setCameraProps] = useState(mediaDataJson);
  const [mediaDropState, setMediaDropState] = useState(false);
  const [optDropState, setOptDropState] = useState({
    camera: false,
  });
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
                                setCameraProps((state) => {
                                  return {
                                    ...state,
                                    [key]: {
                                      ...state[key],
                                      value: e.target.value,
                                    },
                                  };
                                });
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
                            max={100}
                            onChange={(e) => {
                              setCameraProps((state) => {
                                return {
                                  ...state,
                                  [key]: {
                                    ...state[key],
                                    value: e.target.value,
                                  },
                                };
                              });
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
              >
                Reset to default values
              </WhiteOnRed>
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
