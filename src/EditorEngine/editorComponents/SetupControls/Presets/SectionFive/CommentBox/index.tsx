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
import { GrAttachment } from "react-icons/gr";
import {
  CompositeDecorator,
  convertFromRaw,
  convertToRaw,
  Editor,
  EditorState,
  RichUtils,
} from "draft-js";
import "./index.scss";
import { BsTypeUnderline } from "react-icons/bs";
import { BiLink } from "react-icons/bi";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-hot-toast";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { AnnotationBox } from "../index";
import CustomPopUp from "../../../components/CustomPopUp";

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
        rel="noreferrer"
        target={"_blank"}
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
  const [modalState, setModalState] = useState(false);
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
    setModalState(true);
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
        <BiLink onMouseDown={_onAddLink} />
        <GrAttachment onClick={attachmentRun} />
        <AiOutlineOrderedList
          onMouseDown={_onNumberedListClick}
          style={{ color: clickState.list ? "#bdbdbd" : "" }}
        />
        <AiOutlineUnorderedList />
      </div>
    );
  };
  const { userID, projectID } = useSelector(
    (state: any) => state.accountManagement
  );
  const [currentCommentList, setCurrentCommentList] = useState([]);
  const getAllComments = useCallback(async () => {
    axios
      .get("/manage/comment", {
        params: {
          userId: userID,
          projectId: projectID,
        },
      })
      .then((res) => {
        setCurrentCommentList(res.data.data);
      });
  }, [projectID, userID]);
  useEffect(() => {
    getAllComments();
  }, [getAllComments]);
  return (
    <>
      {modalState && (
        <CustomPopUp
          header={"Enter the link."}
          placeholder={"Paste the URL for linking"}
          onCancel={() => {
            setModalState(false);
          }}
          onSubmit={(link) => {
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
            setModalState(false);
          }}
        />
      )}
      <ComBox>
        <div className={"compDiv"}>
          <p
            className={"header"}
            style={{
              textAlign: "left",
              marginLeft: "15px",
              fontSize: "14px",
            }}
          >
            Comment
          </p>
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
              axios
                .post("/manage/comment", {
                  userId: userID,
                  projectId: projectID,
                  stringContent: json,
                })
                .then((res) => {
                  toast.success("Comment saved!");
                  getAllComments();
                  setEditorState(EditorState.createEmpty(linkDecorator));
                })
                .catch((err) => {
                  toast.error("Couldn't add the comment!");
                });
            }}
          >
            Save
          </WhiteOnRed>
          <WhiteOnRed>Share</WhiteOnRed>
        </div>
      </ComBox>
      {currentCommentList && (
        <>
          {currentCommentList
            .map((comm) => {
              const jsonDataComm = JSON.parse(comm.stringContent);
              const contentState = convertFromRaw(jsonDataComm);
              const editorState = EditorState.createWithContent(
                contentState,
                linkDecorator
              );
              return (
                <AnnotationBox style={{ marginTop: "10px" }}>
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
                          background: "rgba(227, 227, 227, 1)",
                          fontSize: "16px",
                          width: "30px",
                          height: "30px",
                          alignItems: "center",
                          justifyContent: "center",
                          display: "flex",
                          padding: "14px",
                          borderRadius: "50%",
                        }}
                      >
                        {comm.author[0]}
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
                          {comm.author}
                        </p>
                        <p
                          style={{
                            color: "#757575",
                            fontSize: "9px",
                          }}
                        >
                          {comm.time}
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
                      <FontAwesomeIcon
                        icon={faTrash}
                        style={{ cursor: "pointer" }}
                        onClick={() => {
                          axios
                            .delete("/manage/comment", {
                              params: {
                                userId: userID,
                                projectId: projectID,
                                commentId: comm.commentId,
                              },
                            })
                            .then(() => {
                              getAllComments();
                              toast.success("Issue has been closed.");
                            })
                            .catch((err) => {
                              toast.error("Failed to delete");
                            });
                        }}
                      />
                    </div>
                  </div>
                  <div
                    style={{ marginTop: "12.5px", padding: "0 5px 8px 5px" }}
                  >
                    <Editor
                      editorState={editorState}
                      blockStyleFn={myBlockStyleFn}
                      onChange={() => {}}
                      readOnly={true}
                    />
                  </div>
                </AnnotationBox>
              );
            })
            .reverse()}
        </>
      )}
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
    background: rgba(227, 227, 227, 0.9);
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
