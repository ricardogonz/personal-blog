interface Props {
  src: string;
  className?: string;
}

export function Youtube({ src, className = '' }: Props): JSX.Element {
  return (
    <iframe
      className={`w-full xl:max-w-xl aspect-video ${className}`}
      src={src}
      allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
    ></iframe>
  );
}
