// @ts-nocheck
import "./index.scss";
// image imports
import addPic from "../../../../../../../assets/svgs/sectionFour/addPic.svg";
import { Slider } from "@mui/material";
import React, { useState } from "react";
import { LabelledInputMui } from "../../../../../PreviewSection/EditorControls/CameraControls";
import {
  InvisibleFileUploader,
  LabelCentered,
  MedFontText11,
  RedButtonClass,
  WhiteButtonClass
} from "../../../../../../StyledComponents";
import Draggable from "react-draggable";
import { TextureLoader } from "three";
import { useSelector } from "react-redux";
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

const AddMaterialPopUp = () => {
  const [imageStatus, setImageStatus] = useState({
    map: addPic,
    roughnessMap: addPic,
    normalMap: addPic,
    aoMap: addPic
  });
  const [materialStatus, setMaterialStatus] = useState({
    map: null,
    roughnessMap: null,
    normalMap: null,
    aoMap: null,
  });
  // here is the function that creates the preview.
  const materialArray = useSelector(
    (state) => state.materialControl.materialArray
  );
  const FileToURL = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const textured = new TextureLoader().load(reader.result as string);
      setMaterialStatus((state) => {
        return {
          ...state,
          [`${e.target.name}`]: textured,
        };
      });
      setImageStatus((state) => {
        return {
          ...state,
          [`${e.target.name}`]: reader.result,
        };
      });
    };
  };

  function getImageDataURL(image) {
    let canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;

    let ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);

    return canvas.toDataURL();
  }

  function dataURLtoBlob(dataurl) {
    let arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }

  return (
    <Draggable handle={".addHeader"}>
      <form
        className={"addMaterialPopUp"}
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        {/*here are the input forms*/}
        <InvisibleFileUploader
          type={"file"}
          name={"map"}
          className={"map"}
          onChange={FileToURL}
        />
        <InvisibleFileUploader
          type={"file"}
          name={"roughnessMap"}
          className={"roughnessMap"}
          onChange={FileToURL}
        />
        <InvisibleFileUploader
          type={"file"}
          name={"normalMap"}
          className={"normalMap"}
          onChange={FileToURL}
        />
        <InvisibleFileUploader
          type={"file"}
          name={"aoMap"}
          className={"aoMap"}
          onChange={FileToURL}
        />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <p
            style={{ fontSize: "11px", fontWeight: 600 }}
            className={"addHeader"}
          >
            Material
          </p>
          <FontAwesomeIcon icon={faXmark} />
        </div>
        <div style={{ marginTop: "10px" }}>
          <p style={{ fontSize: "11px", fontWeight: 600 }}>Name</p>
          <p style={{ marginLeft: "10px" }}>Material 1</p>
        </div>

        {/*color map*/}
        <div className={"bcolor"} style={{ marginTop: "10px" }}>
          <p style={{ fontSize: "11px", fontWeight: 600 }}>Base Color</p>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "5px" }}
          >
            <div
              style={{
                width: "46px",
                height: "46px",
                // background: "lightgrey",
                borderRadius: "10px",
                background: `url(${imageStatus.map})`,
              }}
              onClick={() => {
                document.querySelector(".map").click();
              }}
            ></div>
            {/*<div style={{*/}
            {/*    borderRadius: "10px",*/}
            {/*    width: "45px",*/}
            {/*    height: "45px",*/}
            {/*    overflow: "hidden"*/}
            {/*}}*/}
            {/* onClick={() => {*/}
            {/*     document.querySelector(".map").click();*/}
            {/* }}*/}
            {/*>*/}
            {/*    <ReactImageMagnify*/}
            {/*        {...{*/}
            {/*            smallImage: {*/}
            {/*                alt: 'Wristwatch by Ted Baker London',*/}
            {/*                // isFluidWidth: true,*/}
            {/*                src: imageStatus.map,*/}
            {/*                width: 45,*/}
            {/*                height: 45*/}
            {/*            },*/}
            {/*            largeImage: {*/}
            {/*                src: imageStatus.map,*/}
            {/*                width: 1000,*/}
            {/*                height: 1000,*/}
            {/*                zindex: 3*/}
            {/*            },*/}
            {/*            enlargedImageContainerDimensions: {*/}
            {/*                width: '600%',*/}
            {/*                height: '600%'*/}
            {/*            },*/}
            {/*            style: {*/}
            {/*                borderRadius: "10px"*/}
            {/*            }*/}
            {/*        }} />*/}
            {/*</div>*/}
            &nbsp; &nbsp;
            <LabelCentered>
              <input type={"checkbox"} />
              Use transparent
            </LabelCentered>
          </div>
        </div>

        {/*  metalness map*/}
        <div style={{ marginTop: "10px" }}>
          <p style={{ fontSize: "11px", fontWeight: 600 }}>Metalness Map</p>
          <div style={{ display: "flex", marginTop: "5px" }}>
            <img src={addPic} />
            <div style={{ marginLeft: "10px", width: "139px" }}>
              <p>Metalness factor</p>
              <Slider
                size="small"
                defaultValue={70}
                aria-label="Small"
                valueLabelDisplay="auto"
              />
            </div>
          </div>
        </div>

        {/*roughness map*/}
        <div style={{ marginTop: "10px" }}>
          <p style={{ fontSize: "11px", fontWeight: 600 }}>Rougness Map</p>
          <div style={{ display: "flex", marginTop: "5px" }}>
            <div
              style={{
                width: "46px",
                height: "46px",
                // background: "lightgrey",
                borderRadius: "10px",
                background: `url(${imageStatus.roughnessMap})`,
              }}
              onClick={() => {
                document.querySelector(".roughnessMap").click();
              }}
            ></div>
            <div style={{ marginLeft: "10px", width: "139px" }}>
              <p>Rougness factor</p>
              <Slider
                size="small"
                defaultValue={70}
                aria-label="Small"
                valueLabelDisplay="auto"
              />
            </div>
          </div>
        </div>

        {/*normal map*/}
        <div style={{ marginTop: "10px" }}>
          <p style={{ fontSize: "11px", fontWeight: 600 }}>normal Map</p>
          <div style={{ display: "flex", marginTop: "5px" }}>
            <div
              style={{
                width: "46px",
                height: "46px",
                // background: "lightgrey",
                borderRadius: "10px",
                background: `url(${imageStatus.normalMap})`,
              }}
              onClick={() => {
                document.querySelector(".normalMap").click();
              }}
            ></div>
            <div style={{ marginLeft: "10px", width: "139px" }}>
              <p>normal intensity</p>
              <Slider
                size="small"
                defaultValue={70}
                aria-label="Small"
                valueLabelDisplay="auto"
              />
            </div>
          </div>
        </div>

        {/*emission map*/}
        <div style={{ marginTop: "10px" }}>
          <p style={{ fontSize: "11px", fontWeight: 600 }}>Emission Map</p>
          <div style={{ display: "flex", marginTop: "5px" }}>
            <img src={addPic} />
            <div style={{ marginLeft: "10px", width: "139px" }}>
              <p>emission factor</p>
              <Slider
                size="small"
                defaultValue={70}
                aria-label="Small"
                valueLabelDisplay="auto"
              />
            </div>
          </div>
        </div>

        {/*occlusion map*/}
        <div style={{ marginTop: "10px" }}>
          <MedFontText11>Occlusion Map</MedFontText11>
          <div style={{ display: "flex", marginTop: "5px" }}>
            <div
              style={{
                width: "46px",
                height: "46px",
                // background: "lightgrey",
                borderRadius: "10px",
                background: `url(${imageStatus.aoMap})`,
              }}
              onClick={() => {
                document.querySelector(".aoMap").click();
              }}
            ></div>
            <div style={{ marginLeft: "10px", width: "139px" }}>
              <p>occlusion factor</p>
              <Slider
                size="small"
                defaultValue={70}
                aria-label="Small"
                valueLabelDisplay="auto"
              />
            </div>
          </div>
        </div>

        {/*Here is the different checkboxes*/}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "15px",
            marginTop: "11px",
          }}
        >
          <LabelCentered>
            <input type={"checkbox"} />
            Enable IOR
          </LabelCentered>
          <LabelCentered>
            <input type={"checkbox"} />
            Enable Clearcoat
          </LabelCentered>
          <LabelCentered>
            <input type={"checkbox"} />
            Enable Transmission
          </LabelCentered>
          <LabelCentered>
            <input type={"checkbox"} />
            Enable Transform
          </LabelCentered>
        </div>

        {/*labelled controlls*/}
        <div style={{ marginTop: "10px" }}>
          <MedFontText11>Tiling</MedFontText11>
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <LabelledInputMui label={"x"} width={"120px"} />
            <LabelledInputMui label={"y"} width={"120px"} />
          </div>
        </div>

        {/*tilling offset*/}
        <div style={{ marginTop: "14px" }}>
          <MedFontText11>Tiling offset</MedFontText11>
          <div style={{ width: "247px", marginTop: "9px" }}>
            <p>U</p>
            <Slider
              size="small"
              defaultValue={70}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
          </div>

          <div style={{ width: "247px" }}>
            <p>V</p>
            <Slider
              size="small"
              defaultValue={70}
              aria-label="Small"
              valueLabelDisplay="auto"
            />
          </div>
        </div>

        {/*tilling rotation*/}
        <div>
          <MedFontText11>Tiling Rotation</MedFontText11>
          <div style={{ marginTop: "8px" }}>
            <LabelledInputMui label={"Tiling rotation"} width={"120px"} />
          </div>
        </div>

        {/*button control*/}
        <div
          style={{
            marginTop: "20px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <RedButtonClass
            onClick={() => {
              const formData = new FormData();
              ["normalMap", "aoMap", "map", "roughnessMap"].map((vls) => {
                if (materialArray[4].material[`${vls}`]) {
                  console.log(materialArray[4].material[`${vls}`].image);
                  const normalMapDataURL = getImageDataURL(
                    materialArray[4].material[`${vls}`].image
                  );
                  const blob = dataURLtoBlob(normalMapDataURL);
                  formData.append("files", blob, `${vls}-map.png`);
                }
                return 0;
              });

              axios
                .post(
                  "/products/upload?userID=64676633c6ad11d84b234b1d&folderName=testset",
                  formData
                )
                .then((response) => {
                  console.log("success", response);
                })
                .catch((error) => {
                  console.log("error", error);
                });

              // axios
              //   .post("/materials/add", {
              //     userId: "64676633c6ad11d84b234b1d",
              //     projectId: 12345678,
              //     materialName: "Sample 3453 4Demo",
              //     baseMap: {
              //       imgName: "base.jpg",
              //       useTransparent: false,
              //     },
              //     metalMap: {
              //       imgName: "metal.jpg",
              //       factor: 0.9,
              //     },
              //     roughnessMap: {
              //       imgName: "roughness.jpg",
              //       factor: 0.5,
              //     },
              //     normalMap: {
              //       imgName: "normal.jpg",
              //       factor: 1.2,
              //     },
              //     emissionMap: {
              //       imgName: "emission.jpg",
              //       factor: 0.6,
              //     },
              //     occlusionMap: {
              //       imgName: "occlusion.jpg",
              //       factor: 0.3,
              //     },
              //     ior: true,
              //     clearcoat: false,
              //     transmission: true,
              //     transform: false,
              //     tiling: [1, 1],
              //     tilingOffset: [45, 0],
              //     tilingRotation: 0,
              //   })
              //   .then((response) => {
              //     console.log(response);
              //   })
              //   .catch((error) => {
              //     console.log(error);
              //   });
              // console.log("tyset", materialArray[4].material.normalMap.image);
              //
              // materialStatus.map.repeat.set(30, 30);
              // materialStatus.normalMap.repeat.set(30, 30);
              // materialStatus.roughnessMap.repeat.set(30, 30);
              // materialStatus.aoMap.repeat.set(30, 30);
              //
              // //offset test
              // //ranges from 0 to 1, along U and V
              // materialStatus.normalMap.offset.set(0, 0);
              // materialStatus.normalMap.rotation = 0 * (Math.PI / 180);
              //
              // //   material wrapping
              // materialStatus.map.wrapS =
              //   materialStatus.map.wrapT =
              //   materialStatus.normalMap.wrapS =
              //   materialStatus.normalMap.wrapT =
              //   materialStatus.roughnessMap.wrapS =
              //   materialStatus.roughnessMap.wrapT =
              //   materialStatus.aoMap.wrapS =
              //   materialStatus.aoMap.wrapT =
              //     THREE.RepeatWrapping;
              //
              // materialArray[4].material = new MeshPhysicalMaterial({
              //   ...materialStatus,
              //   side: THREE.DoubleSide,
              //   //other paramters
              //   aoMapIntensity: 1,
              //   roughness: 1,
              //   metalness: 0,
              //   color: "",
              //   name: "New Material",
              //   clearcoat: 0, //float
              //   ior: 1.5, //this value ranges from 1 to 2.33 def is 1.5,
              //   transmission: 0, //float
              // });
            }}
          >
            Create
          </RedButtonClass>
          <WhiteButtonClass>Remove</WhiteButtonClass>
        </div>
      </form>
    </Draggable>
  );
};
export default AddMaterialPopUp;
