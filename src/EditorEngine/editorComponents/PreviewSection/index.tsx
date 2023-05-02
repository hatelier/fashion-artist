import React from "react";
import "./index.scss";
import { BasicControls } from "../../PropsControls";

const PreviewSection = (props: BasicControls) => {
  return (
    <div
      className={"previewSection"}
      style={{
        ...props.style,
      }}
    >
      this here is the right section
    </div>
  );
};
PreviewSection.defaultProps = {
  style: {},
};
export default PreviewSection;
