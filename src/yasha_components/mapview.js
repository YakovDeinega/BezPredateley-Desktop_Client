import { YMaps, Map, Placemark, RouteButton } from "@pbe/react-yandex-maps";

export default function Mapview() {
  return (
    <div className="mapview">
      <YMaps>
        <div>
          <Map
            defaultState={{ center: [45.020104, 39.030688], zoom: 15 }}
            width="992px"
            height="450px"
          >
            <Placemark geometry={[45.020104, 39.030688]} />
            <RouteButton options={{ float: "right" }} />
          </Map>
        </div>
      </YMaps>
    </div>
  );
}
