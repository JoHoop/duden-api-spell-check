import React, { useState } from "react";
import { TextareaAutosize } from "@material-ui/core";
import { Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  textField: {
    background: "rgba(0, 0, 0, 0)",
    color: "rgb(250, 250, 250)",
    padding: "15px",
    border: "1px solid rgba(0, 191, 191, 0.5)",
    borderRadius: "4px",
    overflowY: "hidden",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: "14px",
    display: "block",
    fontWeight: "400",
    textAlign: "start",
    lineHeight: "20px",
  },
});

export const GrammarCheck = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [inputText, setInputText] = useState(
    "Weit hinten, hinter den Wortbergen, fern der Länder Vokalen und Konsonanten leben die weiten Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste der Semantic."
  );

  const onChange = (evt) => setInputText(evt.target.value);

  const raw = JSON.stringify({
    text: inputText,
  });
  const requestOptions = {
    method: "POST",
    headers: new Headers({
      "content-type": "application/json",
    }),
    body: raw,
    redirect: "follow",
  };

  const checkSpelling = () => {
    setIsLoading(true);
    fetch(
      `https://mentor.duden.de/api/grammarcheck?_format=json`,
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        console.log(result.data);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const classes = useStyles();

  return (
    <>
      <TextareaAutosize
        rowsMin={10}
        placeholder="Enter text"
        value={inputText}
        onChange={onChange}
        className={classes.textField}
      />

      <Button variant="outlined" color="primary" onClick={checkSpelling}>
        {isLoading ? "Checking spelling" : "Check spelling"}
      </Button>
    </>
  );
};
