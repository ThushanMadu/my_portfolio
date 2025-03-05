import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 bg-zinc-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square max-w-md mx-auto">
            <div className="absolute inset-0 border-2 border-red-500 translate-x-4 translate-y-4 rounded-xl"></div>
            <div className="relative overflow-hidden rounded-xl border-4 border-zinc-700">
              <Image
                src="/placeholder.svg?height=400&width=400"
                alt="Profile Picture"
                width={400}
                height={400}
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold text-white mb-4">
              I'm <span className="text-red-500">Your Name</span>, a Web Developer
            </h3>
            <p className="text-zinc-300 mb-6">
              I am a passionate web developer with a strong focus on creating responsive and user-friendly websites.
              With several years of experience in the field, I have developed a deep understanding of both front-end and
              back-end technologies.
            </p>
            <p className="text-zinc-300 mb-6">
              My journey in web development started when I was in college, and since then, I have been constantly
              learning and improving my skills. I believe in writing clean, maintainable code and staying up-to-date
              with the latest industry trends and best practices.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <p className="text-zinc-300">
                  <span className="text-red-500 font-semibold">Name:</span> Your Name
                </p>
              </div>
              <div>
                <p className="text-zinc-300">
                  <span className="text-red-500 font-semibold">Email:</span> your.email@example.com
                </p>
              </div>
              <div>
                <p className="text-zinc-300">
                  <span className="text-red-500 font-semibold">Phone:</span> +1 234 567 890
                </p>
              </div>
              <div>
                <p className="text-zinc-300">
                  <span className="text-red-500 font-semibold">Location:</span> Your City, Country
                </p>
              </div>
            </div>

            <a
              href="/resume.pdf"
              download
              className="inline-block bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-md transition-colors"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

