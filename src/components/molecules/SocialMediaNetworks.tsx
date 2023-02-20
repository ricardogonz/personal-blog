import { SocialMediaNetworkButton } from '../atoms';
import { BsFacebook, BsYoutube, BsLinkedin, BsInstagram } from 'react-icons/bs';

type SocialMediaNetworkButtonProps = React.ComponentProps<typeof SocialMediaNetworkButton>;

const SOCIAL_NETWORKS: SocialMediaNetworkButtonProps[] = [
  {
    href: 'https://www.facebook.com',
    icon: <BsFacebook />,
  },
  {
    href: 'https://www.youtube.com',
    icon: <BsYoutube />,
  },
  {
    href: 'https://www.linkedin.com',
    icon: <BsLinkedin />,
  },
  {
    href: 'https://www.instagram.com',
    icon: <BsInstagram />,
  },
];

interface Props {
  className?: string;
}

export function SocialMediaNetworks({ className = '' }: Props): JSX.Element {
  return (
    <section className={`flex gap-4 ${className}`}>
      {SOCIAL_NETWORKS.map((socialNetwork, index) => (
        <SocialMediaNetworkButton key={index} {...socialNetwork} />
      ))}
    </section>
  );
}
