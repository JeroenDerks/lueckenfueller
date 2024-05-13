import React, { useState } from "react";
import Map, { NavigationControl } from "react-map-gl";

import "mapbox-gl/dist/mapbox-gl.css";
import { Container } from "./styled";
import mapboxgl, { LngLat } from "mapbox-gl";
import { ViewStateChangeEvent } from "react-map-gl";
import { LatLng, Radius, Zoom } from "@/types";

const defaultView = { latitude: 52.52, longitude: 13.4, zoom: 10.5 };

export const MapComp = ({
  children,
  handleMapMove,
  hideNavigationControl,
  initialViewState,
}: {
  children?: React.ReactNode | React.ReactNode[];
  handleMapMove?: ({ lat, lng, zoom }: LatLng & Zoom & Radius) => void;
  hideNavigationControl?: boolean;
  initialViewState?: { latitude: number; longitude: number; zoom: number };
}) => {
  const [map, setMap] = useState<mapboxgl.Map>();

  if (!process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN) return null;

  const onMoveEnd = (e: ViewStateChangeEvent) => {
    if (handleMapMove) {
      // @ts-ignore
      const w = map?.transform!.width!;
      // @ts-ignore
      const h = map?.transform.height;
      const circleRadiusPx = 250 / 2;
      const edge = map?.unproject([w / 2 - circleRadiusPx, h / 2]);
      const { latitude: lat, longitude: lng, zoom } = e.viewState;
      const distance = edge?.distanceTo({ lng, lat } as LngLat);
      const radius = distance && distance * 0.001;

      if (radius) {
        handleMapMove({ lat, lng, zoom, radius });
      }
    }
  };

  return (
    <Container>
      <Map
        initialViewState={initialViewState || defaultView}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/light-v11"
        mapboxAccessToken={process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN}
        ref={(ref) => ref && setMap(ref.getMap())}
        onMoveEnd={onMoveEnd}
      >
        {children && children}
        {!hideNavigationControl && (
          <NavigationControl position="bottom-right" />
        )}
      </Map>
    </Container>
  );
};
