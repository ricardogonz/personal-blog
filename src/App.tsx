import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/templates';
import { Home, About, Blog, Contact } from './components/pages';

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
        element: <h1>Page not found</h1>,
      },
    ],
  },
]);

function App(): JSX.Element {
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
