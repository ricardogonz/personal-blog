import { NavLink } from 'react-router-dom';

interface Props {
  text: string;
  to: string;
  isLastButton: boolean;
}

const defaultProps = {
  isLastButton: false,
};

export function NavButton({ text, to, isLastButton }: Props): JSX.Element {
  const className = `block mt-2 lg:mt-0 md:inline-block text-blue-100 hover:text-white hover:bg-blue-800 p-2 rounded-md transition ${
    isLastButton ? '' : 'mr-4'
  }`;
  return (
    <NavLink to={to} className={className}>
      <span className='uppercase'>{text}</span>
    </NavLink>
  );
}

NavButton.defaultProps = defaultProps;
