"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToSection = (id: string) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-zinc-900/90 backdrop-blur-md shadow-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="text-2xl font-bold text-white">
            <span className="text-red-500">Port</span>folio
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-red-500 transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-white hover:text-red-500 transition-colors"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-white hover:text-red-500 transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-white hover:text-red-500 transition-colors"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-white hover:text-red-500 transition-colors"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-red-500 transition-colors"
            >
              Contact
            </button>
            <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white">
              <a href="/resume.pdf" download>
                Download CV
              </a>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pt-4 pb-6 flex flex-col space-y-4 border-t border-zinc-800 mt-4">
            <button
              onClick={() => scrollToSection("about")}
              className="text-white hover:text-red-500 transition-colors py-2"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("education")}
              className="text-white hover:text-red-500 transition-colors py-2"
            >
              Education
            </button>
            <button
              onClick={() => scrollToSection("projects")}
              className="text-white hover:text-red-500 transition-colors py-2"
            >
              Projects
            </button>
            <button
              onClick={() => scrollToSection("skills")}
              className="text-white hover:text-red-500 transition-colors py-2"
            >
              Skills
            </button>
            <button
              onClick={() => scrollToSection("testimonials")}
              className="text-white hover:text-red-500 transition-colors py-2"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="text-white hover:text-red-500 transition-colors py-2"
            >
              Contact
            </button>
            <Button variant="outline" className="border-red-500 text-red-500 hover:bg-red-500 hover:text-white w-full">
              <a href="/resume.pdf" download>
                Download CV
              </a>
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}

