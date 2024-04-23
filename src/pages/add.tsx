import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import { PageLayout } from "@/components/PageLayout";
import { theme } from "@/styles/theme";
import { MapComp } from "@/components/MapComp";
import { MapController } from "@/components/MapController";
import Box from "@mui/material/Box";
import { NavBar } from "@/components/NavBar";
import { Footer } from "@/components/Footer";
import React, { useState } from "react";
import { LatLng, Radius } from "@/types";
import { defaultLoc } from "@/components/OveriewMap/OverviewMapMap";

export default function AddNeedPage() {
  const [coord, setCoordinates] = useState<LatLng & Radius>();

  React.useEffect(() => {
    const getIpAddress = async () => {
      const res = await fetch("/api/get-ip", { method: "GET" });

      if (res.ok) {
        const data = await res.json();

        if (data.lat && data.lng) setCoordinates({ ...data, radius: 5 });
        else setCoordinates({ ...defaultLoc, radius: 5 });
      } else setCoordinates({ ...defaultLoc, radius: 5 });
    };
    getIpAddress();
  }, []);

  return (
    <>
      <Box minHeight="100svh" sx={{ background: theme.palette.primary.main }}>
        <NavBar />
        <PageLayout backgroundColor={theme.palette.primary.main}>
          <Box mt={[0, 0, 4]}>
            {coord && (
              <MapComp
                initialViewState={{
                  latitude: coord.lat,
                  longitude: coord.lng,
                  zoom: 10,
                }}
              >
                <MapController loc={coord} />
              </MapComp>
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
