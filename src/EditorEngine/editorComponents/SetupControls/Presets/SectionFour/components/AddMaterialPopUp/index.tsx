// @ts-nocheck
import "./index.scss";
// image imports
import addPic from "../../../../../../../assets/svgs/sectionFour/addPic.svg";
import { Box, CircularProgress, Slider } from "@mui/material";
import React, { useRef, useState } from "react";
import {
  // LabelledInputMui,
  NumberLabelledInputMui,
} from "../../../../../PreviewSection/EditorControls/CameraControls";
import {
  InvisibleFileUploader,
  LabelCentered,
  MedFontText11,
  RedButtonClass,
  WhiteButtonClass,
} from "../../../../../../StyledComponents";
import { TextureLoader } from "three";
import { useDispatch, useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-toastify";
import { SketchPicker } from "react-color";
// import * as THREE from "three";
// import { updateMaterialReload } from "../../../../../../../redux/materialApplication";
import { updateCustomMaterial } from "../../../../../../../redux/accountManagement";

const AddMaterialPopUp = ({ setState, loadAPI, updateMode, updateData }) => {
  const [imageStatus, setImageStatus] = useState({
    map: addPic,
    roughnessMap: addPic,
    normalMap: addPic,
    aoMap: addPic,
  });

  /*const [materialStatus, setMaterialStatus] = useState({
    map: null,
    roughnessMap: null,
    normalMap: null,
    aoMap: null,
  });*/

  // here is the function that creates the preview.
  /*const materialArray = useSelector(
    (state) => state.materialControl.materialArray
  );*/

  const FileToURL = (e) => {
    const file = e.target.files[0];
    setCollectiveData((state) => {
      return {
        ...state,
        [`${e.target.name}`]: file,
      };
    });
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

  /*function getImageDataURL(image) {
    let canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;

    let ctx = canvas.getContext("2d");
    ctx.drawImage(image, 0, 0);

    return canvas.toDataURL();
  }*/

  /*function dataURLtoBlob(dataurl) {
    let arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);
    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }
    return new Blob([u8arr], { type: mime });
  }*/

  const { userID, projectID } = useSelector(
    (state: any) => state.accountManagement
  );

  const [collectiveData, setCollectiveData] = useState({
    clearcoat: false,
    ior: false,
    materialName: "",
    transform: false,
    transmission: false,
    offU: 0,
    offV: 0,
  });
  const tillingX = useRef();
  const tillingY = useRef();
  const tillingRotation = useRef();
  const [defaultColor, setDefaultColor] = useState("#ffffff");
  const [colorState, setColorState] = useState(false);
  const [defaultColorUpa, setDefaultColorUpa] = useState(null);
  const dispatch = useDispatch();
  const [loaderState, setLoaderState] = useState(false);
  if (updateMode === true) {
    //this component is used if the mode is set to Update Mode.
    return (
      <form
        className={"addMaterialPopUp"}
        onSubmit={(e) => {
          e.preventDefault();
          setLoaderState(true);
          // here is the updated axios object
          const objData = {
            userId: userID,
            projectId: projectID,
            materialName: e.target.materialNameJsx.value,
            baseMap: {
              imgName: "map-map.png",
              useTransparent: e.target.useTransparent.checked,
            },
            metalMap: {
              imgName: "metal-map.png",
              factor: Number(e.target.metalRange.value) / 100,
            },
            roughnessMap: {
              imgName: "roughness-map-map.png",
              factor: Number(e.target.roughnessRange.value) / 100,
            },
            normalMap: {
              imgName: "normal-map-map.png",
              factor: Number(e.target.normalRange.value) / 100,
            },
            emissionMap: {
              imgName: "emission-map.jpg",
              factor: Number(e.target.emissionRange.value) / 100,
            },
            occlusionMap: {
              imgName: "ao-map.png",
              factor: Number(e.target.occlusionRange.value) / 100,
            },
            ior: e.target.enableior.checked ? 2.33 : 1.5,
            clearcoat: e.target.enableclearcoat.checked ? 1 : 0,
            transmission: e.target.enabletransmission.checked ? 1 : 0,
            transform: 0,
            tiling: [
              Number(tillingX.current.querySelector("input").value),
              Number(tillingY.current.querySelector("input").value),
            ],
            tilingOffset: [
              Number(e.target.offsetU.value) / 100,
              Number(e.target.offsetV.value) / 100,
            ],
            tilingRotation: Number(
              tillingRotation.current.querySelector("input").value
            ),
            color: defaultColorUpa ? defaultColorUpa : updateData.color,
          };
          axios
            .put("/materials/update ", objData)
            .then((response) => {
              axios
                .get("/materials/get", {
                  params: {
                    userId: userID,
                    projectId: projectID,
                  },
                })
                .then((res) => {
                  loadAPI(res.data);
                  dispatch(updateCustomMaterial(res.data));
                  setLoaderState(false);
                });
            })
            .catch((error) => {
              toast.error(error);
            });
        }}
      >
        {/*here are the input forms*/}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "cente",
          }}
        >
          <p
            style={{ fontSize: "11px", fontWeight: 600 }}
            className={"addHeader"}
          >
            Material
          </p>
          <FontAwesomeIcon
            icon={faXmark}
            onClick={() => {
              setState(null);
            }}
          />
        </div>
        <div style={{ marginTop: "10px" }}>
          <p style={{ fontSize: "11px", fontWeight: 600 }}>Name</p>
          <input
            required={true}
            type={"text"}
            defaultValue={updateData.materialName}
            disabled={true}
            onChange={(e) => {
              setCollectiveData((state) => {
                return {
                  ...state,
                  materialName: e.target.value,
                };
              });
            }}
            name={"materialNameJsx"}
            style={{
              border: "1px solid #000000",
              fontSize: "11px",
              fontFamily: "NHreg",
              height: "20px",
            }}
          />
        </div>

        {/*color map*/}
        <div className={"bcolor"} style={{ marginTop: "10px" }}>
          <p style={{ fontSize: "11px", fontWeight: 600 }}>Base Color</p>
          <div
            style={{ display: "flex", alignItems: "center", marginTop: "5px" }}
          >
            {/*&nbsp; &nbsp;*/}
            <div
              style={{
                height: "31px",
                width: "71px",
                background: `${
                  defaultColorUpa ? defaultColorUpa : updateData.color
                }`,
                borderRadius: "10px",
                border: "2px solid #878787",
              }}
              onClick={() => {
                setColorState((state) => !state);
              }}
            ></div>
            &nbsp; &nbsp;
            <LabelCentered>
              <input type={"checkbox"} name={"useTransparent"} />
              Use transparent
            </LabelCentered>
          </div>
          <div style={{ marginTop: "10px" }}></div>
          {colorState && (
            <SketchPicker
              color={defaultColorUpa ? defaultColorUpa : updateData.color}
              onChangeComplete={(color) => {
                setDefaultColorUpa(color.hex);
              }}
            />
          )}
        </div>

        {/*  metalness map*/}
        <div style={{ marginTop: "10px" }}>
          {/*<p style={{ fontSize: "11px", fontWeight: 600 }}>Metalness Map</p>*/}
          <div style={{ display: "flex", marginTop: "5px" }}>
            {/*<img src={addPic} />*/}
            <div style={{ width: "139px" }}>
              <p>Metalness factor</p>
              <Slider
                size="small"
                defaultValue={updateData.metalMap.factor * 100}
                aria-label="Small"
                valueLabelDisplay="auto"
                name={"metalRange"}
              />
            </div>
          </div>
        </div>

        {/*roughness map*/}
        <div style={{ marginTop: "10px" }}>
          <div style={{ display: "flex", marginTop: "5px" }}>
            <div style={{ width: "139px" }}>
              <p>Rougness factor</p>
              <Slider
                size="small"
                defaultValue={updateData.roughnessMap.factor * 100}
                aria-label="Small"
                valueLabelDisplay="auto"
                name={"roughnessRange"}
              />
            </div>
          </div>
        </div>

        {/*normal map*/}
        <div style={{ marginTop: "10px" }}>
          <div style={{ display: "flex", marginTop: "5px" }}>
            <div style={{ marginLeft: "0", width: "139px" }}>
              <p>normal intensity</p>
              <Slider
                size="small"
                defaultValue={updateData.normalMap.factor * 100}
                aria-label="Small"
                valueLabelDisplay="auto"
                name={"normalRange"}
              />
            </div>
          </div>
        </div>

        {/*emission map*/}
        <div style={{ marginTop: "10px" }}>
          <div style={{ display: "flex", marginTop: "5px" }}>
            <div style={{ marginLeft: "0", width: "139px" }}>
              <p>emission factor</p>
              <Slider
                size="small"
                defaultValue={updateData.emissionMap.factor * 100}
                aria-label="Small"
                valueLabelDisplay="auto"
                name={"emissionRange"}
              />
            </div>
          </div>
        </div>

        {/*occlusion map*/}
        <div style={{ marginTop: "10px" }}>
          <div style={{ display: "flex", marginTop: "5px" }}>
            <div style={{ marginLeft: "0", width: "139px" }}>
              <p>occlusion factor</p>
              <Slider
                size="small"
                defaultValue={updateData.occlusionMap.factor * 100}
                aria-label="Small"
                valueLabelDisplay="auto"
                name={"occlusionRange"}
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
            marginTop: "11p",
          }}
        >
          <LabelCentered>
            <input
              type={"checkbox"}
              className={"enableior"}
              name={"enableior"}
              defaultChecked={updateData.ior === 2.33}
              onChange={(e) => {
                setCollectiveData((state) => {
                  return {
                    ...state,
                    ior: e.target.checked,
                  };
                });
              }}
            />
            Enable IOR
          </LabelCentered>
          <LabelCentered>
            <input
              type={"checkbox"}
              className={"enableclearcoat"}
              name={"enableclearcoat"}
              defaultChecked={updateData.clearcoat === 1}
              onChange={(e) => {
                setCollectiveData((state) => {
                  return {
                    ...state,
                    clearcoat: e.target.checked,
                  };
                });
              }}
            />
            Enable Clearcoat
          </LabelCentered>
          <LabelCentered>
            <input
              type={"checkbox"}
              className={"enabletransmission"}
              name={"enabletransmission"}
              defaultChecked={updateData.transmission === 1}
              onChange={(e) => {
                setCollectiveData((state) => {
                  return {
                    ...state,
                    transmission: e.target.checked,
                  };
                });
              }}
            />
            Enable Transmission
          </LabelCentered>
          <LabelCentered>
            <input
              type={"checkbox"}
              className={"enabletransform"}
              onChange={(e) => {
                setCollectiveData((state) => {
                  return {
                    ...state,
                    transform: e.target.checked,
                  };
                });
              }}
            />
            Enable Transform
          </LabelCentered>
        </div>

        {/*labelled controlls*/}
        <div style={{ marginTop: "10px" }}>
          <MedFontText11>Tiling</MedFontText11>
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            <NumberLabelledInputMui
              label={"Till-X"}
              width={"120px"}
              ref={tillingX}
              defaultVal={updateData.tiling[0]}
              required={true}
            />
            <NumberLabelledInputMui
              label={"Till-Y"}
              width={"120px"}
              ref={tillingY}
              defaultVal={updateData.tiling[1]}
              required={true}
            />
          </div>
        </div>

        {/*tilling offset*/}
        <div style={{ marginTop: "14px" }}>
          <MedFontText11>Tilling offset</MedFontText11>
          <div style={{ width: "247px", marginTop: "9px" }}>
            <p>U</p>
            <Slider
              size="small"
              defaultValue={updateData.tilingOffset[0] * 100}
              aria-label="Small"
              name={"offsetU"}
              valueLabelDisplay="auto"
              onChange={(e) => {
                setCollectiveData((state) => {
                  return {
                    ...state,
                    offU: e.target.value,
                  };
                });
              }}
            />
          </div>

          <div style={{ width: "247px" }}>
            <p>V</p>
            <Slider
              size="small"
              defaultValue={updateData.tilingOffset[1] * 100}
              aria-label="Small"
              name={"offsetV"}
              valueLabelDisplay="auto"
              onChange={(e) => {
                setCollectiveData((state) => {
                  return {
                    ...state,
                    offV: e.target.value,
                  };
                });
              }}
            />
          </div>
        </div>

        {/*tilling rotation*/}
        <div>
          <MedFontText11>Tiling Rotation</MedFontText11>
          <div style={{ marginTop: "15px" }}>
            <NumberLabelledInputMui
              label={"Tiling rotation"}
              width={"120px"}
              defaultVal={updateData.tilingRotation}
              ref={tillingRotation}
              required={true}
            />
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
          {!loaderState ? (
            <RedButtonClass type={"submit"}>Update material</RedButtonClass>
          ) : (
            <Box sx={{ display: "flex" }}>
              <CircularProgress />
            </Box>
          )}
          {/*<WhiteButtonClass>Remove</WhiteButtonClass>*/}
        </div>
      </form>
    );
  }
  return (
    // <Draggable handle={".addHeader"}>
    <form
      className={"addMaterialPopUp"}
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData();

        formData.append("files", collectiveData.aoMap, "ao-map.png");
        formData.append("files", collectiveData.map, "map-map.png");
        formData.append(
          "files",
          collectiveData.normalMap,
          "normal-map-map.png"
        );
        formData.append(
          "files",
          collectiveData.roughnessMap,
          "roughness-map-map.png"
        );

        // here is the updated axios object
        const objData = {
          userId: userID,
          projectId: projectID,
          materialName: e.target.materialNameJsx.value,
          baseMap: {
            imgName: "map-map.png",
            useTransparent: e.target.useTransparent.checked,
          },
          metalMap: {
            imgName: "metal-map.png",
            factor: Number(e.target.metalRange.value) / 100,
          },
          roughnessMap: {
            imgName: "roughness-map-map.png",
            factor: Number(e.target.roughnessRange.value) / 100,
          },
          normalMap: {
            imgName: "normal-map-map.png",
            factor: Number(e.target.normalRange.value) / 100,
          },
          emissionMap: {
            imgName: "emission-map.jpg",
            factor: Number(e.target.emissionRange.value) / 100,
          },
          occlusionMap: {
            imgName: "ao-map.png",
            factor: Number(e.target.occlusionRange.value) / 100,
          },
          ior: e.target.enableior.checked ? 2.33 : 1.5,
          clearcoat: e.target.enableclearcoat.checked ? 1 : 0,
          transmission: e.target.enabletransmission.checked ? 1 : 0,
          transform: 0,
          tiling: [
            Number(tillingX.current.querySelector("input").value),
            Number(tillingY.current.querySelector("input").value),
          ],
          tilingOffset: [
            Number(e.target.offsetU.value) / 100,
            Number(e.target.offsetV.value) / 100,
          ],
          tilingRotation: Number(
            tillingRotation.current.querySelector("input").value
          ),
          color: defaultColor,
        };

        // this is the Axios image upload part.
        axios
          .post(
            `/materials/upload?userID=${userID}&folderName=${collectiveData.materialName}&productID=${projectID}`,
            formData
          )
          .then(async (response) => {
            axios
              .post("/materials/add", objData)
              .then((response) => {
                loadAPI();
              })
              .catch((error) => {
                toast.error(error);
              });
          })
          .catch((error) => {
            toast.error("Error uploading");
          });
      }}
    >
      {/*here are the input forms*/}
      <InvisibleFileUploader
        type={"file"}
        name={"map"}
        className={"map"}
        onChange={FileToURL}
        required={true}
      />
      <InvisibleFileUploader
        type={"file"}
        name={"roughnessMap"}
        className={"roughnessMap"}
        onChange={FileToURL}
        required={true}
      />
      <InvisibleFileUploader
        type={"file"}
        name={"normalMap"}
        className={"normalMap"}
        onChange={FileToURL}
        required={true}
      />
      <InvisibleFileUploader
        type={"file"}
        name={"aoMap"}
        className={"aoMap"}
        onChange={FileToURL}
        required={true}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "cente",
        }}
      >
        <p
          style={{ fontSize: "11px", fontWeight: 600 }}
          className={"addHeader"}
        >
          Material
        </p>
        <FontAwesomeIcon
          icon={faXmark}
          onClick={() => {
            setState(false);
          }}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        <p style={{ fontSize: "11px", fontWeight: 600 }}>Name</p>
        <input
          required={true}
          type={"text"}
          onChange={(e) => {
            setCollectiveData((state) => {
              return {
                ...state,
                materialName: e.target.value,
              };
            });
          }}
          name={"materialNameJsx"}
          style={{
            border: "1px solid #000000",
            fontSize: "11px",
            fontFamily: "NHreg",
            height: "20px",
          }}
        />
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
              background: `url(${imageStatus.map}`,
            }}
            onClick={() => {
              document.querySelector(".map").click();
            }}
          ></div>
          &nbsp; &nbsp;
          <div
            style={{
              height: "31px",
              width: "71px",
              background: `${defaultColor}`,
              borderRadius: "10px",
              border: "2px solid #878787",
            }}
            onClick={() => {
              setColorState((state) => !state);
            }}
          ></div>
          &nbsp; &nbsp;
          <LabelCentered>
            <input type={"checkbox"} name={"useTransparent"} />
            Use transparent
          </LabelCentered>
        </div>
        <div style={{ marginTop: "10px" }}></div>
        {colorState && (
          <SketchPicker
            color={defaultColor}
            onChangeComplete={(color) => {
              setDefaultColor(color.hex);
            }}
          />
        )}
      </div>

      {/*  metalness map*/}
      <div style={{ marginTop: "10px" }}>
        <p style={{ fontSize: "11px", fontWeight: 600 }}>Metalness Map</p>
        <div style={{ display: "flex", marginTop: "5px" }}>
          <img src={addPic} alt="addPic" />
          <div style={{ marginLeft: "10px", width: "139px" }}>
            <p>Metalness factor</p>
            <Slider
              size="small"
              defaultValue={100}
              aria-label="Small"
              valueLabelDisplay="auto"
              name={"metalRange"}
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
              background: `url(${imageStatus.roughnessMap}`,
            }}
            onClick={() => {
              document.querySelector(".roughnessMap").click();
            }}
          ></div>
          <div style={{ marginLeft: "10px", width: "139px" }}>
            <p>Rougness factor</p>
            <Slider
              size="small"
              defaultValue={100}
              aria-label="Small"
              valueLabelDisplay="auto"
              name={"roughnessRange"}
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
              background: `url(${imageStatus.normalMap}`,
            }}
            onClick={() => {
              document.querySelector(".normalMap").click();
            }}
          ></div>
          <div style={{ marginLeft: "10px", width: "139px" }}>
            <p>normal intensity</p>
            <Slider
              size="small"
              defaultValue={100}
              aria-label="Small"
              valueLabelDisplay="auto"
              name={"normalRange"}
            />
          </div>
        </div>
      </div>

      {/*emission map*/}
      <div style={{ marginTop: "10px" }}>
        <p style={{ fontSize: "11px", fontWeight: 600 }}>Emission Map</p>
        <div style={{ display: "flex", marginTop: "5px" }}>
          <img src={addPic} alt="addPic" />
          <div style={{ marginLeft: "10px", width: "139px" }}>
            <p>emission factor</p>
            <Slider
              size="small"
              defaultValue={100}
              aria-label="Small"
              valueLabelDisplay="auto"
              name={"emissionRange"}
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
              background: `url(${imageStatus.aoMap}`,
            }}
            onClick={() => {
              document.querySelector(".aoMap").click();
            }}
          ></div>
          <div style={{ marginLeft: "10px", width: "139px" }}>
            <p>occlusion factor</p>
            <Slider
              size="small"
              defaultValue={100}
              aria-label="Small"
              valueLabelDisplay="auto"
              name={"occlusionRange"}
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
          marginTop: "11p",
        }}
      >
        <LabelCentered>
          <input
            type={"checkbox"}
            className={"enableior"}
            name={"enableior"}
            onChange={(e) => {
              setCollectiveData((state) => {
                return {
                  ...state,
                  ior: e.target.checked,
                };
              });
            }}
          />
          Enable IOR
        </LabelCentered>
        <LabelCentered>
          <input
            type={"checkbox"}
            className={"enableclearcoat"}
            name={"enableclearcoat"}
            onChange={(e) => {
              setCollectiveData((state) => {
                return {
                  ...state,
                  clearcoat: e.target.checked,
                };
              });
            }}
          />
          Enable Clearcoat
        </LabelCentered>
        <LabelCentered>
          <input
            type={"checkbox"}
            className={"enabletransmission"}
            name={"enabletransmission"}
            onChange={(e) => {
              setCollectiveData((state) => {
                return {
                  ...state,
                  transmission: e.target.checked,
                };
              });
            }}
          />
          Enable Transmission
        </LabelCentered>
        <LabelCentered>
          <input
            type={"checkbox"}
            className={"enabletransform"}
            onChange={(e) => {
              setCollectiveData((state) => {
                return {
                  ...state,
                  transform: e.target.checked,
                };
              });
            }}
          />
          Enable Transform
        </LabelCentered>
      </div>

      {/*labelled controlls*/}
      <div style={{ marginTop: "10px" }}>
        <MedFontText11>Tiling</MedFontText11>
        <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
          <NumberLabelledInputMui
            label={"Till-X"}
            width={"120px"}
            ref={tillingX}
            defaultVal={0}
            required={true}
          />
          <NumberLabelledInputMui
            label={"Till-Y"}
            width={"120px"}
            ref={tillingY}
            defaultVal={0}
            required={true}
          />
        </div>
      </div>

      {/*tilling offset*/}
      <div style={{ marginTop: "14px" }}>
        <MedFontText11>Tilling offset</MedFontText11>
        <div style={{ width: "247px", marginTop: "9px" }}>
          <p>U</p>
          <Slider
            size="small"
            defaultValue={0}
            aria-label="Small"
            name={"offsetU"}
            valueLabelDisplay="auto"
            onChange={(e) => {
              setCollectiveData((state) => {
                return {
                  ...state,
                  offU: e.target.value,
                };
              });
            }}
          />
        </div>

        <div style={{ width: "247px" }}>
          <p>V</p>
          <Slider
            size="small"
            defaultValue={0}
            aria-label="Small"
            name={"offsetV"}
            valueLabelDisplay="auto"
            onChange={(e) => {
              setCollectiveData((state) => {
                return {
                  ...state,
                  offV: e.target.value,
                };
              });
            }}
          />
        </div>
      </div>

      {/*tilling rotation*/}
      <div>
        <MedFontText11>Tiling Rotation</MedFontText11>
        <div style={{ marginTop: "15px" }}>
          <NumberLabelledInputMui
            label={"Tiling rotation"}
            width={"120px"}
            defaultVal={0}
            ref={tillingRotation}
            required={true}
          />
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
          type={"submit"}
          // // this code for stripping the material out of parts.
          // ["normalMap", "aoMap", "map", "roughnessMap"].map((vls) => {
          //   if (materialArray[4].material[`${vls}`]) {
          //     console.log(materialArray[4].material[`${vls}`].image);
          //     const normalMapDataURL = getImageDataURL(
          //       materialArray[4].material[`${vls}`].image
          //     );
          //     const blob = dataURLtoBlob(normalMapDataURL);
          //     formData.append("files", blob, `${vls}-map.png`);
          //   }
          //   return 0;
          // });

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
        >
          Create
        </RedButtonClass>
        <WhiteButtonClass>Remove</WhiteButtonClass>
      </div>
    </form>
    // </Draggable>
  );
};
export default AddMaterialPopUp;
//redundent code
// adding a color picker here
// <div style={{
//   borderRadius: "10px",
//       width: "45px",
//       height: "45px",
//       overflow: "hidden"
// }}
// onClick={() => {
//   document.querySelector(".map").click();
// }}
// >
// <ReactImageMagnify
// {...{
//   smallImage: {
//     alt: 'Wristwatch by Ted Baker London',
//         // isFluidWidth: true,
//         src: imageStatus.map,
//         width: 45,
//         height: 45
//   },
//   largeImage: {
//     src: imageStatus.map,
//         width: 1000,
//         height: 1000,
//         zindex: 3
//   },
//   enlargedImageContainerDimensions: {
//     width: '600%',
//         height: '600%'
//   },
//   style: {
//     borderRadius: "10px"
//   }
// }} />
// </div>
