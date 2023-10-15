import React from "react";
import { useTranslation } from "next-i18next";
import { Need } from "@/types";
import Box from "@mui/material/Box";
import { useRouter } from "next/router";
import { CircularProgress, Grid } from "@mui/material";
import { Container } from "./styled";
import MapResultSocials from "./MapResultSocials";
import MapResultDetails from "./MapResultDetails";
import MapResultHeader from "./MapResultHeader";

export default function MapResult({ need }: { need?: Need }) {
  const { ready } = useTranslation();
  const router = useRouter();

  if (typeof window === "undefined" || !need) return null;
  const url = window?.origin + "/" + router.locale + "/" + need?.id || "";

  return (
    <>
      {(!ready || !need || !url) && (
        <Container>
          <Box
            width={1}
            height={300}
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <CircularProgress />
          </Box>
        </Container>
      )}
      {ready && need && url && (
        <>
          <Grid container spacing={1} mb={1}>
            <Grid item xs={12} sm={12} md={12}>
              <MapResultHeader need={need} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <MapResultDetails need={need} />
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <MapResultSocials need={need} />
            </Grid>
          </Grid>
        </>
      )}
    </>
  );
}
