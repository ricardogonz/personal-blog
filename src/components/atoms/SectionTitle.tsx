import { useLocation } from 'react-router-dom';

interface Props {
  customTitle?: string;
}

export function SectionTitle({ customTitle = '' }: Props): JSX.Element {
  const { pathname } = useLocation();

  return (
    <div className='text-center mb-4'>
      <h1 className='text-2xl inline-block font-bold bg-blue-100 text-center px-6 py-2 rounded-md shadow-md'>
        {customTitle === '' ? pathname.replace('/', '').toUpperCase() : customTitle}
      </h1>
      <div className='divider'></div>
    </div>
  );
}
