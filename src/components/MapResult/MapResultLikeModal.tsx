import React, { useState } from "react";
import { Need } from "@/types";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Button, FormControl, Modal, TextField } from "@mui/material";
import { useTranslation } from "next-i18next";
import { Link } from "../Link";
import { LoadingButton } from "@mui/lab";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 4,
  boxShadow: 24,
  p: 2,
};

export default function MapResultLikeModal({
  need,
  open,
  closeModal,
  setCurrNeed,
}: {
  need?: Need;
  open: boolean;
  closeModal: () => void;
  setCurrNeed: (v: Need) => void;
}) {
  const [loading, setLoading] = useState(false);
  const [isValidEmail, setIsValidEmail] = useState<boolean>();
  const [email, setEmail] = useState<string>();

  const { t } = useTranslation();

  const handleSubmit = async () => {
    setLoading(true);
    const response = await fetch("/api/add-like", {
      method: "POST",
      body: JSON.stringify({ needId: need?.id, email }),
    });

    const data = await response.json();
    setCurrNeed(data);
    setLoading(false);
    closeModal();
  };

  const onSubmit = () => {
    if (!email) return;
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (isValid) {
      handleSubmit();
    } else setIsValidEmail(false);
  };
  if (typeof window === "undefined" || !need) return null;

  return (
    <Modal
      open={open}
      onClose={closeModal}
      aria-labelledby="parent-modal-title"
      aria-describedby="parent-modal-description"
    >
      <Box sx={{ ...style, maxWidth: 400, width: "90%" }}>
        <Typography variant="body1" fontSize={[14, 16, 16]} mb={[1, 2, 3]}>
          {t("MapResult.MapResultModal.description")}
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
            onChange={(e) => {
              setIsValidEmail(true);
              setEmail(e.target.value);
            }}
          />
        </FormControl>
        <Typography variant="body1" fontSize={[10, 12, 12]} my={[2, 2, 3]}>
          {t("MapResult.MapResultModal.legalPrefix")}{" "}
          <Link href="/privacy" target="blank">
            {t("MapResult.MapResultModal.privacyStatement")}
          </Link>
          .
        </Typography>
        <Box
          display="flex"
          justifyContent="space-between"
          width={1}
          mt={[1, 2, 3]}
        >
          <Button onClick={closeModal}>
            {t("MapController.mapStep3.buttonTextBack")}
          </Button>
          <LoadingButton
            loading={loading}
            variant="contained"
            onClick={onSubmit}
            disabled={!email || !isValidEmail}
          >
            {t("MapController.mapStep3.buttonTextSubmit")}
          </LoadingButton>
        </Box>
      </Box>
    </Modal>
  );
}
