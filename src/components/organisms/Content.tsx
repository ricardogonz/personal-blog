interface Props {
  children: JSX.Element;
}

export function Content({ children }: Props): JSX.Element {
  return <article className='flex-grow p-1'>{children}</article>;
}
