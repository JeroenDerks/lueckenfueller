import React, { useMemo, useState } from "react";
import { Popup } from "react-map-gl";
import { useTranslation } from "next-i18next";

import { Need } from "@/types";

import { MapComp } from "../MapComp";
import { RegularMarker } from "../MapMarkers/RegularMarker";
import { Box, Typography } from "@mui/material";
import { Link } from "../Link";
import useTranslatedOptions from "@/hooks/getTranslatedOptions";

export const OverviewMapMap = ({ needs }: { needs?: Need[] }) => {
  const [selectedNeed, setSelectedNeed] = useState<Need | false>(false);
  const { translatedOptions } = useTranslatedOptions();
  const { t } = useTranslation();

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

  const matchTitle = (title?: string) => {
    const translatedNeed = translatedOptions?.find(
      ({ value }) => value === title
    );

    return translatedNeed?.label || title;
  };

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
              {matchTitle(selectedNeed.title)}
            </Typography>
            <Box display="flex" width={1} justifyContent="space-between">
              <Typography variant="body2">
                {selectedNeed.likes?.length} Likes
              </Typography>
              <Link href={`/${selectedNeed.id}`} target="blank">
                {t("OverviewMap.OverviewMapMap.moreInfo")}
              </Link>
            </Box>
          </Box>
        </Popup>
      )}
    </MapComp>
  );
};
