import React from "react";
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";
import { Grammarcheck } from "../Components/Grammarcheck";

const useStyles = makeStyles((theme) => ({
  homePage: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
}));

export const HomePage = () => {
  const classes = useStyles();

  return (
    <div className={classes.homePage}>
      <Header />
      <Container maxWidth="md">
        <Grammarcheck />
      </Container>
      <Footer />
    </div>
  );
};
