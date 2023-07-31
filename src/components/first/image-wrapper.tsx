import Image, { ImageLoader } from "next/image";

interface IImageWrapperProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  loader?: ImageLoader;
  fill?: boolean;
  sizes?: string;
  quality?: number;
  priority?: boolean;
  placeholder?: "blur" | "empty";
  style?: object;
  onLoadingComplete?: () => void;
  onLoad?: () => void;
  loading?: "eager" | "lazy";
  blurDataURL?: string;
}

const ImageWrapper = ({
  src,
  alt,
  width,
  height,
  loader,
  fill,
  sizes,
  quality,
  priority,
  placeholder,
  style,
  onLoadingComplete,
  onLoad,
  loading,
  blurDataURL,
}: IImageWrapperProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      loader={loader}
      fill={fill}
      sizes={sizes}
      quality={quality}
      priority={priority}
      placeholder={placeholder}
      style={style}
      onLoadingComplete={onLoadingComplete}
      onLoad={onLoad}
      loading={loading}
      blurDataURL={blurDataURL}
    ></Image>
  );
};
