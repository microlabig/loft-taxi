export const mapSetup = (mapContainer) => {
    return {
        container: mapContainer,
        style: 'mapbox://styles/mapbox/light-v8',
        center: [-74.0066, 40.7135], // starting position [lng, lat]
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
        id: "route",
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
