import React from "react";
import { HomePage } from "./Pages/HomePage";
import { ThemeProvider } from "./Theme/ThemeProvider";
import { CssBaseline } from "@material-ui/core";

export const App = () => {
  return (
    <ThemeProvider>
      <CssBaseline />
      <HomePage />
    </ThemeProvider>
  );
};
