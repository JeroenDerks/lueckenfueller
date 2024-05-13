import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { Location, Need } from "@/types";
import { GetStaticProps } from "next";
import { PageLayout } from "@/components/PageLayout";
import { theme } from "@/styles/theme";
import { useEffect, useState } from "react";
import MapResult from "@/components/MapResult";
import { useRouter } from "next/router";
import { MapComp } from "@/components/MapComp";
import { RegularMarker } from "@/components/MapMarkers/RegularMarker";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";

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
    <>
      <NavBar />
      <PageLayout backgroundColor={theme.palette.primary.main}>
        {init && need && (
          <>
            <MapResult {...{ need }} />
            <MapComp
              initialViewState={{
                latitude: need.location?.lat!,
                longitude: need.location?.lng!,
                zoom: 14,
              }}
            >
              {locations?.map(({ id, lat, lng, radius, needLocationId }) => (
                <RegularMarker
                  key={id}
                  id={id}
                  isActive={needLocationId === need?.id}
                  latitude={lat!}
                  longitude={lng!}
                  onClick={() => getNeed(needLocationId)}
                  radius={radius!}
                />
              ))}
            </MapComp>
          </>
        )}
      </PageLayout>
      <Footer />
    </>
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
