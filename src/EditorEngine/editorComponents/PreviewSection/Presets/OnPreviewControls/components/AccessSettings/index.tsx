import React from "react";
import "./index.scss";
import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";
import { MenuItem, Select } from "@mui/material";
import { PiCaretDownBold } from "react-icons/pi";
import { SettingsDataJson } from "../../../../../Banner";
import { useDispatch, useSelector } from "react-redux";
import { updateSettingsBoolen } from "../../../../../../../redux/settingsPanel";
const AccessSettings = () => {
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
      {SettingsDataJson.map((dataVal, index) => {
        return (
          <label style={{ fontWeight: 500 }}>
            <p
              style={{
                margin: "20px 0 3px 0",
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
