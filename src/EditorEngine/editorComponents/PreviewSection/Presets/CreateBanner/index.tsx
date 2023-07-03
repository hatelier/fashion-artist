import React from "react";
import "./index.scss";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const CreateBanner = () => {
  const { id } = useParams();
  const { userID, projectID } = useSelector(
    (state: any) => state.accountManagement
  );
  const baseReactUrl = window.location.origin.toString();
  return (
    <div className={"createBanner"}>
      <p> {"< Create"} </p>
      <button
        className={"publishButton"}
        onClick={() => {
          window.open(
            `${baseReactUrl}/view/${userID}/${projectID}/${id}`,
            "_blank"
          );
        }}
      >
        Publish
      </button>
    </div>
  );
};
export default CreateBanner;
