import React, { useState } from "react";
import { useTranslation } from "next-i18next";
import { FormControl, TextField } from "@mui/material";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

import { theme } from "@/styles/theme";

import { NeedSelector } from "../NeedSelector";

export type Step1Value = {
  category: string;
  title: string;
};

export const MapStep1 = ({
  handleStep1Change,
  onNextStep,
  step1Value,
}: {
  handleStep1Change: (v: Step1Value) => void;
  onNextStep: () => void;
  step1Value?: Step1Value;
}) => {
  const [category, setCategory] = useState<string>(step1Value?.category || "");
  const [title, setTitle] = useState<string>(step1Value?.title || "");
  const { t } = useTranslation();

  const handleSubmit = () => {
    if (!category) return;

    const _title = category === "Other" && title ? title : category;
    handleStep1Change({ category, title: _title });
    onNextStep();
  };

  const missingTitle = category === "Other" && (!title || title?.length < 3);

  const getHelperText = () => {
    if (title && title?.length < 3) return t("MapController.mapStep1.required");
    if (isMultipleEntries(title))
      return t("MapController.mapStep1.maxOneEntryText");
  };

  const isMultipleEntries = (t: string) =>
    t.includes(" und ") ||
    t.includes(" and ") ||
    t.includes(",") ||
    t.includes("&");

  return (
    <FormControl fullWidth>
      <Typography variant="h5" mb={[2, 2, 3]} mt={[1, 1, 1]}>
        <span style={{ color: theme.palette.primary.main }}>1. </span>
        {t("MapController.mapStep1.title")}
      </Typography>

      <NeedSelector value={category} handleChange={setCategory} />
      {category === "Other" && (
        <Box mt={2}>
          <TextField
            error={Boolean(title && title?.length < 3)}
            fullWidth
            helperText={getHelperText()}
            label={t("MapController.mapStep1.inputPlaceholder")}
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          />
        </Box>
      )}
      <Box display="flex" justifyContent="flex-end" width={1} mt={[2, 2, 3]}>
        <Button
          onClick={handleSubmit}
          variant="contained"
          disabled={category === "" || missingTitle}
        >
          {t("MapController.mapStep1.buttonText")}
        </Button>
      </Box>
    </FormControl>
  );
};
