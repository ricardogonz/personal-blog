import { NavLink } from 'react-router-dom';

import { useAppContext } from '../../context/app';
import type { Post } from '../../models';
import { Modal } from '../molecules';

interface Props {
  id: string;
  image: string;
  title: string;
  content: string;
  updateDate: string;
}

export function Card({ image, content, title, updateDate, id }: Props): JSX.Element {
  const { setPosts, posts } = useAppContext();

  function handleDelete(): void {
    const updatedPosts = posts?.filter((post) => post.id !== id) as Post[];
    setPosts?.(updatedPosts);
  }

  function truncText(text: string, max: number): string {
    return `${text.substring(0, max - 1)}${text.length > max ? '...' : ''}`;
  }

  return (
    <>
      <Modal
        id='modal'
        content='Are you sure you want to delete this post? This action cannot be undone.'
        action='Confirm'
      >
        <>
          <label htmlFor='modal' className='btn btn-secondary'>
            Cancel
          </label>
          <label onClick={handleDelete} htmlFor='modal' className='btn'>
            Confirm
          </label>
        </>
      </Modal>

      <div className='card h-[350px] sm:h-[300px] sm:card-side bg-base-100 xl:w-[48%] shadow-xl'>
        <div
          className='hidden md:block md:w-[100px] lg:w-[200px] bg-cover rounded-l-2xl text-center overflow-hidden'
          style={{ backgroundImage: `url(${image})` }}
          title='Woman holding a mug'
        ></div>

        <div className='card-body w-full md:w-[calc(100px-100%)] lg:w-[calc(200px-100%)]'>
          <div className='text-right'>
            <span className='text-sm text-gray-400'>{new Date(updateDate).toDateString()}</span>
          </div>
          <h2 className='card-title'>{title}</h2>
          <p>{truncText(content, 220)}</p>
          <div className='card-actions justify-end'>
            <label htmlFor='modal' className='btn btn-secondary'>
              delete
            </label>
            <NavLink to={id} className='btn btn-primary'>
              Read more
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}
