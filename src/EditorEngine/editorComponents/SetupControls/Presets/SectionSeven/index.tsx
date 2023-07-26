// @ts-nocheck
import styled from "styled-components";
import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import MediaExtension from "../../components/MediaExtension";

const SectionSeven = () => {
  return (
    <SectionSevenDiv>
      {/*media*/}
      <MediaExtension />
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: "#F4F4F4",
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
          Embed Code
        </p>
        <BiDotsVerticalRounded size={16} />
      </div>
    </SectionSevenDiv>
  );
};
export default SectionSeven;
const SectionSevenDiv = styled.div`
  width: 90%;
  margin: 32px auto 0 auto;
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 10px;
`;
