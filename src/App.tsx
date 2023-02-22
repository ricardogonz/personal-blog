import { Suspense } from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from './components/templates';
import { AppContextProvider } from './context/app';
import { Home, About, Blog, Contact, NotFound, PostDetails } from './components/pages';

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
    <Suspense fallback={<span>loading...</span>}>
      <AppContextProvider>
        <HelmetProvider>
          <RouterProvider router={router}></RouterProvider>
        </HelmetProvider>
      </AppContextProvider>
    </Suspense>
  );
}

export default App;
