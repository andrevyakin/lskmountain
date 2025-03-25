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
  properties: {
    hint: {
      title: 'Title of that pop up',
      text: 'Some useful information about a place. You can add whatever you want: pictures, buttons, different headings.'
    }
  },
  style: {
    simplificationRate: 0,
    stroke: [{ color: '#242424', dash: [8, 8], width: 4 }],
    fill: 'rgba(25, 109, 255, 0.6)'
  },
};

export const location = {
  center: [38.817179, 48.284219], //центр карты
  zoom: 14, //зум от 0 до 19
};
