export const MENU = [
  {
    name: 'Home',
    url: '/',
  },
  {
    name: 'Camera',
    url: '/camera',
    childrens: [
      {
        name: 'View',
        url: '/camera/view',
      },
      {
        name: 'Control',
        url: '/camera/control',
      },
    ],
  },
];
