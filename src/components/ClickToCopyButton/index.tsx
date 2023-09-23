import { Button, Snackbar } from "@mui/material";
import { useState } from "react";

export const ClickToCopyButton = ({ copyValue }: { copyValue: string }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(true);
    navigator.clipboard.writeText(copyValue);
  };

  return (
    <>
      <Button onClick={handleClick} variant="contained">
        Copy
      </Button>
      <Snackbar
        open={open}
        onClose={() => setOpen(false)}
        autoHideDuration={2000}
        message="Copied to clipboard"
      />
    </>
  );
};
