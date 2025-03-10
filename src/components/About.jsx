import "./About.css"

function About() {
  return (
    <section id="about" className="about">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">About Me</h2>
          <div className="section-divider"></div>
        </div>

        <div className="about-content">
          <div className="about-image-container">
            <div className="about-image-border"></div>
            <div className="about-image-wrapper">
              <img src="/placeholder.jpg" alt="Profile Picture" className="about-image" />
            </div>
          </div>

          <div className="about-text">
            <h3 className="about-subtitle">
              I'm <span className="text-accent">Thushan Madhusanka Madarsinghe</span>, a Full-Stack Developer
            </h3>
            <p className="about-description">
              I am a passionate web developer with a strong focus on creating responsive and user-friendly websites.
              With several years of experience in the field, I have developed a deep understanding of both front-end and
              back-end technologies.
            </p>
            <p className="about-description">
              My journey in web development started when I was in college, and since then, I have been constantly
              learning and improving my skills. I believe in writing clean, maintainable code and staying up-to-date
              with the latest industry trends and best practices.
            </p>

            <div className="about-details">
              <div className="about-detail-item">
                <p>
                  <span className="detail-label">Name:</span> Thushan Madhusanka Madarsinghe
                </p>
              </div>
              <div className="about-detail-item">
                <p>
                  <span className="detail-label">Email:</span> thushanmadu2003@gmail.com
                </p>
              </div>
              <div className="about-detail-item">
                <p>
                  <span className="detail-label">Phone:</span> +94 70 392 1791
                </p>
              </div>
              <div className="about-detail-item">
                <p>
                  <span className="detail-label">Location:</span> Galle, Sri Lanka
                </p>
              </div>
            </div>

            <a href="/resume.pdf" download className="download-cv-button">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

