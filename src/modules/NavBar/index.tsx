import { Box, Typography } from "@mui/material";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { colors } from "@/styles/theme";

export const NavBar = () => {
  return (
    <>
      <Box
        width={1}
        display="flex"
        justifyContent="center"
        sx={{ background: colors.green }}
      >
        <Box
          maxWidth={1220}
          display="flex"
          justifyContent="space-between"
          width={1}
          py={1}
          px={2}
        >
          <Typography color="white">Lueckenfueller</Typography>
          <Box display="flex" gap={1}>
            <LanguageSwitcher />
          </Box>
        </Box>
      </Box>
    </>
  );
};
