import { Box, Typography } from "@mui/material";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { colors } from "@/styles/theme";
import Image from "next/image";

export const NavBar = () => {
  const imageSize = { w: 623, h: 134 };
  const scale = 0.4;
  return (
    <>
      <Box
        width={1}
        display="flex"
        justifyContent="center"
        sx={{
          borderBottom: `1px solid ${colors.green}`,
        }}
      >
        <Box
          maxWidth={1220}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          width={1}
          py={1}
          px={2}
        >
          <Image
            src="/lueckenfueller_logo.jpg"
            width={imageSize.w * scale}
            height={imageSize.h * scale}
            alt="logo"
          />
          <Box display="flex" gap={1}>
            <LanguageSwitcher />
          </Box>
        </Box>
      </Box>
    </>
  );
};
