// @ts-nocheck
import React, {useContext} from "react";
import "./index.scss";
import {FileUploader} from "react-drag-drop-files";
import {useDispatch, useSelector} from "react-redux";
import {
  editorManagement,
  updateModelBlob,
  updateProductDetails,
} from "../../../../../redux/editorManagement";
import {glbToBase64} from "../../../../../utils";

const SectionOne = (props) => {
  const {dimensions} = useContext(props.context);
  const dispatch = useDispatch();
  const tempestData = useSelector((state) => state.routeManagement.currConfigTab);
  console.log("tempestData", tempestData);
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
      <FileUploader
        handleChange={async (files: any) => {
          // dispatch(updateModelBlob(files));
          const url = URL.createObjectURL(files);
          props.settings((state) => {
            return {
              file: url,
            };
          });
        }}
        name="file"
        types={["GLB"]}
        width={50}
      />
      <input type={"file"} className={"uploadButton"} />
      <h3>Product Specification</h3>
      <div>
        <label htmlFor={"productName"}>Product Name</label>
        <input
          id={"productName"}
          className={"productName"}
          name={"productName"}
        />
      </div>
      <br />
      <div>
        <label htmlFor={"brandName"}>Brand Name</label>
        <br />
        <input id={"brandName"} className={"brandName"} name={"brandName"} />
      </div>
      <br />
      <div>
        <label htmlFor={"prevImage"}>Preview Image</label>
        <br />
        <input
          id={"prevImage"}
          className={"prevImage"}
          type={"file"}
          name={"prevImage"}
        />
      </div>
      <br />
      <div>
        <label htmlFor={"selPipeline"}>Select a Pipeline</label>
        <br />
        <select id={"selPipeline"} className={"selPipeline"} name="pipeline">
          <option selected disabled>
            Select your pipeline
          </option>
          <option value="blender">Blender</option>
          <option value="maya">Maya</option>
        </select>
      </div>

      {/*select the required tags from the below dropdown*/}
      <br />
      <div>
        <label htmlFor={"selTag"}>Tags</label>
        <br />
        <select id={"selTag"} className={"selTag"} name="tags">
          <option selected disabled>
            Select your tags
          </option>
          <option value="blender">Blender</option>
          <option value="maya">Maya</option>
        </select>
      </div>

      {/*  dimensions detection center*/}
      <div className={"dimensionsDiv"}>
        <h4>Dimensions(1%):</h4>&nbsp;
        <input
          type={"text"}
          placeholder={"W"}
          value={dimensions ? dimensions.x : 0}
        />
        &nbsp;x&nbsp;
        <input
          type={"text"}
          placeholder={"L"}
          value={dimensions ? dimensions.y : 0}
        />
        &nbsp;x&nbsp;
        <input
          type={"text"}
          placeholder={"H"}
          value={dimensions ? dimensions.z : 0}
        />
        &nbsp;
      </div>
      <button type={"submit"}>Save Current State</button>
    </form>
  );
};
export default SectionOne;
