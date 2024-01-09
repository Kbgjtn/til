import { PostCard } from "@/components/post-card";
import { listPost } from "@/lib/mdx";

export default async function Page() {
  const posts = await listPost({ limit: 10 });
  return (
    <div className="w-full h-full container mx-auto px-4">
      <div className="h-16"></div>
      <div className="h-16"></div>
      <div className="flex flex-col gap-y-12">
        {posts.length > 0 ? (
          posts.map(
            (post, i) =>
              i <= 3 && (
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
      </div>
      <div className="h-16"></div>
      <div className="h-16"></div>
    </div>
  );
}
