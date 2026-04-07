export const metadata = {
  title: "Resume | HarshithHalejolad",
  description: "My professional experience and skills.",
};

export default function ResumePage() {
  const resumeUrl = "/resume.pdf";
  // The Google Viewer needs a full absolute URL. 
  // On local dev this won't show the PDF (it'll show the fallback), 
  // but on Vercel it will be crystal clear.
  const googleViewerUrl = `https://docs.google.com/viewer?url=https://harshith-halejolad.vercel.app/resume.pdf&embedded=true`;

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
            href={resumeUrl}
            target="_blank"
            className="hidden md:flex text-sm font-medium border border-gray-200 dark:border-gray-800 px-5 py-2.5 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors rounded-sm shadow-sm"
          >
            Open in New Tab ↗
          </a>
          <a
            href={resumeUrl}
            download
            className="text-sm font-medium border border-black dark:border-white px-5 py-2.5 bg-black dark:bg-white text-white dark:text-black hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-all rounded-sm flex-shrink-0 shadow-sm"
          >
            Download PDF
          </a>
        </div>
      </header>

      {/* The Bulletproof "Classic Viewer" Strategy */}
      <div className="flex-grow w-full border border-gray-200 dark:border-gray-800 rounded-sm overflow-hidden bg-neutral-200 dark:bg-neutral-900 group relative">
        <iframe
          src={googleViewerUrl}
          className="w-full h-full border-none rounded-none"       
          title="Resume PDF Viewer"
        />
        
        {/* Absolute High-Fidelity Fallback if Internet is out or Viewer fails */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center bg-white dark:bg-neutral-900 pointer-events-none opacity-0 group-[&:not(:has(iframe))]:opacity-100 transition-opacity">
            <h2 className="text-xl font-bold mb-2">Resume Preview</h2>
            <p className="text-gray-500 dark:text-gray-400 max-w-xs mb-6">
              The preview is taking a moment to load. You can view or download it directly below.
            </p>
            <div className="flex flex-col gap-4 pointer-events-auto">
              <a
                href={resumeUrl}
                target="_blank"
                className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-semibold rounded-sm text-sm"
              >
                View PDF Directly ↗
              </a>
              <a
                href={resumeUrl}
                download
                className="text-xs text-gray-400 hover:text-black dark:hover:text-white underline transition-colors"
              >
                Download a Copy
              </a>
            </div>
        </div>
      </div>
      
      <footer className="mt-4 text-center pb-12">
         <p className="text-xs text-gray-400">
           Hosted securely on Vercel. Standard PDF viewer protocols applied.
         </p>
      </footer>
    </div>
  );
}
