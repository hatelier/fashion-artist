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

//dragables
import Draggable from "react-draggable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import {
  updateAmbientLight,
  updateDirLight,
} from "../../../../../redux/materialControl";

const OnPreviewControls = () => {
  const preImages = [Image1, Image2, Image3, Image4, Image5, Image6];
  const preRImages = [RImage1, RImage2, RImage3, RImage4];
  // redux states
  const ambientLight = useSelector(
    (state: any) => state.materialControl.ambientLight
  );
  const directionalLight = useSelector(
    (state: any) => state.materialControl.directionalLight
  );
  const dispatch = useDispatch();
  return (
    <div className={"OnPreviewControlsDiv"}>
      {/*  here is the drag test*/}
      <Draggable
        onStart={() => {
          console.log("drag drag");
        }}
        onStop={() => {
          console.log("drag stop");
        }}
        handle=".dragHeader"
      >
        <div className={"draggableComp"}>
          <div className={"dragHeader"}>
            <FontAwesomeIcon icon={faBars} style={{ cursor: "grabbing" }} />
            <p>Lighting</p>
            <FontAwesomeIcon icon={faXmarkCircle} />
          </div>

          {/*here is the main lighting component*/}
          <div className={"dragControls"}>
            <div>
              <p>Ambient Occlusion</p>
              <input
                type="range"
                min={1}
                max={10}
                defaultValue={ambientLight * 10}
                onChange={(e) => {
                  dispatch(updateAmbientLight(e.target.value));
                }}
              />
            </div>
            <input
              type={"text"}
              className={"inputDisplay"}
              placeholder={(ambientLight / 10).toString()}
            />
          </div>
          <div className={"dragControls"}>
            <div>
              <p>Directional light</p>
              <input
                type="range"
                min={1}
                max={100}
                defaultValue={directionalLight}
                onChange={(e) => {
                  dispatch(updateDirLight(e.target.value));
                }}
              />
            </div>
            <input
              type={"text"}
              className={"inputDisplay"}
              placeholder={directionalLight.toString()}
            />
          </div>
        </div>
      </Draggable>

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
