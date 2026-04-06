import Link from "next/link";
import { getAllMarkdownFiles } from "@/lib/markdown";

export const metadata = {
  title: "Blog | HarshithHalejolad",
  description: "Long-form writing and thoughts.",
};

export default async function BlogPage() {
  const posts = await getAllMarkdownFiles("blog");

  return (
    <div className="space-y-12 fade-in max-w-2xl">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <p className="text-gray-500 dark:text-gray-400">
          Thoughts on software engineering, design, and building products.
        </p>
      </header>

      <div className="space-y-10">
        {posts.map((post) => (
          <article key={post.slug} className="group flex flex-col space-y-2">
            <time className="text-sm font-mono text-gray-500 dark:text-gray-400">
              {post.frontmatter.date as string}
            </time>
            <Link href={`/blog/${post.slug}`} className="block">
              <h2 className="text-xl font-semibold tracking-tight inline-block group-hover:underline underline-offset-4 decoration-2">
                {post.frontmatter.title as string}
              </h2>
            </Link>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
              {post.frontmatter.description as string}
            </p>
            {post.frontmatter.tags && (
              <div className="flex gap-2 pt-1">
                 {(post.frontmatter.tags as unknown as string[]).map(tag => (
                   <span key={tag} className="text-xs text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors cursor-pointer">
                     #{tag}
                   </span>
                 ))}
              </div>
            )}
          </article>
        ))}
      </div>
    </div>
  );
}
