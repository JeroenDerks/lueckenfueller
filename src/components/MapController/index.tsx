import { PageLayout } from "@/modules/PageLayout";
import { theme } from "@/styles/theme";
import { useState } from "react";
import { Container, MapSelectorContainer, Overlay } from "./styled";
import { MapStep1 } from "./MapStep1";
import { MapStep2 } from "./MapStep2";
import { MapStep3 } from "./MapStep3";
import { LatLng, Radius } from "@/types";
import { MapComp } from "../Map";

const defaultLoc = { radius: 5, lat: 52.52, lng: 13.4 };

export const MapController = () => {
  const [step, setStep] = useState(1);
  const [step1Value, setStep1Value] = useState("");
  const [step2Value, setStep2Value] = useState<LatLng & Radius>(defaultLoc);
  const [step3Value, setStep3Value] = useState("");

  const onNextStep = () => {
    setStep((s) => s + 1);
  };

  const onPrevStep = () => {
    setStep((s) => s - 1);
  };

  const handleSubmit = () => {
    console.log({ step1Value, step2Value, step3Value });
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
              {...{ step3Value, handleSubmit, onPrevStep }}
              handleStep3Change={(v) => setStep3Value(v)}
            />
          )}
        </MapSelectorContainer>
      </Container>
    </PageLayout>
  );
};
