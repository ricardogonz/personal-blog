import { useState } from 'react';
import { NavLink } from 'react-router-dom';

import { useAppContext } from '../../context/app';
import type { Post } from '../../models/Post.model';
import { Menu } from '../atoms';

export function Search(): JSX.Element {
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const { posts } = useAppContext();

  function handleChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const {
      target: { value },
    } = event;
    setSearchTerm(value);

    if (posts === undefined || posts?.length === 0) {
      return;
    }

    if (value === '') {
      setFilteredPosts([]);
      return;
    }

    setFilteredPosts(
      posts.filter((post: Post) => post.title.toLowerCase().includes(value.toLowerCase())),
    );
  }

  function handleMenuItemClick(): void {
    setSearchTerm('');
    setFilteredPosts([]);
  }

  return (
    <div className='relative'>
      <div className='input-group'>
        <input
          type='text'
          placeholder='Search…'
          className='input input-bordered w-full'
          onChange={handleChange}
          value={searchTerm}
        />
        <button className='btn btn-square pointer-events-none'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            />
          </svg>
        </button>
      </div>
      <div className='w-full absolute top-12 z-10 mt-1'>
        {filteredPosts?.length > 0 && (
          <Menu>
            {filteredPosts.map((post: Post) => (
              <li key={post.id} onClick={handleMenuItemClick}>
                <NavLink to={`/blog/${post.id}`}>{post.title}</NavLink>
              </li>
            ))}
          </Menu>
        )}
      </div>
    </div>
  );
}
