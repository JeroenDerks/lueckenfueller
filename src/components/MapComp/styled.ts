import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  alignItems: "center",
  border: "4px solid white",
  borderRadius: 16,
  display: "flex",
  flexDirection: "column",
  height: "70vh",
  overflow: "hidden",
  position: "relative",
  width: "100%",
  maskImage:
    "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAIAAACQd1PeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAA5JREFUeNpiYGBgAAgwAAAEAAGbA+oJAAAAAElFTkSuQmCC)" /* this fixes the overflow:hidden in Chrome/Opera */,

  "&::after": {
    borderRadius: 16,
    border: "2px solid #c43472",
    content: '""',
    display: "block",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    pointerEvents: "none",
  },

  [theme.breakpoints.up("sm")]: {
    borderRadius: 32,

    "&::after": {
      borderRadius: 32,
    },
  },
}));
