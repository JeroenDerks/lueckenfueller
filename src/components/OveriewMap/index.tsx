import React, { useEffect, useState } from "react";
import { Layer, Marker, Source } from "react-map-gl";
import * as turf from "@turf/turf";

import { Need } from "@/types";

import Pin from "../MapMarkers/Pin";
import { MapComp } from "../MapComp";
import { PageLayout } from "@/modules/PageLayout";
import { theme } from "@/styles/theme";

export const OverviewMap = () => {
  const [needs, setNeeds] = useState<Need[]>();
  const [category, setCategory] = useState<string>();
  const [selectedMarkerId, setSelectedMarkerId] = useState<string>();

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
      <MapComp>
        {needs?.map(({ location, id }) => (
          <React.Fragment key={id}>
            <Marker
              longitude={location?.lng!}
              latitude={location?.lat!}
              anchor="bottom"
              onClick={() => setSelectedMarkerId(id)}
            >
              <Pin
                size={20}
                color={id === selectedMarkerId ? "#f100dc" : "darkblue"}
              />
            </Marker>
            <Source
              id={id}
              type="geojson"
              data={turf.circle(
                [location?.lng!, location?.lat!],
                location?.radius!
              )}
            >
              <Layer
                id={id}
                type="fill"
                paint={{ "fill-color": "#088", "fill-opacity": 0.2 }}
              />
            </Source>
          </React.Fragment>
        ))}
      </MapComp>
    </PageLayout>
  );
};
