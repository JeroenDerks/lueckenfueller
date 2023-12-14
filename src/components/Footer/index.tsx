import { Grid } from "@mui/material";
import { PageLayout } from "../PageLayout";
import { Link } from "../Link";
import { Logo } from "../Logo";

export const Footer = () => {
  return (
    <PageLayout>
      <Grid container>
        <Grid item xs={12} sm={6} md={6}>
          <Logo scale={0.2} />
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
          <Link href="/datenschutzerklarung">
            Datenschutz&shy;erkl&auml;rung
          </Link>
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
          <Link href="/imprint">Impressum</Link>
        </Grid>
      </Grid>
    </PageLayout>
  );
};
