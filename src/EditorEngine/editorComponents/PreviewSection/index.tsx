// @ts-nocheck
import React from "react";
import "./index.scss";
import { BasicControls } from "../../PropsControls";
import CreateBanner from "./Presets/CreateBanner";
import ModelPreview from "./Presets/ModelPreview";
import { ContextParams } from "../../index";

const PreviewSection = (props: BasicControls) => {
    return (
      <div
        className={"previewSection"}
        style={{
          ...props.style,
        }}
      >
        {/*<CreateBanner />*/}
        <ModelPreview context={props.context} settings={props.settings} />
      </div>
    );
};
PreviewSection.defaultProps = {
    style: {},
};
export default PreviewSection;
