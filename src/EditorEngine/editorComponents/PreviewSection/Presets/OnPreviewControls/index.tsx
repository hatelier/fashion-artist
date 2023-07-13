// @ts-nocheck
import React, { useState } from "react";
import "./index.scss";

//images for the right side controls
import RImage1 from "../../../../../assets/svgs/AddText.svg";
import RImage2 from "../../../../../assets/svgs/OnPreviewAssets/reload.svg";
import RImage3 from "../../../../../assets/svgs/OnPreviewAssets/settings.svg";
import RImage4 from "../../../../../assets/svgs/AddSettings.svg";

//dragables
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { NumberLabelledInputMui } from "../../EditorControls/CameraControls";
import styled from "styled-components";
import { Box, CircularProgress, TextField } from "@mui/material";
import { SketchPicker } from "react-color";
import axios from "axios";
import { toast } from "react-hot-toast";
import { updateTextTrigger } from "../../../../../redux/materialApplication";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const OnPreviewControls = () => {
  // const preImages = [Image1, Image2, Image3, Image4, Image5, Image6];
  const preRImages = [RImage1, RImage2, RImage3, RImage4];
  // redux states
  // const ambientLight = useSelector(
  //   (state: any) => state.savedCameraControls.ambientLight
  // );
  // const directionalLight = useSelector(
  //   (state: any) => state.savedCameraControls.directionalLight
  // );
  // const { fov, x, y, z, zoom, tx, ty, tz } = useSelector(
  //   (state: any) => state.savedCameraControls.cameraProps
  // );
  // const dispatch = useDispatch();
  const [rightSelect, setRightSelect] = useState<null | number>(null);
  const headerListR = [
    "Customizable text",
    "Version History",
    "Settings",
    "Resources",
  ];
  //here is the lighting controls
  // const LightingControl = () => {
  //   return (
  //     <Draggable
  //     // onStart={() => {
  //     //   console.log("drag drag");
  //     // }}
  //     // onStop={() => {
  //     //   console.log("drag stop");
  //     // }}
  //     // handle=".dragHeader"
  //     >
  //       <div className={"draggableComp"}>
  //         <div className={"dragHeader"}>
  //           <FontAwesomeIcon icon={faBars} style={{ cursor: "grabbing" }} />
  //           <p>Lighting</p>
  //           <FontAwesomeIcon icon={faXmarkCircle} />
  //         </div>
  //
  //         {/*here is the target position */}
  //         <div className={"dragControls"}>
  //           <div
  //             style={{ display: "flex", flexDirection: "column", gap: "12px" }}
  //           >
  //             <p>Target controls FOV</p>
  //             <input
  //               type="range"
  //               min={0}
  //               max={1}
  //               step={0.1}
  //               defaultValue={tx}
  //               onChange={(e) => {
  //                 dispatch(
  //                   updateCameraProps({
  //                     tx: e.target.value,
  //                   })
  //                 );
  //               }}
  //             />
  //             <input
  //               type="range"
  //               min={0}
  //               max={1}
  //               step={0.1}
  //               defaultValue={ty}
  //               onChange={(e) => {
  //                 dispatch(
  //                   updateCameraProps({
  //                     ty: e.target.value,
  //                   })
  //                 );
  //               }}
  //             />
  //             <input
  //               type="range"
  //               min={0}
  //               max={1}
  //               step={0.1}
  //               defaultValue={tz}
  //               onChange={(e) => {
  //                 dispatch(
  //                   updateCameraProps({
  //                     tz: e.target.value,
  //                   })
  //                 );
  //               }}
  //             />
  //           </div>
  //           <input
  //             type={"text"}
  //             className={"inputDisplay"}
  //             placeholder={`${tx} ${ty} ${tz}`}
  //           />
  //         </div>
  //
  //         {/*this here is the camera positon controls*/}
  //         <div className={"dragControls"}>
  //           <div
  //             style={{ display: "flex", flexDirection: "column", gap: "12px" }}
  //           >
  //             <p>Position controls FOV</p>
  //             <input
  //               type="range"
  //               min={-100}
  //               max={100}
  //               defaultValue={x}
  //               onChange={(e) => {
  //                 dispatch(
  //                   updateCameraProps({
  //                     x: e.target.value,
  //                   })
  //                 );
  //               }}
  //             />
  //             <input
  //               type="range"
  //               min={-100}
  //               max={100}
  //               defaultValue={y}
  //               onChange={(e) => {
  //                 dispatch(
  //                   updateCameraProps({
  //                     y: e.target.value,
  //                   })
  //                 );
  //               }}
  //             />
  //             <input
  //               type="range"
  //               min={-100}
  //               max={100}
  //               defaultValue={z}
  //               onChange={(e) => {
  //                 dispatch(
  //                   updateCameraProps({
  //                     z: e.target.value,
  //                   })
  //                 );
  //               }}
  //             />
  //           </div>
  //           <input
  //             type={"text"}
  //             className={"inputDisplay"}
  //             placeholder={`${x} ${y} ${z}`}
  //           />
  //         </div>
  //
  //         {/*camear FOV*/}
  //         <div className={"dragControls"}>
  //           <div>
  //             <p>Camera FOV</p>
  //             <input
  //               type="range"
  //               min={10}
  //               max={100}
  //               defaultValue={fov}
  //               onChange={(e) => {
  //                 // dispatch(
  //                 //   updateCameraProps({
  //                 //     fov: e.target.value,
  //                 //   })
  //                 // );
  //               }}
  //             />
  //           </div>
  //           <input
  //             type={"text"}
  //             className={"inputDisplay"}
  //             placeholder={fov.toString()}
  //           />
  //         </div>
  //
  //         {/*  ambient occlusion settings*/}
  //         <div className={"dragControls"}>
  //           <div>
  //             <p>Ambient Occlusion</p>
  //             <input
  //               type="range"
  //               min={0}
  //               max={10}
  //               step={0.2}
  //               defaultValue={ambientLight}
  //               onChange={(e) => {
  //                 dispatch(updateAmbientLight(e.target.value));
  //               }}
  //             />
  //           </div>
  //           <input
  //             type={"text"}
  //             className={"inputDisplay"}
  //             placeholder={ambientLight.toString()}
  //           />
  //         </div>
  //
  //         {/*  directional lighting settings*/}
  //         <div className={"dragControls"}>
  //           <div>
  //             <p>Directional light</p>
  //             <input
  //               type="range"
  //               min={1}
  //               max={100}
  //               defaultValue={directionalLight}
  //               onChange={(e) => {
  //                 dispatch(updateDirLight(e.target.value));
  //               }}
  //             />
  //           </div>
  //           <input
  //             type={"text"}
  //             className={"inputDisplay"}
  //             placeholder={directionalLight.toString()}
  //           />
  //         </div>
  //       </div>
  //     </Draggable>
  //   );
  // };
  return (
    <div className={"OnPreviewControlsDiv"}>
      {/*  here is the drag test*/}

      {/*  here is the panel for lighting controls*/}
      {/*<LightingControl />*/}
      {/*<ConfigurationPopUp />*/}

      {/*<CameraControlsDraggable />*/}
      {/*<FusionControlComp />*/}
      {/*<LightControlDrag />*/}
      {/*<OrthographicCameraDrag />*/}
      {/*<GraphicsControlsDrag />*/}
      {/*<PerformanceControlsDrag />*/}
      {/*<SceneControlsDrag />*/}

      {/*these are the left side controls*/}
      {/*<div className={"prevButtonControl"}>*/}
      {/*  {preImages.map((img: any, index) => {*/}
      {/*    return (*/}
      {/*      <div className={"indiControls"}>*/}
      {/*        <img*/}
      {/*          src={img}*/}
      {/*          style={{ width: "35px" }}*/}
      {/*          onClick={() => {*/}
      {/*            setCurrSelection(index);*/}
      {/*          }}*/}
      {/*        />*/}
      {/*        {currSelection == 0 && index === 0 && <CameraControls />}*/}
      {/*        {currSelection == 1 && index === 1 && <LightControls />}*/}
      {/*        {currSelection == 2 && index === 2 && <OrthographicControls />}*/}
      {/*        {currSelection == 3 && index === 3 && <GraphicsControls />}*/}
      {/*      </div>*/}
      {/*    );*/}
      {/*  })}*/}
      {/*</div>*/}

      {/*these are the right side controls*/}
      <div className={"prevRButtonControl"}>
        {preRImages.map((img: any, index) => {
          return (
            <img
              alt={"logoImg"}
              src={img}
              style={{
                width: index === 3 ? "86%" : "100%",
                filter: "invert(1)",
                cursor: "pointer",
              }}
              onClick={() => {
                setRightSelect(index);
              }}
            />
          );
        })}
      </div>
      {rightSelect !== null && (
        <SideBarDiv>
          <Changebar>
            {preRImages.map((img: any, index) => {
              return (
                <img
                  src={img}
                  alt={"logoImg"}
                  style={{
                    width: index === 3 ? "51%" : "65%",
                    filter: `invert(${index === rightSelect ? 0.3 : 1})`,
                  }}
                  onClick={() => {
                    setRightSelect(index);
                  }}
                />
              );
            })}
          </Changebar>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p style={{ fontSize: "14px" }}>{headerListR[rightSelect]}</p>
            <p
              style={{ fontSize: "14px", cursor: "pointer" }}
              onClick={() => {
                setRightSelect(null);
              }}
            >
              -
            </p>
          </div>
          <hr
            style={{
              marginTop: "10px",
              color: "#F0F0F0",
            }}
          />
          <div style={{ height: "680px", overflowX: "hidden", overflowY: "" }}>
            {rightSelect === 0 && <AddTextComp />}
          </div>
        </SideBarDiv>
      )}
    </div>
  );
};
const AddTextComp = () => {
  const [currentColor, setCurrentColor] = useState("#ffffff");
  const { userID, projectID } = useSelector(
    (state: any) => state.accountManagement
  );
  const [loaderState, setLoaderState] = useState(false);
  const textMeshArr = useSelector(
    (state) => state.materialApplication.textMeshArr
  );
  const [pickerControl, setPickerControl] = useState(false);
  const dispatch = useDispatch();
  return (
    <form
      style={{
        marginTop: "20px",
      }}
      onSubmit={(e) => {
        e.preventDefault();
        const reqData = {
          userId: userID,
          projectId: projectID,
          textContent: e.target.textContent.value,
          textColor: currentColor,
          textSize: e.target.textSize.value / 10,
          position: {
            x: e.target.x.value,
            y: e.target.y.value,
            z: e.target.z.value,
          },
          rotation: {
            x: e.target.X.value,
            y: e.target.Y.value,
            z: e.target.Z.value,
          },
          cameraLock: e.target.cameraLock.checked,
        };
        setLoaderState(true);
        axios
          .post("/manage/addtext", reqData)
          .then((res) => {
            setLoaderState(false);
            dispatch(updateTextTrigger());
          })
          .catch((err) => {
            console.log(err);
            toast.error(err);
          });
      }}
    >
      <TextField
        variant="outlined"
        size="small"
        id="filled-size-small"
        label={"Content"}
        name={"textContent"}
        required={true}
        inputProps={{
          style: {
            fontSize: "11px",
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: "11px",
          },
        }}
      />
      <div
        style={{
          height: "31px",
          width: "79px",
          background: `${currentColor}`,
          borderRadius: "10px",
          marginTop: "15px",
          border: "1px solid #000000",
          cursor: "pointer",
        }}
        onClick={() => {
          setPickerControl((state) => !state);
        }}
      ></div>
      <div style={{ marginTop: "10px" }}></div>
      {pickerControl && (
        <SketchPicker
          color={currentColor}
          onChangeComplete={(color) => {
            setCurrentColor(color.hex);
          }}
          width={"170px"}
        />
      )}
      <div style={{ marginTop: "20px" }}></div>
      <TextField
        variant="outlined"
        size="small"
        id="filled-size-small"
        label={"Size"}
        required={true}
        type={"number"}
        name={"textSize"}
        inputProps={{
          style: {
            fontSize: "11px",
          },
        }}
        InputLabelProps={{
          style: {
            fontSize: "11px",
          },
        }}
      />
      {/*  here is the position tab*/}
      <div style={{ marginTop: "14px" }}>
        <p style={{ marginBottom: "10px" }}>Position</p>
        <div
          style={{
            display: "flex",
            gap: "4px",
          }}
        >
          {["x", "y", "z"].map((posi) => {
            return (
              <NumberLabelledInputMui
                label={posi}
                width={"63px"}
                defaultVal={0}
                required={true}
              />
            );
          })}
        </div>
      </div>

      {/*  here is the rotation tab*/}
      <div style={{ marginTop: "14px" }}>
        <p style={{ marginBottom: "10px" }}>Rotation</p>
        <div
          style={{
            display: "flex",
            gap: "4px",
          }}
        >
          {["X", "Y", "Z"].map((posi) => {
            return (
              <NumberLabelledInputMui
                label={posi}
                width={"63px"}
                defaultVal={0}
                required={true}
              />
            );
          })}
        </div>
      </div>

      <div style={{ marginTop: "7px" }}>
        <label style={{ fontSize: "11px", fontWeight: 400 }}>
          <input type={"checkbox"} name={"cameraLock"} />
          &nbsp; lock camera position
        </label>
      </div>
      {!loaderState ? (
        <RoundedButton type={"submit"}>Create</RoundedButton>
      ) : (
        <Box sx={{ display: "flex" }}>
          <CircularProgress size={"30px"} />
        </Box>
      )}

      {/*text control*/}
      <div style={{ marginTop: "10px" }}>
        {textMeshArr.map((textCn) => {
          return (
            <div
              style={{
                display: "flex",
                width: "100%",
                justifyContent: "space-between",
                paddingRight: "10px",
                marginBottom: "5px",
              }}
            >
              <p>{textCn.name.substring(0, 15)}</p>
              <FontAwesomeIcon
                icon={faTrash}
                style={{
                  fontSize: "10px",
                  color: "#ef0101",
                }}
                onClick={() => {
                  axios
                    .delete("/manage/addtext", {
                      params: {
                        userId: userID,
                        projectId: projectID,
                        textid: textCn.id,
                      },
                    })
                    .then((res) => {
                      dispatch(updateTextTrigger());
                    });
                }}
              />
            </div>
          );
        })}
      </div>
    </form>
  );
};
export const RoundedButton = styled.button`
  width: Hug (67px);
  height: Hug (25px);
  padding: 6px 16px 6px 16px;
  border-radius: 16px;
  border: 0.5px;
  gap: 10px;
  background: linear-gradient(0deg, #d31027, #d31027),
    linear-gradient(0deg, rgba(255, 255, 255, 0.3), rgba(255, 255, 255, 0.3));
  color: #ffffff;
  margin-top: 10px;
`;
//styled components
const SideBarDiv = styled.div`
  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  width: 242px;
  height: 750px;
  border-radius: 0 0 0 20px;
  background: #ffffff;
  top: 0;
  right: 0;
  position: absolute;
  animation: fadeIn 0.5s;
  padding: 20px;
`;
const Changebar = styled.div`
  width: 41px;
  height: 172px;
  background: #ffffff;
  position: absolute;
  left: -41px;
  border-radius: 10px 0 0 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  top: 0px;
`;
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
