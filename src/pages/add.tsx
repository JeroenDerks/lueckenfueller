import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { PageLayout } from "@/modules/PageLayout";
import { theme } from "@/styles/theme";
import { MapComp } from "@/components/MapComp";
import { MapController } from "@/components/MapController";

export default function AddNeedPage() {
  return (
    <PageLayout backgroundColor={theme.palette.primary.main}>
      <MapComp>
        <MapController />
      </MapComp>
    </PageLayout>
  );
}

export const getStaticProps = async ({ locale }: { locale: any }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
