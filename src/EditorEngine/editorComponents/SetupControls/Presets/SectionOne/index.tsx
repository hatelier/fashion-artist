// @ts-nocheck
import React, { useContext } from "react";
import "./index.scss";
import { FileUploader } from "react-drag-drop-files";

const SectionOne = (props) => {
  const { dimensions } = useContext(props.context);
  return (
    <div className={"sectionOne"}>
      <FileUploader
        handleChange={(files: any) => {
          console.log(files);
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
        <input id={"productName"} className={"productName"} />
      </div>
      <br />
      <div>
        <label htmlFor={"brandName"}>Brand Name</label>
        <br />
        <input id={"brandName"} className={"brandName"} />
      </div>
      <br />
      <div>
        <label htmlFor={"prevImage"}>Preview Image</label>
        <br />
        <input id={"prevImage"} className={"prevImage"} />
      </div>
      <br />
      <div>
        <label htmlFor={"selPipeline"}>Select a Pipeline</label>
        <br />
        <select id={"selPipeline"} className={"selPipeline"} name="pipeline">
          <option value="blender">Blender</option>
          <option value="maya">Maya</option>
        </select>
      </div>

      {/*select the required tags from the below dropdown*/}
      <br />
      <div>
        <label htmlFor={"selTag"}>Tags</label>
        <br />
        <select id={"selTag"} className={"selTag"} name="pipeline">
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
    </div>
  );
};
export default SectionOne;
