import Link from "next/link";
import { getMarkdownFile } from "@/lib/markdown";

export default async function Home() {
  const hero = await getMarkdownFile("home/hero.md");

  return (
    <div className="flex flex-col gap-24 mt-12 animate-in fade-in slide-in-from-bottom-4 duration-700 ease-in-out">
      {/* Hero Section */}
      <section className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight inline-flex items-center gap-4">
          {hero.frontmatter.name as string}
          <div className="flex items-center gap-3 mt-1">
            {hero.frontmatter.socials && typeof hero.frontmatter.socials === 'object' && Object.entries(hero.frontmatter.socials).map(([platform, link]) => {
              if (platform === 'github') return (
                <a key={platform} href={link as string} target="_blank" className="text-gray-400 hover:text-black dark:hover:text-white transition-colors" title="GitHub">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
                </a>
              )
              if (platform === 'gmail') return (
                <a key={platform} href={link as string} className="text-gray-400 hover:text-black dark:hover:text-white transition-colors" title="Gmail">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                </a>
              )
              if (platform === 'devto') return (
                <a key={platform} href={link as string} target="_blank" className="font-bold text-sm tracking-wide border border-current rounded-sm px-1 text-gray-400 hover:text-black dark:hover:text-white transition-colors" title="Dev.to">
                  DEV
                </a>
              )
              return null;
            })}
          </div>
        </h1>
        <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium tracking-tight">
          {hero.frontmatter.tagline as string}
        </p>
        <p className="text-lg text-gray-500 dark:text-gray-500 max-w-2xl leading-relaxed">
          {hero.frontmatter.description as string}
        </p>
        <div className="pt-4">
          <Link 
            href={hero.frontmatter.cta_link as string}
            className="inline-flex items-center justify-center px-6 py-3 border border-black dark:border-white bg-black dark:bg-white text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors font-medium rounded-sm"
          >
            {hero.frontmatter.cta_label as string}
          </Link>
        </div>
      </section>
    </div>
  );
}
