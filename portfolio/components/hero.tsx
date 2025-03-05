import { Button } from "@/components/ui/button"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById("about")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative h-screen flex items-center justify-center bg-zinc-900 overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,#ff0000,transparent_40%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,#ff0000,transparent_40%)]"></div>
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-white">Hello, I'm </span>
          <span className="text-red-500">Your Name</span>
        </h1>
        <p className="text-xl md:text-2xl text-zinc-300 mb-8 max-w-3xl mx-auto">
          A passionate developer specializing in creating beautiful and functional web experiences
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            className="bg-red-500 hover:bg-red-600 text-white px-8 py-6 text-lg"
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Contact Me
          </Button>
          <Button
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-zinc-900 px-8 py-6 text-lg"
          >
            <a href="/resume.pdf" download>
              Download CV
            </a>
          </Button>
        </div>
      </div>

      <button
        onClick={scrollToAbout}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-white animate-bounce"
        aria-label="Scroll down"
      >
        <ArrowDown size={32} />
      </button>
    </section>
  )
}

