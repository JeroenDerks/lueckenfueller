import useTranslatedOptions from "@/hooks/getTranslatedOptions";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";

export const MapStep1 = ({
  handleStep1Change,
  onNextStep,
  step1Value,
}: {
  handleStep1Change: (v: string) => void;
  onNextStep: () => void;
  step1Value: string;
}) => {
  const { t } = useTranslation();
  const { translatedOptions } = useTranslatedOptions();

  const handleChange = (event: SelectChangeEvent<any>) => {
    handleStep1Change(event.target.value);
  };

  const MenuProps = { PaperProps: { style: { maxHeight: 400 } } };

  return (
    <>
      <Typography variant="h5" textAlign="center" mb={[2, 2, 3]} mt={[1, 1, 1]}>
        {t("MapController.mapStep1.title")}
      </Typography>
      <FormControl fullWidth>
        <InputLabel id="need-option-labellabel">
          {t("MapController.mapStep1.selectLabel")}
        </InputLabel>
        <Select
          labelId="need-option-labellabel"
          id="need-options"
          label={t("MapController.mapStep1.selectLabel")}
          onChange={handleChange}
          value={step1Value}
          MenuProps={MenuProps}
        >
          {translatedOptions?.map(({ label, value }) => (
            <MenuItem value={value} key={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Box display="flex" justifyContent="flex-end" width={1} mt={[2, 2, 3]}>
        <Button
          onClick={onNextStep}
          variant="contained"
          disabled={step1Value === ""}
        >
          {t("MapController.mapStep1.buttonText")}
        </Button>
      </Box>
    </>
  );
};
