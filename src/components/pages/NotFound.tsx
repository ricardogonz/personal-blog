import { NavLink } from 'react-router-dom';

export function NotFound(): JSX.Element {
  return (
    <div className='hero h-full'>
      <div className='hero-content flex-col lg:flex-row'>
        <img
          src='/images/not-found.jpg'
          alt='not found'
          className='sm:max-w-lg rounded-lg shadow-2xl'
        />
        <div>
          <h1 className='text-5xl font-bold'>Ooops..</h1>
          <p className='text-2xl py-6'>Something went wrong</p>
          <NavLink to='home' className='btn btn-outline btn-primary'>
            Home
          </NavLink>
        </div>
      </div>
    </div>
  );
}
