// ES6
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import { PageLayout } from "@/modules/PageLayout";

const Mapbox = ReactMapboxGl({
  accessToken: process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN!,
});

export const Map = () => {
  if (!process.env.NEXT_PUBLIC_MAPBOX_API_TOKEN) return null;

  return (
    <PageLayout>
      <Mapbox
        style="mapbox://styles/mapbox/light-v11"
        containerStyle={{ height: "80vh", width: "100%" }}
        center={[13.4, 52.52]}
        zoom={[10]}
      >
        <Layer type="symbol" id="marker" layout={{ "icon-image": "marker-15" }}>
          <Feature coordinates={[13.4, 52.52]} />
        </Layer>
      </Mapbox>
    </PageLayout>
  );
};
