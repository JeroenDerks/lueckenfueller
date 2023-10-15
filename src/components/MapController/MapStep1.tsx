import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";
import React from "react";
import { theme } from "@/styles/theme";
import { NeedSelector } from "../NeedSelector";

export const MapStep1 = ({
  handleStep1Change,
  onNextStep,
  step1Value,
}: {
  handleStep1Change: (v: string) => void;
  onNextStep: () => void;
  step1Value: string;
}) => {
  const [otherValue, setOtherValue] = React.useState<string>();
  const { t } = useTranslation();

  const handleChange = (event: SelectChangeEvent<any>) => {
    handleStep1Change(event.target.value);
  };

  const handleSubmit = () => {
    if (step1Value === "Other" && otherValue) {
      handleStep1Change(otherValue);
    }
    onNextStep();
  };

  return (
    <>
      <Typography variant="h5" mb={[2, 2, 3]} mt={[1, 1, 1]}>
        <span style={{ color: theme.palette.primary.main }}>1. </span>
        {t("MapController.mapStep1.title")}
      </Typography>

      <NeedSelector value={step1Value} handleChange={handleChange} />
      {step1Value === "Other" && (
        <Box mt={2}>
          <TextField
            label="What do you need?"
            fullWidth
            onChange={(e) => setOtherValue(e.target.value)}
          ></TextField>
        </Box>
      )}
      <Box display="flex" justifyContent="flex-end" width={1} mt={[2, 2, 3]}>
        <Button
          onClick={handleSubmit}
          variant="contained"
          disabled={step1Value === ""}
        >
          {t("MapController.mapStep1.buttonText")}
        </Button>
      </Box>
    </>
  );
};
