import React, { useState } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const HybridLists = () => {
  return (
    <div className={"hybridList"}>
      <p>+ add point</p>
      <p>+ add fusion</p>
    </div>
  );
};

const CameraControls = () => {
  const [defSelected, setDefSelected] = useState(0);
  return (
    <div className={"cameraControlsPop"}>
      {["Hybrids", "Add points", "Add Fusion"].map((item, index) => {
        return (
          <>
            <p
              className={"mainPropControl"}
              onClick={() => {
                setDefSelected(index);
              }}
            >
              {item} &nbsp;&nbsp;
              <FontAwesomeIcon
                icon={index === defSelected ? faAngleUp : faAngleDown}
              />
            </p>
            {defSelected === 0 && index == 0 && <HybridLists />}
          </>
        );
      })}
    </div>
  );
};
export default CameraControls;
