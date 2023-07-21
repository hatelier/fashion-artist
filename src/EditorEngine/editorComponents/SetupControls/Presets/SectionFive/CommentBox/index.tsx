// @ts-nocheck
import React, { useCallback, useEffect, useRef, useState } from "react";
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
import { BsTypeUnderline } from "react-icons/bs";

const CommentBox = () => {
  // use states for testing the editor
  const [clickState, setClickState] = useState({
    bold: false,
    underline: false,
    italic: false,
    list: false,
    heading: false,
  });
  const fileRef = useRef(null);
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
    setClickState((state) => {
      return {
        ...state,
        bold: !state.bold,
      };
    });
  };

  const _onItalicClick = (e) => {
    e.preventDefault();
    onChange(RichUtils.toggleInlineStyle(editorState, "ITALIC"));
    setClickState((state) => {
      return {
        ...state,
        italic: !state.italic,
      };
    });
  };

  // const _onHeadingClick = (e) => {
  //   e.preventDefault();
  //   onChange(RichUtils.toggleBlockType(editorState, "header-one"));
  //   setClickState((state) => {
  //     return {
  //       ...state,
  //       heading: !state.heading,
  //     };
  //   });
  // };

  const _onUnderlineClick = (e) => {
    e.preventDefault();
    onChange(RichUtils.toggleInlineStyle(editorState, "UNDERLINE"));
    setClickState((state) => {
      return {
        ...state,
        underline: !state.underline,
      };
    });
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
    setClickState((state) => {
      return {
        ...state,
        list: !state.list,
      };
    });
  };

  function myBlockStyleFn(contentBlock) {
    const type = contentBlock.getType();
    if (type === "ordered-list-item") {
      console.log(type);
      return "borderSytyd";
    }
  }

  function attachmentRun() {
    fileRef.current.click();
  }

  useEffect(() => {
    if (editorState.getCurrentContent().getPlainText().trim() === "") {
      setClickState({
        bold: false,
        underline: false,
        italic: false,
        list: false,
        heading: false,
      });
    }
  }, [editorState]);
  const OptionBox = () => {
    return (
      <div className={"iconControls"}>
        <input
          type={"file"}
          multiple={true}
          ref={fileRef}
          style={{ display: "none" }}
        />
        <AiOutlineBold
          onMouseDown={_onBoldClick}
          style={{ color: clickState.bold ? "#bdbdbd" : "" }}
        />
        <AiOutlineItalic
          onMouseDown={_onItalicClick}
          style={{ color: clickState.italic ? "#bdbdbd" : "" }}
        />
        <BsTypeUnderline
          onMouseDown={_onUnderlineClick}
          style={{ color: clickState.underline ? "#bdbdbd" : "" }}
        />
        <AiOutlineAlignCenter />
        <AiOutlineAlignRight />
        <FiCode onMouseDown={_onAddLink} />
        <GrAttachment onClick={attachmentRun} />
        <AiOutlineOrderedList
          onMouseDown={_onNumberedListClick}
          style={{ color: clickState.list ? "#bdbdbd" : "" }}
        />
        <AiOutlineUnorderedList />
      </div>
    );
  };
  return (
    <>
      <ComBox>
        <div className={"compDiv"}>
          <p className={"header"} style={{
            textAlign:"left",
            marginLeft:"15px",
            fontSize:"14px"
          }}>Comment</p>
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
          <WhiteOnRed>Share</WhiteOnRed>
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
  border-radius: 8px;
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
    margin-top: 10px;
    border: 2px solid rgba(227, 227, 227, 1);
    background: rgba(244, 244, 244, 0.9);
    border-radius: 10px;
    padding: 5px;
    outline: none;
    font-size: 15px;
  }
  .iconControls {
    display: flex;
    width: 90%;
    justify-content: space-evenly;
    font-size: 16px;
    background: rgba(227, 227, 227, 0.90);
    padding: 7px 0px;
    border-radius: 4px;
    margin: 3px auto 0 auto;
    & > * {
      cursor: pointer;
    }
  }
  .compDiv {
    display: flex;
    justify-content: flex-start;
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
