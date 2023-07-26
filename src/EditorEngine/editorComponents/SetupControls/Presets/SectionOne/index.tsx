// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import UploadImage from "../../../../../assets/svgs/upload (1) 1.svg";
import { toast } from "react-hot-toast";
import axios from "axios";
import prevImageDef from "../../../../../assets/svgs/previewBack.svg";
import { useParams } from "react-router-dom";
import {
  updateCurrBack,
  updateCurrBackImage,
  updateModelUrl,
  updateTopBar,
  updateVersionTrigger,
} from "../../../../../redux/materialApplication";
import {
  updateProjectId,
  updateUserId,
} from "../../../../../redux/accountManagement";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";
import { SketchPicker } from "react-color";
import { OnOffSwitch } from "../../components/CodeGenerator";
import styled from "styled-components";

const SectionOne = (props) => {
  const dispatch = useDispatch();
  const materialData = useSelector(
    (state) => state.materialControl.materialDimensions
  );
  const inputClicker = useRef();
  const prevImageClicker = useRef();
  const productRef = useRef();
  const brandRef = useRef();
  const pipelineRef = useRef();
  const tagsRef = useRef();

  // background Image
  const [currPrevImage, setCurrPrevImage] = useState(prevImageDef);
  const [showUpdate, setShowUpdate] = useState(true);
  const [createConfigState, setCreateConfigState] = useState(false);
  const { id, stage } = useParams();
  const baseReactUrl = window.location.origin.toString();

  //here is the object url
  const [jsonData, setJsonData] = useState({
    productName: null,
    brandName: null,
    previewImage: null,
    pipeLine: null,
    tags: null,
  });
  const { userID, projectID } = useSelector(
    (state: any) => state.accountManagement
  );
  useEffect(() => {
    if (id !== "new") {
      // const toastId = toast.loading("Loading content!");
      axios
        .get("/product/get", {
          params: {
            userid: "64676633c6ad11d84b234b1d",
            productName: id,
          },
        })
        .then((res) => {
          setJsonData({
            productName: res.data.productName,
            brandName: res.data.brandName,
            previewImage: res.data.previewImage.location,
            pipeLine: res.data.pipeline,
            tags: res.data.tags[0],
          });
          setShowUpdate(false);
          dispatch(updateTopBar());
          dispatch(updateUserId(res.data.userId));
          dispatch(updateProjectId(res.data.productID));
          dispatch(updateModelUrl(res.data.asset.location));
          axios
            .post("/product/verctrl", {
              userId: "64676633c6ad11d84b234b1d",
              projectId: res.data.productID,
            })
            .then((vdata) => {
              dispatch(updateVersionTrigger(vdata.data.data));
            })
            .catch(() => {
              toast.error("Failed to load versions");
            });
          axios
            .get("/product/addbck", {
              params: {
                userId: "64676633c6ad11d84b234b1d",
                productId: res.data.productID,
              },
            })
            .then((res) => {
              if (res.data.background) {
                dispatch(updateCurrBackImage(res.data.background));
              }
            });
          // toast.success("Project loaded!");
          // toast.update(toastId, { isLoading: false });
        })
        .catch((err) => {
          toast.error("Failed to load the data.");
        });
    }
  }, [id, dispatch]);
  // here is the model loading rate.
  const colorControl = useSelector(
    (state) => state.materialApplication.currentBackground
  );
  const [openModal, setOpenModal] = useState(false);
  const [openBack, setOpenBack] = useState(false);
  const [backgroundImageSet, setBackgroundImageSet] = useState(null);
  const inputRef = useRef(null);
  const currBackgroundImage = useSelector(
    (state) => state.materialApplication.currentBackgroundImage
  );
  return (
    <form
      className={"sectionOne"}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <p className={"productTitle"}>Product Specification</p>
      <div>
        <p className={"prodNameTitle"}>Product Name</p>
        <input
          id={"productName"}
          className={"productName"}
          name={"productName"}
          required={true}
          ref={productRef}
          defaultValue={
            id === "new"
              ? stage
              : jsonData.productName
              ? jsonData.productName
              : ""
          }
        />
      </div>
      <div>
        <p className={"prodNameTitle"}>Brand Name</p>
        <input
          id={"brandName"}
          className={"productName"}
          name={"brandName"}
          required={true}
          ref={brandRef}
          defaultValue={jsonData.brandName ? jsonData.brandName : ""}
        />
      </div>
      <div>
        <p className={"prodNameTitle"}>Preview Image</p>
        <input
          type={"file"}
          className={"previewImageFile"}
          ref={prevImageClicker}
          style={{ display: "none" }}
          onChange={(e) => {
            setCurrPrevImage(URL.createObjectURL(e.target.files[0]));
          }}
        />
        <img
          className={"prevImageDev"}
          src={jsonData.previewImage ? jsonData.previewImage : currPrevImage}
          onClick={() => {
            prevImageClicker.current.click();
          }}
          alt={"currPrevImage"}
        />
      </div>
      <div>
        <p className={"prodNameTitle"}>Select a Pipeline</p>
        <select
          id={"selPipeline"}
          className={"selPipeline"}
          name="pipeline"
          required={true}
          ref={pipelineRef}
          value={jsonData.pipeLine ? jsonData.pipeLine : null}
        >
          <option selected disabled>
            --Select--
          </option>
          <option value="blender">Browzwear</option>
          <option value="maya">Style3d</option>
          <option value="maya">Blender</option>
          <option value="maya">Maya</option>
          <option value="maya">3D Max</option>
          <option value="maya">CLO3d</option>
        </select>
      </div>

      {/*select the required tags from the below dropdown*/}
      <div>
        <p className={"prodNameTitle"}>Tags</p>
        <select
          id={"selTag"}
          className={"selPipeline"}
          name="tags"
          required={true}
          ref={tagsRef}
          value={jsonData.tags ? jsonData.tags : null}
        >
          <option selected disabled>
            --Select--
          </option>
          <option value="blender">Shoe</option>
          <option value="maya">Bag</option>
          <option value="maya">Gown</option>
          <option value="maya">Dress</option>
          <option value="maya">Top</option>
          <option value="maya">Jackets</option>
        </select>
      </div>
      {/*Add background environment*/}
      <div style={{ marginTop: "24px" }}>
        <div
          style={{
            display: "flex",
            width: "100%",
            justifyContent: "space-between",
            cursor: "pointer",
          }}
          onClick={() => {
            setOpenBack((state) => !state);
          }}
        >
          <p style={{ fontSize: "14px" }}>Background</p>
          {openBack ? <PiCaretUpBold /> : <PiCaretDownBold />}
        </div>
        {openBack && userID && (
          <>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "18px",
              }}
            >
              <p style={{ fontSize: "14px" }}>Color</p>
              <div
                style={{
                  borderRadius: "10px",
                  width: "139px",
                  height: "33px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <input
                  type={"text"}
                  style={{
                    width: "100%",
                    height: "100%",
                    border: "none",
                    fontSize: "14px",
                  }}
                  value={colorControl}
                />
                <div
                  style={{
                    background: `${colorControl}`,
                    width: "27px",
                    height: "100%",
                    position: "absolute",
                    right: 0,
                    top: 0,
                  }}
                  onClick={() => {
                    setOpenModal((state) => !state);
                  }}
                ></div>
              </div>
            </div>
            {openModal && (
              <div style={{ marginTop: "15px" }}>
                <SketchPicker
                  width={"85%"}
                  color={colorControl}
                  onChangeComplete={(color) => {
                    dispatch(updateCurrBack(color.hex));
                  }}
                />
              </div>
            )}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginTop: "18px",
              }}
            >
              <p style={{ fontSize: "14px" }}>Image</p>
              <div
                style={{
                  borderRadius: "10px",
                  width: "139px",
                  height: "33px",
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <input
                  type={"file"}
                  accept={"image/*"}
                  style={{
                    display: "none",
                  }}
                  ref={inputRef}
                  onChange={(e) => {
                    const file = e.target.files[0];

                    const uploadForm = new FormData();
                    uploadForm.append("bckimg", file);
                    uploadForm.append("userId", userID);
                    uploadForm.append("productId", projectID);

                    axios
                      .post("/product/addBck", uploadForm)
                      .then((res) => {
                        dispatch(updateCurrBackImage(res.data.background));
                        toast.success("Background Image set");
                      })
                      .catch((err) => {
                        toast.error("Failed to upload the image");
                      });

                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setBackgroundImageSet(reader.result);
                    };
                    if (file) {
                      reader.readAsDataURL(file);
                    }
                  }}
                />
                <div
                  onClick={() => {
                    inputRef.current.click();
                  }}
                  style={{
                    height: "100%",
                    width: "100%",
                    backgroundImage: `url(${
                      currBackgroundImage
                        ? currBackgroundImage
                        : backgroundImageSet
                    })`,
                    position: "absolute",
                    zIndex: 1,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                ></div>
                <input
                  type={"text"}
                  style={{ width: "100%", height: "100%", border: "none" }}
                />
                <div
                  style={{
                    background: "#ffffff",
                    width: "27px",
                    height: "100%",
                    position: "absolute",
                    right: 0,
                    top: 0,
                    fontSize: "24px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  +
                </div>
              </div>
            </div>
          </>
        )}
      </div>
      <ConfigSwitch>
        <OnOffSwitch
          checked={createConfigState}
          label={"Create Configuration"}
          onClick={(state) => {
            setCreateConfigState(state);
          }}
        />
      </ConfigSwitch>
      {/*  dimensions detection center*/}
      <div className={"dimensionsDiv"}>
        <p className={"prodNameTitle"} style={{ marginTop: 0 }}>
          Dimensions:
        </p>
        &nbsp; &nbsp; &nbsp;
        <input
          type={"text"}
          placeholder={"W"}
          className={"dimenClass"}
          style={{ fontSize: "15px" }}
          value={
            materialData && materialData.x
              ? Math.floor(materialData.x * 10) / 10
              : 0
          }
        />
        &nbsp;x&nbsp;
        <input
          type={"text"}
          placeholder={"L"}
          className={"dimenClass"}
          style={{ fontSize: "15px" }}
          value={
            materialData && materialData.y
              ? Math.floor(materialData.y * 10) / 10
              : 0
          }
        />
        &nbsp;x&nbsp;
        <input
          type={"text"}
          placeholder={"H"}
          className={"dimenClass"}
          style={{ fontSize: "15px" }}
          value={
            materialData && materialData.z
              ? Math.floor(materialData.z * 10) / 10
              : 0
          }
        />
        &nbsp;
      </div>
      {showUpdate && (
        <>
          <div
            className={"uploadBox"}
            onClick={() => {
              inputClicker.current.click();
            }}
          >
            <img
              src={UploadImage}
              style={{
                width: "30px",
              }}
              alt={"UploadImage"}
            />
            <p>Select an asset or drop here</p>
          </div>
          <input
            type={"file"}
            ref={inputClicker}
            style={{ display: "none" }}
            onChange={() => {
              toast.success("File uploaded.");
            }}
            required={true}
          />
          <button
            className={"uploadAssetOne"}
            onClick={() => {
              const formData = new FormData();
              formData.append("userid", "64676633c6ad11d84b234b1d");
              formData.append(
                "foldername",
                Math.floor(Math.random() * 100000000)
              );
              formData.append("productname", productRef.current.value);
              formData.append("brandname", brandRef.current.value);
              formData.append("pipeline", pipelineRef.current.value);
              formData.append("tags", tagsRef.current.value);
              formData.append("asset", inputClicker.current.files[0]);
              formData.append("enablePreset", createConfigState);
              formData.append(
                "previewImage",
                prevImageClicker.current.files[0]
              );

              axios
                .post("/product/add", formData)
                .then((res) => {
                  let dataStruct = {
                    presetName: "Preset",
                    configuration: {
                      preset: [],
                    },
                    projectId: `${res.data.productID}`,
                    userId: res.data.userId,
                  };
                  axios.post("/materials/preset", dataStruct).then(() => {
                    toast.success("Product has been created!");
                    window.open(
                      `${baseReactUrl}/editor/${res.data.productName}/main`,
                      "_self"
                    );
                  });
                })
                .catch((error) => {
                  toast.error("Model upload has failed.");
                });
            }}
          >
            <b>Upload Assets</b>
          </button>
        </>
      )}
      <div></div>
    </form>
  );
};
export default SectionOne;
const ConfigSwitch = styled.div`
  margin-top: 24px;
  p {
    font-size: 14px;
  }
`;
