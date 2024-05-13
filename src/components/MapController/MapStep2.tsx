import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";
import { theme } from "@/styles/theme";

export const MapStep2 = ({
  onNextStep,
  onPrevStep,
}: {
  onPrevStep: () => void;
  onNextStep: () => void;
}) => {
  const { t } = useTranslation();

  return (
    <>
      <Typography variant="h5">
        <span style={{ color: theme.palette.primary.main }}>2. </span>
        {t("MapController.mapStep2.title")}
      </Typography>
      <Typography variant="body1" fontSize={[14, 16, 16]}>
        {t("MapController.mapStep2.description")}
      </Typography>

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
