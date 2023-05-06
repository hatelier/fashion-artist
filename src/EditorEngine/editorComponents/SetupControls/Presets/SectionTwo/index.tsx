// @ts-nocheck
import React, {useContext, useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
  materialControl,
  updateMaterialList,
} from "../../../../../redux/materialControl";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEye} from "@fortawesome/free-solid-svg-icons";
import {MeshStandardMaterial} from "three";
import {useFrame, useThree} from "@react-three/fiber";
import {triggerRender} from "../../../../../redux/triggerRedux";
import {ContextParams} from "../../../../index";

const SectionTwo = () => {
  const {modelObjects} = useContext(ContextParams);
  const [currState, setCurrState] = useState<{}[]>([]);
  useEffect(() => {
    console.log("reigger");
  }, [modelObjects]);
  return (
      <div>
        {modelObjects.length &&
            modelObjects.map((vlss, indexs) => {
              return (
                  <div
                      style={{
                        border: "1px #000000 solid",
                        margin: "3px",
                        padding: "5px",
                      }}
                  >
                    <div style={{display: "flex", justifyContent: "space-between"}}>
                      <h5>{vlss.name}</h5>
                      {/*<button>Choose</button>*/}
                    </div>
                    {["green", "red"].map((vls, index) => {
                      return (
                          <div
                              style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center",
                                cursor: "pointer",
                              }}
                              onClick={() => {
                                modelObjects[indexs].material = new MeshStandardMaterial({
                                  color: vls,
                                });
                              }}
                          >
                            <div
                                style={{
                                  height: "20px",
                                  width: "20px",
                                  background: `${vls}`,
                                  borderRadius: "50%",
                                }}
                            ></div>
                            <p>{vls}</p>
                            <FontAwesomeIcon icon={faEye}/>
                          </div>
                      );
                    })}
                  </div>
          );
        })}
    </div>
  );
};
export default SectionTwo;
