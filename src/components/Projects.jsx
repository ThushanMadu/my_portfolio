import "./Projects.css"

function Projects() {
  const projects = [
    {
      id: 1,
      title: "Govishakthi Mobile Application (On Going)",
      description: "Developing an AI-powered mobile application for the GoviShakthi project, an SDGP project in my 2nd year of IIT, designed to help farmers mitigate price drops by recommending value-added products.",
      image: "images/GoviShakthi Logo.png",
      tags: ["React Native", "Node.js", "MongoDB", "Express"],
      githubLink: "#",
    },
    {
      id: 2,
      title: "Real-Time Ticketing Platform",
      description: "This comprehensive event ticketing system, built with Node.js, Express, React.js, and Java, offers a seamless user experience for both vendors and customers. It ensures smooth ticket purchasing, real-time updates on seat availability, and robust transaction handling.",
      image: "images/AdobeStock_561264540.jpeg",
      tags: ["React", "Node.js","Express.js"],
      githubLink: "https://github.com/ThushanMadu/Ticket-System",
    },
    {
      id: 3,
      title: "Plane Seat Management System – Java Console Application (University Project)",
      description: "Developed as part of my university coursework, this console-based Plane Management System efficiently manages seat booking, cancellations, and ticket tracking, providing a user-friendly experience for handling flight seat reservations.",
      image: "images/AdobeStock_500877981.jpeg",
      tags: ["java",],
      liveLink: "#",
      githubLink: "https://github.com/ThushanMadu/Plane-Management",
    },
    {
      id: 4,
      title: "Progression Outcome Tracker - Python Application (University Project)",
      description: "This application was developed as part of my university coursework to track student progression based on their credits in pass, defer, and fail categories. It calculates progression outcomes, displays results in a histogram format, and stores the data in a file for record-keeping.",
      image: "images/AdobeStock_366560615.jpeg",
      tags: ["Python"],
      liveLink: "#",
      githubLink: "This application was developed as part of my university coursework to track student progression based on their credits in pass, defer, and fail categories. It calculates progression outcomes, displays results in a histogram format, and stores the data in a file for record-keeping.",
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
          <a href="https://github.com/ThushanMadu" target="_blank" rel="noopener noreferrer" className="view-all-button">
            View All Projects on my Git Hub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Projects

