import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-indigo-950 text-indigo-200">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h2 className="text-white text-lg font-semibold">NoCode API</h2>
            <p className="text-sm">
              Empowering developers to build APIs without code.
            </p>
            
          </div>
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Product
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Features
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  API Reference
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Press
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-sm font-semibold uppercase tracking-wider mb-4">
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">
                <span className="mr-2">&#9993;</span>
                <a
                  href="mailto:ashishmehtalinked786@gmail.com"
                  className="hover:text-white transition-colors"
                >
                  ashishmehtalinked786@gmail.com
                </a>
              </li>
              <li className="flex items-center">
                <span className="mr-2">&#128205;</span>
                <span>Dummy data location address</span>
              </li>
              <li className="flex items-center">
                <span className="mr-2">&#128222;</span>
                <a
                  href="tel:+0XXXXXXXXX"
                  className="hover:text-white transition-colors"
                >
                  +0XXXXXXXXX
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-indigo-900 text-sm text-center">
          <p>
            &copy; {new Date().getFullYear()} NoCode API. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
