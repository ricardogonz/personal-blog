interface Props {
  id: string;
  content: string;
  children?: JSX.Element;
  action?: string;
}

export function Modal({ children, content, id }: Props): JSX.Element {
  return (
    <>
      <input type='checkbox' id={id} className='modal-toggle' />
      <div className='modal'>
        <div className='modal-box'>
          <p className='className="font-bold text-lg'>{content}</p>
          <div className='modal-action'>{children}</div>
        </div>
      </div>
    </>
  );
}
