import { listPost } from "@/lib/mdx";
import { Image } from "@/components/image";
import { PostCard } from "@/components/post-card";
import Link from "next/link";
import { H3 } from "@/components/headings";

export default async function Home() {
  const posts = await listPost({ limit: 100 });

  return (
    <div className="max-w-2xl py-8 mx-auto min-h-screen">
      <div className="h-16"></div>
      <header className="w-full min-h-screen flex flex-col items-center max-md:mb-16">
        <Image
          src="/images/coocobolo.png"
          alt="Me"
          className="scale-125 max-xl:scale-100"
        />
      </header>

      <section className="h-screen w-full">
        <div className="mb-8">
          <H3>Posts</H3>
        </div>

        {posts.length > 0 ? (
          <div
            className={["grid grid-cols-1 lg:grid-cols-2 gap-4 gap-y-8"].join(
              " ",
            )}
          >
            {posts.map(
              (post, i) =>
                i <= 6 && (
                  <PostCard
                    {...{
                      ...post.frontmatter,
                      slug: post.slug as string,
                    }}
                    key={i}
                  />
                ),
            )}
          </div>
        ) : (
          <p className="text-center">
            <span className="text-sm dark:text-white/40 mr-4">.:::.</span>
            no post yet
            <span className="text-sm dark:text-white/40 ml-4">.:::.</span>
          </p>
        )}

        <div className="h-auto w-full mx-auto flex flex-col items-center justify-center space-y-4">
          <div className="h-4"></div>
          <Link
            href="/blog"
            className={["space-y-4", "px-4 py-1", "rounded-md"].join(" ")}
          >
            Thoughts space <span className="text-xs">↗</span>
          </Link>
          <div className="h-4"></div>
        </div>
      </section>

      <div className="h-16"></div>
      <div className="h-16"></div>
    </div>
  );
}
