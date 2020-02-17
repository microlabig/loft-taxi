import { API_MAPBOX_ACCESS_TOKEN } from "./consts";

const ID_LAYER = "route";
const CENTER = [30.371142, 59.92443];

export const mapToken = API_MAPBOX_ACCESS_TOKEN;

export const mapSetup = (mapContainer) => {
    return {
        container: mapContainer,
        style: 'mapbox://styles/mapbox/light-v8',
        center: CENTER, // starting position [lng, lat]
        zoom: 15 // starting zoom
    }
};

// map - экземпляр карты coordinates - список координат с сервера
export const drawRoute = (map, coordinates) => {
    map.flyTo({
        center: coordinates[0],
        zoom: 15
    });

    map.addLayer({
        id: ID_LAYER,
        type: "line",
        source: {
            type: "geojson",
            data: {
                type: "Feature",
                properties: {},
                geometry: {
                    type: "LineString",
                    coordinates
                }
            }
        },
        layout: {
            "line-join": "round",
            "line-cap": "round"
        },
        paint: {
            "line-color": "#ffc617",
            "line-width": 8
        }
    });
};

export const removeRoute = (map) => {
    if (map.getLayer(ID_LAYER)) {
        map.removeLayer(ID_LAYER);
        map.removeSource(ID_LAYER);
    }
}