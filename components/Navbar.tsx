import Link from 'next/link';
import { getMarkdownFile } from '@/lib/markdown';

export async function Navbar() {
  const siteConfig = await getMarkdownFile('site.md');
  const { navbar_title, navbar_links } = siteConfig.frontmatter;

  return (
    <nav className="fixed top-0 inset-x-0 z-50 glass">
      <div className="max-w-4xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="font-bold text-lg tracking-tight">
          {navbar_title as string}
        </Link>
        <div className="flex gap-6 text-sm font-medium">
          {(navbar_links as unknown as Array<{label: string, url: string}>)?.map((link, i) => (
             <Link key={i} href={link.url} className="text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors">
               {link.label}
             </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
