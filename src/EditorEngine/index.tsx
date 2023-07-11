// @ts-nocheck
import React, { createContext, useState } from "react";
import "./index.scss";
import Banner from "./editorComponents/Banner";
import SetupControls from "./editorComponents/SetupControls";
import PreviewSection from "./editorComponents/PreviewSection";

export interface ContextInterface {
  file: any;
}

export const ContextParams = createContext<ContextInterface>({
  file: null,
  dimensions: {
    x: 0,
    y: 0,
    z: 0,
  },
  modelObjects: [],
});
const EditorEngine = () => {
  //   here is the main created context
  const [defaultContext, setDefContext] = useState<ContextInterface>({
    file: null,
    dimensions: {
      x: 0,
      y: 0,
      z: 0,
    },
    modelObjects: [],
  });

  return (
    <ContextParams.Provider value={defaultContext}>
      <div className={"editorEngine"}>
        <Banner />
        <div className={"editorSection"}>
          <SetupControls
            style={{
              width: "330px",
              height: "calc(100vh - 72px)",
              boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
              zIndex: 10,
            }}
            context={ContextParams}
            settings={setDefContext}
          />
          <PreviewSection
            style={{ width: "100vw" }}
            context={ContextParams}
            settings={setDefContext}
          />
        </div>
      </div>
    </ContextParams.Provider>
  );
};
export default EditorEngine;
