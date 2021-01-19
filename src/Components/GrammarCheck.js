import React, { useState } from "react";
import {
  Button,
  TextareaAutosize,
  LinearProgress,
  Box,
  Tooltip,
  Typography,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Highlighter from "react-highlight-words";

const useStyles = makeStyles((theme) => ({
  textField: {
    background: "rgba(0, 0, 0, 0)",
    color: theme.palette.color,
    padding: "15px",
    border: "1px solid rgba(0, 191, 191, 0.5)",
    borderRadius: "4px",
    overflowY: "hidden",
    fontFamily: "'Roboto','Helvetica','Arial',sans-serif",
    fontSize: "16px",
    display: "block",
    fontWeight: "400",
    textAlign: "start",
    lineHeight: "23px",
    width: "100%",
    resize: "none",
  },
  error: {
    borderRadius: "3px",
    border: `1px solid ${theme.palette.secondary.main}`,
    display: "inline-block",
    margin: "0 -0.1em",
    padding: "0 0.1em",
  },
}));

export const GrammarCheck = () => {
  const [isLoading, setIsLoading] = useState(false);

  const [inputText, setInputText] = useState(
    "Weit hinten, hinter den Wortbergen, fern der Länder Vokalen und Konsonanten leben die weiten Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste der Semantic."
  );

  const [errorWords, setErrorWords] = useState([]);
  const [errorMessages, setErrorMessages] = useState([]);
  const [proposals, setProposals] = useState([]);

  const onChange = (evt) => {
    setInputText(evt.target.value);
    setErrorWords([]);
    setErrorMessages([]);
    setProposals([]);
  };

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

        result.data.spellAdvices.forEach((spellAdvice) => {
          setErrorWords((errorWords) => [
            ...errorWords,
            spellAdvice.originalError,
          ]);
          setErrorMessages((errorMessages) => [
            ...errorMessages,
            spellAdvice.label || spellAdvice.errorMessage,
          ]);
          setProposals((proposals) => [
            ...proposals,
            spellAdvice.proposals.join(", "),
          ]);
        });

        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  };

  const classes = useStyles();

  const Highlight = ({ children, highlightIndex }) => (
    <Tooltip
      title={
        (
          <React.Fragment>
            <Typography color="primary" variant="h6">
              {proposals[highlightIndex]}
            </Typography>
            <Typography color="inherit" variant="body2">
              {errorMessages[highlightIndex]}
            </Typography>
          </React.Fragment>
        ) ||
        "Diese Schreibweise ist unbekannt. Bitte überprüfen Sie die Rechtschreibung dieses Wortes"
      }
      interactive
      placement="top"
    >
      <span className={classes.error}>{children}</span>
    </Tooltip>
  );

  return (
    <>
      <TextareaAutosize
        rowsMin={5}
        placeholder="Input"
        value={inputText}
        onChange={onChange}
        className={classes.textField}
      />

      <Box mt={2} />

      <Button variant="outlined" color="primary" onClick={checkSpelling}>
        {isLoading ? "Checking spelling" : "Check spelling"}
      </Button>

      <Box mt={2} />

      {isLoading && <LinearProgress />}

      <Box mt={2} />

      <div className={classes.textField}>
        <Highlighter
          searchWords={errorWords}
          autoEscape={true}
          textToHighlight={inputText}
          highlightTag={Highlight}
        />
      </div>
    </>
  );
};
