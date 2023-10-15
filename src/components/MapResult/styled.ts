import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  borderRadius: 32,
  background: "#fff",
  padding: 8,
  marginBottom: 8,

  [theme.breakpoints.up("sm")]: {
    padding: 24,
  },
}));
