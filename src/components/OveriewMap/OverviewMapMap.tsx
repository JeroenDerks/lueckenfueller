import React, { useMemo, useState } from "react";
import { Popup } from "react-map-gl";

import { Need } from "@/types";

import { MapComp } from "../MapComp";
import { RegularMarker } from "../MapMarkers/RegularMarker";
import { useRouter } from "next/router";
import { Box, Typography } from "@mui/material";
import { Link } from "../Link";

export const OverviewMapMap = ({ needs }: { needs?: Need[] }) => {
  const [selectedNeed, setSelectedNeed] = useState<Need | false>(false);
  const router = useRouter();

  const markers = useMemo(
    () =>
      needs?.map((need) => (
        <RegularMarker
          key={need.id}
          id={need.id}
          latitude={need.location?.lat!}
          longitude={need.location?.lng!}
          // @ts-ignore typing of event.originalEvent to prevent propogation which in turn is needed not close modal immediately
          onClick={(e) => {
            e?.originalEvent.stopPropagation();
            setSelectedNeed(need);
          }}
          radius={need.location?.radius!}
        />
      )),
    [needs]
  );

  return (
    <MapComp>
      {markers}
      {selectedNeed && needs?.includes(selectedNeed) && (
        <Popup
          longitude={selectedNeed.location?.lng!}
          latitude={selectedNeed.location?.lat!}
          anchor="bottom"
          style={{ zIndex: 4 }}
          onClose={() => setSelectedNeed(false)}
        >
          <Box minWidth={220}>
            <Typography variant="body1" fontWeight="700">
              {selectedNeed.title}
            </Typography>
            <Box display="flex" width={1} justifyContent="space-between">
              <Typography variant="body2">
                {selectedNeed.likes?.length} Likes
              </Typography>
              <Link href={`/${selectedNeed.id}`} target="blank">
                More info
              </Link>
            </Box>
          </Box>
        </Popup>
      )}
    </MapComp>
  );
};
