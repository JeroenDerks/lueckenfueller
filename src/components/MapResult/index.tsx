import React, { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { Need } from "@/types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ClickToCopyButton } from "@/components/ClickToCopyButton";
import { useRouter } from "next/router";
import { Badge, CircularProgress, Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Container } from "./styled";
import { format } from "date-fns";
import MapResultSocials from "./MapResultSocials";
import MapResultDetails from "./MapResultDetails";

export default function MapResult({ needId }: { needId?: string }) {
  const [need, setNeed] = useState<Need>();
  const { ready } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    if (needId) getNeed(needId);
  }, [needId]);

  const getNeed = async (needId: string) => {
    const response = await fetch("/api/get-need", {
      method: "POST",
      body: JSON.stringify({ needId }),
    });

    const data = await response.json();
    setNeed(data);
  };

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
          <Container>
            <Box width={1}>
              <Typography variant="h5" mb={1} mt={[1, 1, 1]}>
                Needed: {need?.category}
              </Typography>
            </Box>
          </Container>
          <Grid container columnGap={2} wrap="nowrap">
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
