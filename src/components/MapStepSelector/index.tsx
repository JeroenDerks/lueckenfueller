import { Box, Typography } from "@mui/material";
import { MapStep1 } from "./MapStep1";

export const MapStepSelector = ({
  step,
  handleStep1Change,
}: {
  step: number;
  handleStep1Change: (v: string) => void;
}) => {
  return (
    <Box
      position="absolute"
      zIndex={3}
      top={40}
      maxWidth={400}
      p={3}
      width="100%"
      sx={{ background: "#fff", borderRadius: 2 }}
    >
      {step === 1 && <MapStep1 handleStep1Change={handleStep1Change} />}
    </Box>
  );
};
