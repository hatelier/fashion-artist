import React, {useState} from "react";
import "./index.scss";
// image imports
import Image1 from "../../../../../assets/svgs/OnPreviewAssets/Frame 14012.svg";
import Image2 from "../../../../../assets/svgs/OnPreviewAssets/Frame 14038.svg";
import Image3 from "../../../../../assets/svgs/OnPreviewAssets/Frame 14037.svg";
import Image4 from "../../../../../assets/svgs/OnPreviewAssets/text.svg";
import Image5 from "../../../../../assets/svgs/OnPreviewAssets/mountains.svg";
import Image6 from "../../../../../assets/svgs/OnPreviewAssets/camera.svg";

//images for the right side controls
import RImage1 from "../../../../../assets/svgs/OnPreviewAssets/Group 49.svg";
import RImage2 from "../../../../../assets/svgs/OnPreviewAssets/reload.svg";
import RImage3 from "../../../../../assets/svgs/OnPreviewAssets/3d (1) 1.svg";
import RImage4 from "../../../../../assets/svgs/OnPreviewAssets/settings.svg";

//dragables
import Draggable from "react-draggable";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBars, faXmarkCircle} from "@fortawesome/free-solid-svg-icons";
import {useDispatch, useSelector} from "react-redux";
import {updateAmbientLight, updateCameraProps, updateDirLight,} from "../../../../../redux/savedCameraControls";
import CameraControls, {CameraControlsDraggable, FusionControlComp,} from "../../EditorControls/CameraControls";
import LightControls, {LightControlDrag,} from "../../EditorControls/LightControls";
import OrthographicControls, {OrthographicCameraDrag} from "../../EditorControls/OrthographicControls";
import GraphicsControls from "../../EditorControls/GraphicsControls";

const OnPreviewControls = () => {
  const preImages = [Image1, Image2, Image3, Image4, Image5, Image6];
  const preRImages = [RImage1, RImage2, RImage3, RImage4];
  // redux states
  const ambientLight = useSelector(
    (state: any) => state.savedCameraControls.ambientLight
  );
  const directionalLight = useSelector(
    (state: any) => state.savedCameraControls.directionalLight
  );
  const { fov, x, y, z, zoom, tx, ty, tz } = useSelector(
    (state: any) => state.savedCameraControls.cameraProps
  );
  const dispatch = useDispatch();
  const [currSelection, setCurrSelection] = useState(3);
  //here is the lighting controls
  const LightingControl = () => {
    return (
      <Draggable
      // onStart={() => {
      //   console.log("drag drag");
      // }}
      // onStop={() => {
      //   console.log("drag stop");
      // }}
      // handle=".dragHeader"
      >
        <div className={"draggableComp"}>
          <div className={"dragHeader"}>
            <FontAwesomeIcon icon={faBars} style={{ cursor: "grabbing" }} />
            <p>Lighting</p>
            <FontAwesomeIcon icon={faXmarkCircle} />
          </div>

          {/*here is the target position */}
          <div className={"dragControls"}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <p>Target controls FOV</p>
              <input
                type="range"
                min={0}
                max={1}
                step={0.1}
                defaultValue={tx}
                onChange={(e) => {
                  dispatch(
                    updateCameraProps({
                      tx: e.target.value,
                    })
                  );
                }}
              />
              <input
                type="range"
                min={0}
                max={1}
                step={0.1}
                defaultValue={ty}
                onChange={(e) => {
                  dispatch(
                    updateCameraProps({
                      ty: e.target.value,
                    })
                  );
                }}
              />
              <input
                type="range"
                min={0}
                max={1}
                step={0.1}
                defaultValue={tz}
                onChange={(e) => {
                  dispatch(
                    updateCameraProps({
                      tz: e.target.value,
                    })
                  );
                }}
              />
            </div>
            <input
              type={"text"}
              className={"inputDisplay"}
              placeholder={`${tx} ${ty} ${tz}`}
            />
          </div>

          {/*this here is the camera positon controls*/}
          <div className={"dragControls"}>
            <div
              style={{ display: "flex", flexDirection: "column", gap: "12px" }}
            >
              <p>Position controls FOV</p>
              <input
                type="range"
                min={-100}
                max={100}
                defaultValue={x}
                onChange={(e) => {
                  dispatch(
                    updateCameraProps({
                      x: e.target.value,
                    })
                  );
                }}
              />
              <input
                type="range"
                min={-100}
                max={100}
                defaultValue={y}
                onChange={(e) => {
                  dispatch(
                    updateCameraProps({
                      y: e.target.value,
                    })
                  );
                }}
              />
              <input
                type="range"
                min={-100}
                max={100}
                defaultValue={z}
                onChange={(e) => {
                  dispatch(
                    updateCameraProps({
                      z: e.target.value,
                    })
                  );
                }}
              />
            </div>
            <input
              type={"text"}
              className={"inputDisplay"}
              placeholder={`${x} ${y} ${z}`}
            />
          </div>

          {/*camear FOV*/}
          <div className={"dragControls"}>
            <div>
              <p>Camera FOV</p>
              <input
                type="range"
                min={10}
                max={100}
                defaultValue={fov}
                onChange={(e) => {
                  // dispatch(
                  //   updateCameraProps({
                  //     fov: e.target.value,
                  //   })
                  // );
                }}
              />
            </div>
            <input
              type={"text"}
              className={"inputDisplay"}
              placeholder={fov.toString()}
            />
          </div>

          {/*  ambient occlusion settings*/}
          <div className={"dragControls"}>
            <div>
              <p>Ambient Occlusion</p>
              <input
                type="range"
                min={0}
                max={10}
                step={0.2}
                defaultValue={ambientLight}
                onChange={(e) => {
                  dispatch(updateAmbientLight(e.target.value));
                }}
              />
            </div>
            <input
              type={"text"}
              className={"inputDisplay"}
              placeholder={ambientLight.toString()}
            />
          </div>

          {/*  directional lighting settings*/}
          <div className={"dragControls"}>
            <div>
              <p>Directional light</p>
              <input
                type="range"
                min={1}
                max={100}
                defaultValue={directionalLight}
                onChange={(e) => {
                  dispatch(updateDirLight(e.target.value));
                }}
              />
            </div>
            <input
              type={"text"}
              className={"inputDisplay"}
              placeholder={directionalLight.toString()}
            />
          </div>
        </div>
      </Draggable>
    );
  };
  return (
    <div className={"OnPreviewControlsDiv"}>
      {/*  here is the drag test*/}

      {/*  here is the panel for lighting controls*/}
      {/*<LightingControl />*/}
      {/*<ConfigurationPopUp />*/}
      <CameraControlsDraggable />
        <FusionControlComp/>
        <LightControlDrag/>
        <OrthographicCameraDrag/>
      {/*these are the left side controls*/}
      <div className={"prevButtonControl"}>
        {preImages.map((img: any, index) => {
          return (
            <div className={"indiControls"}>
              <img
                src={img}
                style={{ width: "35px" }}
                onClick={() => {
                  setCurrSelection(index);
                }}
              />
              {currSelection == 0 && index === 0 && <CameraControls />}
              {currSelection == 1 && index === 1 && <LightControls />}
              {currSelection == 2 && index === 2 && <OrthographicControls />}
              {currSelection == 3 && index === 3 && <GraphicsControls />}
            </div>
          );
        })}
      </div>

      {/*these are the right side controls*/}
      <div className={"prevRButtonControl"}>
        {preRImages.map((img: any, index) => {
          return (
            <div style={{ width: "30px", cursor: "pointer" }}>
              <img src={img} style={{ width: "100%" }} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OnPreviewControls;

// {/*range control component test*/}
// {/*<RangeControls*/}
// {/*  name={"Ambient Occlusion"}*/}
// {/*  defValue={ambientLight}*/}
// {/*  min={0}*/}
// {/*  max={100}*/}
// {/*  step={1}*/}
// {/*  currentVal={ambientLight}*/}
// {/*  dispatchFunc={updateAmbientLight}*/}
// {/*/>*/}

// const RangeControls = (props: {
//   name: string;
//   defValue: number;
//   min: number;
//   max: number;
//   currentVal: number;
//   dispatchFunc: any;
//   step: number;
// }) => {
//   const [currentRefVal, setRefVal] = useState(props.defValue);
//   const refDispatch = useDispatch();
//   return (
//     <div className={"dragControls"}>
//       <div>
//         <p>{props.name}</p>
//         <input
//           type="range"
//           min={props.min}
//           max={props.max}
//           step={props.step}
//           defaultValue={props.defValue}
//           onChange={(e) => {
//             setRefVal(Number(e.target.value));
//             // refDispatch(props.dispatchFunc(e.target.value));
//           }}
//         />
//       </div>
//       <input
//         type={"text"}
//         className={"inputDisplay"}
//         placeholder={currentRefVal.toString()}
//       />
//     </div>
//   );
// };
