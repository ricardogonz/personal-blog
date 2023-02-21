import { InputField, TextareaField } from '../atoms';
import type { InputType } from '../../models';

type InputFieldProps = React.ComponentProps<typeof InputField>;

const INPUT_FIELDS: InputFieldProps[] = [
  {
    type: 'text' as InputType,
    placeholder: 'First name...',
    label: 'First name',
    className: 'md:w-[49%]',
    required: true,
  },
  {
    type: 'text' as InputType,
    placeholder: 'Last name...',
    label: 'Last name',
    className: 'md:w-[49%]',
    required: true,
  },
  {
    type: 'email' as InputType,
    placeholder: 'Email address...',
    label: 'Email',
    className: 'md:w-[49%]',
    required: true,
  },
  {
    type: 'text' as InputType,
    placeholder: 'Company...',
    label: 'Company',
    className: 'md:w-[49%]',
    required: true,
  },
  {
    type: 'text' as InputType,
    placeholder: 'Subject...',
    label: 'Subject',
    required: true,
  },
];

function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
  event.preventDefault();
  console.log('Form submitted');
}

export function ContactForm(): JSX.Element {
  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col md:flex-row flex-wrap justify-between gap-y-3'
    >
      {INPUT_FIELDS.map((props, index) => (
        <InputField key={index} {...props} />
      ))}

      <TextareaField placeholder='Message...' label='Message' />

      <div className='w-full text-right'>
        <button className='btn btn-primary'>Send</button>
      </div>
    </form>
  );
}
