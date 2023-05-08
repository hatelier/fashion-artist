import React from "react";
import "./index.scss";
// image imports
import Image1 from "../../../../../assets/svgs/OnPreviewAssets/Frame 14012.svg";
import Image2 from "../../../../../assets/svgs/OnPreviewAssets/Frame 14038.svg";
import Image3 from "../../../../../assets/svgs/OnPreviewAssets/Frame 14037.svg";
import Image4 from "../../../../../assets/svgs/OnPreviewAssets/text.svg";
import Image5 from "../../../../../assets/svgs/OnPreviewAssets/mountains.svg";
import Image6 from "../../../../../assets/svgs/OnPreviewAssets/camera.svg";

//images for the right side controls
import RImage1 from "../../../../../assets/svgs/OnPreviewAssets/Group 49.svg";
import RImage2 from "../../../../../assets/svgs/OnPreviewAssets/reload.svg";
import RImage3 from "../../../../../assets/svgs/OnPreviewAssets/3d (1) 1.svg";
import RImage4 from "../../../../../assets/svgs/OnPreviewAssets/settings.svg";

const OnPreviewControls = () => {
  const preImages = [Image1, Image2, Image3, Image4, Image5, Image6];
  const preRImages = [RImage1, RImage2, RImage3, RImage4];
  return (
    <div className={"OnPreviewControlsDiv"}>
      {/*these are the left side controls*/}
      <div className={"prevButtonControl"}>
        {preImages.map((img: any, index) => {
          return (
            <div style={{ width: "36px", cursor: "pointer" }}>
              <img src={img} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>

      {/*these are the right side controls*/}
      <div className={"prevRButtonControl"}>
        {preRImages.map((img: any, index) => {
          return (
            <div style={{ width: "30px", cursor: "pointer" }}>
              <img src={img} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OnPreviewControls;
