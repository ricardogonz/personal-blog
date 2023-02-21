import type { Post } from './models';

const data = (): Post[] => [
  {
    id: '1',
    image: '/images/img-1.jpg',
    title: 'qwerty',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia exercitationem vero. Qui libero ut laudantium unde vel dolores blanditiis est, praesentium suscipit officiis, deleniti, earum nostrum sequi pariatur exercitationem.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia exercitationem vero. Qui libero ut laudantium unde vel dolores blanditiis est, praesentium suscipit officiis, deleniti, earum nostrum sequi pariatur exercitationem.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia exercitationem vero. Qui libero ut laudantium unde vel dolores blanditiis est, praesentium suscipit officiis, deleniti, earum nostrum sequi pariatur exercitationem.
      `,
    creationDate: new Date().toISOString(),
    updateDate: new Date().toISOString(),
  },
  {
    id: '2',
    image: '/images/img-2.jpg',
    title: 'Test',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia exercitationem vero. Qui libero ut laudantium unde vel dolores blanditiis est, praesentium suscipit officiis, deleniti, earum nostrum sequi pariatur exercitationem.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia exercitationem vero. Qui libero ut laudantium unde vel dolores blanditiis est, praesentium suscipit officiis, deleniti, earum nostrum sequi pariatur exercitationem.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia exercitationem vero. Qui libero ut laudantium unde vel dolores blanditiis est, praesentium suscipit officiis, deleniti, earum nostrum sequi pariatur exercitationem.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia exercitationem vero. Qui libero ut laudantium unde vel dolores blanditiis est, praesentium suscipit officiis, deleniti, earum nostrum sequi pariatur exercitationem.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia exercitationem vero. Qui libero ut laudantium unde vel dolores blanditiis est, praesentium suscipit officiis, deleniti, earum nostrum sequi pariatur exercitationem.
      `,
    creationDate: new Date().toISOString(),
    updateDate: new Date().toISOString(),
  },
  {
    id: '3',
    image: '/images/img-3.jpg',
    title: 'New album is released!',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia exercitationem vero. Qui libero ut laudantium unde vel dolores blanditiis est, praesentium suscipit officiis, deleniti, earum nostrum sequi pariatur exercitationem.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia exercitationem vero. Qui libero ut laudantium unde vel dolores blanditiis est, praesentium suscipit officiis, deleniti, earum nostrum sequi pariatur exercitationem.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia exercitationem vero. Qui libero ut laudantium unde vel dolores blanditiis est, praesentium suscipit officiis, deleniti, earum nostrum sequi pariatur exercitationem.
      `,
    creationDate: new Date().toISOString(),
    updateDate: new Date().toISOString(),
  },
  {
    id: '4',
    image: '/images/img-4.jpg',
    title: 'Hello World!',
    content: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia exercitationem vero. Qui libero ut laudantium unde vel dolores blanditiis est, praesentium suscipit officiis, deleniti, earum nostrum sequi pariatur exercitationem.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia exercitationem vero. Qui libero ut laudantium unde vel dolores blanditiis est, praesentium suscipit officiis, deleniti, earum nostrum sequi pariatur exercitationem.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia exercitationem vero. Qui libero ut laudantium unde vel dolores blanditiis est, praesentium suscipit officiis, deleniti, earum nostrum sequi pariatur exercitationem.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia exercitationem vero. Qui libero ut laudantium unde vel dolores blanditiis est, praesentium suscipit officiis, deleniti, earum nostrum sequi pariatur exercitationem.

Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque quia exercitationem vero. Qui libero ut laudantium unde vel dolores blanditiis est, praesentium suscipit officiis, deleniti, earum nostrum sequi pariatur exercitationem.
      `,
    creationDate: new Date().toISOString(),
    updateDate: new Date().toISOString(),
  },
];

export default data;
