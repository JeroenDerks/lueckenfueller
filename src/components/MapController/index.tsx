import { useState } from "react";
import { useRouter } from "next/router";

import { LatLng, Radius } from "@/types";

import { MapStep1, Step1Value } from "./MapStep1";
import { MapStep2 } from "./MapStep2";
import { MapStep3 } from "./MapStep3";
import { MapSelectorContainer, Overlay } from "./styled";
import { DraggableAreaMarker } from "../MapMarkers/DraggableAreaMarker";
import { Box } from "@mui/material";

export const MapController = ({ loc }: { loc: LatLng & Radius }) => {
  const [step, setStep] = useState(1);
  const [step1Value, setStep1Value] = useState<Step1Value>();
  const [step2Value, setStep2Value] = useState<LatLng & Radius>(loc);
  const [step3Value, setStep3Value] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  console.log({ step2Value });

  const onNextStep = () => {
    setStep((s) => s + 1);
  };

  const onPrevStep = () => {
    setStep((s) => s - 1);
  };

  const handleSubmit = async () => {
    setIsLoading(true);

    const response = await fetch("/api/add-need", {
      method: "POST",
      body: JSON.stringify({
        category: step1Value?.category,
        title: step1Value?.title,
        location: step2Value,
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
      {step !== 1 && (
        <DraggableAreaMarker
          lat={step2Value.lat}
          lng={step2Value.lng}
          radius={step2Value.radius}
          updateMarkerLocation={(v) => setStep2Value(v)}
        />
      )}

      <Box width={1} display="flex" justifyContent="center">
        <MapSelectorContainer>
          {step === 1 && (
            <MapStep1
              {...{ onNextStep, step1Value }}
              handleStep1Change={(v) => setStep1Value(v)}
            />
          )}

          {step === 2 && (
            <MapStep2
              {...{ step2Value, onNextStep, onPrevStep }}
              handleStep2Change={(v) => setStep2Value(v)}
            />
          )}

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
