import { useState } from 'react';
import { TbMoodEmpty } from 'react-icons/tb';

import { SectionTitle } from '../atoms';
import { Card, CircleButton, AddPostForm } from '../molecules';
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
      ...(posts ?? []),
      {
        id: posts !== undefined ? `${posts?.length + 1}` : '1',
        title,
        content,
        image: '/images/hero.jpg',
        creationDate: new Date().toISOString(),
        updateDate: new Date().toISOString(),
      },
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
            <Card key={postData.id} {...postData} />
          ))}
        </div>
      ) : (
        <div className='hero h-1/2'>
          <div className='hero-content flex-col lg:flex-row items-center'>
            <TbMoodEmpty className='text-9xl' />
            <div>
              <h1 className='text-3xl font-bold'>You don&apos;t have any post</h1>
              <p className='text-2xl py-6'>Please add a post</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
