import { NavLink } from 'react-router-dom';

interface Props {
  text: string;
  to: string;
  isLastButton?: boolean;
}

export function NavButton({ text, to, isLastButton = false }: Props): JSX.Element {
  const className = ({ isActive }: { isActive: boolean }): string =>
    `block mt-2 md:mt-0 md:inline-block text-blue-100 hover:text-white hover:bg-blue-800 p-2 rounded-md transition ${
      isLastButton ? '' : 'mr-4'
    } ${isActive ? 'bg-blue-600 p-2 rounded' : ''}`;

  return (
    <NavLink to={to} className={className}>
      <span className='uppercase'>{text}</span>
    </NavLink>
  );
}
