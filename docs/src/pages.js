const pages = [
  {
    pathname: '/getting-started',
    children: [
      { pathname: '/getting-started/installation' },
      { pathname: '/getting-started/faq', title: 'FAQs' },

    ],
  },

  { pathname: '/', displayNav: false, title: false },
];

export default pages;
