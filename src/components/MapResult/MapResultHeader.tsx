import React, { useEffect, useState } from "react";
import { Need } from "@/types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Badge, Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Container } from "./styled";
import { useTranslation } from "next-i18next";
import MapResultLikeModal from "./MapResultLikeModal";
import useTranslatedOptions from "@/hooks/getTranslatedOptions";

export default function MapResultHeader({ need }: { need?: Need }) {
  const [currNeed, setCurrNeed] = useState<Need | undefined>(need);
  const [openModal, setOpenModal] = React.useState(false);
  const { translatedOptions } = useTranslatedOptions();
  const { t } = useTranslation();

  useEffect(() => {
    if (need?.id !== currNeed?.id) {
      setCurrNeed(need);
    }
  }, [need, currNeed?.id]);

  if (typeof window === "undefined" || !need) return null;
  const translatedNeed = translatedOptions?.find(
    ({ value }) => value === currNeed?.title
  );

  return (
    <>
      <Container>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} sm={12} md={10}>
            <Typography variant="h5">
              {t("MapResult.titlePrefix")}:{" "}
              {translatedNeed?.label || currNeed?.title}
            </Typography>
            <Typography variant="body2" mr={1}>
              {t("MapResult.likeCountSuffix", {
                count: currNeed?.likes?.length || 0,
              })}
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={2}>
            <Box
              alignItems={["center", "center", "flex-end"]}
              display="flex"
              flexDirection={["row", "row", "column"]}
              mt={[1, 1, 0]}
            >
              <IconButton
                color="primary"
                onClick={() => setOpenModal(true)}
                size="large"
              >
                <Badge badgeContent={currNeed?.likes?.length} color="secondary">
                  <ThumbUpIcon />
                </Badge>
              </IconButton>
              <Typography variant="body2" ml={[1, 1, 0]}>
                {t("MapResult.likePrefix")}
              </Typography>
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
