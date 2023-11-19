import { styled } from "@mui/material";

export const LanguageOption = styled("span")(({ theme }) => ({
  color: theme.palette.secondary.main,
  fontSize: 10,
  cursor: "pointer",
}));

export const BoldText = styled("span")({
  fontWeight: "700",
  fontSize: 16,
});
