import "./Education.css"

function Education() {
  const educationData = [
    {
      id: 1,
      type: "education",
      title: "School",
      institution: "Richmond College Galle",
      period: "2013 - 2022",
      description: "Physical Science Advance Level 2023 (2022).",
    },
    {
      id: 2,
      type: "work",
      title: "President , Richmond College Photograpic Society.",
      institution: "Richmond College Galle",
      period: "2022 - 2023",
      description: "Leading the RCPS.",
    },
    {
      id: 3,
      type: "Work",
      title: "Crew Member , Richmond Live",
      institution: "Richmond Live",
      period: "2022 - Present",
      description: "",
    },
    {
      id: 4,
      type: "education",
      title: "Undergraduate Bsc(Hons) Computer Science.",
      institution: "university of Westminster ",
      period: "2023 - 2027",
      description:
        "Developed and maintained multiple web applications using React, Node.js, and other modern technologies.",
    },

    {
      id: 5,
      type: "work",
      title: "Volunteering , IEEE Computer Society Studdent Branch Chapter IIT",
      institution: "Informatic Institute Of Technology ",
      period: "2023 - Present",
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

