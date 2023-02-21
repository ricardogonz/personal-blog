import type { InputType } from '../../models';

interface Props {
  type: InputType;
  placeholder: string;
  label: string;
  className?: string;
  required: boolean;
  value?: string;
  name?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export function InputField({
  name = '',
  type,
  placeholder,
  label,
  className = '',
  required = false,
  onChange = () => {},
  value = '',
}: Props): JSX.Element {
  return (
    <div className={`form-control w-full ${className}`}>
      <label className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <input
        required={required}
        type={type}
        placeholder={placeholder}
        className='input input-bordered w-full'
        onChange={onChange}
        value={value}
        name={name}
      />
    </div>
  );
}
