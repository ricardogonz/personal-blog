import { useContext, useState } from 'react';

import AppContext, { type AppContextType } from './appContext';
import data from '../../../src/data.json';
import type { Post } from '../../models';

interface Props {
  children: JSX.Element;
}

export function AppContextProvider({ children }: Props): JSX.Element {
  const [posts, setPosts] = useState<Post[]>(data);

  const value = {
    posts,
    setPosts,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppContext(): AppContextType {
  return useContext(AppContext);
}
