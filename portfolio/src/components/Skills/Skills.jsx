import "./Skills.css"

const Skills = () => {
  const programmingSkills = [
    { name: "JavaScript", percentage: 90 },
    { name: "Java", percentage: 85 },
    { name: "Python", percentage: 75 },
    { name: "TypeScript", percentage: 80 },
    { name: "PHP", percentage: 70 },
    { name: "C#", percentage: 65 },
  ]

  const frameworkSkills = [
    { name: "React", percentage: 90 },
    { name: "Next.js", percentage: 85 },
    { name: "Node.js", percentage: 80 },
    { name: "Express", percentage: 75 },
    { name: "Spring Boot", percentage: 70 },
    { name: "Django", percentage: 65 },
  ]

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2>My Skills</h2>
          <div className="divider"></div>
          <p>
            I have experience with a variety of programming languages and frameworks. Here are some of my technical
            skills.
          </p>
        </div>

        <div className="skills-container">
          <div className="skills-column">
            <h3 className="skills-title">Programming Languages</h3>
            <div className="skills-list">
              {programmingSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
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
            <h3 className="skills-title">Frameworks & Libraries</h3>
            <div className="skills-list">
              {frameworkSkills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <div className="skill-info">
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
          <h3 className="skills-title">Other Skills</h3>
          <div className="other-skills-grid">
            {[
              "HTML5",
              "CSS3",
              "Git",
              "RESTful API",
              "GraphQL",
              "MongoDB",
              "MySQL",
              "PostgreSQL",
              "Docker",
              "AWS",
              "Firebase",
              "Redux",
            ].map((skill, index) => (
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

