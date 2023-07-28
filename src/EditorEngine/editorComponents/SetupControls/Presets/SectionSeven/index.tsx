// @ts-nocheck
import styled from "styled-components";
import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import MediaExtension from "../../components/MediaExtension";
import { WhiteOnRed } from "../SectionFive/CommentBox";
import { GrClose } from "react-icons/gr";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";

const SectionSeven = () => {
  const [copyCodeState, setCopyCodeState] = useState(false);
  const currentPublishState = useSelector(
    (state) => state.materialApplication.currentPublishState
  );
  return (
    <SectionSevenDiv>
      {/*media*/}
      <MediaExtension />
      <div
        style={{
          display: "flex",
          // alignItems: "center",
          justifyContent: "center",
          background: "#F4F4F4",
          width: "100%",
          padding: "10px",
          borderRadius: "8px",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
          onClick={() => {
            setCopyCodeState((state) => !state);
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
          {copyCodeState ? (
            <GrClose size={12} style={{ cursor: "pointer" }} />
          ) : (
            <BiDotsVerticalRounded size={16} />
          )}
        </div>
        {copyCodeState && (
          <WhiteOnRed
            style={{
              marginTop: "13px",
            }}
            onClick={() => {
              if (!currentPublishState) {
                toast.error("Please publish for embedding.");
              }
            }}
          >
            Save code
          </WhiteOnRed>
        )}
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
