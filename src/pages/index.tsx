import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { NavBar } from "@/modules/NavBar";
import { Hero } from "@/modules/Hero";
import { Map } from "@/components/Map";
import { Description } from "@/modules/Description";
import prisma from "../../lib/prisma";
import { Need } from "@/types";

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
  // const needs = await prisma.need.findMany({
  //   include: {
  //     likes: true,
  //     location: true,
  //   },
  // });

  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
      // needs: needs.map((need) => {
      //   return {
      //     ...need,
      //     createdAt: need.createdAt.toISOString(),
      //     updatedAt: need.updatedAt.toISOString(),
      //     likes: need.likes.map((like) => {
      //       return {
      //         ...like,
      //         createdAt: like.createdAt.toISOString(),
      //       };
      //     }),
      //   };
      // }),
    },
  };
};
