import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/templates';
import { Home, About, Blog, Contact, NotFound } from './components/pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/home',
        index: true,
        element: <Home />,
      },
      {
        path: '/about',
        element: <About />,
      },
      {
        path: '/blog',
        element: <Blog />,
      },
      {
        path: '/contact',
        element: <Contact />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

function App(): JSX.Element {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
