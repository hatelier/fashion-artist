import { BiDotsVerticalRounded } from "react-icons/bi";
import React from "react";
import styled from "styled-components";
import { GrClose } from "react-icons/gr";

const MediaExtension = () => {
  return (
    <MediaCss>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
        }}
      >
        <p
          className={"midBoldclass"}
          style={{
            fontSize: "16px",
          }}
        >
          Media
        </p>
        <BiDotsVerticalRounded size={16} />
      </div>
      {/*    camera work*/}
      <div className={"cameraClass"}>
        <p
          className={"midBoldclass"}
          style={{
            fontSize: "16px",
          }}
        >
          Camera
        </p>
        <GrClose size={14} />
      </div>
    </MediaCss>
  );
};
export default MediaExtension;
const MediaCss = styled.div`
  width: 100%;
  background: #f4f4f4;
  .cameraClass {
    display: flex;
    width: 90%;
    margin: 10px auto 0 auto;
    justify-content: space-between;
    align-items: center;
    padding: 8px;
    background: var(--text, #eaeaea);
  }
`;
