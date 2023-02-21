import { Helmet } from 'react-helmet-async';
import { useLocation, Outlet, Navigate } from 'react-router-dom';

import { Header, Footer, Content } from '../organisms';

const LAYOUT_ROUTE = '/';

export function Layout(): JSX.Element {
  const { pathname } = useLocation();

  return pathname === LAYOUT_ROUTE ? (
    <Navigate to='/home' replace />
  ) : (
    <div className='relative'>
      <Helmet>
        <title>{`John Doe | ${pathname.split('/')[1].toUpperCase()}`}</title>
      </Helmet>
      <div className='fixed w-full z-50 top-0'>
        <Header />
      </div>
      <div className='flex flex-col h-screen justify-between pt-[80px]'>
        <Content>
          <Outlet />
        </Content>
        <Footer />
      </div>
    </div>
  );
}
