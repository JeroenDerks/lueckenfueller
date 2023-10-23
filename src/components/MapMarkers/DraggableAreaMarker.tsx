import React from "react";
import { Layer, Marker, MarkerDragEvent, Source } from "react-map-gl";
import * as turf from "@turf/turf";

import { LatLng, Radius } from "@/types";

import Pin from "./Pin";

export const DraggableAreaMarker = ({
  updateMarkerLocation,
  lat,
  lng,
  radius,
}: {
  updateMarkerLocation: (v: LatLng & Radius) => void;
  lat?: number;
  lng?: number;
  radius?: number;
}) => {
  const onMarkerDrag = (event: MarkerDragEvent) => {
    if (!event || !radius) return;

    updateMarkerLocation({
      lng: event.lngLat.lng,
      lat: event.lngLat.lat,
      radius,
    });
  };

  if (!lat || !lng || !radius) return null;

  return (
    <>
      <Marker
        longitude={lng}
        latitude={lat}
        anchor="bottom"
        draggable
        onDrag={onMarkerDrag}
      >
        <Pin size={20} />
      </Marker>
      <Source
        id="my-data"
        type="geojson"
        data={turf.circle([lng, lat], radius)}
      >
        <Layer
          id="point-90-hi"
          type="fill"
          paint={{ "fill-color": "#088", "fill-opacity": 0.2 }}
        />
      </Source>
    </>
  );
};
