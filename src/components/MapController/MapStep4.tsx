import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { ClickToCopyButton } from "../ClickToCopyButton";

export const MapStep4 = ({ step4Value }: { step4Value?: string }) => {
  const { t } = useTranslation();
  const url = window.origin + "#map?id=" + step4Value;

  return (
    <Box width={1}>
      <Typography variant="h5" textAlign="center" mb={1} mt={[1, 1, 1]}>
        Done!
      </Typography>
      <Typography variant="body1" fontSize={[14, 16, 16]} mb={[1, 2, 3]}>
        Your need has been added. Promote it to your friends using the link
        below
      </Typography>
      <Box display="flex">
        <Typography variant="caption">{url}</Typography>
        <ClickToCopyButton copyValue={url} />
      </Box>
    </Box>
  );
};
