import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";
import LoadingButton from "@mui/lab/LoadingButton";
import { theme } from "@/styles/theme";
import { useState } from "react";
import { Link } from "../Link";

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
  const [isValidEmail, setIsValidEmail] = useState<boolean>();
  const { t } = useTranslation();

  const onSubmit = () => {
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(step3Value);

    if (isValid) {
      handleSubmit();
    } else setIsValidEmail(false);
  };

  return (
    <Box width={1}>
      <Typography variant="h5" mb={1} mt={[1, 1, 1]}>
        <span style={{ color: theme.palette.primary.main }}>3. </span>
        {t("MapController.mapStep3.title")}
      </Typography>
      <Typography variant="body1" fontSize={[14, 16, 16]} mb={[2, 2, 3]}>
        {t("MapController.mapStep3.description")}
      </Typography>
      <FormControl sx={{ width: "100%" }}>
        <TextField
          label="Email"
          error={isValidEmail === false}
          helperText={
            isValidEmail === false &&
            t("MapController.mapStep3.validEmailError")
          }
          fullWidth
          value={step3Value}
          onChange={(e) => {
            setIsValidEmail(true);
            handleStep3Change(e.target.value);
          }}
        />
      </FormControl>
      <Typography variant="body1" fontSize={[10, 12, 12]} my={[2, 2, 3]}>
        {t("MapController.mapStep3.legalPrefix")}{" "}
        <Link href="/datenschutzerklarung" target="blank">
          {t("MapController.mapStep3.privacyStatement")}
        </Link>
        .
      </Typography>
      <Box
        display="flex"
        justifyContent="space-between"
        width={1}
        mt={[1, 2, 3]}
      >
        <Button onClick={onPrevStep}>
          {t("MapController.mapStep3.buttonTextBack")}
        </Button>
        <LoadingButton
          loading={isLoading}
          variant="contained"
          onClick={onSubmit}
        >
          {t("MapController.mapStep3.buttonTextSubmit")}
        </LoadingButton>
      </Box>
    </Box>
  );
};
