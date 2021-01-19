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
      background: white,
      color: black,
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
      background: black,
      color: white,
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
      MuiTooltip: {
        tooltip: {
          maxWidth: 220,
          color: white,
          backgroundColor: "rgb(16,31,31)",
          background: "rgba(0, 0, 0, 0)",
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
          resize: "none",
        },
      },
    },
  })
);
