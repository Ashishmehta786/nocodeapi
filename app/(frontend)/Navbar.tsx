export default function Navbar() {
  return (
    <header className="px-4 py-3  flex justify-between items-center bg-background   border-b  sticky w-full top-0 z-10 h-20 ">
      <div className="flex items-center space-x-4">
        <span className="text-2xl font-semibold dark:text-neutral-200 text-neutral-700 ">
          NoCodeApi
        </span>
      </div>
      <nav className="hidden md:flex space-x-6 ">
        <a
          href="#"
          className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-100"
        >
          Features
        </a>
        <a
          href="#"
          className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-100"
        >
          Pricing
        </a>
        <a
          href="#"
          className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-100"
        >
          Company
        </a>
        <a
          href="#"
          className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-100"
        >
          Blog
        </a>
        <a
          href="#"
          className="text-sm font-medium text-neutral-700 hover:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-100"
        >
          Help
        </a>

      </nav>
      
    </header>
  );
}
