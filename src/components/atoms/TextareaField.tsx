interface Props {
  placeholder: string;
  label: string;
  className?: string;
  required?: boolean;
  onChange?: (event: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value?: string;
  name?: string;
}

export function TextareaField({
  name = '',
  placeholder,
  className = '',
  required = false,
  label,
  value = '',
  onChange = () => {},
}: Props): JSX.Element {
  return (
    <div className={`form-control w-full ${className}`}>
      <label className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <textarea
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
        className='textarea textarea-bordered h-56 textarea-lg'
      ></textarea>
    </div>
  );
}
