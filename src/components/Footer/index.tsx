import { Grid } from "@mui/material";
import { PageLayout } from "../PageLayout";
import { Link } from "../Link";
import Image from "next/image";

export const Footer = () => {
  const imageSize = { w: 623, h: 134 };
  const scale = 0.25;

  return (
    <PageLayout>
      <Grid container>
        <Grid item xs={12} sm={6} md={6}>
          <Image
            src="/lueckenfueller_logo.jpg"
            width={imageSize.w * scale}
            height={imageSize.h * scale}
            alt="logo"
          />
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
          <Link href="/privacy">Datenschutz&shy;erkl&auml;rung</Link>
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
          <Link href="/imprint">Impressum</Link>
        </Grid>
      </Grid>
    </PageLayout>
  );
};
