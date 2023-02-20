interface Props {
  title: string;
  content: string;
  image: string;
}

export function HeroImage({ title, content, image }: Props): JSX.Element {
  return (
    <div className='hero p-4 h-[50vh]' style={{ backgroundImage: image }}>
      <div className='hero-overlay bg-opacity-60'></div>
      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>{title}</h1>
          <p className='mb-5'>{content}</p>
          <button className='btn btn-primary'>Get Started</button>
        </div>
      </div>
    </div>
  );
}
