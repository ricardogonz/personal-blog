import { useContext, useState, useEffect } from 'react';

import AppContext, { type AppContextType } from './appContext';
import type { Post } from '../../models';

interface Props {
  children: JSX.Element;
}

export function AppContextProvider({ children }: Props): JSX.Element {
  useEffect(() => {
    async function getData(): Promise<void> {
      try {
        const module = await require('../../' + 'data.json');
        localStorage.setItem('posts', JSON.stringify(module));
        setPosts(module);
      } catch (error) {
        setPosts([]);
      }
    }

    const lsPosts = localStorage.getItem('posts');
    if (lsPosts === null) {
      void getData();
    } else {
      setPosts(JSON.parse(lsPosts));
    }
  }, []);

  const [posts, setPosts] = useState<Post[]>();

  const value = {
    posts,
    setPosts: (posts: Post[]) => {
      setPosts(posts);
      localStorage.setItem('posts', JSON.stringify(posts));
    },
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext(): AppContextType {
  return useContext(AppContext);
}
