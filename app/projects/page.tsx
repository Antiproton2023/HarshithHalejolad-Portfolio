import { getAllMarkdownFiles } from "@/lib/markdown";

export const metadata = {
  title: "Projects | HarshithHalejolad",
  description: "A selection of projects and open-source work.",
};

export default async function ProjectsPage() {
  const projects = await getAllMarkdownFiles("projects");

  return (
    <div className="space-y-12 fade-in">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Projects</h1>
        <p className="text-gray-500 max-w-xl">
          A selection of things I've built, ranging from open-source tools to complete products.
        </p>
      </header>

      <div className="grid gap-8 md:grid-cols-2">
        {projects.map((project) => (
          <article 
            key={project.slug} 
            className="group block border border-gray-200 dark:border-gray-800 rounded-sm p-6 hover:border-black dark:hover:border-white transition-colors"
          >
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                <h2 className="text-xl font-semibold tracking-tight group-hover:underline underline-offset-4">
                  {project.frontmatter.title as string}
                </h2>
                {project.frontmatter.date && (
                  <time className="text-xs text-gray-500 font-mono">
                    {new Date(project.frontmatter.date as string).getFullYear()}
                  </time>
                )}
              </div>
              
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                {project.frontmatter.description as string}
              </p>

              {project.frontmatter.tags && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {(project.frontmatter.tags as unknown as string[]).map(tag => (
                    <span key={tag} className="text-xs font-mono bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200 px-2 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {project.frontmatter.link && (
                <div className="pt-4">
                  <a 
                    href={project.frontmatter.link as string}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium hover:underline flex items-center gap-1"
                  >
                    View Project ↗
                  </a>
                </div>
              )}
              
              {/* Optional: Render full markdown for the project details inside detail view, here we keep it as a card */}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
