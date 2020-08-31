const config = {
  mode: 'site',
  title: 'React Guidebook',
  description: 'React 完全知识体系',
  publicPath: '/react-guidebook/',
  base: '/react-guidebook/',
  logo: 'http://img.mrsingsing.com/react-guidebook-favicon.png',
  favicon: './favicon.ico',
  exportStatic: {},
  dynamicImport: {},
  theme: {
    '@primary-color': '#00A7D6',
  },
  navs: [
    null,
    {
      title: 'Github',
      path: 'https://github.com/tsejx/react-guidebook',
    },
  ],
};

if (process.env.NODE_ENV !== 'development') {
  config.ssr = {};
}

export default config;
