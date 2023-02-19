import { NavLink } from 'react-router-dom';

import { Icon } from '../atoms/Icon';

interface Props {
  name: string;
}

export function BlogName({ name }: Props): JSX.Element {
  return (
    <NavLink to='home' className='flex items-center flex-shrink-0 text-white mr-6'>
      <Icon />
      <span className='font-semibold text-xl tracking-tight'>{name}</span>
    </NavLink>
  );
}
