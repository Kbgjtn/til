import { listPost } from "@/lib/mdx";
import { Logo } from "@/components/icons";
import { Image } from "@/components/image";
import { FrontMatter } from "./blog/[slug]/page";

import Link from "next/link";
import NextImage from "next/image";

export default async function Home() {
  const posts = await listPost();

  return (
    <div className="max-w-xl py-8 mx-auto min-h-screen">
      <div className="h-16"></div>
      <header className="w-full min-h-screen flex flex-col items-center max-md:mb-16">
        <Image
          src="/images/coocobolo.png"
          alt="Me"
          className="scale-125 max-xl:scale-100"
        />
      </header>
      <section className="container h-screen w-full flex flex-col mx-auto max-w-4xl px-4 space-y-4">
        {posts.length > 0 ? (
          posts.map((post, i) => (
            <PostCard
              {...{ ...post.frontmatter, slug: post.slug as string }}
              key={i}
            />
          ))
        ) : (
          <p>no post</p>
        )}
      </section>
    </div>
  );
}

function PostCard(meta: Awaited<FrontMatter & { slug: string }>) {
  return (
    <Link href={`/blog/${meta.slug}`} draggable="false">
      <div
        className="p-4 text-pretty mx-auto overflow-hidden w-full"
        key={meta.slug}
      >
        <img
          className="rounded-md w-full h-auto object-contain ring-1 ring-black/10 dark:ring-0"
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
