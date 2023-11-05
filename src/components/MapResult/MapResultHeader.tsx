import React, { useEffect, useState } from "react";
import { Need } from "@/types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Container } from "./styled";
import { useTranslation } from "next-i18next";
import MapResultLikeModal from "./MapResultLikeModal";

export default function MapResultHeader({ need }: { need?: Need }) {
  const [currNeed, setCurrNeed] = useState<Need | undefined>(need);
  const [openModal, setOpenModal] = React.useState(false);

  const { t } = useTranslation();

  useEffect(() => {
    if (need?.id !== currNeed?.id) {
      setCurrNeed(need);
    }
  }, [need, currNeed?.id]);

  if (typeof window === "undefined" || !need) return null;

  return (
    <>
      <Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} sm={12} md={10}>
            <Typography variant="h5">
              {t("MapResult.titlePrefix")}: {currNeed?.title}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={2}>
            <Box
              display="flex"
              alignItems="center"
              justifyContent={["flex-start", "flex-start", "flex-end"]}
            >
              <Typography variant="body2" mr={1}>
                {currNeed?.likes?.length || 0} Likes
              </Typography>
              <IconButton color="primary" onClick={() => setOpenModal(true)}>
                <ThumbUpIcon />
              </IconButton>
            </Box>
          </Grid>
        </Grid>
      </Container>

      <MapResultLikeModal
        closeModal={() => setOpenModal(false)}
        setCurrNeed={(need: Need) => setCurrNeed(need)}
        need={currNeed}
        open={openModal}
      />
    </>
  );
}
