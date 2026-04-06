export const metadata = {
  title: "Resume | HarshithHalejolad",
  description: "My professional experience and skills.",
};

export default function ResumePage() {
  return (
    <div className="flex flex-col h-[85vh] fade-in w-full max-w-4xl mx-auto">
      <header className="flex justify-between items-end mb-8">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
          <p className="text-gray-500 dark:text-gray-400 mt-2">
            My professional experience and skills.
          </p>
        </div>
        <a
          href="/resume.pdf"
          download
          className="text-sm font-medium border border-black dark:border-white px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-all rounded-sm flex-shrink-0 shadow-sm"
        >
          Download PDF
        </a>
      </header>

      {/* Improved Cross-Browser PDF Viewer */}
      <div className="flex-grow w-full border border-gray-200 dark:border-gray-800 rounded-sm overflow-hidden bg-neutral-100 dark:bg-neutral-900 shadow-inner relative group">
        <iframe
          src="/resume.pdf#view=FitH"
          className="w-full h-full border-none"
          title="Resume PDF"
        />
        
        {/* Mobile/Safari Fallback overlay if iframe fails or on small screens */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-white dark:bg-neutral-900 pointer-events-none opacity-0 group-[&:not(:has(iframe))]:opacity-100 transition-opacity">
            <p className="text-gray-500 dark:text-gray-400 max-w-xs mb-4">
              Your device might not support inline PDF viewing.
            </p>
            <a
              href="/resume.pdf"
              target="_blank"
              className="text-sm font-medium underline text-black dark:text-white pointer-events-auto"
            >
              Open PDF in New Tab
            </a>
        </div>
      </div>
      
      <footer className="mt-6 text-center md:hidden">
         <a
          href="/resume.pdf"
          target="_blank"
          className="text-sm font-medium underline text-gray-500 dark:text-gray-400"
        >
          Can't see the PDF? Click here to open in a new tab.
        </a>
      </footer>
    </div>
  );
}
