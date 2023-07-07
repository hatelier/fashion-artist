// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import UploadImage from "../../../../../assets/svgs/upload (1) 1.svg";
import { toast } from "react-toastify";
import axios from "axios";
import prevImageDef from "../../../../../assets/svgs/previewBack.svg";
import { useParams } from "react-router-dom";
import {
  updateModelUrl,
  updateTopBar,
} from "../../../../../redux/materialApplication";
import {
  updateProjectId,
  updateUserId,
} from "../../../../../redux/accountManagement";

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
  const { id } = useParams();
  const baseReactUrl = window.location.origin.toString();

  //here is the object url
  const [jsonData, setJsonData] = useState({
    productName: null,
    brandName: null,
    previewImage: null,
    pipeLine: null,
    tags: null,
  });
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
          // toast.success("Project loaded!");
          // toast.update(toastId, { isLoading: false });
        })
        .catch((err) => {
          toast.error("Failed to load the data.");
        });
    }
  }, [id, dispatch]);
  // here is the model loading rate.
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
          defaultValue={jsonData.productName ? jsonData.productName : ""}
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
          <option value="blender">Blender</option>
          <option value="maya">Maya</option>
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
          <option value="blender">Blender</option>
          <option value="maya">Maya</option>
        </select>
      </div>

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
          value={materialData ? Math.floor(materialData.x * 10) / 10 : 0}
        />
        &nbsp;x&nbsp;
        <input
          type={"text"}
          placeholder={"L"}
          className={"dimenClass"}
          style={{ fontSize: "15px" }}
          value={materialData ? Math.floor(materialData.y * 10) / 10 : 0}
        />
        &nbsp;x&nbsp;
        <input
          type={"text"}
          placeholder={"H"}
          className={"dimenClass"}
          style={{ fontSize: "15px" }}
          value={materialData ? Math.floor(materialData.z * 10) / 10 : 0}
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
                      `${baseReactUrl}/editor/${res.data.productName}`,
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
