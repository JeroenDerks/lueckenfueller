import { useState } from "react";
import { useRouter } from "next/router";

import { LatLng, NeedCoordinates, Radius } from "@/types";

import { MapStep1, Step1Value } from "./MapStep1";
import { MapStep2 } from "./MapStep2";
import { MapStep3 } from "./MapStep3";
import { MapSelectorContainer, Overlay } from "./styled";
import { DraggableAreaMarker } from "../MapMarkers/DraggableAreaMarker";
import { Box } from "@mui/material";
import { LocationIndicator } from "./LocationIndicator";

export const MapController = ({
  markerCoords,
}: {
  markerCoords?: NeedCoordinates;
}) => {
  const [step, setStep] = useState(1);
  const [step1Value, setStep1Value] = useState<Step1Value>();
  const [step3Value, setStep3Value] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const onNextStep = () => {
    setStep((s) => s + 1);
  };

  const onPrevStep = () => {
    setStep((s) => s - 1);
  };

  const handleSubmit = async () => {
    if (!markerCoords) return;
    setIsLoading(true);

    const { lat, lng, radius } = markerCoords;
    const location = { lat, lng, radius };

    const response = await fetch("/api/add-need", {
      method: "POST",
      body: JSON.stringify({
        category: step1Value?.category,
        title: step1Value?.title,
        location,
        email: step3Value,
      }),
    });

    const data = await response.json();

    if (data.needId) {
      router.push({ pathname: data.needId });
    } else {
      setIsLoading(false);
    }
  };

  return (
    <>
      {step === 1 && <Overlay />}
      {step !== 1 && <LocationIndicator zoom={markerCoords?.zoom || 10.5} />}

      <Box width={1} display="flex" justifyContent="center">
        <MapSelectorContainer>
          {step === 1 && (
            <MapStep1
              {...{ onNextStep, step1Value }}
              handleStep1Change={(v) => setStep1Value(v)}
            />
          )}

          {step === 2 && <MapStep2 {...{ onNextStep, onPrevStep }} />}

          {step === 3 && (
            <MapStep3
              {...{ step3Value, handleSubmit, onPrevStep, isLoading }}
              handleStep3Change={(v) => setStep3Value(v)}
            />
          )}
        </MapSelectorContainer>
      </Box>
    </>
  );
};
