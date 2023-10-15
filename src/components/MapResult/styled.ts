import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  borderRadius: 32,
  background: "#fff",
  padding: 16,
  marginBottom: 8,
  height: "100%",

  [theme.breakpoints.up("sm")]: {
    padding: 24,
  },
}));
