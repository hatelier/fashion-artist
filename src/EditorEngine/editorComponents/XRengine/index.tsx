// @ts-nocheck
import React from "react";
const XRengine = () => {
  return (
    <div style={{ height: "100vh", width: "100vw", background: "white" }}>
      <model-viewer
        src="./models/defaultCude.glb"
        alt="A rock"
        exposure="1"
        camera-controls
        ar
      ></model-viewer>
    </div>
  );
};

export default XRengine;
