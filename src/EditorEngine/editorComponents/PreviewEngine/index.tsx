// @ts-nocheck
import "./index.scss";
import ModelPreview from "./ModelPreview";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import ObjectCube from "../../../assets/svgs/cube 1.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCube } from "@fortawesome/free-solid-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { updateCurrentModel } from "../../../redux/previewRedux";

const PreviewEngine = () => {
  //dispatches
  const dispatch = useDispatch();
  // useStates
  const [presetData, setPresetData] = useState(null);
  const [configData, setConfigData] = useState(null);
  const [selectedTab, setSelectedTab] = useState(0);
  const materialList = useSelector(
    (state: any) => state.previewRedux.materialList
  );
  const { userID, projectID, name } = useParams();
  useEffect(() => {
    axios
      .get("/product/get", {
        params: {
          userid: userID,
          productName: name,
        },
      })
      .then((res) => {
        dispatch(updateCurrentModel(res.data.asset.location));
      });
  }, []);
  useEffect(() => {
    if (materialList && materialList.length > 1) {
      axios
        .get("/materials/getpreset", {
          params: {
            projectId: projectID,
            userId: userID,
          },
        })
        .then((res) => {
          setPresetData(res.data.preset.configuration.preset);
        })
        .catch((err) => {
          toast.error("Failed to load the configs.");
        });
      axios
        .get("/manage/config", {
          params: {
            projectId: projectID,
            userId: userID,
          },
        })
        .then((res) => {
          setConfigData(res.data);
        })
        .catch((err) => {
          toast.error("Failed to load the configs");
        });
    }
  }, [materialList]);
  return (
    <div>
      <div className="preview-page">
        <div className="preview-block">
          <div className="preview-main">
            <img
              src={require("../../../assets/pngs/mx-logo-dark.png")}
              alt=""
              className="preview-mtum-logo"
            />
            <div className="preview-view-ar">View in AR</div>
            <div className="preview-sidemenu">
              {presetData &&
                presetData.map((presData, index) => {
                  return (
                    <div
                      className="dropdown"
                      style={{
                        position: "relative",
                        background: "#eeeeee",
                        borderRadius: "20px",
                        width: "300px",
                      }}
                    >
                      <button className="preview-sidemenu-label">
                        <span>{presData.name}</span>
                        <img
                          src={require("../../../assets/pngs/plus-white.png")}
                          alt=""
                          onClick={() => {
                            setSelectedTab(index);
                          }}
                        />
                      </button>
                      <div
                        style={{
                          display: "flex",
                          flexWrap: "wrap",
                          justifyContent: "center",
                        }}
                      >
                        {selectedTab === index &&
                          presData.materialList.map((mateList, inx) => {
                            return (
                              <div
                                style={{
                                  margin: "5px",
                                  width: "90px",
                                  // background: "red",
                                  display: "flex",
                                  flexDirection: "column",
                                  alignItems: "center",
                                  padding: "10px 5px",
                                }}
                              >
                                <FontAwesomeIcon
                                  icon={faCube}
                                  style={{
                                    fontSize: "50px",
                                  }}
                                />
                                <p
                                  style={{
                                    fontSize: "12px",
                                  }}
                                >
                                  {mateList.substring(0, 13)}
                                </p>

                                {/*here is the material list*/}
                                {configData && (
                                  <div
                                    style={{
                                      marginTop: "5px",
                                      display: "flex",
                                      gap: "10px",
                                      flexWrap: "wrap",
                                      justifyContent: "center",
                                    }}
                                  >
                                    {configData[mateList] &&
                                      configData[mateList].list.map((name) => {
                                        return (
                                          <div
                                            style={{
                                              background:
                                                configData[mateList]
                                                  .selected === name
                                                  ? "green"
                                                  : "red",
                                              width: "10px",
                                              height: "10px",
                                            }}
                                          ></div>
                                        );
                                      })}
                                  </div>
                                )}
                              </div>
                            );
                          })}
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className="preview-area" style={{ width: "100%" }}>
              <ModelPreview />
            </div>
            <div className="preview-options">
              <div>
                <a href="">
                  <img
                    src={require("../../../assets/pngs/preview-1.png")}
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a href="">
                  <img
                    src={require("../../../assets/pngs/preview-2.png")}
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a href="">
                  <img
                    src={require("../../../assets/pngs/preview-3.png")}
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a href="">
                  <img
                    src={require("../../../assets/pngs/preview-4.png")}
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a href="">
                  <img
                    src={require("../../../assets/pngs/preview-5.png")}
                    alt=""
                  />
                </a>
              </div>
              <div>
                <a href="">
                  <img
                    src={require("../../../assets/pngs/preview-6.png")}
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PreviewEngine;
