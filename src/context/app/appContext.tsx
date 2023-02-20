import { createContext } from 'react';
import type { Post } from '../../models';

export interface AppContextType {
  posts?: Post[];
  setPosts?: (posts: Post[]) => void;
}

const AppContext = createContext<AppContextType>({});

export default AppContext;
