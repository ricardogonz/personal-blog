import { useState } from 'react';
import { MenuButton, NavButton } from './../atoms';
import { BlogName } from '../molecules';

const NAV_OPTIONS = [
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

        <input
          type='text'
          placeholder='Search...'
          className='input mt-2 md:mt-0 input-bordered input-sm w-full md:w-64'
        />
      </div>
    </header>
  );
}
