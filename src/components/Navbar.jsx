"use client"

import { useState, useEffect } from "react"
import "./Navbar.css"

function Navbar() {
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
    <header className={`navbar ${isScrolled ? "navbar-scrolled" : ""}`}>
      <div className="navbar-container">
        <div className="navbar-content">
          <a href="/" className="navbar-logo">
            <span className="logo-accent">Port</span>folio
          </a>

          {/* Desktop Navigation */}
          <nav className="desktop-nav">
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
            <a href="/resume.pdf" download className="download-button">
              Download CV
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-button" onClick={toggleMenu}>
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M18 6L6 18M6 6L18 18"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M3 12H21M3 6H21M3 18H21"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="mobile-nav">
            <button onClick={() => scrollToSection("about")} className="mobile-nav-link">
              About
            </button>
            <button onClick={() => scrollToSection("education")} className="mobile-nav-link">
              Education
            </button>
            <button onClick={() => scrollToSection("projects")} className="mobile-nav-link">
              Projects
            </button>
            <button onClick={() => scrollToSection("skills")} className="mobile-nav-link">
              Skills
            </button>
            <button onClick={() => scrollToSection("testimonials")} className="mobile-nav-link">
              Testimonials
            </button>
            <button onClick={() => scrollToSection("contact")} className="mobile-nav-link">
              Contact
            </button>
            <a href="/resume.pdf" download className="mobile-download-button">
              Download CV
            </a>
          </nav>
        )}
      </div>
    </header>
  )
}

export default Navbar

