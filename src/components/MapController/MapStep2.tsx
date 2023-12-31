import { LatLng, Radius } from "@/types";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Slider from "@mui/material/Slider";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";
import { theme } from "@/styles/theme";

export const MapStep2 = ({
  handleStep2Change,
  onNextStep,
  onPrevStep,
  step2Value,
}: {
  handleStep2Change: (v: LatLng & Radius) => void;
  onPrevStep: () => void;
  onNextStep: () => void;
  step2Value: LatLng & Radius;
}) => {
  const { t } = useTranslation();

  const handleChange = (_: Event, newValue: number | number[]) => {
    if (typeof newValue === "number") {
      handleStep2Change({ ...step2Value, radius: newValue });
    }
  };

  return (
    <>
      <Typography variant="h5">
        <span style={{ color: theme.palette.primary.main }}>2. </span>
        {t("MapController.mapStep2.title")}
      </Typography>
      <Typography variant="body1" fontSize={[14, 16, 16]}>
        {t("MapController.mapStep2.description")}
      </Typography>
      <Slider
        value={step2Value.radius}
        onChange={handleChange}
        min={0.1}
        max={10}
        step={0.1}
      />
      <Box
        display="flex"
        justifyContent="space-between"
        width={1}
        mt={[1, 2, 3]}
      >
        <Button onClick={onPrevStep}>
          {t("MapController.mapStep2.buttonTextBack")}
        </Button>
        <Button onClick={onNextStep} variant="contained">
          {t("MapController.mapStep2.buttonTextNext")}
        </Button>
      </Box>
    </>
  );
};
