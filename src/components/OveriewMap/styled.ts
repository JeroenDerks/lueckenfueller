import { styled } from "@mui/material";

export const Container = styled("div")(({ theme }) => ({
  background: "#fff",
  borderRadius: 16,
  padding: 8,

  [theme.breakpoints.up("sm")]: {
    padding: 16,
  },
}));

export const FilterContainer = styled(Container)({
  maxWidth: 400,
  width: "100%",
});
