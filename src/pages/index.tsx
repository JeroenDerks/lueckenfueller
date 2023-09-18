import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NavBar } from "@/modules/NavBar";
import { Hero } from "@/modules/Hero";
import { Map } from "@/components/Map";
import { Description } from "@/modules/Description";
import { Need } from "@/types";
import { PrismaClient } from "@prisma/client";

export default function Home({ needs }: { needs: Need[] }) {
  console.log(needs);
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
  const prisma = new PrismaClient();

  const needs = await prisma.need.findMany({
    include: {
      likes: true,
      location: true,
    },
  });

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      needs: JSON.stringify(needs),
    },
  };
};
