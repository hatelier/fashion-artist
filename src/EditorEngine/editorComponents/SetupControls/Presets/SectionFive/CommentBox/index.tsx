// @ts-nocheck
import React, { useCallback, useState } from "react";
import styled from "styled-components";
import {
  AiOutlineAlignCenter,
  AiOutlineAlignRight,
  AiOutlineBold,
  AiOutlineItalic,
  AiOutlineOrderedList,
  AiOutlineUnorderedList,
} from "react-icons/ai";
import { FiCode } from "react-icons/fi";
import { GrAttachment } from "react-icons/gr";
import {
  CompositeDecorator,
  convertToRaw,
  Editor,
  EditorState,
  RichUtils,
} from "draft-js";
import "./index.scss";
import { RxHeading } from "react-icons/rx";
import { BsTypeUnderline } from "react-icons/bs";

const CommentBox = () => {
  // use states for testing the editor

  const Link = (props) => {
    let { url } = props.contentState.getEntity(props.entityKey).getData();
    // if (!/^https?:\/\//i.test(url)) {
    //   url = `http://${url}`;
    // }
    return (
      <a
        href={url}
        style={{
          color: "#3b5998",
          textDecoration: "underline",
          cursor: "pointer",
        }}
        onClick={(e) => {
          e.stopPropagation();
          console.log(url);
          window.open(url, "_blank");
        }}
      >
        {props.children}
      </a>
    );
  };

  const linkDecorator = new CompositeDecorator([
    {
      strategy: findLinkEntities,
      component: Link,
    },
  ]);

  function findLinkEntities(contentBlock, callback, contentState) {
    contentBlock.findEntityRanges((character) => {
      const entityKey = character.getEntity();
      return (
        entityKey !== null &&
        contentState.getEntity(entityKey).getType() === "LINK"
      );
    }, callback);
  }

  const [editorState, setEditorState] = useState(
    EditorState.createEmpty(linkDecorator)
  );
  const onChange = useCallback(
    (editorState) => setEditorState(editorState),
    []
  );

  const handleKeyCommand = (command, editorState) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      onChange(newState);
      return "handled";
    }
    return "not-handled";
  };

  const _onBoldClick = (e) => {
    e.preventDefault();
    onChange(RichUtils.toggleInlineStyle(editorState, "BOLD"));
  };

  const _onItalicClick = (e) => {
    e.preventDefault();
    onChange(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
  };

  const _onHeadingClick = (e) => {
    e.preventDefault();
    onChange(RichUtils.toggleBlockType(editorState, "header-one"));
    console.log("siueiurh iushiuehr iusiuehr isier");
  };

  const _onUnderlineClick = (e) => {
    e.preventDefault();
    onChange(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
  };

  const _onAddLink = (e) => {
    e.preventDefault();
    const link = window.prompt("Paste the link -");
    if (!link) {
      return;
    }
    const contentState = editorState.getCurrentContent();
    const contentStateWithEntity = contentState.createEntity(
      "LINK",
      "MUTABLE",
      { url: link }
    );
    const entityKey = contentStateWithEntity.getLastCreatedEntityKey();
    const newEditorState = EditorState.set(editorState, {
      currentContent: contentStateWithEntity,
    });
    onChange(
      RichUtils.toggleLink(
        newEditorState,
        newEditorState.getSelection(),
        entityKey
      )
    );
  };

  const _onNumberedListClick = (e) => {
    e.preventDefault();
    onChange(RichUtils.toggleBlockType(editorState, "ordered-list-item"));
  };

  function myBlockStyleFn(contentBlock) {
    const type = contentBlock.getType();
    if (type === "ordered-list-item") {
      console.log(type);
      return "borderSytyd";
    }
  }

  const OptionBox = () => {
    return (
      <div className={"iconControls"}>
        <RxHeading onMouseDown={_onHeadingClick} />
        <AiOutlineBold onMouseDown={_onBoldClick} />
        <AiOutlineItalic onMouseDown={_onItalicClick} />
        <BsTypeUnderline onMouseDown={_onUnderlineClick} />
        <AiOutlineAlignCenter />
        <AiOutlineAlignRight />
        <FiCode onMouseDown={_onAddLink} />
        <GrAttachment />
        <AiOutlineOrderedList onMouseDown={_onNumberedListClick} />
        <AiOutlineUnorderedList />
      </div>
    );
  };
  return (
    <>
      <ComBox>
        <div className={"compDiv"}>
          <p className={"header"}>Add new comment</p>
        </div>
        <OptionBox />
        <div className={"inputCompBox"}>
          <Editor
            editorState={editorState}
            handleKeyCommand={handleKeyCommand}
            onChange={onChange}
            blockStyleFn={myBlockStyleFn}
          />
        </div>
        <div className={"btCtrlComp"}>
          <RedOnWhite>Cancel</RedOnWhite>
          <WhiteOnRed
            onClick={() => {
              const contentState = editorState.getCurrentContent();
              const raw = convertToRaw(contentState);
              const json = JSON.stringify(raw);
              console.log(json);
            }}
          >
            Save
          </WhiteOnRed>
          <WhiteOnRed>Reply</WhiteOnRed>
        </div>
      </ComBox>
    </>
  );
};
export const RedOnWhite = styled.button`
  background: #ffffff;
  border-radius: 5px;
  padding: 5px 7px;
  border: 1px solid #d31027;
  color: #d31027;
  height: 34px;
`;
export const WhiteOnRed = styled.button`
  background: #d31027;
  border-radius: 5px;
  padding: 5px 10px;
  border: 1px solid #d31027;
  color: #ffffff;
  height: 34px;
`;
const ComBox = styled.div`
  height: max-content;
  background: rgba(244, 244, 244, 1);
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  background: #f4f4f4;
  box-shadow: 0px 0px 4px 0px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  align-items: center;
  .btCtrlComp {
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding: 0 10px;
    margin-top: 7px;
    margin-bottom: 10px;
  }
  .inputCompBox {
    width: 93%;
    min-height: 100px;
    margin-top: 15px;
    border: 2px solid rgba(227, 227, 227, 1);
    background: rgba(244, 244, 244, 0.9);
    border-radius: 10px;
    padding: 5px;
    outline: none;
    font-size: 15px;
  }
  .iconControls {
    display: flex;
    width: 100%;
    justify-content: space-evenly;
    font-size: 16px;
    margin-top: 10px;
    & > * {
      cursor: pointer;
    }
  }
  .compDiv {
    display: flex;
    justify-content: space-evenly;
    width: 100%;
    .header {
      font-size: 16px;
      width: 100%;
      text-align: center;
      padding: 7px 0;
      &:nth-child(2) {
        background: #ffffff;
      }
    }
  }
`;
export default CommentBox;
