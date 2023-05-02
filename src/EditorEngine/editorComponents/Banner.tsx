import React from "react";
import "../index.scss";
import MomentumXLogo from "../../assets/svgs/mtumx_long_logo.svg";

const Banner = () => {
  return (
    <div className={"bannerDiv"}>
      <img src={MomentumXLogo} />
    </div>
  );
};
export default Banner;
