import "./App.css"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Education from "./components/Education/Education"
import Projects from "./components/Projects/Projects"
import Skills from "./components/Skills/Skills"
import Testimonials from "./components/Testimonials/Testimonials"
import Contact from "./components/Contact/Contact"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Projects />
        <Skills />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App

