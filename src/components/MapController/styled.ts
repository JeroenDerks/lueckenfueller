import { styled } from "@mui/material";

export const Overlay = styled("div")(({ theme }) => ({
  backdropFilter: "blur(5px)",
  background: theme.palette.primary.main,
  height: "100%",
  position: "absolute",
  opacity: 0.6,
  top: 0,
  transition: "opactiy .5s",
  width: "100%",
  zIndex: "2",
}));

export const MapSelectorContainer = styled("div")(({ theme }) => ({
  background: "#fff",
  borderRadius: 16,
  maxWidth: 400,
  padding: 8,
  position: "absolute",
  top: 0,
  width: "100%",
  zIndex: 3,
  left: 0,
  right: 0,

  [theme.breakpoints.up("sm")]: {
    top: 24,
    padding: 16,
  },
}));
