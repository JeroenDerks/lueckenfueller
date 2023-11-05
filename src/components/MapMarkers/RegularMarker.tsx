import React from "react";
import { Layer, Marker, Source } from "react-map-gl";
import * as turf from "@turf/turf";

import Pin from "../MapMarkers/Pin";

export const RegularMarker = ({
  isActive,
  latitude,
  longitude,
  onClick,
  radius,
  id = String(Math.random()),
}: {
  isActive?: boolean;
  latitude: number;
  longitude: number;
  onClick: () => void;
  radius: number;
  id: string;
}) => {
  return (
    <>
      <Marker {...{ latitude, longitude, onClick }} anchor="bottom">
        <Pin size={20} color={isActive ? "#bd317a" : "darkblue"} />
      </Marker>
      <Source
        id={id}
        type="geojson"
        data={turf.circle([longitude!, latitude!], radius)}
      >
        <Layer
          id={id}
          type="fill"
          paint={{ "fill-color": "#088", "fill-opacity": 0.2 }}
        />
      </Source>
    </>
  );
};
