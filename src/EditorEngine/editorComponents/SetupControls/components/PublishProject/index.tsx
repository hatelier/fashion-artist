// @ts-nocheck
import styled from "styled-components";
import { GrClose } from "react-icons/gr";
import { AiOutlineLink } from "react-icons/ai";
import { WhiteOnRed } from "../../Presets/SectionFive/CommentBox";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

// logo list
import Logo1 from "../../../../../assets/svgs/logos/frames1.svg";
import Logo2 from "../../../../../assets/svgs/logos/frames2.svg";
import Logo3 from "../../../../../assets/svgs/logos/frames3.svg";
import Logo4 from "../../../../../assets/svgs/logos/frames4.svg";
import Logo5 from "../../../../../assets/svgs/logos/frames5.svg";
import { useState } from "react";
import axios from "axios";
import {
  updateCtrlPublishModal,
  updateSetPublishState,
} from "../../../../../redux/materialApplication";

const PublishProject = ({ generateData }) => {
  const logoList = [Logo1, Logo2, Logo3, Logo4, Logo5];
  const { id } = useParams();
  const { userID, projectID } = useSelector(
    (state: any) => state.accountManagement
  );
  const dispatch = useDispatch();
  const baseReactUrl = window.location.origin.toString();
  const [publishState, setPublishState] = useState(false);
  return !publishState ? (
    <PublishDiv>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <GrClose size={12} />
      </div>
      <div
        className={"headerCtrl"}
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <p className={"pubHeader"}>Publish Project</p>
        <p
          style={{
            textAlign: "center",
            color: "#757575",
            wordWrap: "break-word",
          }}
        >
          Website url: &nbsp;
          <span
            style={{
              color: "#000000",
            }}
          >
            {`${baseReactUrl}/view/${userID}/${projectID}/${id}`}
          </span>
          . Want to change the name? Edit in the textidield below.
        </p>
      </div>
      <div className={"inputCopy"}>
        <div style={{ width: "100%", display: "flex", height: "max-content" }}>
          <div
            className={"subDiv"}
            style={{
              borderRadius: "5px 0 0 5px",
            }}
          >
            <div
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                padding: "3px 8px",
                borderRight: "solid 1px #000000",
              }}
            >
              <AiOutlineLink size={24} />
            </div>
          </div>
          <div className={"cpyBox"}>
            <input
              type={"text"}
              style={{
                paddingRight: "20px",
              }}
              value={`${baseReactUrl}/view/${userID}/${projectID}/${id}`}
            />
          </div>
          <BlackOnGrey>Copy</BlackOnGrey>
        </div>
        <p
          className={"midBoldclass"}
          style={{
            marginTop: "10px",
          }}
        >
          Not Published
        </p>
      </div>
      <WhiteOnRed
        style={{ marginTop: "25px", marginBottom: "15px", cursor: "pointer" }}
        onClick={() => {
          axios
            .post("/product/publish", {
              userId: userID,
              projectId: projectID,
              reqData: {
                state: true,
                options: generateData.checkstate,
                enable3d: generateData.swtstate,
              },
            })
            .then(() => {
              setPublishState(true);
              dispatch(updateSetPublishState(true));
            })
            .catch((err) => {
              toast.error("Failed to publish.");
            });
        }}
      >
        Proceed
      </WhiteOnRed>
    </PublishDiv>
  ) : (
    <PublishDiv>
      <div
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <GrClose
          size={12}
          onClick={() => {
            dispatch(updateCtrlPublishModal(false));
          }}
        />
      </div>
      <div
        className={"headerCtrl"}
        style={{ width: "100%", display: "flex", justifyContent: "center" }}
      >
        <p className={"pubHeader"}>Share Project</p>
        <p style={{ textAlign: "center", color: "#757575" }}>
          This project has been published. You can now share project.
        </p>
      </div>
      <div className={"inputCopy"}>
        <div
          style={{
            display: "flex",
            gap: "10px",
            justifyContent: "flex-end",
          }}
        >
          <button
            style={{
              padding: "2px 8px",
              height: "30px",
              background: "#ffffff",
              borderRadius: "5px",
              border: "none",
              marginBottom: "10px",
              cursor: "pointer",
            }}
          >
            Copy Embed
          </button>
          <button
            style={{
              padding: "2px 8px",
              height: "30px",
              background: "#ffffff",
              borderRadius: "5px",
              border: "none",
              marginBottom: "10px",
              cursor: "pointer",
            }}
          >
            QR Code
          </button>
          <button
            style={{
              padding: "2px 8px",
              height: "30px",
              background: "#ffffff",
              borderRadius: "5px",
              border: "none",
              marginBottom: "10px",
              cursor: "pointer",
            }}
          >
            Open Link
          </button>
        </div>
        <div style={{ width: "100%", display: "flex", height: "max-content" }}>
          <div
            className={"subDiv"}
            style={{
              borderRadius: "5px 0 0 5px",
            }}
          >
            <div
              style={{
                height: "100%",
                display: "flex",
                alignItems: "center",
                padding: "3px 8px",
                borderRight: "solid 1px #000000",
              }}
            >
              <AiOutlineLink size={24} />
            </div>
          </div>
          <div className={"cpyBox"}>
            <input
              type={"text"}
              style={{
                paddingRight: "20px",
              }}
              value={`${baseReactUrl}/view/${userID}/${projectID}/${id}`}
            />
          </div>
        </div>
        <p
          className={"midBoldclass"}
          style={{
            marginTop: "10px",
          }}
        >
          Published 1 min ago.
        </p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginTop: "10px",
          flexDirection: "column",
        }}
      >
        <p style={{ fontSize: "18px" }} className={"midBoldclass"}>
          Share on:
        </p>
        <div
          style={{
            width: "70%",
            display: "flex",
            justifyContent: "space-evenly",
            marginTop: "15px",
          }}
        >
          {logoList.map((imps) => {
            return (
              <img
                src={imps}
                alt={""}
                style={{
                  cursor: "pointer",
                }}
              />
            );
          })}
        </div>
      </div>
    </PublishDiv>
  );
};

export default PublishProject;
const PublishDiv = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 10;
  box-shadow: 0px 15px 25px 0px rgba(0, 0, 0, 0.1);
  background: #fafafa;
  border-radius: 25px;
  width: 483px;
  padding: 20px 28px;
  display: flex;
  flex-direction: column;
  .headerCtrl {
    display: flex;
    flex-direction: column;
    gap: 8px;
    margin-top: 9.5px;
    align-items: center;
  }
  .pubHeader {
    font-size: 24px;
    font-weight: 500;
  }
  .inputCopy {
    box-shadow: 0px 20px 31px 0px rgba(0, 0, 0, 0.15);
    width: 100%;
    background: #eaeaea;
    border-radius: 10px;
    padding: 10px;
    display: flex;
    position: relative;
    flex-direction: column;
    height: 100%;
    margin-top: 25px;
    .subDiv {
      background: #ffffff;
      display: flex;
      align-items: center;
      height: 100%;
    }
    .cpyBox {
      flex-grow: 1;
      input {
        border: none;
        padding: 0;
        height: 100%;
        width: 100%;
        font-size: 13px;
        padding-left: 12px;
        border-radius: 0 5px 5px 0;
      }
    }
  }
`;
const BlackOnGrey = styled.button`
  background: var(--text, #eaeaea);
  padding: 0 9px;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  height: 26px;
  position: absolute;
  right: 15px;
  top: 50%;
  transform: translate(0, -95%);
`;
