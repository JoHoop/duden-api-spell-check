import React, { useState, createContext } from "react";
import { EditorState, ContentState } from "draft-js";
import { EditorWrapper } from "./EditorWrapper";

export const EditorStateContext = createContext();

export const StateProvider = () => {
  const [editorState, setEditorState] = useState(
    EditorState.createWithContent(
      ContentState.createFromText(
        "Weit hinten, hinter den Wortbergen, fern der Länder Vokalen und Konsonanten leben die weiten Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste der Semantic."
      )
    )
  );

  const editorText = editorState.getCurrentContent().getPlainText();

  console.log(editorText);

  return (
    <EditorStateContext.Provider
      value={{
        editorState,
        setEditorState,
        editorText,
      }}
    >
      <EditorWrapper />
    </EditorStateContext.Provider>
  );
};
