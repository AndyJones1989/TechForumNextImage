import { ImageLoader } from "next/image";

interface LoaderProps extends ImageLoader {
  src: string;
  width: number;
  fit: string;
  quality: number;
}

export const customLoader = ({ src, width, fit, quality }: LoaderProps) => {
  const url = new URL(src);

  url.searchParams.set("fm", "webp");
  url.searchParams.set("w", width?.toString());
  url.searchParams.set("q", quality?.toString() || "80");

  if (fit) {
    url.searchParams.set("fit", fit);
  }

  return url.href;
};
