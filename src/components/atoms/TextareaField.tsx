interface Props {
  placeholder: string;
  label: string;
  className?: string;
  required?: boolean;
}

export function TextareaField({
  placeholder,
  className = '',
  required = false,
}: Props): JSX.Element {
  return (
    <div className={`form-control w-full ${className}`}>
      <label className='label'>
        <span className='label-text'>Your message</span>
      </label>
      <textarea
        required={required}
        placeholder={placeholder}
        className='textarea textarea-bordered h-32'
      ></textarea>
    </div>
  );
}
