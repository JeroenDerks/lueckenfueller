import React, { useState } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import Map, {
  Layer,
  Marker,
  MarkerDragEvent,
  NavigationControl,
  Source,
} from "react-map-gl";
import Pin from "./Pin";
import * as turf from "@turf/turf";
import { LatLng, Radius } from "@/types";

export const MapComp = ({
  updateMarkerLocation,
  showMarker,
  lat,
  lng,
  radius,
}: {
  updateMarkerLocation: (v: LatLng & Radius) => void;
  lat?: number;
  showMarker?: boolean;
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

  if (!process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN) return null;

  return (
    <Map
      initialViewState={{ latitude: 52.52, longitude: 13.4, zoom: 10 }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/light-v11"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
    >
      {showMarker && lat && lng && radius && (
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
          <NavigationControl />
        </>
      )}
    </Map>
  );
};
