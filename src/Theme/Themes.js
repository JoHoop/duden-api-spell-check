import { createMuiTheme, responsiveFontSizes } from "@material-ui/core";

export const primary = "#00bfbf";
export const black = "#111111";
export const white = "#fafafa";

export const LightTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: "light",
      primary: {
        main: primary,
      },
      secondary: {
        main: primary,
      },
      background: white,
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: {
            color: black,
            backgroundColor: white,
          },
        },
      },
    },
  })
);

export const DarkTheme = responsiveFontSizes(
  createMuiTheme({
    palette: {
      type: "dark",
      primary: {
        main: primary,
      },
      secondary: {
        main: primary,
      },
      background: black,
    },
    overrides: {
      MuiCssBaseline: {
        "@global": {
          body: {
            color: white,
            backgroundColor: black,
          },
        },
      },
    },
  })
);
