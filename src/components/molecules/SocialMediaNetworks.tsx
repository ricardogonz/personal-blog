import { SocialMediaNetworkButton } from '../atoms';
import { BsFacebook, BsYoutube, BsLinkedin, BsInstagram } from 'react-icons/bs';

const SOCIAL_NETWORKS = [
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

export function SocialMediaNetworks(): JSX.Element {
  return (
    <section className='flex gap-4'>
      {SOCIAL_NETWORKS.map((socialNetwork, index) => (
        <SocialMediaNetworkButton key={index} {...socialNetwork} />
      ))}
    </section>
  );
}
