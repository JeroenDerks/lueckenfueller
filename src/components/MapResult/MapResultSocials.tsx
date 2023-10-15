import React, { useEffect, useState } from "react";
import { Need } from "@/types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { ClickToCopyButton } from "@/components/ClickToCopyButton";
import { useRouter } from "next/router";
import { Badge } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Container } from "./styled";

export default function MapResultSocials({ need }: { need?: Need }) {
  const [currNeed, setCurrNeed] = useState<Need | undefined>(need);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLike = async () => {
    setLoading(true);
    const response = await fetch("/api/add-like", {
      method: "POST",
      body: JSON.stringify({ needId: currNeed?.id }),
    });

    const data = await response.json();
    setCurrNeed(data);
    setLoading(false);
  };

  if (typeof window === "undefined" || !need) return null;
  const url = window?.origin + "/" + router.locale + "/" + need?.id || "";

  return (
    <Container>
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
          <IconButton color="primary" onClick={handleLike} disabled={loading}>
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
    </Container>
  );
}
