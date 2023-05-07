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

const SetupControls = (props: BasicControls) => {
  const currentTab = useSelector(
    (state: any) => state.routeManagement.currConfigTab
  );
  const dispatch = useDispatch();
  return (
    <div
      className={"setupControls"}
      style={{
        ...props.style,
      }}
    >
      {[0, 1, 2, 3, 4, 5, 6].map((vls, index) => {
        return (
          <button
            onClick={() => {
              dispatch(updateCurrConfigTab(vls));
            }}
          >
            {vls}
          </button>
        );
      })}
      <hr />
      <div style={{ display: currentTab === 0 ? "" : "none" }}>
        <SectionOne context={props.context} settings={props.settings} />
      </div>
      <div style={{ display: currentTab === 1 ? "" : "none" }}>
        <SectionTwo context={props.context} settings={props.settings} />
      </div>
      <div style={{ display: currentTab === 2 ? "" : "none" }}>
        <SectionThree />
      </div>
      <div style={{ display: currentTab === 3 ? "" : "none" }}>
        <SectionFour />
      </div>
    </div>
  );
};
SetupControls.defaultProps = {
  style: {},
};
export default SetupControls;
