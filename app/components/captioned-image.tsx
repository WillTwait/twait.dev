import Image from "next/image";

export interface CaptionedImageProps {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function CaptionedImage({
  src,
  alt,
  caption,
  width = 600,
  height = 450,
  className = "",
}: CaptionedImageProps) {
  return (
    <figure className={`my-4 flex flex-col items-center ${className}`}>
      <div className="rounded-lg border border-neutral-200 p-2 md:p-4">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className="h-auto"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-center text-sm text-neutral-600 italic max-w-[600px]">
          {caption}
        </figcaption>
      )}
    </figure>
  );
}
