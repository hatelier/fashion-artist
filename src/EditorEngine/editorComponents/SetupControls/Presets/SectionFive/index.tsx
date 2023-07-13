// @ts-nocheck
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateDiableComments,
  updateEnableComments,
  updateTriggerDelete,
} from "../../../../../redux/commentsRedux";
import "./index.scss";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { BiShareAlt } from "react-icons/bi";
import axios from "axios";
import { toast } from "react-hot-toast";
import MessageIcon from "../../../../../assets/svgs/Message.svg";
import PencilIcon from "../../../../../assets/svgs/pencil.svg";
import styled from "styled-components";
import CommentBox from "./CommentBox";

const SectionFive = () => {
  const dispatch = useDispatch();
  const annotationList = useSelector(
    (state) => state.commentsRedux.annotationList
  );
  const { userID, projectID } = useSelector(
    (state: any) => state.accountManagement
  );
  const enableComments = useSelector(
    (state) => state.commentsRedux.enableComments
  );
  return (
    <div
      style={{
        margin: "0 20px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          margin: "36px 0 6px 0",
          justifyContent: "space-between",
        }}
      >
        <p className={"sectionFiveTitle"}>Collaboration</p>
        <div>
          <img
            src={PencilIcon}
            style={{ width: "21.35px", filter: "invert(.5)" }}
            onClick={() => {
              dispatch(updateEnableComments());
            }}
            alt=""
          />
          &nbsp; &nbsp;
          <img
            src={MessageIcon}
            style={{ width: "21.35px" }}
            onClick={() => {
              dispatch(updateDiableComments());
            }}
            alt=""
          />
        </div>
      </div>
      <div style={{ marginTop: "10px" }}>
        {!enableComments && <CommentBox />}
        {enableComments &&
          annotationList.map((comment, index) => {
            return (
              <AnnotationBox>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center" }}>
                    <p
                      style={{
                        background: "#fafafa",
                        fontSize: "16px",
                        width: "35px",
                        height: "35px",
                        alignItems: "center",
                        justifyContent: "center",
                        display: "flex",
                        padding: "14px",
                        borderRadius: "50%",
                      }}
                    >
                      {index + 1}
                    </p>
                    <div
                      style={{
                        marginLeft: "10px",
                        display: "flex",
                        flexDirection: "column",
                        gap: "2px",
                      }}
                    >
                      <p style={{ fontSize: "14px", fontWeight: "500" }}>
                        Myumx
                      </p>
                      <p
                        style={{
                          color: "#757575",
                          fontSize: "10px",
                        }}
                      >
                        Jul 6, 2023 8:34 PM
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      marginRight: "10px",
                      display: "flex",
                      alignItems: "center",
                    }}
                  >
                    <BiShareAlt style={{ fontSize: "19px" }} />
                    &nbsp; &nbsp;
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
                            dispatch(updateTriggerDelete());
                          })
                          .catch((err) => {
                            toast.error("Something went wrong while deleting.");
                          });
                      }}
                    />
                  </div>
                </div>
                <div style={{ marginTop: "12.5px", padding: "0 5px 8px 5px" }}>
                  <p>{comment.text}</p>
                </div>
              </AnnotationBox>
            );
          })}
      </div>
    </div>
  );
};
const AnnotationBox = styled.div`
  border-radius: 5px;
  background: #f4f4f4;
  box-shadow: 0px 4px 29px 0px rgba(0, 0, 0, 0.1);
  margin-bottom: 15px;
  padding: 10px 9px;
`;
export default SectionFive;
