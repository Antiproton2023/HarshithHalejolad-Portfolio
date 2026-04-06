import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeHighlight from 'rehype-highlight';
import rehypeStringify from 'rehype-stringify';

const contentDir = path.join(process.cwd(), 'content');

export async function markdownToHtml(markdown: string): Promise<string> {
  const result = await unified()
    .use(remarkParse)
    .use(remarkRehype, { allowDangerousHtml: true })
    .use(rehypeHighlight, { ignoreMissing: true })
    .use(rehypeStringify, { allowDangerousHtml: true })
    .process(markdown);
  return result.toString();
}

export interface FrontMatter {
  [key: string]: string | string[] | boolean | number | undefined;
}

export interface MarkdownDoc {
  slug: string;
  frontmatter: FrontMatter;
  content: string;
  html: string;
}

export async function getMarkdownFile(filePath: string): Promise<MarkdownDoc> {
  const fullPath = path.join(contentDir, filePath);
  const raw = fs.readFileSync(fullPath, 'utf-8');
  const { data, content } = matter(raw);
  const html = await markdownToHtml(content);
  const slug = path.basename(filePath, '.md');
  return { slug, frontmatter: data as FrontMatter, content, html };
}

export async function getAllMarkdownFiles(folder: string): Promise<MarkdownDoc[]> {
  const dir = path.join(contentDir, folder);
  if (!fs.existsSync(dir)) return [];
  const files = fs.readdirSync(dir).filter((f) => f.endsWith('.md'));
  const docs = await Promise.all(
    files.map((file) => getMarkdownFile(path.join(folder, file)))
  );
  // Sort by date descending if date exists
  return docs.sort((a, b) => {
    const da = a.frontmatter.date as string | undefined;
    const db = b.frontmatter.date as string | undefined;
    if (!da && !db) return 0;
    if (!da) return 1;
    if (!db) return -1;
    return new Date(db).getTime() - new Date(da).getTime();
  });
}
