export const metadata = {
  title: "Resume | HarshithHalejolad",
  description: "My professional experience and skills.",
};

export default function ResumePage() {
  return (
    <div className="flex flex-col h-[80vh] fade-in w-full max-w-4xl mx-auto">
      <header className="space-y-4 mb-8">
        <div className="flex justify-between items-end">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Resume</h1>
            <p className="text-gray-500 dark:text-gray-400 mt-2">
              My professional experience and skills.
            </p>
          </div>
          <a
            href="/resume.pdf"
            download
            className="text-sm font-medium border border-gray-200 dark:border-gray-800 px-4 py-2 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors rounded-sm flex-shrink-0"
          >
            Download PDF
          </a>
        </div>
      </header>

      <div className="flex-grow w-full border border-gray-200 dark:border-gray-800 rounded-sm overflow-hidden bg-white dark:bg-neutral-900">
        <object
          data="/resume.pdf"
          type="application/pdf"
          width="100%"
          height="100%"
          className="w-full h-full"
        >
          <div className="flex flex-col items-center justify-center h-full p-8 text-center space-y-4">
            <p className="text-gray-500 dark:text-gray-400">
              It seems your browser doesn't support embedded PDFs, or the resume.pdf file hasn't been uploaded yet.
            </p>
            <a
              href="/resume.pdf"
              download
              className="text-sm font-medium underline hover:text-black dark:hover:text-white transition-colors"
            >
              Download the PDF instead
            </a>
          </div>
        </object>
      </div>
    </div>
  );
}
