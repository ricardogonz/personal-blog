import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { BsChevronLeft } from 'react-icons/bs';

import { SectionTitle } from '../atoms';
import { useAppContext } from '../../context/app';
import { CircleButton } from '../molecules';

export function PostDetails(): JSX.Element | undefined {
  const navigate = useNavigate();
  const { id } = useParams();
  const { posts } = useAppContext();
  const post = posts?.find((post) => post.id === id);

  useEffect(() => {
    if (post === undefined) {
      navigate('/blog');
    }
  }, [post]);

  function handleBackClick(): void {
    navigate('/blog');
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
      </div>

      <div className='flex flex-col md:flex-row items-top'>
        <div className='text-center md:w-1/3 mb-4 md:mb-0 p-4'>
          <img
            src={post?.image}
            alt='post image'
            className='inline-block rounded-2xl shadow-xl max-h-[500px]'
          />
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
    </>
  );
}
