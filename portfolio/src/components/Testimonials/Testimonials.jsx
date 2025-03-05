import "./Testimonials.css"

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      name: "John Doe",
      position: "CEO, Company Name",
      image: "/placeholder.svg",
      message:
        "Working with this developer was an absolute pleasure. Their attention to detail and technical expertise helped us launch our project ahead of schedule.",
    },
    {
      id: 2,
      name: "Jane Smith",
      position: "Project Manager, Company Name",
      image: "/placeholder.svg",
      message:
        "One of the most reliable developers I've worked with. They consistently delivered high-quality code and were always willing to go the extra mile.",
    },
    {
      id: 3,
      name: "Michael Johnson",
      position: "CTO, Company Name",
      image: "/placeholder.svg",
      message:
        "Their technical skills are impressive, but what really sets them apart is their ability to understand business requirements and translate them into effective solutions.",
    },
    {
      id: 4,
      name: "Emily Williams",
      position: "Lead Developer, Company Name",
      image: "/placeholder.svg",
      message:
        "A talented developer who brings both technical expertise and creative problem-solving to every project. It was a pleasure collaborating with them.",
    },
  ]

  return (
    <section id="testimonials" className="testimonials">
      <div className="container">
        <div className="section-header">
          <h2>Testimonials</h2>
          <div className="divider"></div>
          <p>Here's what people are saying about my work and collaboration.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="quote-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"></path>
                  <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z"></path>
                </svg>
              </div>
              <div className="testimonial-header">
                <div className="testimonial-image">
                  <img src={testimonial.image || "/placeholder.svg"} alt={testimonial.name} />
                </div>
                <div className="testimonial-author">
                  <h4 className="testimonial-name">{testimonial.name}</h4>
                  <p className="testimonial-position">{testimonial.position}</p>
                </div>
              </div>
              <p className="testimonial-message">"{testimonial.message}"</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

