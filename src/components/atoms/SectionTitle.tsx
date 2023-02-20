import { useLocation } from 'react-router-dom';

export function SectionTitle(): JSX.Element {
  const { pathname } = useLocation();

  return (
    <div className='text-center mb-4'>
      <h1 className='text-2xl inline-block font-bold bg-blue-100 text-center px-6 py-2 rounded-md shadow-md'>
        {pathname.replace('/', '').toUpperCase()}
      </h1>
      <div className='divider'></div>
    </div>
  );
}
