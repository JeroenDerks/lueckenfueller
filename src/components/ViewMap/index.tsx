import React from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, { Layer, Marker, Source } from "react-map-gl";

import * as turf from "@turf/turf";
import { Location, Need } from "@/types";
import Pin from "../Map/Pin";

export const ViewMap = ({
  locations,
  need,
  onMarkerClick,
}: {
  locations?: Location[];
  need?: Need;
  onMarkerClick: (id: string) => void;
}) => {
  if (!process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN) return null;

  return (
    <Map
      initialViewState={{
        latitude: need?.location?.lat,
        longitude: need?.location?.lng,
        zoom: 13,
      }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/light-v11"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
    >
      {locations?.map(({ lng, lat, radius, id, needLocationId }) => (
        <React.Fragment key={id}>
          <Marker
            longitude={lng}
            latitude={lat}
            anchor="bottom"
            onClick={() => onMarkerClick(needLocationId)}
          >
            <Pin
              size={20}
              color={need?.id === needLocationId ? "#f100dc" : "darkblue"}
            />
          </Marker>
          <Source id={id} type="geojson" data={turf.circle([lng, lat], radius)}>
            <Layer
              id={id}
              type="fill"
              paint={{ "fill-color": "#088", "fill-opacity": 0.2 }}
            />
          </Source>
        </React.Fragment>
      ))}
    </Map>
  );
};
