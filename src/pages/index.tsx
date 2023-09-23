import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NavBar } from "@/modules/NavBar";
import { Hero } from "@/modules/Hero";
import { Description } from "@/modules/Description";
import prisma from "../../lib/prisma";
import { Need } from "@/types";
import { MapController } from "@/components/MapController";
import { useEffect } from "react";

export default function Home({ needs }: { needs: Need[] }) {
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
  const needs = await prisma.need.findMany({
    include: {
      location: true,
      likes: true,
    },
  });

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      needs: JSON.stringify(needs),
    },
  };
};
