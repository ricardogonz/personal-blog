import { SectionTitle } from '../atoms';
import { Card } from '../molecules';
import { useAppContext } from '../../context/app';

export function Blog(): JSX.Element {
  const { posts } = useAppContext();

  return (
    <>
      <SectionTitle />
      {posts?.length !== 0 ? (
        <div className='flex flex-col gap-4 xl:flex-row xl:flex-wrap xl:justify-between'>
          {posts?.map(({ updateDate, ...postData }) => (
            <Card key={postData.id} {...postData} />
          ))}
        </div>
      ) : (
        <h1>No posts to show...</h1>
      )}
    </>
  );
}
