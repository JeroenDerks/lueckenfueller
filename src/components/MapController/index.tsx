import { useState } from "react";
import { useRouter } from "next/router";

import { PageLayout } from "@/modules/PageLayout";
import { theme } from "@/styles/theme";
import { LatLng, Radius } from "@/types";

import { MapStep1 } from "./MapStep1";
import { MapStep2 } from "./MapStep2";
import { MapStep3 } from "./MapStep3";
import { MapComp } from "../Map";
import { Container, MapSelectorContainer, Overlay } from "./styled";
import { DraggableAreaMarker } from "../MapMarkers/DraggableAreaMarker";

const defaultLoc = { radius: 5, lat: 52.52, lng: 13.4 };

export const MapController = () => {
  const [step, setStep] = useState(1);
  const [step1Value, setStep1Value] = useState("");
  const [step2Value, setStep2Value] = useState<LatLng & Radius>(defaultLoc);
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
    setIsLoading(true);

    const response = await fetch("/api/add-need", {
      method: "POST",
      body: JSON.stringify({
        category: step1Value,
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
    <PageLayout backgroundColor={theme.palette.primary.main}>
      <div id="map" />
      <Container>
        <MapComp>
          {step === 1 && <Overlay />}
          {step !== 1 && (
            <DraggableAreaMarker
              lat={step2Value.lat}
              lng={step2Value.lng}
              radius={step2Value.radius}
              updateMarkerLocation={(v) => setStep2Value(v)}
            />
          )}
          <MapSelectorContainer>
            {step === 1 && (
              <MapStep1
                {...{ step1Value, onNextStep }}
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
        </MapComp>
      </Container>
    </PageLayout>
  );
};
