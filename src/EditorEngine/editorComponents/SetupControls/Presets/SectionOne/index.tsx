import React from "react";
import "./index.scss";

const SectionOne = () => {
  return (
    <div className={"sectionOne"}>
      <div className={"assetBox"}>Select an asset or drop here</div>
      <button>UPLOAD ASSET</button>
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
        <h4>Dimensions:</h4>&nbsp;
        <input type={"text"} placeholder={"W"} />
        &nbsp;x&nbsp;
        <input type={"text"} placeholder={"L"} />
        &nbsp;x&nbsp;
        <input type={"text"} placeholder={"H"} />
        &nbsp;
      </div>
    </div>
  );
};
export default SectionOne;
