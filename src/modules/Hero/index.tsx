import { Box, Button, Grid, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import Link from "next/link";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <Box
      maxWidth={1200}
      minHeight="50vh"
      display="flex"
      alignItems={["flex-start", "flex-start", "center"]}
    >
      <Grid container>
        <Grid item xs={12} sm={12} md={7}>
          <Typography variant="h1" fontSize={[24, 32, 56]}>
            {t("hero.title")}
          </Typography>
          <Typography variant="body2" fontSize={[16, 18, 22]} my={2}>
            {t("hero.description")}
          </Typography>
          <Button component={Link} href="#map" variant="contained">
            {t("hero.buttonText")}
          </Button>
        </Grid>
        <Grid item xs={12} sm={12} md={5}>
          <Box
            width={1}
            display="flex"
            justifyContent="center"
            alignItems="center"
            sx={{ border: "1px solid grey" }}
            height="100%"
          >
            <p>some graphic</p>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
