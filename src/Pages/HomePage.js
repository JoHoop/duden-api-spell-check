import React from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { GrammarCheck } from "../Components/GrammarCheck";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
}));

export const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Container maxWidth="md">
        <GrammarCheck />
      </Container>
      <Footer />
    </div>
  );
};
