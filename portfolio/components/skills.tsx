export default function Skills() {
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
    <section id="skills" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Skills</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          <p className="text-zinc-300 mt-6 max-w-2xl mx-auto">
            I have experience with a variety of programming languages and frameworks. Here are some of my technical
            skills.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Programming Languages</h3>
            <div className="space-y-6">
              {programmingSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-red-500 font-medium">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-zinc-700 rounded-full h-2.5">
                    <div className="bg-red-500 h-2.5 rounded-full" style={{ width: `${skill.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-6">Frameworks & Libraries</h3>
            <div className="space-y-6">
              {frameworkSkills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between mb-2">
                    <span className="text-white font-medium">{skill.name}</span>
                    <span className="text-red-500 font-medium">{skill.percentage}%</span>
                  </div>
                  <div className="w-full bg-zinc-700 rounded-full h-2.5">
                    <div className="bg-red-500 h-2.5 rounded-full" style={{ width: `${skill.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-16">
          <h3 className="text-2xl font-semibold text-white mb-8 text-center">Other Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
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
              <div key={index} className="bg-zinc-800 rounded-lg p-4 text-center hover:bg-zinc-700 transition-colors">
                <span className="text-white">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

