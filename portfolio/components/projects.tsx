import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Website",
      description: "A fully responsive e-commerce platform built with React, Node.js, and MongoDB.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A modern portfolio website built with Next.js and Tailwind CSS.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["Next.js", "Tailwind CSS", "Framer Motion"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 3,
      title: "Task Management App",
      description: "A task management application with user authentication and real-time updates.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["React", "Firebase", "Material UI"],
      liveLink: "#",
      githubLink: "#",
    },
    {
      id: 4,
      title: "Weather Application",
      description: "A weather application that shows current weather and forecasts for any location.",
      image: "/placeholder.svg?height=300&width=500",
      tags: ["JavaScript", "Weather API", "CSS"],
      liveLink: "#",
      githubLink: "#",
    },
  ]

  return (
    <section id="projects" className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">My Projects</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          <p className="text-zinc-300 mt-6 max-w-2xl mx-auto">
            Here are some of my recent projects. Each project is a unique piece of development.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-900 rounded-xl overflow-hidden shadow-lg transition-transform hover:-translate-y-2"
            >
              <div className="relative h-60 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="object-cover w-full h-full"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-end justify-center p-6">
                  <div className="flex space-x-4">
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white text-white hover:bg-white hover:text-zinc-900"
                    >
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <ExternalLink size={16} className="mr-2" /> Live Demo
                      </a>
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      className="border-white text-white hover:bg-white hover:text-zinc-900"
                    >
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center"
                      >
                        <Github size={16} className="mr-2" /> Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-zinc-300 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-red-500/10 text-red-500 text-sm rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button className="bg-red-500 hover:bg-red-600 text-white">
            <a href="#" target="_blank" rel="noopener noreferrer">
              View All Projects
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}

