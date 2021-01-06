import React, { useState, useEffect } from "react";

export const Grammarcheck = () => {
  const [isLoading, setIsLoading] = useState(true);

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

  useEffect(() => {
    fetch(
      `https://mentor.duden.de/api/grammarcheck?_format=json`,
      requestOptions
    )
      .then((response) => {
        console.log(response);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  }, []);

  return <>{isLoading && <h1>Checking spelling</h1>}</>;
};
