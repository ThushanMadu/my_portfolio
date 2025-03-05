import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-zinc-900 border-t border-zinc-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-2xl font-bold text-white">
              <span className="text-red-500">Port</span>folio
            </Link>
          </div>

          <div className="text-center md:text-left mb-4 md:mb-0">
            <p className="text-zinc-400">&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>

          <div>
            <nav className="flex space-x-6">
              <Link href="#about" className="text-zinc-400 hover:text-red-500 transition-colors">
                About
              </Link>
              <Link href="#projects" className="text-zinc-400 hover:text-red-500 transition-colors">
                Projects
              </Link>
              <Link href="#contact" className="text-zinc-400 hover:text-red-500 transition-colors">
                Contact
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

