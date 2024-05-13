import { Zoom } from "@/types";
import { styled } from "@mui/material";

export const Container = styled("div")<Zoom>(({ theme, zoom }) => ({
  width: 250,
  height: 250,
  borderRadius: 125,
  background: zoom > 10 ? theme.palette.primary.main : "#c43472",
  opacity: zoom > 10 ? 0.3 : 0.2,
}));

export const Wrapper = styled("div")`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 2;
  pointer-events: none;
`;

export const MarkerSvg = styled("svg")`
  fill: #c43472;
  position: absolute;
  margin-top: -10px;
`;
