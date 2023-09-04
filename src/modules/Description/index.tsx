import { useTranslation } from "next-i18next";
import { PageLayout } from "../PageLayout";
import { Grid, Typography } from "@mui/material";

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
    <>
      <Typography variant="h4">{t("description.title")}</Typography>
      <Typography variant="body1">{t("description.intro")}</Typography>
      <Grid container>
        {steps.map(({ title, body }) => (
          <Grid
            item
            key={title}
            xs={12}
            sm={12}
            md={4}
            px={[0, 0, 1]}
            py={[1, 1, 0]}
          >
            <Typography variant="h5">{title}</Typography>
            <Typography variant="body1">{body}</Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
