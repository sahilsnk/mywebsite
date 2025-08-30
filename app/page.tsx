import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-100 dark:from-black dark:to-gray-900 text-gray-900 dark:text-gray-100">
      {/* Hero Section */}
      <main className="flex flex-1 flex-col items-center justify-center text-center px-6 py-16">
        <h1 className="text-4xl sm:text-6xl font-bold tracking-tight mb-4">
          Welcome to <span className="text-blue-600">Sahil&apos;s Website</span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 max-w-xl mb-8">
          {"This is my personal space on the internet. Exciting projects and ideas, I'll be adding my portfolio coming soon 🚀"}
        </p>

        {/* Call-to-Actions */}
        <div className="flex gap-4 flex-wrap justify-center">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-blue-600 text-white px-5 py-3 font-medium shadow hover:bg-blue-700 transition"
          >
            Read the Docs
          </a>
          <a
            href="https://github.com/sahilsnk/mywebsite"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-gray-400 dark:border-gray-600 px-5 py-3 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            View on GitHub
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 border-t border-gray-300 dark:border-gray-700 text-sm text-center">
        <p>
          © {new Date().getFullYear()} Sahil — Built with{" "}
          <a
            href="https://nextjs.org"
            target="_blank"
            className="underline hover:text-blue-600"
          >
            Next.js
          </a>{" "}
          &{" "}
          <a
            href="https://tailwindcss.com"
            target="_blank"
            className="underline hover:text-blue-600"
          >
            Tailwind CSS
          </a>
        </p>
      </footer>
    </div>
  );
}
