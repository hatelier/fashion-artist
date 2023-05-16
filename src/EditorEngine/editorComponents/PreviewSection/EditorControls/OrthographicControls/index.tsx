import React, { useState } from "react";
import "./index.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown, faAngleUp } from "@fortawesome/free-solid-svg-icons";

const OrthographicControls = () => {
  const cameraPoss = ["Side", "Front", "Top", "add camera position"];
  // here is the use state defined
  const [toggleState, setToggleState] = useState(false);
  return (
    <div className={"orthoControlPop"}>
      <p
        className={"headerPop"}
        onClick={() => {
          setToggleState((state) => !state);
        }}
      >
        Camera positions &nbsp; &nbsp;
        <FontAwesomeIcon icon={toggleState ? faAngleUp : faAngleDown} />
      </p>
      <div className={"hybridList"}>
        {toggleState &&
          cameraPoss.map((item, index) => {
            if (index === 3) return <p>+ {item}</p>;
            return <p>- &nbsp;{item}</p>;
          })}
      </div>
    </div>
  );
};
export default OrthographicControls;
