import type { FrontMatter } from "@/app/blog/[slug]/page";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function PostCard(meta: Awaited<FrontMatter & { slug: string }>) {
  return (
    <Link href={`/blog/${meta.slug}`} draggable="false">
      <div
        className="p-4 text-pretty mx-auto overflow-hidden w-full"
        key={meta.slug}
      >
        <img
          className={cn([
            "rounded-md w-full hover:shadow-white/20 animate-out transition-shadow shadow-xl h-auto object-contain ring-1 ring-black/10 dark:ring-0",
          ])}
          draggable="false"
          title={meta.title}
          src={meta.cover}
          alt={meta.title}
          width="0"
          height="0"
          sizes="100vw"
        />
        <div className=""></div>
        <h3 className="mt-2">{meta.title}</h3>
        <p className="text-ellipsis">
          <span className="text-sm dark:text-white/40 mr-4">.:::.</span>
          {meta.description.slice(0, 40)}
        </p>
      </div>
    </Link>
  );
}
