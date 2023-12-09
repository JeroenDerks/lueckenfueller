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
          <Grid item xs={12} sm={12} md={6} p={[0, 0, 1]}>
            <Typography variant="h2" component="h1" fontWeight={"500"}>
              {t("hero.title")}
            </Typography>
            <Typography variant="body2" fontSize={[16, 18, 22]} mt={2} mb={4}>
              {t("hero.description")}
            </Typography>
            <Button component={Link} href="/add" variant="contained">
              {t("hero.buttonText")}
            </Button>
          </Grid>
          <Grid item xs={12} sm={12} md={6} p={[0, 0, 1]}>
            <Box
              width={1}
              display="flex"
              justifyContent="center"
              alignItems="center"
              height="100%"
            >
              <Box width={1} position="relative" pb="56.25%" height={0}>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/NTZyLigZDyE?si=K75CyA0ENLfeCecQ"
                  title="Lueckenfueller promo"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;  web-share"
                  allowFullScreen
                  frameBorder={0}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                  }}
                ></iframe>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </PageLayout>
  );
};
