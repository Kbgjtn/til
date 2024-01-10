import Image from "next/image";

type GIFProps = {
  src: string;
  alt: string;
};

export function GIF({ src, alt }: GIFProps) {
  return (
    <div className="my-2 flex w-full items-start justify-start h-auto">
      <Image
        className="rounded-lg object-cover h-full object-center w-full max-h-64"
        draggable="false"
        width="0"
        height="0"
        sizes="100vw"
        quality="100"
        alt={alt || "gif"}
        src={src || ""}
        onContextMenu={(e) => e.preventDefault()}
      />
    </div>
  );
}
