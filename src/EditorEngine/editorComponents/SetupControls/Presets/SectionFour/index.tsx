//sectionFour/index.tsx
// @ts-nocheck
import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

// import * as THREE from "three";
import // AmbientLight,
// DirectionalLight,
// Mesh,
// PerspectiveCamera,
// Scene,
// WebGLRenderer,
"three";

import "./index.scss";
//image imports
import ObjectPng from "../../../../../assets/pngs/objectLogo.gif";
// import MaterialPreview from "../../../../../assets/pngs/MaterialPrev.png";
import AddConfig from "../../../../../assets/svgs/AddConfig.svg";
import {
  updateProdMatState,
  updateProdMeshState,
} from "../../../../../redux/savedConfigs";
import AssetImage from "../../../../../assets/svgs/assetSearch.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import AddMaterialPopUp from "./components/AddMaterialPopUp";
// import AddMeshPopUp from "./components/AddMeshPopUp";
import axios from "axios";
import { updateCustomMaterial } from "../../../../../redux/accountManagement";
import AddMeshPopUpMain from "../../components/AddMeshPopUpMain";
import { WhiteOnRed } from "../SectionFive/CommentBox";
import {useNavigate} from "react-router-dom";
// import { materialApplication } from "../../../../../redux/materialApplication";

const SectionFour = () => {
  const materialArray = useSelector(
    (state) => state.materialControl.materialArray
  );

  /*const ambientLight = useSelector(
    (state) => state.materialControl.ambientLight
  );

  const directionalLight = useSelector(
    (state) => state.materialControl.directionalLight
  );*/

  const dispatch = useDispatch();

  const loadProductMeshes = useSelector(
    (state) => state.savedConfigs.loadProductMeshes
  );
  const loadProuctMaterials = useSelector(
    (state) => state.savedConfigs.loadProuctMaterials
  );
  //add material popup
  const [addMaterialState, setAddMaterialState] = useState(false);

  //material controls
  const [appliedMaterial, setAppliedMaterial] = useState(null);
  const { userID, projectID } = useSelector(
    (state: any) => state.accountManagement
  );

  const loadMaterialFunc = useCallback(() => {
    axios
      .get("/materials/get", {
        params: {
          userId: userID,
          projectId: projectID,
        },
      })
      .then((res) => {
        setAppliedMaterial(res.data);
        dispatch(updateCustomMaterial(res.data));
      });
  }, [userID, projectID, dispatch]);

  // this is purely being added to achieve reload capability
  useEffect(() => {
    if (userID && projectID) {
      loadMaterialFunc();
    }
  }, [userID, projectID, loadMaterialFunc]);
  const navigate = useNavigate();
  const ObjectComp = ({ mesh, index }) => {
    const [picState, setPicState] = useState(null);
    axios
      .get("/manage/meshConfigIndi", {
        params: {
          userId: userID,
          productId: projectID,
          materialName: mesh.name,
        },
      })
      .then((res) => {
        setPicState(res.data.fullImageSrc);
      });
    return (
      <div key={index} className="meshPreview">
        <img
          src={picState ? picState : ObjectPng}
          style={{
            height: "31px",
            width: "31px",
          }}
          alt=""
        />
        <div>
          <p
            style={{
              width: "20px",
              overflow: "hidden",
            }}
            className={"matNameMesh"}
          >
            {mesh.name}
          </p>
          <p>⋮</p>
        </div>
      </div>
    );
  };
  const [controlMesh, setControlMesh] = useState(false);
  const MeshButton = () => {
    return (
      <WhiteOnRed
        // className={"uploadAsset"}
        style={{ width: "100%", marginTop: "10px" }}
        onClick={() => {
          setControlMesh(true);
        }}
      >
        + Mesh
      </WhiteOnRed>
    );
  };
  return (
    <div className={"sectionFourDiv"}>
      {controlMesh && (
        <AddMeshPopUpMain
          onClose={() => {
            setControlMesh(false);
          }}
        />
      )}
      {addMaterialState && (
        <AddMaterialPopUp
          setState={setAddMaterialState}
          loadAPI={loadMaterialFunc}
          updateMode={false}
        />
      )}
      {/*<AddMeshPopUp />*/}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "36px 0 6px 0",
          justifyContent: "space-between",
        }}
      >
        <p className={"sectionFourTitle"}>Assets</p>
        <img src={AssetImage} style={{ width: "21.35px" }} alt="" onClick={()=>{
            navigate("/assets")
        }}/>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "18px 0 6px 0",
          justifyContent: "space-between",
        }}
      >
        <p className={"sectionFourTitle"}>Products</p>
        <img src={AddConfig} style={{ width: "21.35px" }} alt="" onClick={()=>{
            navigate("/products")
        }}/>
      </div>

      {/*input section to search for the required material*/}
      <input
        type={"text"}
        className={"productName"}
        placeholder={"Search product assets"}
      />

      {/*here is the product meshes section*/}
      <div>
        <div className={"productMeshes"}>
          <p>Product Meshes</p>
          <FontAwesomeIcon
            icon={loadProductMeshes ? faEye : faEyeSlash}
            className={"fimg"}
            onClick={() => {
              dispatch(updateProdMeshState());
            }}
          />
        </div>
        {loadProductMeshes && (
          <>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginTop: "10px",
              }}
            >
              {materialArray.map((mesh, index) => {
                return <ObjectComp mesh={mesh} index={index} />;
              })}
            </div>
            <MeshButton />
          </>
        )}
      </div>

      {/*  here is the product material section*/}
      <div>
        <div className={"productMeshes"}>
          <p>Product Materials</p>
          <FontAwesomeIcon
            icon={loadProuctMaterials ? faEye : faEyeSlash}
            className={"fimg"}
            onClick={() => {
              dispatch(updateProdMatState());
            }}
          />
        </div>
        {loadProuctMaterials && (
          <>
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginTop: "10px",
              }}
            >
              {/*{materialArray.map((mesh, index) => {*/}
              {/*  return <HoverRender mesh={mesh} />;*/}
              {/*})}*/}
              {appliedMaterial &&
                appliedMaterial.map((mesh, index) => {
                  return <CustomMaterialRender mesh={mesh} />;
                })}
            </div>
            <WhiteOnRed
              // className={"uploadAsset"}
              style={{ width: "100%", marginTop: "10px" }}
              onClick={() => {
                setAddMaterialState(true);
              }}
            >
              + Material
            </WhiteOnRed>
          </>
        )}
      </div>
    </div>
  );
};

//trigger material render

/*const createMaterialThumbnail = (renderer, material, size = 128) => {
  // Set the renderer size
  renderer.setSize(size, size);

  const scene = new Scene();
  const camera = new PerspectiveCamera(75, 1, 0.1, 1000);
  camera.position.z = 2;

  const ambientLight = new AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);

  const directionalLight = new DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  const geometry = new THREE.SphereGeometry(1, 32, 32);
  const mesh = new Mesh(geometry, material);
  scene.add(mesh);

  // Render the scene
  renderer.render(scene, camera);

  // Get the data URL from the renderer and return it
  const dataURL = renderer.domElement.toDataURL("image/png");
  return dataURL;
};*/

// const HoverRender = ({ mesh }) => {
//   // const renderer = new WebGLRenderer();
//   const [hoverState /*, setHoverState*/] = useState(false);
//   const [renderImage /*, setRenderImage*/] = useState(null);
//
//   return (
//     <div className="meshPreview">
//       <img
//         src={renderImage ? renderImage : !hoverState ? MaterialPreview : ""}
//         alt={mesh.name}
//         style={{
//           width: "31px",
//           height: "31px",
//         }}
//         onClick={() => {
//           console.log(mesh.material);
//         }}
//       />
//       <div
//         style={{
//           width: "100px",
//           height: "100px",
//         }}
//       ></div>
//       <div>
//         <p
//           style={{
//             width: "20px",
//             overflow: "hidden",
//           }}
//           className={"matNameMesh"}
//         >
//           {mesh.material.name.substring(0, 4)}
//         </p>
//         <p>⋮</p>
//       </div>
//     </div>
//   );
// };

const CustomMaterialRender = ({ mesh }) => {
  return (
    <div className="meshPreview">
      {/*<img*/}
      {/*  src={MaterialPreview}*/}
      {/*  alt={mesh.materialName}*/}
      {/*  style={{*/}
      {/*    width: "31px",*/}
      {/*    height: "31px",*/}
      {/*  }}*/}
      {/*/>*/}
      <div
        style={{
          width: "25px",
          height: "25px",
          borderRadius: "50%",
          background: `${mesh.color}`,
        }}
      ></div>
      <div>
        <p
          style={{
            width: "20px",
            overflow: "hidden",
          }}
          className={"matNameMesh"}
        >
          {mesh.materialName.substring(0, 4)}
        </p>
        <p>⋮</p>
      </div>
    </div>
  );
};

export default SectionFour;
