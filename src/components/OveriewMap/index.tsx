import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";

import { PageLayout } from "@/components/PageLayout";
import { theme } from "@/styles/theme";
import { Need } from "@/types";

import { MapComp } from "../MapComp";
import { RegularMarker } from "../MapMarkers/RegularMarker";
import { useRouter } from "next/router";
import { NeedSelector } from "../NeedSelector";
import { MapSelectorContainer } from "../MapController/styled";

export const OverviewMap = () => {
  const [needs, setNeeds] = useState<Need[]>();
  const [category, setCategory] = useState<string>();
  const router = useRouter();

  useEffect(() => {
    const listNeeds = async () => {
      const response = await fetch("/api/list-needs", {
        method: "POST",
        body: JSON.stringify({ category }),
      });

      if (response.ok) {
        const data = await response.json();
        if (data) {
          setNeeds(data);
        }
      }
    };

    listNeeds();
  }, [category]);

  return (
    <PageLayout backgroundColor={theme.palette.primary.main}>
      <Box position="relative" width={1} display="flex" justifyContent="center">
        <MapSelectorContainer>
          <NeedSelector handleChange={(v: string) => setCategory(v)} />
        </MapSelectorContainer>
      </Box>
      <MapComp>
        {needs?.map(({ location, id }) => (
          <RegularMarker
            key={id}
            id={id}
            latitude={location?.lat!}
            longitude={location?.lng!}
            onClick={() => router.push({ pathname: `/${id}` })}
            radius={location?.radius!}
          />
        ))}
      </MapComp>
    </PageLayout>
  );
};
