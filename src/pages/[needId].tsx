import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Location } from "@/types";
import { GetStaticProps } from "next";
import { PageLayout } from "@/modules/PageLayout";
import { theme } from "@/styles/theme";
import { useEffect, useState } from "react";
import { Container } from "@/components/MapController/styled";
import { ViewMap } from "@/components/ViewMap";
import MapResult from "@/components/MapResult";
import { useRouter } from "next/router";

export default function NeedDetailPage() {
  const [needId, setNeedId] = useState<string>();
  const [locations, setLocations] = useState<Location[]>();
  const [init, setInit] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!init) {
      setInit(true);
      if (router.query.needId && typeof router.query.needId === "string") {
        setNeedId(router.query.needId);
      }
    }
  }, [router, init]);

  useEffect(() => {
    if (!locations) getLocations();
  }, [needId, locations]);

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
      {init && (
        <>
          <MapResult {...{ needId }} />
          <Container>
            <ViewMap
              {...{ needId, locations }}
              onMarkerClick={(id) => setNeedId(id)}
            />
          </Container>
        </>
      )}
    </PageLayout>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [],
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
