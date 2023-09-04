import { Box } from "@mui/material";

export const PageLayout = ({
  children,
}: {
  children: React.ReactNode[] | React.ReactNode;
}) => {
  return (
    <Box display="flex" width={1} justifyContent="center">
      <Box maxWidth={1200} width={1} p={2} display="block">
        {children}
      </Box>
    </Box>
  );
};
