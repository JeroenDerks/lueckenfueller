import { createTheme, responsiveFontSizes } from "@mui/material/styles";

export let theme = createTheme({
  palette: {
    primary: {
      main: "#4EAC99",
    },
    secondary: {
      main: "#edf2ff",
    },
  },
});

theme = responsiveFontSizes(theme);

export const colors = {
  green: "#4EAC99",
};
