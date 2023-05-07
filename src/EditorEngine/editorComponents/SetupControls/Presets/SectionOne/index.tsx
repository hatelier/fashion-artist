// @ts-nocheck
import React from "react";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { updateProductDetails } from "../../../../../redux/editorManagement";
import UploadImage from "../../../../../assets/svgs/upload (1) 1.svg";

const SectionOne = (props) => {
  const dispatch = useDispatch();
  const materialData = useSelector(
    (state) => state.materialControl.materialDimensions
  );
  return (
    <form
      className={"sectionOne"}
      onSubmit={(e) => {
        e.preventDefault();
        dispatch(
          updateProductDetails({
            productName: e.target.productName.value,
            brandName: e.target.brandName.value,
            previewImageBlog: " e.target.prevImage.files[0]",
            selectedPipeline: e.target.pipeline.value,
            tags: e.target.tags.value,
          })
        );
      }}
    >
      <div className={"uploadBox"}>
        <img src={UploadImage} />
        <p>Select an asset or drop here</p>
      </div>
      <button className={"uploadAsset"}>UPLOAD ASSET</button>

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
        />
      </div>
      <br />
      <div>
        <p className={"prodNameTitle"}>Brand Name</p>
        <input id={"brandName"} className={"productName"} name={"brandName"} />
      </div>
      <br />
      <div>
        <p className={"prodNameTitle"}>Preview Image</p>

        <div className={"prevImageDev"}></div>

        {/*add this code later*/}
        {/*<input*/}
        {/*    id={"prevImage"}*/}
        {/*    className={"prevImage"}*/}
        {/*    type={"file"}*/}
        {/*    name={"prevImage"}*/}
        {/*/>*/}
      </div>
      <br />
      <div>
        <p className={"prodNameTitle"}>Select a Pipeline</p>
        <select id={"selPipeline"} className={"selPipeline"} name="pipeline">
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
        <select id={"selTag"} className={"selPipeline"} name="tags">
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
        <button className={"uploadAsset"} style={{ width: "60%" }}>
          Duplicate
        </button>
        <button className={"uploadAsset"} style={{ width: "40%" }}>
          Delete
        </button>
      </div>
    </form>
  );
};
export default SectionOne;
