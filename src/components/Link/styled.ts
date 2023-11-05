import { styled } from "@mui/material";
import Link from "next/link";

export const StyledLink = styled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
  fontSize: 10,

  [theme.breakpoints.up("sm")]: {
    fontSize: 12,
  },
}));
