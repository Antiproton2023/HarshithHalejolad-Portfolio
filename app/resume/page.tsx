export const metadata = {
  title: "Resume | HarshithHalejolad",
  description: "My professional experience and skills.",
};

export default function ResumePage() {
  return (
    <div className="flex flex-col h-[85vh] fade-in w-full max-w-4xl mx-auto overflow-hidden">
      <header className="flex justify-between items-end mb-8 flex-shrink-0">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            My professional experience and skills.
          </p>
        </div>
        <div className="flex gap-4">
          <a
            href="/resume.pdf"
            target="_blank"
            className="hidden md:flex text-sm font-medium border border-gray-200 dark:border-gray-800 px-5 py-2.5 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors rounded-sm shadow-sm"
          >
            Open in New Tab ↗
          </a>
          <a
            href="/resume.pdf"
            download
            className="text-sm font-medium border border-black dark:border-white px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-all rounded-sm flex-shrink-0 shadow-sm"
          >
            Download PDF
          </a>
        </div>
      </header>

      {/* Cross-Browser Stable PDF Viewer */}
      <div className="flex-grow w-full border border-gray-200 dark:border-gray-800 rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-900 group relative">
        <embed
          src="/resume.pdf"
          type="application/pdf"
          className="w-full h-full border-none rounded-none"       
        />
        
        {/* Responsive Overlay if embed is not active or Device is mobile */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-white dark:bg-neutral-900 pointer-events-none opacity-0 group-[&:not(:has(embed))]:opacity-100 transition-opacity">
            <p className="text-gray-500 dark:text-gray-400 max-w-xs mb-6">
              Your device may have blocked the inline PDF.
            </p>
            <div className="flex flex-col gap-4 pointer-events-auto">
              <a
                href="/resume.pdf"
                target="_blank"
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-sm text-sm"
              >
                View PDF Directly ↗
              </a>
              <a
                href="/resume.pdf"
                download
                className="text-xs text-gray-400 hover:text-black dark:hover:text-white underline transition-colors"
              >
                Or Download Copy
              </a>
            </div>
        </div>
      </div>
      
      <footer className="mt-4 text-center md:hidden pb-12">
         <a
          href="/resume.pdf"
          target="_blank"
          className="px-4 py-2 border border-black dark:border-white text-sm font-medium bg-black dark:bg-white text-white dark:text-black rounded-sm"
        >
          View Fullscreen ↗
        </a>
      </footer>
    </div>
  );
}
