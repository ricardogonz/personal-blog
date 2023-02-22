import { useState } from 'react';
import { InputField, TextareaField } from '../atoms';
import type { InputType } from '../../models';

type InputFieldProps = React.ComponentProps<typeof InputField>;

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  company: string;
  subject: string;
  message: string;
}

const INPUT_FIELDS: InputFieldProps[] = [
  {
    type: 'text' as InputType,
    placeholder: 'First name...',
    label: 'First name',
    className: 'md:w-[49%]',
    required: true,
    name: 'firstName',
  },
  {
    type: 'text' as InputType,
    placeholder: 'Last name...',
    label: 'Last name',
    className: 'md:w-[49%]',
    required: true,
    name: 'lastName',
  },
  {
    type: 'email' as InputType,
    placeholder: 'Email address...',
    label: 'Email',
    className: 'md:w-[49%]',
    required: true,
    name: 'email',
  },
  {
    type: 'text' as InputType,
    placeholder: 'Company...',
    label: 'Company',
    className: 'md:w-[49%]',
    required: true,
    name: 'company',
  },
  {
    type: 'text' as InputType,
    placeholder: 'Subject...',
    label: 'Subject',
    required: true,
    name: 'subject',
  },
];

export function ContactForm(): JSX.Element {
  const [formValues, setFormValues] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    company: '',
    subject: '',
    message: '',
  });

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const { name, value } = event.target;
    setFormValues((prevState: FormData) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log('Form submitted:', formValues);
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col md:flex-row flex-wrap justify-between gap-y-3'
    >
      {INPUT_FIELDS.map((props: InputFieldProps, index) => (
        <InputField
          value={formValues[props.name as keyof FormData]}
          onChange={handleChange}
          key={index}
          {...props}
        />
      ))}

      <TextareaField
        value={formValues.message}
        name='message'
        onChange={handleChange}
        placeholder='Message...'
        label='Message'
      />

      <div className='w-full text-right'>
        <button className='btn btn-primary'>Send</button>
      </div>
    </form>
  );
}
