import { useState } from 'react';

import { SectionTitle } from '../atoms';
import { Card, CircleButton, AddPostForm, EmptyPostsFeed } from '../molecules';
import { useAppContext } from '../../context/app';
import type { PostFormValues } from '../../models';

export function Blog(): JSX.Element {
  const [isAddPostFormOpen, setIsAddPostFormOpen] = useState(false);
  const { setPosts, posts } = useAppContext();

  function handleAddPost(): void {
    setIsAddPostFormOpen(true);
  }

  function handleCancel(): void {
    setIsAddPostFormOpen(false);
  }

  function handleSubmit({ title, content }: PostFormValues): void {
    setPosts?.([
      {
        id: posts !== undefined ? `${posts?.length + 1}` : '1',
        title,
        content,
        image: '/images/hero.jpg',
        creationDate: new Date().toISOString(),
        updateDate: new Date().toISOString(),
      },
      ...(posts ?? []),
    ]);

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
        <AddPostForm onCancel={handleCancel} onSubmit={handleSubmit} />
      </div>

      {posts?.length !== 0 ? (
        <div className='flex flex-col gap-4 xl:flex-row xl:flex-wrap xl:justify-between'>
          {posts?.map(({ creationDate, ...postData }) => (
            <Card showDelete key={postData.id} {...postData} />
          ))}
        </div>
      ) : (
        <EmptyPostsFeed />
      )}
    </>
  );
}
