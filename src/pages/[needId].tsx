import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Location } from "@/types";
import { GetStaticProps } from "next";
import { PageLayout } from "@/modules/PageLayout";
import { theme } from "@/styles/theme";
import { useEffect, useState } from "react";
import { Container } from "@/components/MapController/styled";
import { ViewMap } from "@/components/ViewMap";
import MapResult from "@/components/MapResult";

interface NeedProps {
  needId: string;
}

export default function NeedDetailPage(props: NeedProps) {
  const [needId, setNeedId] = useState(props.needId);
  const [locations, setLocations] = useState<Location[]>();
  const [init, setInit] = useState(false);

  useEffect(() => {
    if (!init) setInit(true);
  }, [init]);

  useEffect(() => {
    if (!locations) getLocations();
  }, [needId, locations]);

  const getLocations = async () => {
    const response = await fetch("/api/get-locations", {
      method: "GET",
    });

    const data = await response.json();
    setLocations(data);
  };

  return (
    <main>
      <PageLayout backgroundColor={theme.palette.primary.main}>
        {init && (
          <Container>
            <ViewMap
              {...{ needId, locations }}
              onMarkerClick={(id) => setNeedId(id)}
            />
            <MapResult {...{ needId }} />
          </Container>
        )}
      </PageLayout>
    </main>
  );
}

export const getStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps<NeedProps> = async ({
  params,
  locale,
}) => {
  const needId = typeof params?.needId === "string" ? params.needId : "";

  return {
    props: {
      needId,
      ...(await serverSideTranslations(locale!, ["common"])),
    },
  };
};
