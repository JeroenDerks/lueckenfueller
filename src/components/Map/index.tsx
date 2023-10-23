import React from "react";
import Map, { NavigationControl } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";

export const MapComp = ({
  children,
  hideNavigationControl,
}: {
  children: React.ReactNode | React.ReactNode[];
  hideNavigationControl?: boolean;
}) => {
  if (!process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN) return null;

  return (
    <Map
      initialViewState={{ latitude: 52.52, longitude: 13.4, zoom: 10 }}
      style={{ width: "100%", height: "100%" }}
      mapStyle="mapbox://styles/mapbox/light-v11"
      mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
    >
      {children}
      {!hideNavigationControl && <NavigationControl position="bottom-right" />}
    </Map>
  );
};
