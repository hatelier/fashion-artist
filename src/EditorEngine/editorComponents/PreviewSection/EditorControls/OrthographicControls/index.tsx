//OrthographicControls/index.tsx
import React, {useState} from "react";
import "./index.scss";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAngleDown, faAngleUp, faX} from "@fortawesome/free-solid-svg-icons";
import Draggable from "react-draggable";
import {useDispatch} from "react-redux";
import {updateCameraProps} from "../../../../../redux/savedCameraControls";

const OrthographicControls = () => {
    const cameraPoss = ["Side", "Front", "Top", "add camera position"];
    // here is the use state defined
    const [toggleState, setToggleState] = useState(false);
    const dispatch = useDispatch();
    return (
        <div className={"orthoControlPop"}>
            <p
                className={"headerPop"}
                onClick={() => {
                    setToggleState((state) => !state);
                }}
            >
                Camera positions &nbsp; &nbsp;
                <FontAwesomeIcon icon={toggleState ? faAngleUp : faAngleDown}/>
            </p>
            <div className={"hybridList"}>
                {toggleState &&
                    cameraPoss.map((item, index) => {
                        if (index === 3) return <p
                        >+ {item}</p>;
                        return <p
                            onClick={() => {
                                if (index === 0) {
                                    dispatch(updateCameraProps({x: 10, y: 0, z: 0}))
                                } else if (index === 1) {
                                    dispatch(updateCameraProps({x: 0, y: 0, z: 10}))
                                } else if (index === 2) {
                                    dispatch(updateCameraProps({x: 0, y: 10, z: 0}))
                                }
                            }}
                        >- &nbsp;{item}</p>;
                    })}
            </div>
        </div>
    );
};
export const OrthographicCameraDrag = () => {
    return (
        <Draggable>
            <div className={"orthoCameraDrag"}>
                <div style={{display: "flex", justifyContent: "space-between"}}>
                    <p style={{fontFamily: "NHbold"}}>Camera Position</p>
                    <FontAwesomeIcon icon={faX}/>
                </div>
                <p style={{marginTop: "14.5px", fontSize: "11px"}}>
                    Orient and zoom-in as desired, ”update camera position” to save
                    position
                </p>
                <div
                    style={{
                        marginTop: "10px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "5px",
                    }}
                >
                    <p style={{fontSize: "9px"}}>Name of position</p>
                    <input
                        type={"text"}
                        style={{
                            background: "#FFFFFF",
                            border: "0.5px solid #D8D8D8",
                            borderRadius: "5px",
                            width: "170px",
                            height: "26px",
                            fontSize: "11px",
                            fontFamily: "NHmed",
                        }}
                    />
                </div>
                {/*  button controls*/}
                <div
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginTop: "13px",
                    }}
                >
                    <button className={"saveButton"}>Update</button>
                    <button className={"redButtonClass"}>Remove</button>
                </div>
            </div>
        </Draggable>
    );
};
export default OrthographicControls;
