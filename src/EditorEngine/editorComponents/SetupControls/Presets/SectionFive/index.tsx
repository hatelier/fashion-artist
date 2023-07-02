import React from "react";
import { useDispatch } from "react-redux";
import { updateEnableComments } from "../../../../../redux/commentsRedux";
const SectionFive = () => {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch(updateEnableComments());
      }}
    >
      Vieew commnts
    </button>
  );
};
export default SectionFive;
