import { H3 } from "@/components/headings";
import { PostCard } from "@/components/post-card";
import { listPost } from "@/lib/mdx";

export default async function Page() {
  const posts = await listPost({ limit: 100 });

  return (
    <div className="w-full h-full mx-auto max-w-4xl max-sm:mx-0">
      <div className="h-16"></div>
      <div className="h-16"></div>
      <div className="h-16"></div>

      <div>
        <h3>Me Thought Space</h3>
        <div className="max-w-xl">
          <span className="text-pretty dark:text-white/70 indent-8">
            A place where ideas roam free, and words come to life. Here, I share
            everything from reflections on daily life to the projects I’m
            working on. It’s messy, it’s real, and it’s constantly evolving,
            just like my desk. Grab a coffee, make yourself comfortable, and
            dive into the randomness. There's always something new to explore!
          </span>
        </div>

        <div className="h-16"></div>
      </div>

      <div className="w-full text-right mx-auto">
        <span>
          <strong>ENJOY LIFE</strong>
          <div className="h-2"></div>
          <span>
            YOU'LL BE <strong>DEAD</strong> SOON
          </span>
        </span>
      </div>

      <div className="h-16"></div>
      <div className="h-16"></div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-3 gap-y-8 max-md:mx-4">
        {posts.length > 0 ? (
          posts.map((post, i) => (
            <PostCard
              {...{ ...post.frontmatter, slug: post.slug as string }}
              key={i}
            />
          ))
        ) : (
          <p className="text-center">
            <span className="text-sm dark:text-white/40 mr-4">.:::.</span>
            no post yet
            <span className="text-sm dark:text-white/40 ml-4">.:::.</span>
          </p>
        )}
      </div>

      <div className="h-16"></div>
      <div className="h-16"></div>
    </div>
  );
}
