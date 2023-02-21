import { useState } from 'react';

import { InputField, TextareaField } from '../atoms';
import type { InputType, PostFormValues } from '../../models';

type InputFieldProps = React.ComponentProps<typeof InputField>;

const INPUT_FIELDS: InputFieldProps[] = [
  {
    type: 'text' as InputType,
    placeholder: 'Type here the post title',
    label: 'Title',
    className: 'md:w-f',
    required: true,
  },
];

interface Props {
  formValues?: PostFormValues;
  onCancel?: () => void;
  onSubmit?: (values: PostFormValues) => void;
}

export function AddPostForm({
  onCancel = () => {},
  onSubmit = () => {},
  formValues: initialFormValues = { title: '', content: '' },
}: Props): JSX.Element {
  const [formValues, setFormValues] = useState<PostFormValues>(initialFormValues);

  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void {
    const { name, value } = event.target;
    setFormValues((prevState) => ({ ...prevState, [name]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    onSubmit({ ...formValues });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col md:flex-row flex-wrap justify-between gap-y-3 mb-4'
    >
      {INPUT_FIELDS.map((props, index) => (
        <InputField
          key={index}
          {...props}
          value={formValues.title}
          name='title'
          onChange={handleChange}
          required
        />
      ))}

      <TextareaField
        placeholder='Type the post content here'
        label='Content'
        value={formValues.content}
        onChange={handleChange}
        name='content'
        required
      />

      <div className='flex flex-row w-full justify-end gap-2'>
        <button type='button' onClick={onCancel} className='btn btn-secondary'>
          Cancel
        </button>

        <button type='submit' className='btn btn-primary'>
          Save
        </button>
      </div>
    </form>
  );
}
