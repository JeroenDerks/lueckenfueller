import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { Montserrat } from "next/font/google";

const montserratFont = Montserrat({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

export let theme = createTheme({
  palette: {
    primary: {
      main: "#4EAC99",
    },
    secondary: {
      main: "#c43472",
    },
  },
  typography: {
    fontFamily: montserratFont.style.fontFamily,
  },
});

theme = responsiveFontSizes(theme);
