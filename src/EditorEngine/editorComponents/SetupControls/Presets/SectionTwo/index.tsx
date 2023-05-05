// @ts-nocheck
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { materialControl } from "../../../../../redux/materialControl";

const SectionTwo = () => {
  const materialList = useSelector(
    (state) => state.materialControl.materialArray
  );
  const dispatch = useDispatch();
  return (
    <div>
      {materialList.length &&
        materialList.map((vls, index) => {
          return (
            <div
              style={{
                border: "1px #000000 solid",
                margin: "3px",
                padding: "5px",
              }}
            >
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <h5>{vls.name}</h5>
                {/*<button>Choose</button>*/}
              </div>
              <div style={{ display: "flex", justifyContent: "space-between" }}>
                <div
                  style={{
                    height: "20px",
                    width: "20px",
                    background: "green",
                    borderRadius: "50%",
                  }}
                ></div>
                <p>Green</p>
              </div>
            </div>
          );
        })}
    </div>
  );
};
export default SectionTwo;
