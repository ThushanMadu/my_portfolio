import "./Education.css"

function Education() {
  const educationData = [
    {
      id: 1,
      type: "education",
      title: "College",
      institution: "Richmond College Galle",
      period: "2013 - 2022",
      description: "Completed primary and secondary education with a focus on Physical Science. Engaged in various extracurricular activities and leadership roles."
    },
    {
      id: 2,
      type: "work",
      title: "President, Richmond College Photographic Society",
      institution: "Richmond College Galle",
      period: "2022 - 2023",
      description: "Led the Richmond College Photographic Society, organizing events, workshops, and photography competitions while mentoring aspiring photographers."
    },
    {
      id: 3,
      type: "work",
      title: "Crew Member, Richmond Live",
      institution: "Richmond Live",
      period: "2022 - Present",
      description: "Contributed to media coverage and live event broadcasting, enhancing technical skills in video production and streaming."
    },
    {
      id: 4,
      type: "education",
      title: "Undergraduate BSc (Hons) Computer Science",
      institution: "University of Westminster",
      period: "2023 - 2027",
      description: "Pursuing a Bachelor's degree in Computer Science with a focus on software development, Mobile Development, and web technologies. Engaged in multiple academic and extracurricular projects."
    },
    {
      id: 5,
      type: "work",
      title: "Volunteer, IEEE Computer Society Student Branch Chapter IIT",
      institution: "Informatics Institute of Technology",
      period: "2023 - Present",
      description: "Actively contributing to IEEE events and initiatives, assisting in organizing workshops and coding competitions, and engaging in community-driven tech projects."
    },
    {
      id: 6,
      type: "work",
      title: "Software Engineer Intern",
      institution: "WSO2",
      period: "2025 June - Present",
      description: "Currently interning under the Digital Transformation Team, specifically within the Internal Apps branch. Contributing to the development and maintenance of the Certification Portal by implementing new features, fixing issues, and improving system usability. Supporting internal process automation and collaborating with cross-functional teams to align with organizational goals.",
    }
  ]

  return (
      <section id="education" className="education">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">Education & Experience</h2>
            <div className="section-divider"></div>
          </div>

          <div className="timeline">
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

export default Education;
