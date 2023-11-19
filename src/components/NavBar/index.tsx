import { Box } from "@mui/material";
import { LanguageSwitcher } from "../LanguageSwitcher";
import Image from "next/image";
import Link from "next/link";
import { theme } from "@/styles/theme";

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
          borderBottom: `1px solid ${theme.palette.primary.main}`,
          background: "#fff",
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
          <Link href="/" style={{ marginLeft: "-10px" }}>
            <Image
              src="/lueckenfueller_logo.jpg"
              width={imageSize.w * scale}
              height={imageSize.h * scale}
              alt="logo"
            />
          </Link>
          <Box display="flex" gap={1}>
            <LanguageSwitcher />
          </Box>
        </Box>
      </Box>
    </>
  );
};
