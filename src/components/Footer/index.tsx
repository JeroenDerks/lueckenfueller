import { Grid } from "@mui/material";
import { PageLayout } from "../PageLayout";
import { Link } from "../Link";
import { Logo } from "../Logo";
import { useRouter } from "next/router";
import { useTranslation } from "next-i18next";

export const Footer = () => {
  const { locale } = useRouter();
  const { t } = useTranslation();

  return (
    <PageLayout>
      <Grid container>
        <Grid item xs={12} sm={6} md={6}>
          <Logo scale={0.2} />
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
          <Link href={locale === "de" ? "/datenschutzerklarung" : "/privacy"}>
            {t("footer.privacyLink")}
          </Link>
        </Grid>
        <Grid item xs={6} sm={3} md={3}>
          <Link href="/imprint">{t("footer.imprintLink")}</Link>
        </Grid>
      </Grid>
    </PageLayout>
  );
};
