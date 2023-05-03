import React from "react";
import "./index.scss";
import { Canvas } from "@react-three/fiber";

const ModelPreview = () => {
  return (
    <div className={"modelPreview"}>
      <Canvas
        style={{
          width: "100px",
          height: "100px",
        }}
      >
        <ambientLight intensity={1.2} />
        <color attach="background" args={["#000000"]} />
      </Canvas>
    </div>
  );
};
export default ModelPreview;
