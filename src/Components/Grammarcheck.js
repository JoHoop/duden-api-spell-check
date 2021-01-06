import React, { useState } from "react";
import { Button } from "@material-ui/core";
import { StateProvider } from "./StateProvider";

export const GrammarCheck = () => {
  const [isLoading, setIsLoading] = useState(false);
  const raw = JSON.stringify({
    text:
      "Weit hinten, hinter den Wortbergen, fern der Länder Vokalen und Konsonanten leben die weiten Blindtexte. Abgeschieden wohnen sie in Buchstabhausen an der Küste der Semantic.",
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

  return (
    <>
      <StateProvider />

      <Button variant="outlined" color="primary">
        {isLoading ? "Checking spelling" : "Check spelling"}
      </Button>
    </>
  );
};
