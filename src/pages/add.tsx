import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { PageLayout } from "@/components/PageLayout";
import { theme } from "@/styles/theme";
import { MapComp } from "@/components/MapComp";
import { MapController } from "@/components/MapController";
import Box from "@mui/material/Box";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import React, { useState } from "react";
import { LatLng, Radius, NeedCoordinates } from "@/types";
import { defaultLoc } from "@/components/OveriewMap/OverviewMapMap";

export default function AddNeedPage() {
  const [coord, setCoordinates] = useState<LatLng & Radius>();
  const [markerCoords, setMarkerCoords] = useState<NeedCoordinates>();

  React.useEffect(() => {
    const getIpAddress = async () => {
      const res = await fetch(
        "https://api.geoapify.com/v1/ipinfo?&apiKey=e97e7eae25ba45b4a0e98eeb1cf7d720",
        { method: "GET" }
      );

      if (res.ok) {
        const data = await res.json();
        if (data.location.latitude) {
          const { latitude, longitude } = data.location;
          setCoordinates({ lat: latitude, lng: longitude, radius: 5 });
        } else setCoordinates({ ...defaultLoc, radius: 5 });
      } else setCoordinates({ ...defaultLoc, radius: 5 });
    };
    getIpAddress();
  }, []);

  return (
    <>
      <Box minHeight="100svh" sx={{ background: theme.palette.primary.main }}>
        <NavBar />
        <PageLayout backgroundColor={theme.palette.primary.main}>
          <Box mt={[8, 8, 10]} position="relative">
            {coord && (
              <>
                <MapController loc={coord} {...{ markerCoords }} />
                <MapComp
                  handleMapMove={(v) => setMarkerCoords(v)}
                  initialViewState={{
                    latitude: coord.lat,
                    longitude: coord.lng,
                    zoom: 10,
                  }}
                />
              </>
            )}
          </Box>
        </PageLayout>
      </Box>
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
