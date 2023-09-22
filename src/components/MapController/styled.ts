import { styled } from "@mui/material";

export const Container = styled("div")({
  alignItems: "center",
  border: "4px solid white",
  borderRadius: 32,
  display: "flex",
  flexDirection: "column",
  height: "80vh",
  overflow: "hidden",
  position: "relative",
  width: "100%",
});

export const Overlay = styled("div")({
  backdropFilter: "blur(5px)",
  background: "#2b2b2b",
  height: "100%",
  position: "absolute",
  opacity: 0.5,
  top: 0,
  transition: "opactiy .5s",
  width: "100%",
  zIndex: "2",
});

export const MapSelectorContainer = styled("div")(({ theme }) => ({
  background: "#fff",
  borderRadius: 16,
  maxWidth: 400,
  padding: 8,
  position: "absolute",
  top: 0,
  width: "100%",
  zIndex: 3,

  [theme.breakpoints.up("sm")]: {
    top: 24,
    padding: 16,
  },
}));
