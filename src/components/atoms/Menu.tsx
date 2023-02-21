interface Props {
  children: JSX.Element | JSX.Element[];
}

export function Menu({ children }: Props): JSX.Element {
  return <ul className='menu bg-base-100 w-full rounded-box shadow-lg'>{children}</ul>;
}
