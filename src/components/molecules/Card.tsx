import { NavLink } from 'react-router-dom';

interface Props {
  id: string;
  image: string;
  title: string;
  content: string;
  creationDate: string;
}

export function Card({ image, content, title, creationDate, id }: Props): JSX.Element {
  return (
    <div className='card sm:card-side bg-base-100 xl:w-[48%] shadow-xl'>
      <div
        className='w-48 lg:h-auto lg:w-48 bg-cover rounded-l-2xl text-center overflow-hidden'
        style={{ backgroundImage: `url(${image})` }}
        title='Woman holding a mug'
      ></div>
      <div className='card-body'>
        <div className='text-right'>
          <span className='text-sm text-gray-400'>{creationDate}</span>
        </div>
        <h2 className='card-title'>{title}</h2>
        <p>{content}</p>
        <div className='card-actions justify-end'>
          <NavLink to={id} className='btn btn-primary'>
            Read more
          </NavLink>
        </div>
      </div>
    </div>
  );
}
