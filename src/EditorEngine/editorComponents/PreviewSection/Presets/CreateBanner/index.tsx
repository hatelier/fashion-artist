// @ts-nocheck
import React from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { updateCtrlPublishModal } from "../../../../../redux/materialApplication";

const CreateBanner = () => {
  const { id } = useParams();
  const { userID, projectID } = useSelector(
    (state: any) => state.accountManagement
  );
  const baseReactUrl = window.location.origin.toString();
  const dispatch = useDispatch();
  const currentPublishState = useSelector(
    (state) => state.materialApplication.currentPublishState
  );
  return (
    <div className={"createBanner"}>
      <p></p>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <PreviewButton
          onClick={() => {
            window.open(
              `${baseReactUrl}/view/${userID}/${projectID}/${id}`,
              "_blank"
            );
          }}
        >
          <FontAwesomeIcon icon={faPlay} style={{ color: "#ffffff" }} />
        </PreviewButton>
        <button
          className={"publishButton"}
          onClick={() => {
            dispatch(updateCtrlPublishModal(true));
          }}
        >
          {currentPublishState ? "Update" : "Publish"}
        </button>
        <SendButton>
          <FontAwesomeIcon icon={faPlay} style={{ color: "#ffffff" }} />
        </SendButton>
      </div>
    </div>
  );
};
const PreviewButton = styled.button`
  border: 1px solid rgba(234, 234, 234, 0.2);
  background: linear-gradient(0deg, #eaeaea, #eaeaea),
    linear-gradient(0deg, rgba(234, 234, 234, 0.2), rgba(234, 234, 234, 0.2));
  width: 33px;
  height: 33px;
  border-radius: 9px;
  background: rgba(211, 16, 39, 1);
  cursor: pointer;
`;
const SendButton = styled(PreviewButton)`
  border-radius: 0 9px 9px 0;
`;
export default CreateBanner;
