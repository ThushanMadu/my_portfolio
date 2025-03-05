import { GraduationCap, Briefcase } from "lucide-react"

export default function Education() {
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
    <section id="education" className="py-20 bg-zinc-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Education & Experience</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-zinc-700"></div>

          <div className="space-y-12">
            {educationData.map((item, index) => (
              <div
                key={item.id}
                className={`relative flex items-center ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}
              >
                <div className="w-1/2"></div>

                {/* Timeline dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-12 h-12 rounded-full bg-zinc-800 border-4 border-red-500 flex items-center justify-center z-10">
                  {item.type === "education" ? (
                    <GraduationCap className="text-red-500" size={20} />
                  ) : (
                    <Briefcase className="text-red-500" size={20} />
                  )}
                </div>

                <div className={`w-1/2 ${index % 2 === 0 ? "pl-12" : "pr-12"}`}>
                  <div className="bg-zinc-800 p-6 rounded-lg shadow-lg">
                    <span className="inline-block px-3 py-1 bg-red-500 text-white text-sm rounded-full mb-3">
                      {item.period}
                    </span>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-red-400 mb-3">{item.institution}</p>
                    <p className="text-zinc-300">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

