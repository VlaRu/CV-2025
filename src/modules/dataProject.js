const projectsData = [
  {
    id: 1,
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with shopping cart and payment integration.',
    projectImage: 'assets/images/commerce.webp',
    technologies: [
      'https://cdn.iconscout.com/icon/free/png-256/free-react-4-1175110.png?f=webp&w=256',
      'https://cdn.iconscout.com/icon/free/png-256/free-typescript-3629120-3030260.png?f=webp&w=256',
      'https://cdn.iconscout.com/icon/free/png-256/free-webpack-2-1174981.png?f=webp&w=256',
      'https://img.stackshare.io/service/7035/default_66f265943abed56bcdbfca1c866a4261b1fbb063.jpg',
      'https://img.stackshare.io/service/3337/Q4L7Jncy.jpg'
    ],
    sourceLink: 'https://github.com/RS-Tech-Artisans/eCommerce-React',
    liveLink: 'https://github.com/RS-Tech-Artisans/eCommerce-React'
  },
  {
    id: 2,
    title: 'Pokemon Game',
    description: 'An interactive Pokemon game with character selection and battle mechanics.',
    projectImage: 'assets/images/pokemon-scr.webp',
    technologies: [
      'https://cdn.iconscout.com/icon/free/png-256/free-typescript-3629120-3030260.png?f=webp&w=256',
      'https://cdn.iconscout.com/icon/free/png-256/free-react-4-1175110.png?f=webp&w=256',
      'https://cdn.iconscout.com/icon/free/png-256/free-redux-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-3030243.png?f=webp&w=128',
      'https://cdn.iconscout.com/icon/free/png-256/free-css-38-226095.png?f=webp&w=256',
      'https://img.stackshare.io/service/7035/default_66f265943abed56bcdbfca1c866a4261b1fbb063.jpg',
      'https://camo.githubusercontent.com/b31dc7fd37d0e0f5c74318b82380877e58a40b208120fc7b72370d46b983033b/68747470733a2f2f7777772e7376677265706f2e636f6d2f73686f772f3335343532312f766974656a732e737667',
    ],
    sourceLink: 'https://github.com/VlaRu/React-Pokemon-API/tree/app-state-management',
    liveLink: 'https://react-ts-pokemon.netlify.app'
  },
  {
    id: 3,
    title: 'Todo List',
    description: 'A task management application with drag-and-drop functionality.',
    projectImage: 'assets/images/todo-scr.webp',
    technologies: [
      'https://cdn.iconscout.com/icon/free/png-256/free-react-4-1175110.png?f=webp&w=256',
      'https://cdn.iconscout.com/icon/free/png-256/free-redux-logo-icon-download-in-svg-png-gif-file-formats--technology-social-media-vol-5-pack-logos-icons-3030243.png?f=webp&w=128',
      'https://cdn.iconscout.com/icon/free/png-256/free-html5-40-1175193.png?f=webp&w=256',
      'https://cdn.iconscout.com/icon/free/png-256/free-css3-11-1175239.png?f=webp&w=256'
    ],
    sourceLink: 'https://github.com/VlaRu/frontend-challenge',
    liveLink: 'https://vladislavak.github.io/Todo-List/'
  },
  {
    id: 4,
    title: 'Weather App',
    description: 'Real-time weather application with location-based forecasts.',
    projectImage: 'assets/images/weather.webp',
    technologies: [
      'https://cdn.iconscout.com/icon/free/png-256/free-html5-40-1175193.png?f=webp&w=256',
      'https://cdn.iconscout.com/icon/free/png-256/free-css3-11-1175239.png?f=webp&w=256',
      'https://cdn.iconscout.com/icon/free/png-256/free-javascript-1-225993.png?f=webp&w=256',
      'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAnFBMVEX///9aKeRVH+NUHuNYJeRSGeNTG+NQFONXI+SLcOuJbeuCY+qSeuyReOyEZupLAOJfLOWPdeyHaur18v28rfOzovGnk++3p/KKb+usmfCUfOyeie3Nwvabhu21pPKij+76+P5yTufo4vuXge1+XulpQObGuvXr5vvUy/dvR+dmOubg2fnBs/Tu6vzQxfZxS+d5V+hiNOU4AOHZ0fgCW6GsAAAEoklEQVR4nO3da1fiMBCAYVMKqQoGLwWBIiBeUCu6+v//2yJFpRGapK1nMuO833bZ3TPPKTsHWqgHBxzHcRzHcVyNPUMP8NsNhtAT/HJtNYIe4VebzmSLtPC6GwjSwqWKBGlhrEJBWthRQlAWTl+kIC382DGkhcnHjtkIx9DD/EaxEoK08HQLSFF4PpOCtvCmKYgLjyMWYo+F+NOFc+iBak8TNliILxbij4X404UEzghrb+LpCW+a+V9TEz4/Nrv53yEmfG9FIWlhqkJBWjj5OCGjC080YRtmtlo6WZ+QMQk7MMPV0PltdkKG7DF8khsJ1WN4t76wRFjY+z7paxAGpzATVuxo66w2ReH5w/ZJX4LCpygQpIXJ144hKhwoIUgLD3WgUXgIM2jJ8juGoPBaBD+ApIT6jiEnjH/8F7QSXsJMW6LObqBReAQzrnNfnwCiKvz+BBBR4VJFe3wrocj/WZTCq51L1FJ4BjOzU+09O4aKcPq6b8fsFp5hE953G4VA9MKF3L9j9gjzW9d3Yb9ox1AQDgt3zG7hSV4YncCMbpVpx1gdQ5+Fxh2DXWjeMciFha9jXITHMPMbs9kxmIXTmc2O2QjD/N9FIbTcMXiFyZtS8rPmpta6xqoQv3Dx/r5YJMldml70r+J4sKrX600mk9F4Ph8Ob0Mn4Q0MokqdgLrwlLyw02AhC32PhfiFbTfhK8yUVaIvHBYLj1jof7owyj/MQgTRF85ZyELvY+GfE85gpqwSC/ELxy0WstD3WKgJX2CmrJJBeIlfOCIv1I9hkH+YgFA/hiyEmbJKBuGhJnyAmbJKLGSh/01YyELvcxOGBISN/MMEhD034S3MlFViIQv9j4UEhNo31ukLW/mHWYigQbFQ/4DtI8yUVTII9WPIQg9jIXkh/U3DQgTpQu0etH9P+A9myiqxkIX+x0IW+p+bUHSH7eFwPh6PJpPeYBDH/f5Fmt6tSpJkuVwk5zCKohyFIvj4evT6e9Lrr0zL7dTbAAZRmKuwoEguYAzF1SdsdO9hCIZqE8rXKQjAWF1C5e0d9+sRhiqGGd+iWoShWsJMb5NB2LERBuIaZnirajiGcjaFmNw2XSjzD1sIlef3h46LheZnqcc7JsskNN2FUCUwc9tXTRiEPu+YrErC5szD9xJ6VYQKxR1pKwiVj++VflZaGKo7mIldKyvEsGOySgqbtwh2TFY5ocJz9/lyQtWDGbZUJYRodkyWuzAIn2BGLZmzsPmAZsdkXTkKJYrXMdsZhNptpHDtmKwr6SBEtmOyXISRxLVjshyELTyvY7azF0of7z9rkbVQjXb/A95nKQxVCjNf9fpWwki+w4xXQ1bC1uMzzHR1ZCP09sKZVRZCNYcZraaMwlD1YSarK5Ow6efFeYcMwtPQz4vzDhmEA5Qv1HIZhAS6IC+kfwzpC+k/S1mIPxbij4X4+3PCUEEPVHt5YYTsyplNOSGiq/P2pVtCHJ8Acm1LiPDKmU1fz1KUV85s+jyGUYvejsnaCEnumKxMqPz+Wc2VWguJ7pislZDsjslKZdSgumOyUoXtE0CuXSC9Om8f+ssSHMdxHMdxHMdZ9x/hXGVJDxc5/wAAAABJRU5ErkJggg=='
    ],
    sourceLink: 'https://github.com/VlaRu/forecast-weather',
    liveLink: 'https://weather-forecast-fun.netlify.app/'
  },
  {
    id: 5,
    title: 'Travel Blog',
    description: 'A responsive travel blog with image galleries and location mapping.',
    projectImage: 'assets/images/travel.webp',
    technologies: [
      'https://cdn.iconscout.com/icon/free/png-256/free-html5-40-1175193.png?f=webp&w=256',
      'https://cdn.iconscout.com/icon/free/png-256/free-css3-11-1175239.png?f=webp&w=256',
      'https://cdn.iconscout.com/icon/free/png-256/free-javascript-1-225993.png?f=webp&w=256',
    ],
    sourceLink: 'https://github.com/VlaRu/forecast-weather',
    liveLink: 'https://vlaru.github.io/RSS_stage1-2/coffee-house/pages/home/home.html'
  },
  {
    id: 6,
    title: 'Coffee House',
    description: 'A coffee shop website with menu and online ordering system.',
    projectImage: 'assets/images/coffee-house.webp',
    technologies: [
      'https://cdn.iconscout.com/icon/free/png-256/free-html5-40-1175193.png?f=webp&w=256',
      'https://cdn.iconscout.com/icon/free/png-256/free-css3-11-1175239.png?f=webp&w=256',
      'https://cdn.iconscout.com/icon/free/png-256/free-javascript-1-225993.png?f=webp&w=256'
    ],
    sourceLink: 'https://github.com/VlaRu/RSS_stage1-2/tree/coffee-house-week3',
    liveLink: 'https://vlaru.github.io/RSS_stage1-2/coffee-house/pages/home/home.html'
  },
  {
    id: 7,
    title: 'SMM Landing Page',
    description: 'A landing page for social media marketing services.',
    projectImage: 'assets/images/smm.webp',
    technologies: [
      'https://cdn.iconscout.com/icon/free/png-256/free-html5-40-1175193.png?f=webp&w=256',
      'https://cdn.iconscout.com/icon/free/png-256/free-css3-11-1175239.png?f=webp&w=256',
      'https://cdn.iconscout.com/icon/free/png-256/free-javascript-1-225993.png?f=webp&w=256',
      'https://cdn.iconscout.com/icon/free/png-256/free-node-6-226036.png?f=webp&w=256'
    ],
    sourceLink: 'https://github.com/VlaRu/smm-landing',
    liveLink: 'https://start-in-beauty.netlify.app/'
  },
  {
    id: 8,
    title: 'SongBird Game',
    description: 'An interactive bird song recognition game.',
    projectImage: 'assets/images/song-bird.webp',
    technologies: [
      'https://cdn.iconscout.com/icon/free/png-256/free-javascript-2038874-1720087.png?f=webp&w=256',
      'https://cdn.iconscout.com/icon/free/png-256/free-css-38-226095.png?f=webp&w=256',
      'https://cdn.iconscout.com/icon/free/png-256/free-html-59-225995.png?f=webp&w=256'
    ],
    sourceLink: 'https://github.com/rolling-scopes-school/vlaru-JSFE2022Q3/tree/songbird',
    liveLink: 'https://rolling-scopes-school.github.io/vlaru-JSFE2022Q3/songbird/main.html'
  },
  {
    id: 9,
    title: 'Hangman Game',
    description: 'Classic hangman word guessing game.',
    projectImage: 'assets/images/hangman.webp',
    technologies: [
      'https://cdn.iconscout.com/icon/free/png-256/free-javascript-2038874-1720087.png?f=webp&w=256',
      'https://cdn.iconscout.com/icon/free/png-256/free-node-6-226036.png?f=webp&w=256'
    ],
    sourceLink: 'https://github.com/rolling-scopes-school/tasks/blob/master/stage1/tasks/hangman/README.md',
    liveLink: 'https://rolling-scopes-school.github.io/vlaru-JSFE2023Q4/hangman/index.html'
  },
  {
    id: 10,
    title: 'Nonogram Game',
    description: 'A puzzle game where you create pictures by filling in squares.',
    projectImage: 'assets/images/nonogram.webp',
    technologies: [
      'https://cdn.iconscout.com/icon/free/png-256/free-javascript-2038874-1720087.png?f=webp&w=256',
      'https://cdn.iconscout.com/icon/free/png-256/free-node-6-226036.png?f=webp&w=256',
      'https://cdn.iconscout.com/icon/free/png-256/free-webpack-2-1174981.png?f=webp&w=256',
      'https://img.stackshare.io/service/7035/default_66f265943abed56bcdbfca1c866a4261b1fbb063.jpg',
      'https://img.stackshare.io/service/3337/Q4L7Jncy.jpg'
    ],
    sourceLink: 'https://github.com/VlaRu/RSS_stage1-2/blob/nonograms/README.md',
    liveLink: 'https://vlaru.github.io/RSS_stage1-2/nonograms/'
  }
];

export default projectsData; 