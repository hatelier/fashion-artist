import React from "react";
import "../index.scss";
import MtumxLogo from "../../assets/pngs/mxlogo-2.png";
const Banner = () => {
  return (
    <div className={"bannerDiv"}>
      <img
        src={MtumxLogo}
        style={{
          width: "35px",
        }}
        alt={"mtumxMain"}
      />
    </div>
  );
};

export const mediaDataJson = {
  fov: { value: 0, type: "def", name: "Field of view" },
  intHor: { value: 0, type: "def", name: "Initial horizontal angle" },
  horRan: { value: [0, 30], type: "mul", name: "Horizontal range" },
  initVangle: { value: 0, type: "def", name: "Initial vertical angle" },
  vertAngle: { value: [0, 30], type: "mul", name: "Vertical range" },
  rotSpeed: { value: 0, type: "def", name: "Rotation speed" },
  rotInert: { value: 0, type: "def", name: "Rotation Inertia" },
  autoRotSpeed: { value: 0, type: "def", name: "Auto rotation speed" },
  initZoom: { value: 0, type: "def", name: "Initial zoom" },
  zoomSpeed: { value: 0, type: "def", name: "Zoom speed" },
  zoomRange: { value: [0, 30], type: "mul", name: "Zoom range" },
};

export const SettingsDataJson = [
  {
    name: "Upload Unit",
    options: ["Meters", "Millimeters", "Centimeters"],
    default: 1,
  },
  {
    name: "Projection Mode",
    options: ["Perspective", "Orthographic"],
    default: 0,
  },
  {
    name: "Quality Present",
    options: ["Performance", "Quality"],
    default: 1,
  },
];
export default Banner;
