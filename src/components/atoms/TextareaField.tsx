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
  label,
}: Props): JSX.Element {
  return (
    <div className={`form-control w-full ${className}`}>
      <label className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <textarea
        required={required}
        placeholder={placeholder}
        className='textarea textarea-bordered h-32 textarea-lg'
      ></textarea>
    </div>
  );
}
