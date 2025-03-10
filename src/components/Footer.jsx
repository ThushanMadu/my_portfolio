import "./Footer.css"

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="/" className="logo">
              <span className="logo-accent">ThushanMadu </span>Portfolio
            </a>
          </div>

          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Thushan Madhusanka Madarasinghe. All rights reserved.</p>
          </div>

          <div className="footer-nav">
            <nav className="footer-links">
              <a href="#about" className="footer-link">
                About
              </a>
              <a href="#projects" className="footer-link">
                Projects
              </a>
              <a href="#contact" className="footer-link">
                Contact
              </a>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

