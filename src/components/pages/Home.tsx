import { EmptyPostsFeed, HeroImage, Card } from '../molecules';
import { useAppContext } from '../../context/app';
import { Youtube } from '../atoms';

export function Home(): JSX.Element {
  const { posts } = useAppContext();
  const isLoadingPosts = posts === undefined;
  const isEmptyPosts = posts?.length === 0;
  const latestPosts = posts?.slice(0, 2);

  return (
    <>
      <div className='-mt-4 -ml-4 -mr-4'>
        <HeroImage
          title='Hello there'
          content='Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quasi, fuga, tenetur saepe adipisci eligendi, magnam doloribus aspernatur veniam nemo harum debitis voluptate! Vero maxime odio nisi distinctio, provident fugiat temporibus.'
          image='url(/images/hero.jpg)'
        />
      </div>
      <div className='flex flex-col md:flex-row md:justify-between'>
        {/* <iframe
          className='w-full max-w-xl aspect-video sm:basis-1/3 p-4'
          src='https://www.youtube.com/embed/r9jwGansp1E'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
        ></iframe> */}
        <Youtube className='sm:basis-1/3' src='https://www.youtube.com/embed/dQw4w9WgXcQ' />
        <div className='sm:basis-2/3 p-4'>
          <h2 className='text-2xl font-bold mb-4'>Latest Posts:</h2>
          {isLoadingPosts ? (
            <progress className='w-full progress'></progress>
          ) : isEmptyPosts ? (
            <EmptyPostsFeed />
          ) : (
            <div className='flex flex-col xl:flex-row xl:justify-between gap-4'>
              {latestPosts?.map(({ creationDate, ...postData }) => (
                <Card abstractMaxLength={60} key={postData.id} {...postData} />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
