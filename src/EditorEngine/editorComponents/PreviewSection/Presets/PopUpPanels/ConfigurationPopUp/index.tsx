import React from "react";
import "./index.scss";
import Draggable from "react-draggable";

const ConfigurationPopUp = () => {
  return (
    <Draggable>
      <div
        className={"configurationPopUp"}
        style={{
          background: "#000000",
          width: "100px",
          height: "100px",
        }}
      >
        <p>Test</p>
      </div>
    </Draggable>
  );
};
export default ConfigurationPopUp;
