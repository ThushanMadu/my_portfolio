import "./Projects.css"

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce platform built with React, Node.js, and MongoDB.",
      image: "/placeholder.svg",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern portfolio website built with Next.js and Tailwind CSS.",
      image: "/placeholder.svg",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A task management application with user authentication and real-time updates.",
      image: "/placeholder.svg",
      tags: ["React", "Firebase", "Material UI"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      title: "Weather Application",
      description: "A weather application that shows current weather and forecasts for any location.",
      image: "/placeholder.svg",
      tags: ["JavaScript", "Weather API", "CSS"],
      liveLink: "#",
      githubLink: "#",
    },
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2>My Projects</h2>
          <div className="divider"></div>
          <p>Here are some of my recent projects. Each project is a unique piece of development.</p>
        </div>

        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <div className="project-image">
                <img src={project.image || "/placeholder.svg"} alt={project.title} />
                <div className="project-overlay">
                  <div className="project-buttons">
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="project-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                        <polyline points="15 3 21 3 21 9"></polyline>
                        <line x1="10" y1="14" x2="21" y2="3"></line>
                      </svg>
                      Live Demo
                    </a>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="project-btn">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="icon"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
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

        <div className="projects-button">
          <a href="#" target="_blank" rel="noopener noreferrer" className="btn btn-primary">
            View All Projects
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects

