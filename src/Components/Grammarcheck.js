import React, { useState, useEffect } from "react";
import { TextareaAutosize } from "@material-ui/core";
import { Button } from "@material-ui/core";

export const Grammarcheck = () => {
  const [isLoading, setIsLoading] = useState(true);

  const [inputValue, setInputValue] = useState(
    "Weit hinten, hinter den Wortbergen, fern der Länder Vokalen und Konsonanten leben die weiten Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste der Semantic."
  );

  const [textValue, setTextValue] = useState(
    "Weit hinten, hinter den Wortbergen, fern der Länder Vokalen und Konsonanten leben die weiten Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste der Semantic."
  );

  const raw = JSON.stringify({
    text: textValue,
  });
  const requestOptions = {
    method: "POST",
    headers: new Headers({
      "content-type": "application/json",
    }),
    body: raw,
    redirect: "follow",
  };

  useEffect(() => {
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
  }, [textValue]);

  return (
    <>
      <TextareaAutosize
        rowsMax={10}
        placeholder="Enter text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button
        variant="outlined"
        color="primary"
        onClick={() => {
          setTextValue(inputValue);
        }}
      >
        {isLoading ? "Checking spelling" : "Check spelling"}
      </Button>
    </>
  );
};
