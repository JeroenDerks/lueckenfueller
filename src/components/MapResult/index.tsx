import { useEffect, useState } from "react";
import { useTranslation } from "next-i18next";
import { Need } from "@/types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { MapSelectorContainer } from "@/components/MapController/styled";
import { ClickToCopyButton } from "@/components/ClickToCopyButton";
import { useRouter } from "next/router";

export default function MapResult({ needId }: { needId: string | string[] }) {
  const [need, setNeed] = useState<Need>();
  const { t } = useTranslation();
  const router = useRouter();

  useEffect(() => {
    if (typeof needId === "string") getNeed(needId);
  }, [needId]);

  const getNeed = async (needId: string) => {
    const response = await fetch("/api/get-need", {
      method: "POST",
      body: JSON.stringify({ needId }),
    });

    const data = await response.json();
    setNeed(data);
  };

  if (typeof window === "undefined" || !need) return;
  const url = window?.origin + "/" + router.locale + "/" + need?.id || "";

  return (
    <MapSelectorContainer>
      <Box width={1}>
        <Typography variant="h5" textAlign="center" mb={1} mt={[1, 1, 1]}>
          In need: {need?.category}
        </Typography>
        <Typography variant="body1" fontSize={[14, 16, 16]} mb={[1, 2, 3]}>
          In a radius of {need?.location?.radius}Km at latitude:{" "}
          {need?.location?.lat.toFixed(5)} and longitude:{" "}
          {need?.location?.lng.toFixed(5)}, it would be great to have a{" "}
          {need?.category}.
        </Typography>
        <Typography variant="body1" fontSize={[14, 16, 16]} mb={[1, 2, 3]}>
          Please like and share to gather support
        </Typography>
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
    </MapSelectorContainer>
  );
}
