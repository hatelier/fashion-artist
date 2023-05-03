import React from "react";
import "./index.scss";
import { BasicControls } from "../../PropsControls";
import CreateBanner from "./Presets/CreateBanner";
import ModelPreview from "./Presets/ModelPreview";

const PreviewSection = (props: BasicControls) => {
  return (
    <div
      className={"previewSection"}
      style={{
        ...props.style,
      }}
    >
      <CreateBanner />
      <ModelPreview />
    </div>
  );
};
PreviewSection.defaultProps = {
  style: {},
};
export default PreviewSection;
