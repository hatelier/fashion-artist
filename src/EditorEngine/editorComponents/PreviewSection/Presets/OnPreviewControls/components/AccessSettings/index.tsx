// @ts-nocheck
import React, { useState } from "react";
import "./index.scss";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { MenuItem, Select, Slider } from "@mui/material";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";
import { SettingsDataJson } from "../../../../../Banner";
import { useDispatch, useSelector } from "react-redux";
import { updateSettingsBoolen } from "../../../../../../../redux/settingsPanel";
import AddPlace from "../../../../../../../assets/svgs/sectionFour/addPic.svg";
import { SketchPicker } from "react-color";
const AccessSettings = () => {
  const [enviControl, setEnviControl] = useState(false);
  const [currentColor, setCurrentColor] = useState("#ffffff");
  const [clickControl, setClickControl] = useState(false);
  const [environState, setEnvironState] = useState({
    intensity: {
      name: "Intensity",
      value: 100,
    },
    shadowStrngt: {
      name: "Shadow Strength",
      value: 100,
    },
    shadowSoft: {
      name: "Shadow Softness",
      value: 100,
    },
    lightExpose: {
      name: "Light Exposure",
      value: 100,
    },
  });
  const materialList = useSelector(
    (state: any) => state.materialControl.materialArray
  );
  const { dimensions, wireframe, axis, polycount, uvmap, toggleLights } =
    useSelector((state: any) => state.settingsPanel);
  const dispatch = useDispatch();
  function triggerFunction(name: string, state: boolean) {
    if (name === "3D Dimensions") {
      dispatch(updateSettingsBoolen("dimensions"));
    }
    if (name === "Wireframe") {
      if (state) {
        materialList.forEach((vls: any) => {
          vls.material.wireframe = true;
        });
        dispatch(updateSettingsBoolen("wireframe"));
      } else {
        materialList.forEach((vls: any) => {
          vls.material.wireframe = false;
        });
        dispatch(updateSettingsBoolen("wireframe"));
      }
    }
    if (name === "Axis") {
      dispatch(updateSettingsBoolen("axis"));
    }
    if (name === "Polycount") {
      dispatch(updateSettingsBoolen("polycount"));
    }
    if (name === "Toggie lights") {
      dispatch(updateSettingsBoolen("toggleLights"));
    }
  }
  return (
    <div style={{ width: "100%" }}>
      {[
        "3D Dimensions",
        "Wireframe",
        "Axis",
        "Polycount",
        "UV Map",
        "Toggie lights",
      ].map((settType, index) => {
        return (
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginTop: "15px",
            }}
          >
            <p style={{ fontSize: "13px", fontWeight: 500 }}>{settType}</p>{" "}
            <SettingToggleSwitch
              onChange={(e) => {
                triggerFunction(settType, e.target.checked);
              }}
              checked={
                index === 0
                  ? dimensions
                  : index === 1
                  ? wireframe
                  : index === 2
                  ? axis
                  : index === 3
                  ? polycount
                  : index === 4
                  ? uvmap
                  : index === 5
                  ? toggleLights
                  : false
              }
            />
          </div>
        );
      })}

      {/*here is the environment lighting settings*/}
      <EnvironmentButton>
        <div
          className={"envDivider"}
          onClick={() => {
            setEnviControl((state) => !state);
          }}
        >
          <p className={"envHeader"}>Environment Lighting</p>
          {enviControl ? <PiCaretUpBold /> : <PiCaretDownBold />}
        </div>
        {enviControl && (
          <>
            <div
              className={""}
              style={{ marginTop: "10px", animation: "fadeIn 0.5s" }}
            >
              <p style={{ fontWeight: 450 }}>HDRI</p>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "5px",
                }}
              >
                <img
                  style={{
                    width: "46px",
                    height: "46px",
                    borderRadius: "10px",
                  }}
                  onClick={() => {}}
                  alt={""}
                  src={AddPlace}
                ></img>
                &nbsp; &nbsp;
                <div
                  style={{
                    height: "31px",
                    width: "71px",
                    background: `${currentColor}`,
                    borderRadius: "10px",
                    border: "2px solid #878787",
                  }}
                  onClick={() => {
                    setClickControl((state) => !state);
                  }}
                ></div>
                &nbsp; &nbsp;
              </div>
              <div style={{ marginTop: "10px" }}></div>
              {clickControl && (
                <div style={{ marginLeft: "5px" }}>
                  <SketchPicker
                    width={"85%"}
                    color={currentColor}
                    onChangeComplete={(color) => {
                      setCurrentColor(color.hex);
                    }}
                  />
                </div>
              )}
            </div>
            <div style={{ animation: "fadeIn 1s" }}>
              {Object.keys(environState).map((key) => {
                const setting = environState[key];
                return (
                  <div style={{ marginTop: "9px" }}>
                    <p style={{ fontWeight: 450 }}>{setting.name}</p>
                    <div
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Slider
                        size="small"
                        value={setting.value}
                        aria-label="Small"
                        max={100}
                        onChange={(e) => {
                          setEnvironState((state) => {
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
                          width: "50%",
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
                        value={setting.value}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </>
        )}
      </EnvironmentButton>
      {SettingsDataJson.map((dataVal, index) => {
        return (
          <label style={{ fontWeight: 500 }}>
            <p
              style={{
                margin: "0px 0 3px 0",
              }}
            >
              {dataVal.name}
            </p>
            <Select
              defaultValue={dataVal.options[dataVal.default]}
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
              {dataVal.options.map((mappOpts) => {
                return <MenuItem value={mappOpts}>{mappOpts}</MenuItem>;
              })}
            </Select>
          </label>
        );
      })}
    </div>
  );
};
export default AccessSettings;
const EnvironmentButton = styled("div")`
  width: 100%;
  margin: 10px 0;
  .envDivider {
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 32px;
    cursor: pointer;
    .envHeader {
      font-weight: 500;
    }
  }
`;
const SettingToggleSwitch = styled(Switch)(({ theme }) => ({
  width: 28,
  height: 16,
  padding: 0,
  display: "flex",
  "&:active": {
    "& .MuiSwitch-thumb": {
      width: 15,
    },
    "& .MuiSwitch-switchBase.Mui-checked": {
      transform: "translateX(9px)",
    },
  },
  "& .MuiSwitch-switchBase": {
    padding: 2,
    "&.Mui-checked": {
      transform: "translateX(12px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        opacity: 1,
        backgroundColor: theme.palette.mode === "dark" ? "#177ddc" : "#000000",
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxShadow: "0 2px 4px 0 rgb(0 35 11 / 20%)",
    width: 12,
    height: 12,
    borderRadius: 6,
    transition: theme.transitions.create(["width"], {
      duration: 200,
    }),
  },
  "& .MuiSwitch-track": {
    borderRadius: 16 / 2,
    opacity: 1,
    backgroundColor:
      theme.palette.mode === "dark"
        ? "rgba(255,255,255,.35)"
        : "rgba(0,0,0,.25)",
    boxSizing: "border-box",
  },
}));
