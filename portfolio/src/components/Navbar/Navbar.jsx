"use client"

import { useState, useEffect } from "react"
import "./Navbar.css"

const Navbar = () => {
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

  const scrollToSection = (id) => {
    setIsMenuOpen(false)
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <header className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="container navbar-container">
        <a href="/" className="navbar-logo">
          <span className="logo-highlight">Port</span>folio
        </a>

        {/* Desktop Navigation */}
        <nav className="navbar-nav desktop-nav">
          <button onClick={() => scrollToSection("about")} className="nav-link">
            About
          </button>
          <button onClick={() => scrollToSection("education")} className="nav-link">
            Education
          </button>
          <button onClick={() => scrollToSection("projects")} className="nav-link">
            Projects
          </button>
          <button onClick={() => scrollToSection("skills")} className="nav-link">
            Skills
          </button>
          <button onClick={() => scrollToSection("testimonials")} className="nav-link">
            Testimonials
          </button>
          <button onClick={() => scrollToSection("contact")} className="nav-link">
            Contact
          </button>
          <a href="/resume.pdf" download className="btn btn-outline">
            Download CV
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button className="menu-toggle" onClick={toggleMenu}>
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="mobile-nav">
          <button onClick={() => scrollToSection("about")} className="nav-link">
            About
          </button>
          <button onClick={() => scrollToSection("education")} className="nav-link">
            Education
          </button>
          <button onClick={() => scrollToSection("projects")} className="nav-link">
            Projects
          </button>
          <button onClick={() => scrollToSection("skills")} className="nav-link">
            Skills
          </button>
          <button onClick={() => scrollToSection("testimonials")} className="nav-link">
            Testimonials
          </button>
          <button onClick={() => scrollToSection("contact")} className="nav-link">
            Contact
          </button>
          <a href="/resume.pdf" download className="btn btn-outline download-btn">
            Download CV
          </a>
        </nav>
      )}
    </header>
  )
}

export default Navbar

