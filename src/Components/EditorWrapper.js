import React, { useContext } from "react";
import { Editor } from "draft-js";
import { EditorStateContext } from "./StateProvider";
import "draft-js/dist/Draft.css";
import "./EditorWrapper.css";

export const EditorWrapper = () => {
  const { editorState, setEditorState, editorText } = useContext(
    EditorStateContext
  );
  const updateState = (newEditorState) => {
    setEditorState(newEditorState);
  };

  return <Editor editorState={editorState} onChange={updateState} />;
};
