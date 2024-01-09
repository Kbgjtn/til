"use client";

import React from "react";
import NextImage, { ImageProps } from "next/image";
import { cn } from "@/lib/utils";

export function Image({
  src,
  className,
  classNameBg = "opacity-10 dark:opacity-40",
  ...props
}: ImageProps & { classNameBg?: string }) {
  return (
    <div className="mdx-image relative items-center justify-center self-center justify-self-center xl:px-12 select-none">
      <NextImage
        src={src}
        alt="background"
        priority={true}
        width="0"
        height="0"
        sizes="100vw"
        quality={100}
        className={cn([
          "absolute z-[-1] -translate-y-6 max-lg:-translate-y-8 left-0 right-0 m-auto rounded-md blur-2xl w-full h-auto object-center scale-y-125 scale-x-110",
          classNameBg,
          "block",
        ])}
        draggable={false}
      />
      <NextImage
        onContextMenu={(e) => e.preventDefault()}
        className={cn(["h-auto w-full object-center rounded-md", className])}
        src={src}
        draggable="false"
        width="0"
        height="0"
        sizes="100vw"
        priority={true}
        quality={100}
        {...props}
      />
    </div>
  );
}
