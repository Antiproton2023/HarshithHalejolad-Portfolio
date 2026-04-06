import { getMarkdownFile, getAllMarkdownFiles } from "@/lib/markdown";
import Link from "next/link";
import { notFound } from "next/navigation";
import "highlight.js/styles/github.css"; // Clean light syntax highlighting

export async function generateStaticParams() {
  const posts = await getAllMarkdownFiles("blog");
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  try {
    const post = await getMarkdownFile(`blog/${params.slug}.md`);
    return {
      title: `${post.frontmatter.title} | Minimalist Portfolio`,
      description: post.frontmatter.description,
    };
  } catch (error) {
    return { title: 'Not Found' };
  }
}

export default async function BlogPostPage({ params }: { params: { slug: string } }) {
  let post;
  try {
    post = await getMarkdownFile(`blog/${params.slug}.md`);
  } catch (e) {
    notFound();
  }

  return (
    <article className="fade-in max-w-2xl mx-auto space-y-12 pb-12">
      <header className="space-y-6 pt-8">
        <Link 
          href="/blog"
          className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
        >
          ← Back to all posts
        </Link>
        <div className="space-y-4">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
            {post.frontmatter.title as string}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 font-mono">
            <time>{post.frontmatter.date as string}</time>
            {post.frontmatter.tags && (
              <div className="flex gap-2">
                •
                {(post.frontmatter.tags as string[]).map(tag => (
                  <span key={tag}>#{tag}</span>
                ))}
              </div>
            )}
          </div>
        </div>
      </header>

      <div 
        className="prose prose-neutral dark:prose-invert max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-a:underline-offset-4 hover:prose-a:text-gray-600 dark:hover:prose-a:text-gray-300 prose-pre:border prose-pre:border-gray-200 dark:prose-pre:border-gray-800"
        dangerouslySetInnerHTML={{ __html: post.html }} 
      />
    </article>
  );
}
