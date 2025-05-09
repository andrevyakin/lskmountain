
export const features = {
  geometry: {
    type: 'Polygon',
    coordinates: [
      [
        [38.805558086, 48.284445882],
        [38.805835864, 48.286112548],
        [38.80889142, 48.287501437],
        [38.811113642, 48.287501437],
        [38.813613642, 48.288612548],
        [38.820002531, 48.28833477],
        [38.822780309, 48.287779215],
        [38.823058087, 48.285001437],
        [38.817224753, 48.285556993],
        [38.808058086, 48.284168104],
        [38.805558086, 48.284445882],
      ],
    ],
  },
  style: {
    simplificationRate: 0,
    stroke: [{ color: '#457b9d', dash: [9, 9], width: 3 }],
    fill: 'rgba(168, 218, 220, 0.6)'
  },
};

export const location = {
  center: [38.817179, 48.284219],  //центр карты
  zoom: 13, //зум от 0 до 19
};

/* An array of props for markers.
`properties.hint` stores the text that will be displayed when hovering over this marker */
export const MARKER_PROPS = {
  /*coordinates: [38.817179, 48.284219],*/
  /*size: 'normal',*/
  /*iconName: 'fallback',*/
  /*color: '#e63d2e',*/

  coordinates: [38.817179, 48.284219],

  properties: {
    hint: {
      title: 'Петровеньковское месторождение',
      text: 'п. Ковыльное, ул. Пролетарская, 38',
      coordinates: 'Ш:48.284219, Д:38.817179'
    }
  }
};
