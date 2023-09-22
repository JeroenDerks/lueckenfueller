import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import FormHelperText from "@mui/material/FormHelperText";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";

export const MapStep3 = ({
  handleStep3Change,
  handleSubmit,
  onPrevStep,
  step3Value,
}: {
  handleStep3Change: (v: string) => void;
  handleSubmit: () => void;
  onPrevStep: () => void;
  step3Value: string;
}) => {
  const { t } = useTranslation();

  return (
    <Box width={1}>
      <Typography variant="h5" textAlign="center" my={3}>
        Who are you?
      </Typography>
      <FormControl sx={{ width: "100%" }}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          value={step3Value}
          onChange={(e) => handleStep3Change(e.target.value)}
        />
        <FormHelperText id="my-helper-text">
          We will never share your email.
        </FormHelperText>
      </FormControl>
      <Box display="flex" justifyContent="space-between" width={1} mt={3}>
        <Button onClick={onPrevStep}>Back</Button>
        <Button onClick={handleSubmit} variant="contained">
          Submit
        </Button>
      </Box>
    </Box>
  );
};
