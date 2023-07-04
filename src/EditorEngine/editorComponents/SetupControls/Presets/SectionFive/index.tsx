// @ts-nocheck
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateDiableComments,
  updateEnableComments,
  updateTriggerDelete,
} from "../../../../../redux/commentsRedux";
import AddConfig from "../../../../../assets/svgs/AddConfig.svg";
import "./index.scss";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { toast } from "react-toastify";

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
        <p className={"sectionFiveTitle"}>Collaboration Feedback</p>
        <img
          src={AddConfig}
          style={{ width: "21.35px", filter: "invert(.5)" }}
          onClick={() => {
            dispatch(updateEnableComments());
          }}
        />
        <img
          src={AddConfig}
          style={{ width: "21.35px" }}
          onClick={() => {
            dispatch(updateDiableComments());
          }}
        />
      </div>
      <div style={{ marginTop: "10px" }}>
        {enableComments &&
          annotationList.map((comment, index) => {
            return (
              <div
                style={{
                  marginBottom: "15px",
                  border: "1px solid #000000",
                  padding: "10px 0",
                }}
              >
                <p>
                  {index + 1}&nbsp;{comment.text}
                </p>
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
            );
          })}
      </div>
    </div>
  );
};
export default SectionFive;
