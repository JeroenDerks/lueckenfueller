import { useTranslation } from "next-i18next";
import { PageLayout } from "../PageLayout";
import { Box, Grid, Typography } from "@mui/material";

export const Description = () => {
  const { t } = useTranslation();

  const steps = [
    {
      title: t("description.step1.title"),
      body: t("description.step1.body"),
    },
    {
      title: t("description.step2.title"),
      body: t("description.step2.body"),
    },
    {
      title: t("description.step3.title"),
      body: t("description.step3.body"),
    },
  ];

  return (
    <PageLayout backgroundColor="#fafafa">
      <Box py={[4, 6, 16]} width={1}>
        <Typography
          variant="h4"
          textAlign={["left", "left", "center"]}
          fontSize={[22, 28, 32]}
        >
          {t("description.title")}
        </Typography>
        <Typography
          variant="body1"
          fontSize={[16, 16, 18]}
          textAlign={["left", "left", "center"]}
        >
          {t("description.intro")}
        </Typography>
        <Grid container mt={[2, 2, 4]}>
          {steps.map(({ title, body }) => (
            <Grid
              item
              key={title}
              xs={12}
              sm={12}
              md={4}
              px={[0, 0, 1]}
              py={[1, 1, 0]}
              my={1}
            >
              <Typography variant="h5" fontSize={[18, 20, 24]}>
                {title}
              </Typography>
              <Typography variant="body1" fontSize={16}>
                {body}
              </Typography>
            </Grid>
          ))}
        </Grid>
      </Box>
    </PageLayout>
  );
};
