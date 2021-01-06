import React from "react";
import { Editor, EditorState } from "draft-js";
import "draft-js/dist/Draft.css";
import "./EditorWrapper.css";

const getCurrentBlock = (editorState) => {
  const currentSelection = editorState.getSelection();
  const blockKey = currentSelection.getStartKey();
  return editorState.getCurrentContent().getBlockForKey(blockKey);
};

const getCurrentLetter = (editorState) => {
  const currentBlock = getCurrentBlock(editorState);
  const blockText = currentBlock.getText();
  return blockText[editorState.getSelection().getStartOffset() - 1];
};

export const EditorWrapper = () => {
  const [editorState, setEditorState] = React.useState(
    EditorState.createEmpty()
  );

  const onChange = (newEditorState) => {
    const letter = getCurrentLetter(newEditorState);
    if (getCurrentBlock(newEditorState).getText().length > 9) {
      setEditorState(editorState);
      return;
    }
    setEditorState(newEditorState);
  };

  return <Editor editorState={editorState} onChange={onChange} />;
};
