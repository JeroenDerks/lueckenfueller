import { Box } from "@mui/material";

export const PageLayout = ({ children }: { children: React.ReactNode[] }) => {
  return (
    <Box display="flex" width={1} justifyContent="center">
      <Box maxWidth={1200} p={2}>
        {children}
      </Box>
    </Box>
  );
};
