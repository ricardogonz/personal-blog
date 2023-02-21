import { useLocation, Outlet, Navigate } from 'react-router-dom';

import { Header, Footer, Content } from '../organisms';

const LAYOUT_ROUTE = '/';

export function Layout(): JSX.Element {
  const { pathname } = useLocation();

  return pathname === LAYOUT_ROUTE ? (
    <Navigate to='/home' replace />
  ) : (
    <div className='relative'>
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
