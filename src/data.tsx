import type { Post } from './models';

const data = (): Post[] => [
  {
    id: '1',
    image: '/images/img-1.jpg',
    title: 'New album is released!',
    content: 'Click the button to listen on Spotiwhy app.',
    creationDate: new Date().toISOString(),
    updateDate: new Date().toISOString(),
  },
  {
    id: '2',
    image: '/images/img-2.jpg',
    title: 'New album is released!',
    content: 'Click the button to listen on Spotiwhy app.',
    creationDate: new Date().toISOString(),
    updateDate: new Date().toISOString(),
  },
  {
    id: '3',
    image: '/images/img-3.jpg',
    title: 'New album is released!',
    content: 'Click the button to listen on Spotiwhy app.',
    creationDate: new Date().toISOString(),
    updateDate: new Date().toISOString(),
  },
  {
    id: '4',
    image: '/images/img-4.jpg',
    title: 'New album is released!',
    content: 'Click the button to listen on Spotiwhy app.',
    creationDate: new Date().toISOString(),
    updateDate: new Date().toISOString(),
  },
];

export default data;
