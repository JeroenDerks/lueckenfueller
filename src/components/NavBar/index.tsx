import { Box } from "@mui/material";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { useRouter } from "next/router";

export const NavBar = () => {
  const { t } = useTranslation();
  const router = useRouter();

  return (
    <>
      <Box
        width={1}
        sx={{ height: "20px", border: "1px solid red", background: "green" }}
      >
        {t("hero_title")}
      </Box>
      <p>{router.locale}</p>
      <Link href="/" locale="de">
        Deutsch
      </Link>
      <Link href="/" locale="en">
        English
      </Link>
      <h1>{t("hero_title")}</h1>
    </>
  );
};
