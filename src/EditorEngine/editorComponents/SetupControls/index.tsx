// @ts-nocheck
import React from "react";
import "./index.scss";
import { BasicControls } from "../../PropsControls";
import SectionOne from "./Presets/SectionOne";
import { useDispatch, useSelector } from "react-redux";
import { updateCurrConfigTab } from "../../../redux/routeManagement";
import SectionTwo from "./Presets/SectionTwo";
import SectionThree from "./Presets/SectionThree";
import SectionFour from "./Presets/SectionFour";

//image imports
import Image1 from "../../../assets/svgs/file (1).svg";
import Image2 from "../../../assets/svgs/dashboard.svg";
import Image3 from "../../../assets/svgs/dashboard-1.svg";
import Image4 from "../../../assets/svgs/cube 1.svg";
import Image5 from "../../../assets/svgs/note.svg";
import Image6 from "../../../assets/svgs/play-button-arrowhead 1.svg";
import Image7 from "../../../assets/svgs/download.svg";

const SetupControls = (props: BasicControls) => {
  const currentTab = useSelector(
    (state: any) => state.routeManagement.currConfigTab
  );
  const dispatch = useDispatch();
  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];
  const blockTopBar = useSelector(
    (state: any) => state.materialApplication.blockTopBar
  );
  const modelLoadRate = useSelector(
    (state: any) => state.materialApplication.modelLoadRate
  );
  return (
    <div
      className={"setupControls"}
      style={{
        ...props.style,
      }}
    >
      <div
        className={"buttonControl"}
        style={{
          display: "",
        }}
      >
        {[0, 1, 2, 3, 4, 5, 6].map((vls, index) => {
          return (
            <button
              onClick={() => {
                dispatch(updateCurrConfigTab(vls));
              }}
            >
              <img src={images[index]} />
            </button>
          );
        })}
      </div>
      <div
        className={"SectionControl"}
        style={{ display: currentTab === 0 ? "" : "none" }}
      >
        <SectionOne context={props.context} settings={props.settings} />
      </div>
      {modelLoadRate === 100 && (
        <>
          <div
            className={"SectionControl"}
            style={{ display: currentTab === 1 ? "" : "none" }}
          >
            <SectionTwo context={props.context} settings={props.settings} />
          </div>
          <div
            className={"SectionControl"}
            style={{ display: currentTab === 2 ? "" : "none" }}
          >
            <SectionThree />
          </div>
          <div
            className={"SectionControl"}
            style={{ display: currentTab === 3 ? "" : "none" }}
          >
            <SectionFour />
          </div>
        </>
      )}
    </div>
  );
};
SetupControls.defaultProps = {
  style: {},
};
export default SetupControls;
