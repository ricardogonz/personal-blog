import { SocialMediaNetworks } from '../molecules';

export function Footer(): JSX.Element {
  return (
    <footer className='flex flex-col items-center md:flex-row md:justify-between p-4 bg-blue-500 text-blue-100'>
      <SocialMediaNetworks />
      <section className='mt-2 md:mt-0'>Copyright ©2023. All rights reserved.</section>
    </footer>
  );
}
