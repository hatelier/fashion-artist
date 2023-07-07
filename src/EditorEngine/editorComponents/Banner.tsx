import React from "react";
import "../index.scss";
import MomentumXLogo from "../../assets/svgs/mtumx_long_logo.svg";
import MtumxLogo from "../../assets/pngs/mxlogo-2.png";
const Banner = () => {
  return (
    <div className={"bannerDiv"}>
      <img
        src={MtumxLogo}
        style={{
          width: "35px",
        }}
      />
    </div>
  );
};
export default Banner;
