import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Location, Need } from "@/types";
import { GetStaticProps } from "next";
import { PageLayout } from "@/modules/PageLayout";
import { theme } from "@/styles/theme";
import { useEffect, useState } from "react";
import { Container } from "@/components/MapController/styled";
import { ViewMap } from "@/components/ViewMap";
import MapResult from "@/components/MapResult";
import { useRouter } from "next/router";

export default function NeedDetailPage() {
  const [need, setNeed] = useState<Need>();
  const [locations, setLocations] = useState<Location[]>();
  const [init, setInit] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!init) {
      setInit(true);
      getLocations();
      if (router.query.needId && typeof router.query.needId === "string") {
        getNeed(router.query.needId);
      }
    }
  }, [router, init]);

  const getNeed = async (needId: string) => {
    const response = await fetch("/api/get-need", {
      method: "POST",
      body: JSON.stringify({ needId }),
    });

    if (response.ok) {
      const data = await response.json();
      if (data.id) {
        setNeed(data);
      }
    }
  };

  const getLocations = async () => {
    const response = await fetch("/api/get-locations", {
      method: "GET",
    });

    if (response.ok) {
      const data = await response.json();
      setLocations(data);
    }
  };

  return (
    <PageLayout backgroundColor={theme.palette.primary.main}>
      {init && need && (
        <>
          <MapResult {...{ need }} />
          <Container>
            <ViewMap
              {...{ need, locations }}
              onMarkerClick={(id) => getNeed(id)}
            />
          </Container>
        </>
      )}
    </PageLayout>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [
      { params: { needId: "", locale: "en" } },
      { params: { needId: "", locale: "de" } },
    ],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale!, ["common"], null, [
        "de",
        "en",
      ])),
    },
  };
};
