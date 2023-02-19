import { useState } from 'react';
import { Icon, MenuButton, NavButton } from './../atoms';

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
    <nav className='flex items-center justify-between flex-wrap p-4 bg-blue-500'>
      <Icon />
      <MenuButton onClick={handleMenuClick} />

      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto transition-2" ${
          isMenuOpen ? '' : 'hidden'
        }`}
      >
        <div className='text-sm lg:flex-grow'>
          {NAV_OPTIONS.map((props, index) => (
            <NavButton isLastButton={NAV_OPTIONS.length - 1 === index} key={index} {...props} />
          ))}
        </div>

        <input
          type='text'
          placeholder='Search...'
          className='input mt-4 lg:mt-0 input-bordered input-sm w-full lg:w-64'
        />
      </div>
    </nav>
  );
}
