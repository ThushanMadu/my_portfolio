"use client"

import "./Hero.css"

function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="hero">
      {/* Background pattern */}
      <div className="hero-background">
        <div className="hero-gradient-1"></div>
        <div className="hero-gradient-2"></div>
      </div>

      <div className="hero-content">
        <h1 className="hero-title">
          <span className="hero-title-white">Hello, I'm </span>
          <span className="hero-title-accent">Thushan Madhusanka Madarasinghe</span>
        </h1>
        <p className="hero-subtitle">
          A passionate developer specializing in creating beautiful and functional web experiences
        </p>
        <div className="hero-buttons">
          <button
            className="primary-button"
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Contact Me
          </button>
          <a href="/resume.pdf" download className="secondary-button">
            Download CV
          </a>
        </div>
      </div>

      <button onClick={scrollToAbout} className="scroll-button" aria-label="Scroll down">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M12 5V19M12 19L19 12M12 19L5 12"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </section>
  )
}

export default Hero

