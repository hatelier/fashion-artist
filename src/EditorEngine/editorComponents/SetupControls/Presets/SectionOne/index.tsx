// @ts-nocheck
import React, { useEffect, useRef, useState } from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import UploadImage from "../../../../../assets/svgs/upload (1) 1.svg";
import { toast } from "react-toastify";
import axios from "axios";
import prevImageDef from "../../../../../assets/svgs/previewBack.svg";
import { useParams } from "react-router-dom";

const SectionOne = (props) => {
  const dispatch = useDispatch();
  const materialData = useSelector(
    (state) => state.materialControl.materialDimensions
  );
  const formRef = useRef();
  const inputClicker = useRef();
  const prevImageClicker = useRef();
  const productRef = useRef();
  const brandRef = useRef();
  const pipelineRef = useRef();
  const tagsRef = useRef();
  // background Image
  const [currPrevImage, setCurrPrevImage] = useState(prevImageDef);
  const { id } = useParams();
  const baseReactUrl = window.location.origin.toString();
  useEffect(() => {
    if (id !== "new") {
      axios
        .get("/product/get", {
          params: {
            userid: "64676633c6ad11d84b234b1d",
            productName: id,
          },
        })
        .then((res) => {
          console.log(res.data);
        })
        .catch((err) => {
          toast.error("Failed to load the data.");
        });
    }
  });
  return (
    <form
      className={"sectionOne"}
      onSubmit={(e) => {
        e.preventDefault();
      }}
    >
      <div className={"uploadBox"}>
        <img src={UploadImage} />
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
        className={"uploadAsset"}
        onClick={() => {
          inputClicker.current.click();
        }}
      >
        UPLOAD ASSET
      </button>

      {/*enable this for upload*/}
      {/*<FileUploader*/}
      {/*  handleChange={async (files: any) => {*/}
      {/*    // dispatch(updateModelBlob(files));*/}
      {/*    const url = URL.createObjectURL(files);*/}
      {/*    props.settings((state) => {*/}
      {/*      return {*/}
      {/*        file: url,*/}
      {/*      };*/}
      {/*    });*/}
      {/*  }}*/}
      {/*  name="file"*/}
      {/*  types={["GLB"]}*/}
      {/*  width={50}*/}
      {/*/>*/}
      {/*<input type={"file"} className={"uploadButton"} />*/}

      <p className={"productTitle"}>Product Specification</p>
      <div>
        <p className={"prodNameTitle"}>Product Name</p>
        <input
          id={"productName"}
          className={"productName"}
          name={"productName"}
          required={true}
          ref={productRef}
        />
      </div>
      <br />
      <div>
        <p className={"prodNameTitle"}>Brand Name</p>
        <input
          id={"brandName"}
          className={"productName"}
          name={"brandName"}
          required={true}
          ref={brandRef}
        />
      </div>
      <br />
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
          src={currPrevImage}
          onClick={() => {
            prevImageClicker.current.click();
          }}
        />
      </div>
      <br />
      <div>
        <p className={"prodNameTitle"}>Select a Pipeline</p>
        <select
          id={"selPipeline"}
          className={"selPipeline"}
          name="pipeline"
          required={true}
          ref={pipelineRef}
        >
          <option selected disabled>
            --Select--
          </option>
          <option value="blender">Blender</option>
          <option value="maya">Maya</option>
        </select>
      </div>

      {/*select the required tags from the below dropdown*/}
      <br />
      <div>
        <p className={"prodNameTitle"}>Tags</p>
        <select
          id={"selTag"}
          className={"selPipeline"}
          name="tags"
          required={true}
          ref={tagsRef}
        >
          <option selected disabled>
            Select your tags
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
        &nbsp;
        <input
          type={"text"}
          placeholder={"W"}
          className={"dimenClass"}
          value={materialData ? materialData.x : 0}
        />
        &nbsp;x&nbsp;
        <input
          type={"text"}
          placeholder={"L"}
          className={"dimenClass"}
          value={materialData ? materialData.y : 0}
        />
        &nbsp;x&nbsp;
        <input
          type={"text"}
          placeholder={"H"}
          className={"dimenClass"}
          value={materialData ? materialData.z : 0}
        />
        &nbsp;
      </div>
      {/*<button type={"submit"}>Save Current State</button>*/}
      <div className={"DupDelDiv"}>
        <button
          className={"uploadAsset"}
          style={{ width: "60%" }}
          type={"button"}
          onClick={() => {
            const formData = new FormData();
            console.log();
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
            formData.append("previewImage", prevImageClicker.current.files[0]);

            console.log(formData);

            axios
              .post("/product/add", formData)
              .then((res) => {
                toast.success("Product has been created!");
                window.open(
                  `${baseReactUrl}/editor/${res.data.productName}`,
                  "_self"
                );
              })
              .catch((error) => {
                toast.error("Model upload has failed.");
              });
          }}
        >
          Duplicate
        </button>
        <button
          className={"uploadAsset"}
          style={{ width: "40%" }}
          type={"reset"}
        >
          Delete
        </button>
      </div>
    </form>
  );
};
export default SectionOne;
