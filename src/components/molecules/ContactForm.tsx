import { InputField, TextareaField } from '../atoms';
import type { InputType } from '../../models';

type InputFieldProps = React.ComponentProps<typeof InputField>;

const INPUT_FIELDS: InputFieldProps[] = [
  {
    type: 'text' as InputType,
    placeholder: 'First name',
    label: 'What is your first name?',
    className: 'md:w-[49%]',
    required: true,
  },
  {
    type: 'text' as InputType,
    placeholder: 'Last name',
    label: 'What is your last name?',
    className: 'md:w-[49%]',
    required: true,
  },
  {
    type: 'email' as InputType,
    placeholder: 'email@email.com',
    label: 'What is your email?',
    className: 'md:w-[49%]',
    required: true,
  },
  {
    type: 'text' as InputType,
    placeholder: 'Company name',
    label: 'What is your company?',
    className: 'md:w-[49%]',
    required: true,
  },
  {
    type: 'text' as InputType,
    placeholder: 'Subject',
    label: 'What is the subject?',
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

      <TextareaField placeholder='Type your message' label='Your message' />

      <div className='w-full text-right'>
        <button className='btn btn-primary'>Send</button>
      </div>
    </form>
  );
}
