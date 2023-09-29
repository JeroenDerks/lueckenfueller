import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NavBar } from "@/modules/NavBar";
import { Hero } from "@/modules/Hero";
import { Description } from "@/modules/Description";
import { MapController } from "@/components/MapController";

export default function Home() {
  return (
    <>
      <main>
        <NavBar />
        <Hero />
        <Description />
        <MapController />
      </main>
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
