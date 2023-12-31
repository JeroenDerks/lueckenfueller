import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NavBar } from "@/components/NavBar";
import { Hero } from "@/components/Hero";
import { Description } from "@/components/Description";
import { OverviewMap } from "@/components/OveriewMap";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <NavBar />
      <Hero />
      <Description />
      <OverviewMap />
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
