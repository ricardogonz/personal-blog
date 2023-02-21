import { AiOutlineRobot } from 'react-icons/ai';

export function EmptyPostsFeed(): JSX.Element {
  return (
    <div className='hero h-1/2'>
      <div className='hero-content flex-col lg:flex-row items-center'>
        <AiOutlineRobot className='text-9xl' />
        <div>
          <h1 className='text-3xl font-bold'>There are no posts yet</h1>
        </div>
      </div>
    </div>
  );
}
