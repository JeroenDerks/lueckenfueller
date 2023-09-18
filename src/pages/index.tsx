import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NavBar } from "@/modules/NavBar";
import { Hero } from "@/modules/Hero";
import { PageLayout } from "@/modules/PageLayout";
import { Map } from "@/components/Map";
import { Description } from "@/modules/Description";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <main>
        <NavBar />
        <Hero />
        <Description />
        <Map />
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
