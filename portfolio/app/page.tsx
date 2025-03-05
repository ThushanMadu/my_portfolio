import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import About from "@/components/about"
import Education from "@/components/education"
import Projects from "@/components/projects"
import Skills from "@/components/skills"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-900">
      <Navbar />
      <Hero />
      <About />
      <Education />
      <Projects />
      <Skills />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

