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
