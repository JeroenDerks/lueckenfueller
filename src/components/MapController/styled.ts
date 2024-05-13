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
  zIndex: 2,
  borderRadius: 16,

  [theme.breakpoints.up("sm")]: {
    borderRadius: 32,
  },
}));

export const MapSelectorContainer = styled("div")(({ theme }) => ({
  background: "#fff",
  borderRadius: 16,
  border: "2px solid #c43472",
  outline: "2px solid white",
  maxWidth: 320,
  padding: 16,
  position: "absolute",
  top: -64,
  width: "100%",
  zIndex: 3,

  [theme.breakpoints.up("sm")]: {
    maxWidth: 400,
    top: -80,
  },
}));
