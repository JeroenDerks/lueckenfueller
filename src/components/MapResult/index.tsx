import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { Need } from "@/types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { MapSelectorContainer } from "@/components/MapController/styled";
import { ClickToCopyButton } from "@/components/ClickToCopyButton";
import { useRouter } from "next/router";
import { Badge, CircularProgress } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";

export default function MapResult({ needId }: { needId?: string }) {
  const [need, setNeed] = useState<Need>();
  const [loading, setLoading] = useState(false);
  const { t, ready } = useTranslation();
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

  const handleLike = async () => {
    setLoading(true);
    const response = await fetch("/api/add-like", {
      method: "POST",
      body: JSON.stringify({ needId }),
    });

    const data = await response.json();
    setNeed(data);
    setLoading(false);
  };

  if (typeof window === "undefined") return null;
  const url = window?.origin + "/" + router.locale + "/" + need?.id || "";

  return (
    <MapSelectorContainer>
      {(!ready || !need || !url) && (
        <Box
          width={1}
          height={300}
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <CircularProgress />
        </Box>
      )}
      {ready && need && url && (
        <Box width={1}>
          <Typography variant="h5" mb={1} mt={[1, 1, 1]}>
            {t("MapController.mapStep1.selectLabel")}: {need?.category}
          </Typography>
          <Typography variant="body1" fontSize={[14, 16, 16]} mb={[1, 2, 3]}>
            In a radius of {need?.location?.radius}Km at latitude:{" "}
            {need?.location?.lat.toFixed(5)} and longitude:{" "}
            {need?.location?.lng.toFixed(5)}, it would be great to have a{" "}
            {need?.category}.
          </Typography>
          <Box
            display="flex"
            mb={[1, 2, 3]}
            alignItems="center"
            justifyContent="space-between"
          >
            <Typography variant="body1" fontSize={[14, 16, 16]}>
              Please like and share to gather support
            </Typography>
            <Badge badgeContent={need.likes?.length} color="primary">
              <IconButton
                color="primary"
                onClick={handleLike}
                disabled={loading}
              >
                <ThumbUpIcon />
              </IconButton>
            </Badge>
          </Box>
          <Box
            display="flex"
            width={1}
            justifyContent="space-between"
            alignItems="center"
          >
            {url && <Typography variant="caption">{url}</Typography>}
            <ClickToCopyButton copyValue={url} />
          </Box>
        </Box>
      )}
    </MapSelectorContainer>
  );
}
