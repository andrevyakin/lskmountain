import a4_8_1 from './a4-8-1.png';
import a5_20_1 from './a5-20-1.png';
import a20_40_1 from './a20-40-1.png';
import a40_70_1 from './a40-70-1.png';

export const category = [
  {
    _id: 'a',
    name: 'щебень',
    acronym: 'щебень'
  },
  {
    _id: 'b',
    name: 'щебеночно-песчаная смесь',
    acronym: 'щпс'

  },
  {
    _id: 'c',
    name: 'песок из отсевов дробления',
    acronym: 'отсев'
  },
];

export const products = [
  {
    _id: 'a-4-8',
    name: 'Щебень фракции 4-8 мм.',
    description:
      'Это зернистый сыпучий материал природного происхождения, получаемый путем дробления и рассеивания горных пород. Соответствует новому межгосударственному стандарту строительства автомобильных дорог.',
    price: '',
    image: [a4_8_1],
    strength: '1200',
    frost: '120',
    greediness: '20%',
    stateStandard: ['ГОСТ 32703-2014'],
  },
  {
    _id: 'a-5-20',
    name: 'Щебень фракции 5-20 мм.',
    description:
      'Используется в производстве бетона и конструкций из него, в фундаментных работах, при заливке мостовых конструкций, мостового полотна, дорожных и аэродромных покрытий оснований.',
    price: '',
    strength: '1200',
    frost: '120',
    greediness: '20%',
    image: [a5_20_1],
    stateStandard: ['ГОСТ 8267-93'],
  },
  {
    _id: 'a-20-40',
    name: 'Щебень фракции 20-40 мм.',
    description:
      'Средняя фракция. Применяется в производстве бетона, железобетонных конструкций, в строительстве автодорог и железных дорог, трамвайных линий, при закладке фундамента и возведении производственных зданий.',
    price: '',
    image: [a20_40_1],
    strength: '1200',
    frost: '120',
    greediness: '20%',
    stateStandard: ['ГОСТ 32703-2014'],
  },
  {
    _id: 'a-40-70',
    name: 'Щебень фракции 40-70 мм.',
    description:
      'Крупная фракция, используется в производстве бетона, массивных конструкций из него и на работы с большим объёмом бетона. Применяется также в дорожном строительстве в пределах населённых пунктов, при возведении производственных зданий и сооружений.',
    price: '',
    strength: '1200',
    frost: '120',
    greediness: '20%',
    image: [a40_70_1],
    stateStandard: ['ГОСТ 32703-2014'],
  },
  {
    _id: 'a-10-20',
    name: 'Щебень фракции 10-20 мм.',
    description:
      'Используется в производстве бетона и конструкций из него, в фундаментных работах, при заливке мостовых конструкций, мостового полотна, дорожных и аэродромных покрытий оснований.',
    price: '',
    strength: '1200',
    frost: '120',
    greediness: '20%',
    image: [],
    stateStandard: ['ГОСТ 8267-93'],
  },
  {
    _id: 'c-0-5',
    name: 'Песок из отсевов дробления 0-5 мм.',
    description:
      'самая мелкая фракция щебня с размером зерен 0-5 мм, Отсевный песок используется в качестве заполнителя.',
    price: '',
    strength: '',
    frost: '120',
    greediness: '20%',
    image: [],
    stateStandard: ['ГОСТ 8267-93'],
  },
  {
    _id: 'b-0-40',
    name: 'ЩПС C5 0-40 мм',
    description:
      'самая мелкая фракция щебня с размером зерен 0-5 мм, Отсевный песок используется в качестве заполнителя.',
    price: '',
    strength: '1000',
    frost: '120',
    greediness: '20%',
    image: [],
    stateStandard: ['ГОСТ 8267-93'],
  },
];
