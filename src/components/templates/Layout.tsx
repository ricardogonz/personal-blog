import { useLocation, Outlet, Navigate } from 'react-router-dom';

import { Header } from '../organisms/Header';

const LAYOUT_ROUTE = '/';

export function Layout(): JSX.Element {
  const { pathname } = useLocation();

  return pathname === LAYOUT_ROUTE ? (
    <Navigate to='/super-hot' replace />
  ) : (
    <div className='layout'>
      <Header />
      <Outlet />
    </div>
  );
}
