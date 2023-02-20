import type { InputType } from '../../models';

interface Props {
  type: InputType;
  placeholder: string;
  label: string;
  className?: string;
  required: boolean;
}

export function InputField({
  type,
  placeholder,
  label,
  className = '',
  required = false,
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
      />
    </div>
  );
}
