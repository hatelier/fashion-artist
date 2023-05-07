// @ts-nocheck
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { MeshStandardMaterial } from "three";

const SectionTwo = () => {
  const materialList = useSelector(
    (state) => state.materialControl.materialArray
  );
  useEffect(() => {
    console.log("reigger");
  }, [materialList]);
  return (
    <div>
      {materialList.length &&
        materialList.map((vlss, indexs) => {
          return (
            <div
              style={{
                border: "1px #000000 solid",
                padding: "5px",
                margin: "5px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
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
                      materialList[indexs].material = new MeshStandardMaterial({
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
                    <FontAwesomeIcon icon={faEye} />
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
