import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { PageLayout } from "@/components/PageLayout";
import { theme } from "@/styles/theme";
import { MapComp } from "@/components/MapComp";
import { MapController } from "@/components/MapController";
import Box from "@mui/material/Box";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

export default function AddNeedPage() {
  return (
    <>
      <Box minHeight="100svh" sx={{ background: theme.palette.primary.main }}>
        <NavBar />
        <PageLayout backgroundColor={theme.palette.primary.main}>
          <Box mt={[0, 0, 4]}>
            <MapComp>
              <MapController />
            </MapComp>
          </Box>
        </PageLayout>
      </Box>
      <Footer />
    </>
  );
}

export const getStaticProps = async ({ locale }: { locale: any }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
