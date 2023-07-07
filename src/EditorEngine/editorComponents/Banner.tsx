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
export default Banner;
