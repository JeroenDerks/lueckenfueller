import { Box, CircularProgress } from "@mui/material";

export const Loader = ({ minHeight }: LoaderProps) => (
  <Box
    minHeight={minHeight || "80vh"}
    width="100%"
    display="flex"
    alignItems="center"
    justifyContent="center"
    bgcolor="white"
    borderRadius={4}
  >
    <CircularProgress color="secondary" />
  </Box>
);

type LoaderProps = {
  minHeight?: string;
};
