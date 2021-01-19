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
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2),
  },
}));

export const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <Container maxWidth="md" component="main" className={classes.main}>
        <GrammarCheck />
      </Container>
      <Footer />
    </div>
  );
};
