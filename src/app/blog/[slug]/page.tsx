import MDXContent from "@/components/mdx-content";

import { Image } from "@/components/image";
import { getPost, listPost } from "@/lib/mdx";

import type { Metadata } from "next";
import type { MDXRemoteSerializeResult } from "next-mdx-remote";

type Props = {
  params: {
    slug: string;
  };
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export type FrontMatter = {
  title: string;
  description: string;
  date: string;
  cover: string;
};

export type Post<T> = {
  serialized: MDXRemoteSerializeResult;
  slug?: string;
  frontmatter: T;
};

export async function generateStaticParams() {
  const posts = await listPost({ limit: 10 });

  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = await getPost(params.slug);
  return {
    title: post.frontmatter.title,
  };
}

export default async function Page({ params }: Props) {
  const { serialized, frontmatter } = await getPost(params.slug);

  return (
    <div className="container mx-auto max-w-4xl px-2 max-md:px-8 my-32">
      <article>
        <header>
          <div className="h-16"></div>
          <time>
            {new Date(frontmatter.date).toLocaleDateString("en-US", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>
          <h1>{frontmatter.title}</h1>

          <div className="h-16"></div>
          <Image
            src={frontmatter.cover}
            alt="Me"
            width={100}
            className="ring-1 ring-black dark:ring-0"
            classNameBg="dark:opacity-[16%] opacity-10"
          />
        </header>

        <div className="h-16"></div>

        <section className="w-full h-full">
          <MDXContent serialized={serialized} />
        </section>
      </article>
    </div>
  );
}
