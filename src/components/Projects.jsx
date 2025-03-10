import "./Projects.css"

function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce platform built with React, Node.js, and MongoDB.",
      image: "/placeholder.jpg",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern portfolio website built with React and CSS.",
      image: "/placeholder.jpg",
      tags: ["React", "CSS", "JavaScript"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A task management application with user authentication and real-time updates.",
      image: "/placeholder.jpg",
      tags: ["React", "Firebase", "Material UI"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      title: "Weather Application",
      description: "A weather application that shows current weather and forecasts for any location.",
      image: "/placeholder.jpg",
      tags: ["JavaScript", "Weather API", "CSS"],
      liveLink: "#",
      githubLink: "#",
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">My Projects</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            Here are some of my recent projects. Each project is a unique piece of development.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image-container">
                <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-image" />
                <div className="project-overlay">
                  <div className="project-buttons">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-button">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="button-icon"
                      >
                        <path
                          d="M18 13V19C18 19.5304 17.7893 20.0391 17.4142 20.4142C17.0391 20.7893 16.5304 21 16 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V8C3 7.46957 3.21071 6.96086 3.58579 6.58579C3.96086 6.21071 4.46957 6 5 6H11"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M15 3H21V9"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M10 14L21 3"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Live Demo
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-button">
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="button-icon"
                      >
                        <path
                          d="M9 19C4.7 20.4 4.7 16.5 3 16M15 21V17.5C15 16.5 15.1 16.1 14.5 15.5C17.3 15.2 20 14.1 20 9.5C19.9988 8.30564 19.5325 7.15585 18.7 6.3C19.0905 5.26136 19.0545 4.11686 18.6 3.1C18.6 3.1 17.5 2.8 15.6 4C14.0396 3.55051 12.3604 3.55051 10.8 4C8.9 2.8 7.8 3.1 7.8 3.1C7.34548 4.11686 7.30951 5.26136 7.7 6.3C6.86745 7.15585 6.40123 8.30564 6.4 9.5C6.4 14.1 9.1 15.2 11.9 15.5C11.3 16.1 11.1 16.7 11.1 17.5V21"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      Code
                    </a>
                  </div>
                </div>
              </div>
              <div className="project-info">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="project-tag">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-more">
          <a href="#" target="_blank" rel="noopener noreferrer" className="view-all-button">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects

