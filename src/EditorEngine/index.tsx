import React from "react";
import "./index.scss";
import Banner from "./editorComponents/Banner";
import SetupControls from "./editorComponents/SetupControls";
import PreviewSection from "./editorComponents/PreviewSection";

const EditorEngine = () => {
  return (
    <div className={"editorEngine"}>
      <Banner />
      <div className={"editorSection"}>
        <SetupControls
          style={{ width: "15vw", height: "calc(100vh - 70px)" }}
        />
        <PreviewSection style={{ width: "85vw" }} />
      </div>
    </div>
  );
};
export default EditorEngine;
