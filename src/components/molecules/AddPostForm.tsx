import { InputField, TextareaField } from '../atoms';
import type { InputType } from '../../models';

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
  onCancel: () => void;
}

export function AddPostForm({ onCancel }: Props): JSX.Element {
  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    console.log('Form submitted');
  }

  return (
    <form
      onSubmit={handleSubmit}
      className='flex flex-col md:flex-row flex-wrap justify-between gap-y-3 mb-4'
    >
      {INPUT_FIELDS.map((props, index) => (
        <InputField key={index} {...props} />
      ))}

      <TextareaField placeholder='Type the post content here' label='Content' />

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
