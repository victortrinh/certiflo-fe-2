import { useImage } from 'react-image';

type Props = {
  alt: string;
  className?: string;
  height: string;
  source: string;
  width: string;
};

export const Image = ({ alt, className, height, source, width }: Props) => {
  const { src } = useImage({
    srcList: source,
  });

  return <img src={src} className={className} alt={alt} width={width} height={height} />;
};
