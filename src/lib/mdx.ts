import fs from "fs";
import remarkGfm from "remark-gfm";
import rehypePrism from "@mapbox/rehype-prism";

import { join } from "path";
import { serialize } from "next-mdx-remote/serialize";
import { FrontMatter, Post } from "@/app/blog/[slug]/page";

export async function getPost(filePath: string): Promise<Post<FrontMatter>> {
  const path = join(
    process.cwd(),
    "src",
    "content",
    "blog",
    filePath.replace(".mdx", "") + ".mdx",
  );
  const raws = fs.readFileSync(path, "utf-8");
  const serialized = await serialize(raws, {
    parseFrontmatter: true,
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [rehypePrism],
    },
  });

  const frontmatter = serialized.frontmatter as FrontMatter;

  return {
    frontmatter,
    serialized: serialized,
  };
}

export async function listPost(): Promise<Post<FrontMatter>[]> {
  const path = join(process.cwd(), "src", "content", "blog");
  const files = fs.readdirSync(path);
  const posts = await Promise.all(
    files.map(async (file) => {
      const post = await getPost(file);
      return {
        ...post,
        slug: file.replace(".mdx", ""),
      };
    }),
  );

  // sort by date
  posts.sort((a, b) => {
    if (a.frontmatter.date < b.frontmatter.date) {
      return 1;
    } else {
      return -1;
    }
  });

  return posts;

  // return posts;
}
