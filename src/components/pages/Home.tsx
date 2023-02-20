import { HeroImage } from '../molecules';

export function Home(): JSX.Element {
  return (
    <div className='-mt-4 -ml-4 -mr-4'>
      <HeroImage
        title='Hello there'
        content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, fuga, tenetur saepe adipisci eligendi, magnam doloribus aspernatur veniam nemo harum debitis voluptate! Vero maxime odio nisi distinctio, provident fugiat temporibus.'
        image='url(/images/hero.jpg)'
      />
    </div>
  );
}
