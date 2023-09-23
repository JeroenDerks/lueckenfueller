import { PageLayout } from "@/modules/PageLayout";
import { theme } from "@/styles/theme";
import { useState } from "react";
import { Container, MapSelectorContainer, Overlay } from "./styled";
import { MapStep1 } from "./MapStep1";
import { MapStep2 } from "./MapStep2";
import { MapStep3 } from "./MapStep3";
import { LatLng, Radius } from "@/types";
import { MapComp } from "../Map";
import { MapStep4 } from "./MapStep4";

const defaultLoc = { radius: 5, lat: 52.52, lng: 13.4 };

export const MapController = () => {
  const [step, setStep] = useState(1);
  const [step1Value, setStep1Value] = useState("");
  const [step2Value, setStep2Value] = useState<LatLng & Radius>(defaultLoc);
  const [step3Value, setStep3Value] = useState("");
  const [step4Value, setStep4Value] = useState();
  const [isLoading, setIsLoading] = useState(false);

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
      setStep4Value(data.needId);
      onNextStep();
    }

    setIsLoading(false);
  };

  return (
    <PageLayout backgroundColor={theme.palette.primary.main}>
      <Container>
        <MapComp
          showMarker={step !== 1}
          lat={step2Value.lat}
          lng={step2Value.lng}
          radius={step2Value.radius}
          updateMarkerLocation={(v) => setStep2Value(v)}
        />
        {step === 1 && <Overlay />}
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

          {step === 4 && <MapStep4 {...{ step4Value }} />}
        </MapSelectorContainer>
      </Container>
    </PageLayout>
  );
};
