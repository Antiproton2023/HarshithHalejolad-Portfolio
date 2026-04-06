import { getAllMarkdownFiles } from "@/lib/markdown";

export const metadata = {
  title: "Achievements | HarshithHalejolad",
  description: "Milestones, awards, and tracking.",
};

export default async function AchievementsPage() {
  const achievements = await getAllMarkdownFiles("achievements");

  return (
    <div className="space-y-12 fade-in max-w-2xl">
      <header className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight">Achievements</h1>
        <p className="text-gray-500 dark:text-gray-400">
          A list of milestones, awards, and notable events from my journey.
        </p>
      </header>

      <div className="grid gap-8 sm:grid-cols-2">
        {achievements.map((achievement) => (
          <div key={achievement.slug} className="flex flex-col border border-gray-200 dark:border-gray-800 rounded-sm hover:border-black dark:hover:border-white transition-colors bg-white dark:bg-black overflow-hidden group">
            {/* Image Box */}
            {achievement.frontmatter.image ? (
              <div className="aspect-video w-full bg-gray-100 overflow-hidden border-b border-gray-200">
                <img 
                  src={achievement.frontmatter.image as string} 
                  alt={achievement.frontmatter.title as unknown as string} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ) : (
              <div className="aspect-video w-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center border-b border-gray-200 dark:border-gray-800">
                <span className="text-gray-400 dark:text-gray-600">No Image</span>
              </div>
            )}
            
            {/* Content Card */}
            <div className="p-5 flex flex-col space-y-3 flex-grow">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono font-medium text-gray-500 dark:text-gray-400">
                  {achievement.frontmatter.date as string}
                </span>
                {achievement.frontmatter.category && (
                  <span className="text-[10px] uppercase tracking-wider text-black dark:text-white bg-gray-100 dark:bg-gray-900 px-2 py-0.5 rounded-sm">
                    {achievement.frontmatter.category as string}
                  </span>
                )}
              </div>
              <h3 className="font-semibold text-lg leading-snug">{achievement.frontmatter.title as string}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-full">
                {achievement.frontmatter.description as string}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
