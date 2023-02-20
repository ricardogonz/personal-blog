import { SocialMediaNetworks } from './SocialMediaNetworks';

interface Props {
  name: string;
  jobTitle: string;
}

export function AboutMe({ name, jobTitle }: Props): JSX.Element {
  return (
    <>
      <img alt='John Doe' src='/images/about-me.jpg' className='w-1/3 rounded-lg shadow-2xl' />
      <h2 className='text-3xl font-bold'>{name}</h2>
      <h3 className='text-xl text-gray-400'>{jobTitle}</h3>
      <SocialMediaNetworks className='text-2xl' />
    </>
  );
}
