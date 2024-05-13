import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { PageLayout } from "@/components/PageLayout";
import { theme } from "@/styles/theme";
import { MapComp } from "@/components/MapComp";
import { MapController } from "@/components/MapController";
import Box from "@mui/material/Box";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import React, { useState } from "react";
import { NeedCoordinates } from "@/types";
import { defaultLoc } from "@/components/OveriewMap/OverviewMapMap";

export default function AddNeedPage() {
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
          const { latitude: lat, longitude: lng } = data.location;
          setMarkerCoords({ lat, lng, radius: 5, zoom: 10.5 });
        } else setMarkerCoords({ ...defaultLoc, radius: 5, zoom: 10.5 });
      } else setMarkerCoords({ ...defaultLoc, radius: 5, zoom: 10.5 });
    };
    getIpAddress();
  }, []);

  return (
    <>
      <Box minHeight="100svh" sx={{ background: theme.palette.primary.main }}>
        <NavBar />
        <PageLayout backgroundColor={theme.palette.primary.main}>
          <Box mt={[8, 10, 10]} position="relative">
            {markerCoords && (
              <>
                <MapController {...{ markerCoords }} />
                <MapComp
                  handleMapMove={(v) => setMarkerCoords(v)}
                  initialViewState={{
                    latitude: markerCoords.lat,
                    longitude: markerCoords.lng,
                    zoom: 10.5,
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
