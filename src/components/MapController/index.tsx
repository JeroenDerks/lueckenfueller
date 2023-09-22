import { PageLayout } from "@/modules/PageLayout";
import { theme } from "@/styles/theme";
import { Box, Typography } from "@mui/material";
import { useState } from "react";
import { MapComp } from "../Map";
import { MapStepSelector } from "../MapStepSelector";

export const MapController = () => {
  const [step, setStep] = useState(1);

  return (
    <PageLayout backgroundColor={theme.palette.primary.main}>
      <Box
        width={1}
        height="80vh"
        position="relative"
        sx={{ borderRadius: 4, border: "4px solid white", overflow: "hidden" }}
        alignItems="center"
        display="flex"
        flexDirection="column"
      >
        {step === 1 && (
          <>
            <MapComp />
            <Box
              width={1}
              height="100%"
              position="absolute"
              top={0}
              sx={{
                background: "#2b2b2b80",
                backdropFilter: "blur(5px)",
                zIndex: "2",
              }}
            ></Box>
          </>
        )}

        <MapStepSelector
          step={step}
          handleStep1Change={(v) => console.log(v)}
        />
      </Box>
    </PageLayout>
  );
};
