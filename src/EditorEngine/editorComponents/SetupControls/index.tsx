// @ts-nocheck
import React from "react";
import "./index.scss";
import { BasicControls } from "../../PropsControls";
import SectionOne from "./Presets/SectionOne";

const SetupControls = (props: BasicControls) => {
    return (
      <div
        className={"setupControls"}
        style={{
          ...props.style,
        }}
      >
        <SectionOne context={props.context} settings={props.settings} />
      </div>
    );
};
SetupControls.defaultProps = {
    style: {},
};
export default SetupControls;
