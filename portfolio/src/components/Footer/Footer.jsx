import "./Footer.css"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-logo">
            <a href="/" className="logo">
              <span className="logo-highlight">Port</span>folio
            </a>
          </div>

          <div className="footer-copyright">
            <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
          </div>

          <div className="footer-nav">
            <nav>
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

