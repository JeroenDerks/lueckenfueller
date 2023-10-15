import React, { useEffect, useState } from "react";
import { Need } from "@/types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import { Container } from "./styled";

export default function MapResultHeader({ need }: { need?: Need }) {
  const [currNeed, setCurrNeed] = useState<Need | undefined>(need);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (need?.id !== currNeed?.id) {
      setCurrNeed(need);
    }
  }, [need, currNeed?.id]);

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

  return (
    <Container>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item xs={12} sm={12} md={10}>
          <Typography variant="h5">Needed: {currNeed?.category}</Typography>
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
            <IconButton color="primary" onClick={handleLike} disabled={loading}>
              <ThumbUpIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
