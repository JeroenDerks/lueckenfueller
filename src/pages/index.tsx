import { useTranslation } from "next-i18next";
import { GetStaticProps } from "next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NavBar } from "@/components/NavBar";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Home() {
  const { t } = useTranslation();

  return (
    <main>
      <NavBar />
      <Link href="/" locale="de">
        Deutsch
      </Link>
      <Link href="/" locale="en">
        English
      </Link>
      <h1>{t("hero_title")}</h1>
    </main>
  );
}

export const getStaticProps = async ({ locale }: { locale: any }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
};
