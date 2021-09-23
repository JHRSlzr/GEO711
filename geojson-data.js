var lasalle = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      properties: {
        style: {
          weight: 2,
          color: "#999",
          fillColor: "#f00",
          fillOpacity: 0.8,
        },
      },
      geometry: {
        type: "Polygon",
        coordinates: [
          [
            [-101.71368956565856, 21.153266640523874],
            [-101.7129385471344, 21.151135366258345],
            [-101.7120587825775, 21.15110534809189],
            [-101.71164035797119, 21.150995281429484],
            [-101.71021342277527, 21.150394916376403],
            [-101.70932292938232, 21.152356099872403],
            [-101.71024560928343, 21.154577408992694],
            [-101.71368956565856, 21.153266640523874],
          ],
        ],
      },
    },
    {
      type: "Feature",
      properties: {
        popupContent: "Esto es una linea",
        style: {
          weight: 2,
          color: "#999",
          fillColor: "#f00",
          fillOpacity: 0.8,
        },
      },
      geometry: {
        type: "LineString",
        coordinates: [
          [-101.71286344528197, 21.151135366258345],
          [-101.71022415161131, 21.150374904166036],
        ],
      },
    },
    {
      type: "Feature",
      properties: {},
      geometry: {
        type: "LineString",
        coordinates: [
          [-101.713228225708, 21.153856988064298],
          [-101.71013832092285, 21.155037676084085],
        ],
      },
    },
  ],
};
