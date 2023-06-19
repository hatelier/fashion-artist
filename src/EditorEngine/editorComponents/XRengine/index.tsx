// @ts-nocheck
import React, { useState } from "react";
import "./index.scss";
const XRengine = () => {
  const modelRef = React.useRef();
  const [annots, setAnnots] = useState([]);

  const getDataPosition = (annot) => {
    return `${annot.position.x} ${annot.position.y} ${annot.position.z}`;
  };

  const getDataNormal = (annot) => {
    return `${annot.normal.x} ${annot.normal.y} ${annot.normal.z}`;
  };

  return (
    <model-viewer
      // className="model-viewer"
      src="/models/mtumxBlnd2.glb"
      alt="A rock"
      exposure="1"
      camera-controls
      ar
      // ar-modes="webxr"
      ref={(ref) => {
        modelRef.current = ref;
      }}
    >
      <button slot="ar-button" id="ar-button">
        View in your space
      </button>
    </model-viewer>
  );
};

export default XRengine;
