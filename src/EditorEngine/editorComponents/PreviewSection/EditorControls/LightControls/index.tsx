import React, { useState } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const LightControls = () => {
  let lightTypes = ["Directional", "Spot", "Point", "Ambient", "Rect Area"];
  const [toggleState, setToggleState] = useState(false);
  return (
    <div className={"lightControlPop"}>
      <p
        className={"headerPop"}
        onClick={() => {
          setToggleState((state) => !state);
        }}
      >
        Add light &nbsp;&nbsp;
        <FontAwesomeIcon icon={toggleState ? faAngleUp : faAngleDown} />
      </p>
      <div className={"hybridList"}>
        {toggleState &&
          lightTypes.map((item, index) => {
            return <p>{item}</p>;
          })}
      </div>
    </div>
  );
};
export default LightControls;
