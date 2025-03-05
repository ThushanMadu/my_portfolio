import "./About.css"

const About = () => {
  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2>About Me</h2>
          <div className="divider"></div>
        </div>

        <div className="about-content">
          <div className="about-image-container">
            <div className="about-image-border"></div>
            <div className="about-image">
              <img src="/placeholder.svg" alt="Profile" />
            </div>
          </div>

          <div className="about-text">
            <h3>
              I'm <span className="highlight">Your Name</span>, a Web Developer
            </h3>
            <p>
              I am a passionate web developer with a strong focus on creating responsive and user-friendly websites.
              With several years of experience in the field, I have developed a deep understanding of both front-end and
              back-end technologies.
            </p>
            <p>
              My journey in web development started when I was in college, and since then, I have been constantly
              learning and improving my skills. I believe in writing clean, maintainable code and staying up-to-date
              with the latest industry trends and best practices.
            </p>

            <div className="about-info">
              <div className="info-item">
                <p>
                  <span className="info-label">Name:</span> Your Name
                </p>
              </div>
              <div className="info-item">
                <p>
                  <span className="info-label">Email:</span> your.email@example.com
                </p>
              </div>
              <div className="info-item">
                <p>
                  <span className="info-label">Phone:</span> +1 234 567 890
                </p>
              </div>
              <div className="info-item">
                <p>
                  <span className="info-label">Location:</span> Your City, Country
                </p>
              </div>
            </div>

            <a href="/resume.pdf" download className="btn btn-primary">
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

