import React from "react";
import Map, { NavigationControl } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import { Container } from "./styled";

const defaultView = { latitude: 52.52, longitude: 13.4, zoom: 10 };

export const MapComp = ({
  children,
  hideNavigationControl,
  initialViewState,
}: {
  children: React.ReactNode | React.ReactNode[];
  hideNavigationControl?: boolean;
  initialViewState?: { latitude: number; longitude: number; zoom: number };
}) => {
  if (!process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN) return null;

  return (
    <Container>
      <Map
        initialViewState={initialViewState || defaultView}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/light-v11"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
      >
        {children}
        {!hideNavigationControl && (
          <NavigationControl position="bottom-right" />
        )}
      </Map>
    </Container>
  );
};
