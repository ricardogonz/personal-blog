import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Layout } from './components/templates';
import { Home, About, Blog, Contact, NotFound, PostDetails } from './components/pages';
import { AppContextProvider } from './context/app';

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
        path: '/blog/:id',
        element: <PostDetails />,
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
  return (
    <AppContextProvider>
      <RouterProvider router={router}></RouterProvider>
    </AppContextProvider>
  );
}

export default App;
