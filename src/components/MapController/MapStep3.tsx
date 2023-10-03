import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";
import LoadingButton from "@mui/lab/LoadingButton";
import { theme } from "@/styles/theme";

export const MapStep3 = ({
  handleStep3Change,
  handleSubmit,
  isLoading,
  onPrevStep,
  step3Value,
}: {
  handleStep3Change: (v: string) => void;
  handleSubmit: () => void;
  isLoading: boolean;
  onPrevStep: () => void;
  step3Value: string;
}) => {
  const { t } = useTranslation();

  return (
    <Box width={1}>
      <Typography variant="h5" mb={1} mt={[1, 1, 1]}>
        <span style={{ color: theme.palette.primary.main }}>3. </span>Who are
        you?
      </Typography>
      <Typography variant="body1" fontSize={[14, 16, 16]} mb={[1, 2, 3]}>
        We&apos;ll never share your email. It&apos;s only required for keeping
        you up to date.
      </Typography>
      <FormControl sx={{ width: "100%" }}>
        <TextField
          label="Email"
          type="email"
          fullWidth
          value={step3Value}
          onChange={(e) => handleStep3Change(e.target.value)}
        />
      </FormControl>
      <Box
        display="flex"
        justifyContent="space-between"
        width={1}
        mt={[1, 2, 3]}
      >
        <Button onClick={onPrevStep}>Back</Button>
        <LoadingButton
          onClick={handleSubmit}
          loading={isLoading}
          variant="contained"
        >
          Submit
        </LoadingButton>
      </Box>
    </Box>
  );
};
