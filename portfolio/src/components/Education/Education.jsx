import "./Education.css"

const Education = () => {
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
      <div className="container">
        <div className="section-header">
          <h2>Education & Experience</h2>
          <div className="divider"></div>
        </div>

        <div className="timeline">
          {educationData.map((item, index) => (
            <div key={item.id} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
              <div className="timeline-dot">
                {item.type === "education" ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon"
                  >
                    <path d="M22 10v6M2 10l10-5 10 5-10 5z"></path>
                    <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path>
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="icon"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
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
    </section>
  )
}

export default Education

