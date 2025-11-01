import type { FrontMatter } from "@/app/blog/[slug]/page";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function PostCard(meta: Awaited<FrontMatter & { slug: string }>) {
  return (
    <Link
      href={`/blog/${meta.slug}`}
      draggable="false"
      className="col-span-1 group"
    >
      <div className="text-pretty mx-auto overflow-hidden" key={meta.slug}>
        <div className="relative">
          <img
            className={cn([
              "w-full h-40 object-cover rounded-md mb-4",
              "group-hover:brightness-95",
            ])}
            draggable="false"
            title={meta.title}
            src={meta.cover}
            alt={meta.title}
            width="0"
            height="0"
          />
        </div>
        <p className="mt-2 font-semibold group-hover:text-yellow-300">
          {meta.title}
        </p>
        <span className="text-ellipsis text-sm dark:text-white">
          ∴ {meta.description.slice(0, 40)}
        </span>
      </div>
    </Link>
  );
}
