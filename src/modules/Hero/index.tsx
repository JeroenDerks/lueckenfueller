import { Box, Button, Grid, Typography } from "@mui/material";
import { useTranslation } from "next-i18next";
import Link from "next/link";
import { PageLayout } from "../PageLayout";

export const Hero = () => {
  const { t } = useTranslation();

  return (
    <PageLayout>
      <Box
        maxWidth={1200}
        minHeight="50vh"
        display="flex"
        alignItems={["flex-start", "flex-start", "center"]}
      >
        <Grid container rowGap={2}>
          <Grid item xs={12} sm={12} md={7} p={[0, 0, 1]}>
            <Typography variant="h2" component="h1">
              {t("hero.title")}
            </Typography>
            <Typography variant="body2" fontSize={[16, 18, 22]} mt={2} mb={4}>
              {t("hero.description")}
            </Typography>
            <Button component={Link} href="#map" variant="contained">
              {t("hero.buttonText")}
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={5} p={[0, 0, 1]}>
            <Box
              width={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
              sx={{ border: "1px solid grey", borderRadius: 4 }}
              height="100%"
            >
              <p>Graphic</p>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </PageLayout>
  );
};
