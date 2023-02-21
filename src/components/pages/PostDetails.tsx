import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';
import { FiEdit2 } from 'react-icons/fi';

import { SectionTitle } from '../atoms';
import { useAppContext } from '../../context/app';
import { CircleButton, AddPostForm } from '../molecules';

export function PostDetails(): JSX.Element {
  const [isEditPostFormOpen, setIsEditPostFormOpen] = useState(false);
  const navigate = useNavigate();
  const { id } = useParams();
  const { posts, setPosts } = useAppContext();
  const post = posts?.find((post) => post.id === id);

  useEffect(() => {
    if (post === undefined) {
      navigate('/blog');
    }
  }, [post]);

  function handleBackClick(): void {
    navigate(-1);
  }

  function handleEditPost(): void {
    setIsEditPostFormOpen(true);
  }

  function handleCancel(): void {
    setIsEditPostFormOpen(false);
  }

  function handleSubmit({ title, content }: { title: string; content: string }): void {
    const postIndex = posts?.findIndex((post) => post.id === id) as number;

    if (postIndex === -1) {
      return;
    }

    const updatedPosts = [...(posts ?? [])];
    let postToUpdate = updatedPosts.splice(postIndex, 1)[0];
    postToUpdate = {
      ...postToUpdate,
      title,
      content,
      updateDate: new Date().toISOString(),
    };
    updatedPosts.unshift(postToUpdate);
    setPosts?.(updatedPosts);

    setIsEditPostFormOpen(false);
  }

  return (
    <>
      <div className='relative'>
        <SectionTitle customTitle={post?.title} />
        <div
          className='absolute top-0 left-12
        '
        >
          <CircleButton onClick={handleBackClick} tip='Go back'>
            <BsChevronLeft className='text-2xl' />
          </CircleButton>
        </div>
        <div
          className='absolute top-0 right-0
        '
        >
          <CircleButton onClick={handleEditPost} tip='Edit post' disabled={isEditPostFormOpen}>
            <FiEdit2 className='text-2xl' />
          </CircleButton>
        </div>
      </div>

      {isEditPostFormOpen && post?.title !== undefined && post?.content !== undefined ? (
        <AddPostForm
          formValues={{ title: post.title, content: post.content }}
          onCancel={handleCancel}
          onSubmit={handleSubmit}
        />
      ) : (
        <div className='flex flex-col md:flex-row items-top'>
          <div className='text-center md:w-1/3 mb-4 md:mb-0 p-4'>
            {post?.image !== undefined && (
              <img
                src={post?.image}
                alt='post image'
                className='inline-block rounded-2xl shadow-xl max-h-[500px]'
              />
            )}
          </div>

          <div className='text-lg md:w-2/3'>
            <pre className='whitespace-pre-wrap font-sans'>{post?.content}</pre>
            {post?.updateDate !== undefined && (
              <p className='text-right text-sm text-gray-400'>
                {new Date(post?.updateDate).toDateString()}
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
}
