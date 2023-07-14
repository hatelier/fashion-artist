// @ts-nocheck
//uploadModel/index.tsx
import React, { useCallback, useEffect, useState } from "react";
import { useLoader, useThree } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import * as THREE from "three";
import { useDispatch, useSelector } from "react-redux";
import {
  updateMaterialDimensions,
  updateMaterialList,
} from "../../../../../redux/materialControl";
import { updateUnUsedObjects } from "../../../../../redux/savedConfigs";
import { updateModelLoadRate } from "../../../../../redux/materialApplication";
import { Html, Text } from "@react-three/drei";
import {
  // commentsRedux,
  updateAnnotationList,
} from "../../../../../redux/commentsRedux";
import { Vector3 } from "three";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import {FontLoader, MeshBasicMaterial, Mesh, TextGeomentry} from "three";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import { toast } from "react-hot-toast";
import { BsTrash } from "react-icons/bs";
import { BiShareAlt } from "react-icons/bi";
import styled from "styled-components";
const UploadModel = () => {
  //this has been disabled temporarily
  // const {scene} = useGLTF(props.model);

  const dispatch = useDispatch();

  const modelURL = useSelector(
    (state: any) => state.materialApplication.modelUrl
  );
  const currentTab = useSelector(
    (state: any) => state.routeManagement.currConfigTab
  );
  const { camera, raycaster, scene, pointer } = useThree();
  const [modelDimensionThread, setModelDimensions] = useState(null);
  const [modelPositionThread, setPositionDimensions] = useState(null);
  const gltf = useLoader(
    GLTFLoader,
    modelURL,
    () => {},
    (e) => {
      dispatch(updateModelLoadRate(e.loaded / e.total));
    }
  );
  useEffect(() => {
    let materialList = [];
    let materialNameList = [];
    gltf.scene.traverse((obj) => {
      if (obj.type === "Mesh") {
        if (obj.name !== "") {
          materialList.push(obj);
          materialNameList.push(obj.name);
        }
      }
    });

    dispatch(updateMaterialList(materialList));
    dispatch(updateUnUsedObjects(materialNameList));
    const bbox = new THREE.Box3().setFromObject(gltf.scene);

    // dimensions calculations
    const dimensions = new THREE.Vector3();
    const modelPositionThread = new THREE.Vector3();

    const boxDimensionsThread = bbox.getSize(dimensions);
    const boxPositionThread = bbox.getCenter(modelPositionThread);

    setModelDimensions(boxDimensionsThread);
    setPositionDimensions(boxPositionThread);
    dispatch(
      updateMaterialDimensions({
        x: dimensions.x,
        y: dimensions.y,
        z: dimensions.z,
      })
    );
  }, [gltf, dispatch]);

  // const [comments, setComments] = useState([]);
  const [groupRef, setGroupRef] = useState(null);

  useEffect(() => {
    if (groupRef) {
      groupRef.updateMatrixWorld();
    }
  }, [groupRef]);

  const [predefinedComments, setPredefinedComments] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [modalPosition, setModalPosition] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const { userID, projectID } = useSelector(
    (state: any) => state.accountManagement
  );

  const onClick = (event) => {
    event.stopPropagation();
    raycaster.setFromCamera(pointer, camera);
    const intersects = raycaster.intersectObjects(scene.children, true); // add the second parameter as true to check against the children of the group as well.
    if (intersects.length > 0) {
      const [first] = intersects;
      setModalPosition(first.point);
      setShowModal(true);
    }
  };

  const onCircleClick = (es, index) => {
    es.stopPropagation();
    setSelectedIndex(index);
  };

  const enableComments = useSelector(
    (state) => state.commentsRedux.enableComments
  );

  const triggerDelete = useSelector(
    (state) => state.commentsRedux.triggerDelete
  );

  const loadTicks = useCallback(() => {
    axios
      .get("/product/tick", {
        params: {
          userId: userID,
          productId: projectID,
        },
      })
      .then((res) => {
        if (res.data.tickPoints) {
          const localComments = res.data.tickPoints.map((comment) => {
            let vector = new Vector3(
              comment.position.x,
              comment.position.y,
              comment.position.z
            );
            let localPoint = groupRef.worldToLocal(vector);
            return {
              ...comment,
              position: localPoint,
            };
          });
          setPredefinedComments(localComments);
          dispatch(updateAnnotationList(localComments));
        }
      });
  }, [userID, projectID, groupRef, dispatch]);

  useEffect(() => {
    if (groupRef && enableComments) {
      loadTicks();
    }
  }, [groupRef, enableComments, triggerDelete, loadTicks]);
  const axis = useSelector((state: any) => state.settingsPanel.axis);
  const AnnotBox = styled.div`
    border-radius: 10px;
    border: 1px solid #e3e3e3;
    background: #f4f4f4;
    box-shadow: 0 10px 29px 0 rgba(0, 0, 0, 0.25);
  `;
  const ScaleFeature = () => {
    const dimensions = useSelector(
      (state: any) => state.settingsPanel.dimensions
    );
    return (
      dimensions &&
      modelPositionThread && (
        <>
          <line scale={modelDimensionThread} position={modelPositionThread}>
            <boxGeometry args={[1, 1, 1]} />
            <lineBasicMaterial color={"#ff0000"} />
          </line>
          <Text
            position={[
              modelPositionThread.x + modelDimensionThread.x / 2,
              modelPositionThread.y,
              modelPositionThread.z,
            ]}
            rotation={[0, -Math.PI / 2, 0]}
            fontSize={3}
            color="#ff0000"
          >
            {modelDimensionThread.x.toFixed(2)}
          </Text>
          <Text
            position={[
              modelPositionThread.x,
              modelPositionThread.y + modelDimensionThread.y / 2,
              modelPositionThread.z,
            ]}
            rotation={[Math.PI / 2, 0, 0]}
            fontSize={3}
            color="#ff0000"
          >
            {modelDimensionThread.y.toFixed(2)}
          </Text>
          <Text
            position={[
              modelPositionThread.x,
              modelPositionThread.y,
              modelPositionThread.z + modelDimensionThread.z / 2,
            ]}
            rotation={[0, 0, -Math.PI / 2]}
            fontSize={2}
            color="#ff0000"
          >
            {modelDimensionThread.z.toFixed(2)}
          </Text>
        </>
      )
    );
  };
  return (
    <>
      <group
        position={[0, -1, 0]}
        ref={setGroupRef}
        onPointerDown={enableComments && currentTab === 4 ? onClick : () => {}}
      >
        {axis && <axesHelper args={[10]} />}
        <primitive
          object={gltf.scene}
          scale={[1, 1, 1]}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
        />
        <ScaleFeature />
        {currentTab === 4 && enableComments && showModal && (
          <Html position={modalPosition} left>
            <AnnotBox
              style={{
                width: "230px",
                height: "120px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <textarea
                type="text"
                id="comment"
                name="comment"
                maxLength={70}
                autoFocus={true}
                placeholder={"Add your annotation here!"}
                style={{
                  border: "none",
                  height: "calc(120px - 35px)",
                  borderRadius: "10px 10px  0 0",
                  outline: "none",
                  padding: "10px",
                }}
              />
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  background: "#EAEAEA",
                  height: "40px",
                  padding: "0 5px",
                  borderRadius: "0 0 10px 10px",
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <BsTrash />
                  &nbsp;
                  <BiShareAlt />
                </div>
                <button
                  style={{
                    background: "#DEDEDE",
                    border: "none",
                    padding: "7px",
                    borderRadius: "7px",
                  }}
                  onClick={() => {
                    const commentText =
                      document.getElementById("comment").value;

                    let localPoint = groupRef.worldToLocal(modalPosition);
                    axios
                      .post("/product/tick", {
                        userId: userID,
                        productID: projectID,
                        tickPoints: {
                          text: commentText,
                          position: localPoint,
                          align: localPoint.x > 0 ? "left" : "right",
                        },
                      })
                      .then((res) => {
                        setPredefinedComments([
                          ...predefinedComments,
                          {
                            text: commentText,
                            position: localPoint,
                            align: localPoint.x > 0 ? "left" : "right",
                          },
                        ]);
                        dispatch(
                          updateAnnotationList([
                            ...predefinedComments,
                            {
                              text: commentText,
                              position: localPoint,
                              align: localPoint.x > 0 ? "left" : "right",
                            },
                          ])
                        );
                        setShowModal(false);
                      })
                      .catch((err) => {
                        console.log(err);
                        toast.error("Something went wrong");
                      });
                  }}
                >
                  Save
                </button>
              </div>
            </AnnotBox>
          </Html>
        )}
        {currentTab === 4 &&
          enableComments &&
          predefinedComments.map((comment, index) => {
            return (
              <Html position={comment.position} center={true}>
                <div
                  onClick={(es) => {
                    console.log("sdfsdfsdf");
                    onCircleClick(es, index);
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "30px",
                    height: "30px",
                    borderRadius: "50%",
                    backgroundColor: "red",
                    color: "white",
                    cursor: "pointer",
                  }}
                >
                  {index + 1}
                </div>
                {selectedIndex === index && (
                  <div
                    style={{
                      backgroundColor: "white",
                      position: "absolute",
                      top: 14,
                      left: 25,
                      zIndex: -1,
                      padding: "10px",
                      borderRadius: "10px",
                      fontSize: "11px",
                      width: "max-content",
                      maxWidth: "200px",
                    }}
                  >
                    {comment.text}
                    <br />
                    <br />
                    <FontAwesomeIcon
                      icon={faTrash}
                      onClick={() => {
                        axios
                          .delete("/product/tick", {
                            params: {
                              userId: userID,
                              productId: projectID,
                              tickId: comment.id,
                            },
                          })
                          .then((res) => {
                            loadTicks();
                          })
                          .catch((err) => {
                            toast.error("Something went wrong while deleting.");
                          });
                      }}
                    />
                  </div>
                )}
              </Html>
            );
            // DONT REMOVE THIS CODE BLOCK
            // return (
            //   <>
            //     <Text
            //       position={comment.position}
            //       key={index}
            //       color={"green"}
            //       fontSize={0.07}
            //       anchorX={comment.align}
            //       maxWidth={1.7}
            //       anchorY={"bottom"}
            //       textAlign={comment.align}
            //     >
            //       {comment.text}
            //     </Text>
            //     <Sphere
            //       onDoubleClick={(e) => {
            //         e.stopPropagation();
            //         setComments(
            //           comments.filter((_, indexs) => indexs !== index)
            //         );
            //       }}
            //       position={comment.position}
            //       args={[0.03, 10, 10]}
            //     >
            //       <meshBasicMaterial attach="material" color="red" />
            //     </Sphere>
            //   </>
            // );
          })}
      </group>
    </>
  );
};
export default UploadModel;
