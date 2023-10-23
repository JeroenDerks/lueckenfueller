import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { TextField } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { theme } from "@/styles/theme";

import { NeedSelector } from "../NeedSelector";

export type Step1Value = {
  category: string;
  title: string;
};

export const MapStep1 = ({
  handleStep1Change,
  onNextStep,
}: {
  handleStep1Change: (v: Step1Value) => void;
  onNextStep: () => void;
}) => {
  const [category, setCategory] = useState<string>("");
  const [title, setTitle] = useState<string>();
  const { t } = useTranslation();

  const handleChange = (event: SelectChangeEvent<any>) => {
    setCategory(event.target.value);
  };

  const handleSubmit = () => {
    if (!category) return;

    const _title = category === "Other" && title ? title : category;
    handleStep1Change({ category, title: _title });
    onNextStep();
  };

  return (
    <>
      <Typography variant="h5" mb={[2, 2, 3]} mt={[1, 1, 1]}>
        <span style={{ color: theme.palette.primary.main }}>1. </span>
        {t("MapController.mapStep1.title")}
      </Typography>

      <NeedSelector value={category} handleChange={handleChange} />
      {category === "Other" && (
        <Box mt={2}>
          <TextField
            label="What do you need?"
            fullWidth
            onChange={(e) => setTitle(e.target.value)}
          ></TextField>
        </Box>
      )}
      <Box display="flex" justifyContent="flex-end" width={1} mt={[2, 2, 3]}>
        <Button
          onClick={handleSubmit}
          variant="contained"
          disabled={category === ""}
        >
          {t("MapController.mapStep1.buttonText")}
        </Button>
      </Box>
    </>
  );
};
