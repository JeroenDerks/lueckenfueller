import { Box, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";

export const Hero = () => {
  const { t } = useTranslation();
  return (
    <Box
      maxWidth={1200}
      minHeight="50vh"
      display="flex"
      alignItems={["flex-start", "flex-start", "center"]}
    >
      <Typography variant="h1">{t("hero.title")}</Typography>
    </Box>
  );
};
