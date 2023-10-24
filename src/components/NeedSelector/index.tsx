import useTranslatedOptions from "@/hooks/getTranslatedOptions";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useTranslation } from "next-i18next";
import React from "react";

export const NeedSelector = ({
  handleChange,
  value,
}: {
  handleChange: (v: string) => void;
  value?: string;
}) => {
  const { t } = useTranslation();
  const { translatedOptions } = useTranslatedOptions();

  const MenuProps = { PaperProps: { style: { maxHeight: 400 } } };

  return (
    <FormControl fullWidth>
      <InputLabel id="need-option-labellabel">
        {t("MapController.mapStep1.selectLabel")}
      </InputLabel>
      <Select
        labelId="need-option-labellabel"
        id="need-options"
        label={t("MapController.mapStep1.selectLabel")}
        onChange={(e: SelectChangeEvent<any>) => handleChange(e.target.value)}
        value={value}
        MenuProps={MenuProps}
      >
        {translatedOptions?.map(({ label, value }) => (
          <MenuItem value={value} key={value}>
            {label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};
