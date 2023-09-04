import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NavBar } from "@/modules/NavBar";
import { Hero } from "@/modules/Hero";
import { PageLayout } from "@/modules/PageLayout";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <main>
        <NavBar />
        <PageLayout>
          <Hero />
          <Hero />
        </PageLayout>
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
