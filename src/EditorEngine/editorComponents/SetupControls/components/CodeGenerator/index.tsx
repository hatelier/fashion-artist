// @ts-nocheck
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import React, { useState } from "react";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";
import /*actionMenuData, presetsMenuData*/ "../../../Banner";
import { WhiteOnRed } from "../../Presets/SectionFive/CommentBox";
import PublishProject from "../PublishProject";

const CodeGenerator = ({ onClose }) => {
  const [actionTab, setActionTab] = useState(false);
  const [generateData, setGenerateData] = useState(null);
  const [swtState, setSwtState] = useState(false);
  const [checkState, setCheckState] = useState({
    readyplay: {
      name: "Enable Ready-player Me Download",
      value: false,
    },
    virtualtry: {
      name: "Enable Virtual -Try on",
      value: false,
    },
    qrcode: {
      name: "Enable QR code",
      value: false,
    },
    hidebutton: {
      name: "Hide Fullscreen Button",
      value: false,
    },
    arfilter: {
      name: "AR Filter",
      value: false,
    },
    virtualmes: {
      name: "Virtual Measurements",
      value: false,
    },
  });
  return (
    <CodeDiv>
      {generateData && (
        <PublishProject generateData={generateData} publishStateENV={false} />
      )}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <p className={"midBoldclass"}>Generate Code</p>
        <GrClose size={10} onClick={onClose} />
      </div>
      <div
        className={"checkDropDown"}
        onClick={() => {
          setActionTab((state) => !state);
        }}
      >
        <p className={"midBoldclass"}>Action Menu</p>
        {actionTab ? <PiCaretUpBold /> : <PiCaretDownBold />}
      </div>
      {actionTab && (
        <>
          {Object.keys(checkState).map((acts) => {
            return (
              <label className={"customDropCheck"}>
                <input
                  type={"checkbox"}
                  value={checkState[acts].value}
                  onChange={(e) => {
                    setCheckState((state) => {
                      return {
                        ...state,
                        [acts]: {
                          ...state[acts],
                          value: e.target.checked,
                        },
                      };
                    });
                  }}
                />
                &nbsp; &nbsp;
                <p>{checkState[acts].name}</p>
              </label>
            );
          })}
        </>
      )}
      {/*<div*/}
      {/*  className={"checkDropDown"}*/}
      {/*  onClick={() => {*/}
      {/*    setPresTab((state) => !state);*/}
      {/*  }}*/}
      {/*>*/}
      {/*  <p className={"midBoldclass"}>Presets</p>*/}
      {/*  {presTab ? <PiCaretUpBold /> : <PiCaretDownBold />}*/}
      {/*</div>*/}
      {/*{presTab && (*/}
      {/*  <>*/}
      {/*    {presetsMenuData.map((acts) => {*/}
      {/*      return (*/}
      {/*        <label className={"customDropCheck"}>*/}
      {/*          <input type={"checkbox"} />*/}
      {/*          &nbsp;*/}
      {/*          &nbsp;*/}
      {/*          <p>{acts}</p>*/}
      {/*        </label>*/}
      {/*      );*/}
      {/*    })}*/}
      {/*  </>*/}
      {/*)}*/}
      <div style={{ marginBottom: "10px" }}></div>
      <OnOffSwitch
        label={"3D Background Text"}
        checked={swtState}
        onClick={(vls) => {
          setSwtState(vls);
        }}
      />
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginTop: "15px",
        }}
      >
        <WhiteOnRed
          style={{
            visibility: "hidden",
          }}
        >
          Save
        </WhiteOnRed>
        <WhiteOnRed
          onClick={() => {
            setGenerateData({
              checkstate: checkState,
              swtstate: swtState,
            });
          }}
        >
          Publish
        </WhiteOnRed>
      </div>
    </CodeDiv>
  );
};
export const OnOffSwitch = ({ label, onClick, checked }) => {
  return (
    <OffSwtichDiv>
      <p>{label}</p>
      <div className={"switchDiv"}>
        <div
          className={"on"}
          style={{
            filter: `invert(${checked ? 0.11 : 0})`,
          }}
          onClick={() => onClick(true)}
        >
          <p>ON</p>
        </div>
        <div
          className={"off"}
          onClick={() => onClick(false)}
          style={{
            filter: `invert(${!checked ? 0.11 : 0})`,
          }}
        >
          <p>OFF</p>
        </div>
      </div>
    </OffSwtichDiv>
  );
};
const OffSwtichDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  .switchDiv {
    display: flex;
    cursor: pointer;
    .on {
      background: #fafafa;
      padding: 6px 9px 6px 12px;
      width: 47px;
      border-radius: 7px 0 0 7px;
      p {
        margin-left: 3px;
      }
    }
    .off {
      background: #fafafa;
      padding: 6px 12px 6px 9px;
      width: 47px;
      border-radius: 0 7px 7px 0;
      p {
        margin-left: 3px;
      }
    }
  }
`;
export default CodeGenerator;
const CodeDiv = styled.div`
  background: #ffffff;
  position: fixed;
  right: 0;
  bottom: 0;
  width: 289px;
  padding: 15px 20px;
  box-shadow: 0px 15px 25px 0px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  .customDropCheck {
    width: 100%;
    background: var(--box-fill-wt, #f4f4f4);
    padding: 5px 9px;
    border-radius: 7px;
    display: flex;
    align-items: center;
    margin-top: 8px;
    cursor: pointer;
    p {
      font-weight: 400;
      white-space: nowrap;
    }
  }
  .checkDropDown {
    display: flex;
    background: var(--box-fill-wt, #f4f4f4);
    padding: 4px 11px;
    justify-content: space-between;
    align-items: center;
    border-radius: 7px;
    margin-top: 15.5px;
    cursor: pointer;
  }
`;
