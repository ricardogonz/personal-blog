import { MdAdd } from 'react-icons/md';

interface Props {
  tip: string;
  onClick: () => void;
  children?: JSX.Element;
  disabled?: boolean;
}

export function CircleButton({ onClick, tip, children, disabled = false }: Props): JSX.Element {
  return (
    <div className='tooltip tooltip-bottom absolute top-0 right-0' data-tip={tip}>
      <button onClick={onClick} className='btn btn-circle btn-outline' disabled={disabled}>
        {children === undefined ? <MdAdd className='text-2xl' /> : children}
      </button>
    </div>
  );
}
