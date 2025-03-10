import "./Skills.css"

function Skills() {
  const programmingSkills = [
    { name: "Java", percentage: 90 },
    { name: "Java Script", percentage: 85 },
    { name: "React", percentage: 85 },
    { name: "TypeScript", percentage: 80 },
    { name: "Python", percentage: 70 },
    { name: "PHP", percentage: 50 },
  ]

  const frameworkSkills = [
    { name: "React", percentage: 90 },
    { name: "React Native", percentage: 85 },
    { name: "Node.js", percentage: 80 },
    { name: "Express", percentage: 75 },
    { name: "Spring Boot", percentage: 70 },
    { name: "Next", percentage: 40 },
  ]

  const otherSkills = [
    "HTML5",
    "CSS3",
    "Git",
    "RESTful API",
    "MongoDB",
    "MySQL",
  ]

  return (
    <section id="skills" className="skills">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">My Skills</h2>
          <div className="section-divider"></div>
          <p className="section-description">
            I have experience with a variety of programming languages and frameworks. Here are some of my technical
            skills.
          </p>
        </div>

        <div className="skills-grid">
          <div className="skills-column">
            <h3 className="skills-category">Programming Languages</h3>
            <div className="skills-list">
              {programmingSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="skills-column">
            <h3 className="skills-category">Frameworks & Libraries</h3>
            <div className="skills-list">
              {frameworkSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-percentage">{skill.percentage}%</span>
                  </div>
                  <div className="skill-bar">
                    <div className="skill-progress" style={{ width: `${skill.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="other-skills">
          <h3 className="skills-category">Other Skills</h3>
          <div className="other-skills-grid">
            {otherSkills.map((skill, index) => (
              <div key={index} className="other-skill-item">
                <span>{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills

