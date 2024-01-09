import { listPost } from "@/lib/mdx";
import { Image } from "@/components/image";
import { PostCard } from "@/components/post-card";
import Link from "next/link";

export default async function Home() {
  const posts = await listPost({ limit: 4 });

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
          posts.map(
            (post, i) =>
              i <= 2 && (
                <PostCard
                  {...{ ...post.frontmatter, slug: post.slug as string }}
                  key={i}
                />
              ),
          )
        ) : (
          <p className="text-center">
            <span className="text-sm dark:text-white/40 mr-4">.:::.</span>
            no post yet
            <span className="text-sm dark:text-white/40 ml-4">.:::.</span>
          </p>
        )}

        <div className="h-8"></div>
        <Link href="/blog">
          <p>See list</p>
        </Link>
      </section>
      <div className="h-16"></div>
      <div className="h-16"></div>
    </div>
  );
}
