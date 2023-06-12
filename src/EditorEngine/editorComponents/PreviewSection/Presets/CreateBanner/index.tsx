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
        onClick={() => {
          window.alert(`${baseReactUrl}/view/${userID}/${projectID}/${id}`);
        }}
      >
        Publish
      </button>
    </div>
  );
};
export default CreateBanner;
