import React from "react";
import { Need } from "@/types";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";

import { Container } from "./styled";
import { format } from "date-fns";

export default function MapResultDetails({ need }: { need?: Need }) {
  if (typeof window === "undefined" || !need) return null;

  const details = [
    { title: "Latitude", value: need?.location?.lat.toFixed(5) },
    { title: "Longitude", value: need?.location?.lng.toFixed(5) },
    { title: "Radius", value: need?.location?.radius.toFixed(5) },
    {
      title: "Date added",
      value: format(new Date(need?.createdAt), "dd MMM yyyy"),
    },
  ];

  return (
    <Container>
      <Grid container xs={12}>
        {details.map(({ title, value }) => (
          <React.Fragment key={title}>
            <Grid item xs={6}>
              <Typography
                variant="body1"
                fontSize={[14, 16, 16]}
                fontWeight={700}
              >
                {title}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body1" fontSize={[14, 16, 16]}>
                {value}
              </Typography>
            </Grid>
          </React.Fragment>
        ))}
      </Grid>
    </Container>
  );
}
