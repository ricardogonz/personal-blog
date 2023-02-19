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
  const className = `block mt-4 lg:mt-0 lg:inline-block text-blue-100 hover:text-white hover:bg-blue-800 p-2 rounded transition ${
    isLastButton ? '' : 'mr-4'
  }`;
  return (
    <NavLink to={to} className={className}>
      {text}
    </NavLink>
  );
}

NavButton.defaultProps = defaultProps;