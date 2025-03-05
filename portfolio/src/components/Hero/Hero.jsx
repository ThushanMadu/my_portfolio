import "./Hero.css"

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-gradient-1"></div>
        <div className="hero-gradient-2"></div>
      </div>

      <div className="container hero-content">
        <h1 className="hero-title">
          <span className="hero-title-white">Hello, I'm </span>
          <span className="hero-title-red">Your Name</span>
        </h1>
        <p className="hero-subtitle">
          A passionate developer specializing in creating beautiful and functional web experiences
        </p>
        <div className="hero-buttons">
          <button onClick={scrollToContact} className="btn btn-primary">
            Contact Me
          </button>
          <a href="/resume.pdf" download className="btn btn-secondary">
            Download CV
          </a>
        </div>
      </div>

      <button onClick={scrollToAbout} className="scroll-down-btn" aria-label="Scroll down">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line x1="12" y1="5" x2="12" y2="19"></line>
          <polyline points="19 12 12 19 5 12"></polyline>
        </svg>
      </button>
    </section>
  )
}

export default Hero

