import { Box } from "@mui/material";

export const PageLayout = ({
  backgroundColor = "#fff",
  children,
}: {
  backgroundColor?: string;
  children: React.ReactNode[] | React.ReactNode;
}) => {
  return (
    <Box
      display="flex"
      width={1}
      justifyContent="center"
      sx={{ backgroundColor }}
    >
      <Box maxWidth={1200} width={1} p={2} display="block">
        {children}
      </Box>
    </Box>
  );
};
