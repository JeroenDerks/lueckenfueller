import React from "react";
import { useTranslation } from "next-i18next";
import { PageLayout } from "../PageLayout";
import { Box, Grid, Typography } from "@mui/material";
import { theme } from "@/styles/theme";

export const Description = () => {
  const { t } = useTranslation();

  const steps = [
    { title: t("description.step1") },
    { title: t("description.step2") },
    { title: t("description.step3") },
  ];

  return (
    <PageLayout backgroundColor="#f0f0f2">
      <Box py={[6, 6, 16]} width={1}>
        <Typography variant="h4" mb={[2, 2, 4]} textAlign="center">
          {t("description.title")}
        </Typography>
        <Grid container spacing={2}>
          {steps.map(({ title }, index) => (
            <React.Fragment key={title}>
              <Grid item xs={12} sm={12} md={4} gap={1}>
                <Box width={1} display="flex" justifyContent="center" mb={2}>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width={1}
                    sx={{
                      background: theme.palette.primary.main,
                      width: 48,
                      height: 48,
                      borderRadius: "50%",
                    }}
                  >
                    <Typography
                      variant="h5"
                      color="white"
                      textAlign="center"
                      fontSize={[18, 20, 24]}
                    >
                      {index + 1}
                    </Typography>
                  </Box>
                </Box>

                <Typography
                  variant="h5"
                  fontSize={[18, 20, 24]}
                  textAlign="center"
                >
                  {title}
                </Typography>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Box>
    </PageLayout>
  );
};
