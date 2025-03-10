import "./Education.css"

function Education() {
  const educationData = [
    {
      id: 1,
      type: "education",
      title: "Bachelor's Degree in Computer Science",
      institution: "University Name",
      period: "2016 - 2020",
      description: "Graduated with honors. Specialized in web development and software engineering.",
    },
    {
      id: 2,
      type: "work",
      title: "Senior Web Developer",
      institution: "Company Name",
      period: "2022 - Present",
      description: "Leading the front-end development team. Implementing modern web technologies and best practices.",
    },
    {
      id: 3,
      type: "education",
      title: "Master's Degree in Software Engineering",
      institution: "University Name",
      period: "2020 - 2022",
      description: "Focused on advanced programming concepts and software architecture.",
    },
    {
      id: 4,
      type: "work",
      title: "Web Developer",
      institution: "Company Name",
      period: "2020 - 2022",
      description:
        "Developed and maintained multiple web applications using React, Node.js, and other modern technologies.",
    },
  ]

  return (
    <section id="education" className="education">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Education & Experience</h2>
          <div className="section-divider"></div>
        </div>

        <div className="timeline">
          {/* Timeline line */}
          <div className="timeline-line"></div>

          <div className="timeline-items">
            {educationData.map((item, index) => (
              <div key={item.id} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
                <div className="timeline-dot">
                  {item.type === "education" ? (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="timeline-icon"
                    >
                      <path
                        d="M22 10V6M2 10V6M12 10L17.5 7.5V2L12 4.5L6.5 2V7.5L12 10ZM2 10H22M3 10V22H21V10M12 13V19M8 19H16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="timeline-icon"
                    >
                      <path
                        d="M20 7H4C2.89543 7 2 7.89543 2 9V19C2 20.1046 2.89543 21 4 21H20C21.1046 21 22 20.1046 22 19V9C22 7.89543 21.1046 7 20 7Z"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M16 21V5C16 3.89543 15.1046 3 14 3H10C8.89543 3 8 3.89543 8 5V21"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  )}
                </div>

                <div className="timeline-content">
                  <span className="timeline-period">{item.period}</span>
                  <h3 className="timeline-title">{item.title}</h3>
                  <p className="timeline-institution">{item.institution}</p>
                  <p className="timeline-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Education

