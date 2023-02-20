import { useState } from 'react';
import { MenuButton, NavButton } from './../atoms';
import { BlogName } from '../molecules';

type NavButtonProps = React.ComponentProps<typeof NavButton>;

const NAV_OPTIONS: NavButtonProps[] = [
  {
    text: 'Home',
    to: 'home',
  },
  {
    text: 'About',
    to: 'about',
  },
  {
    text: 'Blog',
    to: 'blog',
  },
  {
    text: 'Contact',
    to: 'contact',
  },
];

export function Header(): JSX.Element {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

  function handleMenuClick(): void {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <header className='flex items-center justify-between flex-wrap p-4 bg-blue-500 shadow-md'>
      <BlogName name='John Doe' />
      <MenuButton onClick={handleMenuClick} />
      <div
        className={`w-full block flex-grow md:flex md:items-center md:w-auto transition-2" ${
          isMenuOpen ? '' : 'hidden'
        }`}
      >
        <nav className='text-sm md:flex-grow'>
          {NAV_OPTIONS.map((props, index) => (
            <NavButton isLastButton={NAV_OPTIONS.length - 1 === index} key={index} {...props} />
          ))}
        </nav>

        <div className='form-control mt-2 md:mt-0'>
          <div className='input-group'>
            <input type='text' placeholder='Search…' className='input input-bordered w-full' />
            <button className='btn btn-square'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-6 w-6'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
