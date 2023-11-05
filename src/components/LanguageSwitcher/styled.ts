import { styled } from "@mui/material";
import Link from "next/link";

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 10,
}));

export const BoldText = styled("span")({
  fontWeight: "700",
  fontSize: 16,
});
