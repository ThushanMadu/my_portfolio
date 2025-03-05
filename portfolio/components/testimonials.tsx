import Image from "next/image"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO, Company Name",
      image: "/placeholder.svg?height=100&width=100",
      message:
        "Working with this developer was an absolute pleasure. Their attention to detail and technical expertise helped us launch our project ahead of schedule.",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Project Manager, Company Name",
      image: "/placeholder.svg?height=100&width=100",
      message:
        "One of the most reliable developers I've worked with. They consistently delivered high-quality code and were always willing to go the extra mile.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      position: "CTO, Company Name",
      image: "/placeholder.svg?height=100&width=100",
      message:
        "Their technical skills are impressive, but what really sets them apart is their ability to understand business requirements and translate them into effective solutions.",
    },
    {
      id: 4,
      name: "Emily Williams",
      position: "Lead Developer, Company Name",
      image: "/placeholder.svg?height=100&width=100",
      message:
        "A talented developer who brings both technical expertise and creative problem-solving to every project. It was a pleasure collaborating with them.",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Testimonials</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
          <p className="text-zinc-300 mt-6 max-w-2xl mx-auto">
            Here's what people are saying about my work and collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-zinc-900 p-8 rounded-xl shadow-lg relative">
              <Quote className="absolute top-6 right-6 text-red-500 opacity-20" size={48} />
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-red-500">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    width={100}
                    height={100}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                  <p className="text-red-400">{testimonial.position}</p>
                </div>
              </div>
              <p className="text-zinc-300 italic">"{testimonial.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

