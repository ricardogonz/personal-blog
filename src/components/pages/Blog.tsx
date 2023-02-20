import { useState } from 'react';

import { SectionTitle } from '../atoms';
import { Card, CircleButton, AddPostForm } from '../molecules';
import { useAppContext } from '../../context/app';

export function Blog(): JSX.Element {
  const [isAddPostFormOpen, setIsAddPostFormOpen] = useState(false);
  const { posts } = useAppContext();

  function handleAddPost(): void {
    setIsAddPostFormOpen(true);
  }

  function handleCancel(): void {
    setIsAddPostFormOpen(false);
  }

  return (
    <>
      <div className='relative'>
        <SectionTitle />
        <div className='absolute top-0 right-0'>
          <CircleButton onClick={handleAddPost} tip='Add a post' disabled={isAddPostFormOpen} />
        </div>
      </div>

      <div className={`transition ${isAddPostFormOpen ? '' : 'hidden'}`}>
        <AddPostForm onCancel={handleCancel} />
      </div>

      {posts?.length !== 0 ? (
        <div className='flex flex-col gap-4 xl:flex-row xl:flex-wrap xl:justify-between'>
          {posts?.map(({ creationDate, ...postData }) => (
            <Card key={postData.id} {...postData} />
          ))}
        </div>
      ) : (
        <h1>No posts to show...</h1>
      )}
    </>
  );
}
