import { useLocation, Outlet, Navigate } from 'react-router-dom';

import { Header, Footer, Content } from '../organisms';

const LAYOUT_ROUTE = '/';

export function Layout(): JSX.Element {
  const { pathname } = useLocation();

  return pathname === LAYOUT_ROUTE ? (
    <Navigate to='/home' replace />
  ) : (
    <div className='flex flex-col h-screen justify-between'>
      <Header />
      <Content>
        <Outlet />
      </Content>
      <Footer />
    </div>
  );
}
