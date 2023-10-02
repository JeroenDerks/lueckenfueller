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
  const handleChange = (event: SelectChangeEvent<any>) => {
    handleStep1Change(event.target.value);
  };
  let options = [
    { label: "Food delivery service", value: "Food delivery service" },
    { label: "Laundry service", value: "Laundry service" },
    { label: "Cleaning service", value: "Cleaning service" },
    { label: "Grocery delivery", value: "Grocery delivery" },
    { label: "Transportation service", value: "Transportation service" },
    { label: "Pet-sitting service", value: "Pet-sitting service" },
    { label: "Tech support", value: "Tech support" },
    { label: "Landscaping service", value: "Landscaping service" },
    { label: "Personal trainer", value: "Personal trainer" },
    { label: "Meal kit delivery", value: "Meal kit delivery" },
    { label: "Massage service", value: "Massage service" },
    { label: "Subscription box service", value: "Subscription box service" },
    { label: "Car maintenance service", value: "Car maintenance service" },
    { label: "Event planning service", value: "Event planning service" },
    { label: "Virtual assistant service", value: "Virtual assistant service" },
    { label: "Tutoring service", value: "Tutoring service" },
    { label: "Home repair service", value: "Home repair service" },
    { label: "Streaming service", value: "Streaming service" },
    { label: "Fitness class", value: "Fitness class" },
    { label: "Internet connection", value: "Internet connection" },
  ];

  const MenuProps = { PaperProps: { style: { maxHeight: 400 } } };

  return (
    <>
      <Typography variant="h5" textAlign="center" mb={[2, 2, 3]} mt={[1, 1, 1]}>
        What are you missing?
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
          size="small"
        >
          {options.map(({ label, value }) => (
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
          Next
        </Button>
      </Box>
    </>
  );
};
