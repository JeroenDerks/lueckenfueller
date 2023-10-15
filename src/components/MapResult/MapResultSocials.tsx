import React from "react";
import { Need } from "@/types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ClickToCopyButton } from "@/components/ClickToCopyButton";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";
import { Container } from "./styled";

export default function MapResultSocials({ need }: { need?: Need }) {
  const router = useRouter();
  const { t } = useTranslation();
  if (typeof window === "undefined" || !need) return null;
  const url = window?.origin + "/" + router.locale + "/" + need?.id || "";

  return (
    <Container>
      <Box mb={[1, 2, 3]} alignItems="center" justifyContent="space-between">
        <Typography variant="body1" fontWeight={700} fontSize={[14, 16, 16]}>
          Like and share
        </Typography>
        <Typography variant="body1" fontSize={[14, 16, 16]}>
          {t("MapResult.MapResultSocials.body")}
        </Typography>
      </Box>
      <Box
        display="flex"
        width={1}
        justifyContent="space-between"
        alignItems="center"
      >
        {url && (
          <Typography variant="caption" noWrap>
            {url}
          </Typography>
        )}
        <ClickToCopyButton copyValue={url} />
      </Box>
    </Container>
  );
}
