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

export const MapComp = () => {
  const [marker, setMarker] = useState({
    latitude: 52.52,
    longitude: 13.4,
    radius: 5,
  });

  const onMarkerDrag = (event: MarkerDragEvent) => {
    setMarker({
      longitude: event.lngLat.lng,
      latitude: event.lngLat.lat,
      radius: marker.radius,
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
      <Marker
        longitude={marker.longitude}
        latitude={marker.latitude}
        anchor="bottom"
        draggable
        onDrag={onMarkerDrag}
      >
        <Pin size={20} />
      </Marker>
      <Source
        id="my-data"
        type="geojson"
        data={turf.circle([marker.longitude, marker.latitude], marker.radius)}
      >
        <Layer
          id="point-90-hi"
          type="fill"
          paint={{ "fill-color": "#088", "fill-opacity": 0.2 }}
        />
      </Source>
      <NavigationControl />
    </Map>
  );
};
