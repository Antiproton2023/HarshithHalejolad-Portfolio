import { getMarkdownFile } from '@/lib/markdown';

export async function Footer() {
  const siteConfig = await getMarkdownFile('site.md');
  const { footer_copyright, footer_links } = siteConfig.frontmatter;

  return (
    <footer className="border-t border-gray-200 mt-24">
      <div className="max-w-4xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-gray-500 dark:text-gray-400">
          © {new Date().getFullYear()} {footer_copyright as string}
        </p>
        {footer_links && (
          <div className="flex gap-6 text-sm">
            {(footer_links as unknown as Array<{label: string, url: string}>).map((link, i) => (
               <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-black transition-colors">
                 {link.label}
               </a>
            ))}
          </div>
        )}
      </div>
    </footer>
  );
}
