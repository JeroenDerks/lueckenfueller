import { Box } from "@mui/material";
import { LanguageSwitcher } from "../LanguageSwitcher";
import Link from "next/link";
import { theme } from "@/styles/theme";
import { Logo } from "../Logo";

export const NavBar = () => {
  return (
    <>
      <Box
        width={1}
        display="flex"
        justifyContent="center"
        sx={{
          borderBottom: `1px solid ${theme.palette.secondary.main}`,
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
            <Logo scale={0.3} />
          </Link>
          <Box display="flex" gap={1}>
            <LanguageSwitcher />
          </Box>
        </Box>
      </Box>
    </>
  );
};
