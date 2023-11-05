import { styled } from "@mui/material";

export const Container = styled("div")({
  alignItems: "center",
  border: "4px solid white",
  borderRadius: 32,
  display: "flex",
  flexDirection: "column",
  height: "70vh",
  overflow: "hidden",
  position: "relative",
  width: "100%",
  maskImage:
    "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC)" /* this fixes the overflow:hidden in Chrome/Opera */,
});
