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
import SectionFive from "./Presets/SectionFive";
import SectionSix from "./Presets/SectionSix";
import SectionSeven from "./Presets/SectionSeven";
import CodeGenerator from "./components/CodeGenerator";
import { updateCtrlPublishModal } from "../../../redux/materialApplication";

const SetupControls = (props: BasicControls) => {
  const currentTab = useSelector(
    (state: any) => state.routeManagement.currConfigTab
  );
  const dispatch = useDispatch();
  const controlPublishModal = useSelector(
    (state) => state.materialApplication.controlPublishModal
  );
  const images = [Image1, Image2, Image3, Image4, Image5, Image6, Image7];
  const modelLoadRate = useSelector(
    (state: any) => state.materialApplication.modelLoadRate
  );
  return (
    <div
      className={"setupControls"}
      style={{
        ...props.style,
        position: "relative",
        background: "#fafafa",
      }}
    >
      <div
        className={"buttonControl"}
        style={{
          // position: "absolute",
          zIndex: 2,
        }}
      >
        {[0, 1, 2, 3, 4, 5, 6].map((vls, index) => {
          return (
            <button
              style={{
                width: "35px",
                height: "35px",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                boxShadow:
                  currentTab === index
                    ? "0px 4px 10px 0px rgba(0, 0, 0, 0.1)"
                    : "",
              }}
              onClick={() => {
                dispatch(updateCurrConfigTab(vls));
              }}
            >
              <img src={images[index]} alt={"setupImg"} />
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
      {controlPublishModal && (
        <CodeGenerator
          onClose={() => {
            dispatch(updateCtrlPublishModal(false));
          }}
        />
      )}
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
          <div
            className={"SectionControl"}
            style={{ display: currentTab === 4 ? "" : "none" }}
          >
            <SectionFive />
          </div>
          <div
            className={"SectionControl"}
            style={{ display: currentTab === 5 ? "" : "none" }}
          >
            <SectionSix />
          </div>
          <div
            className={"SectionControl"}
            style={{ display: currentTab === 6 ? "" : "none" }}
          >
            <SectionSeven />
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
