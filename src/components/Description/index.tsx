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
    <PageLayout backgroundColor="#fafafa">
      <Grid container mt={[2, 2, 4]} py={[6, 6, 16]} alignItems="center">
        <Grid item xs={3} sm={3} md={4}>
          <Typography
            variant="h5"
            fontSize={[400, 400, 620]}
            fontWeight={900}
            lineHeight={0.5}
            color="primary"
            textAlign="center"
            sx={{ opacity: 0.25 }}
          >
            3
          </Typography>
        </Grid>
        <Grid item container xs={9} sm={9} md={8} rowGap={1}>
          {steps.map(({ title }, index) => (
            <React.Fragment key={title}>
              <Grid item xs={2} sm={1} md={1} gap={1}>
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  sx={{
                    background: theme.palette.primary.main,
                    width: 32,
                    height: 32,
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
              </Grid>
              <Grid item xs={10} sm={11} md={11}>
                <Typography variant="h5" fontSize={[18, 20, 24]}>
                  {title}
                </Typography>
              </Grid>
            </React.Fragment>
          ))}
        </Grid>
      </Grid>
    </PageLayout>
  );
};
