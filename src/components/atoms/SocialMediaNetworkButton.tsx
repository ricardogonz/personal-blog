interface Props {
  href: string;
  icon: JSX.Element;
}

export function SocialMediaNetworkButton({ href, icon }: Props): JSX.Element {
  return (
    <a
      href={href}
      target='_blank'
      rel='noreferrer'
      className='p-2 rounded transition  hover:text-white hover:bg-blue-800'
    >
      {icon}
    </a>
  );
}
