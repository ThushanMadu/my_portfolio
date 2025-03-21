import "./Testimonials.css"

function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "person example 1",
      position: "Company Name",
      image: "/placeholder.jpg",
      message:
        "Testamonial 1",
    },
    {
      id: 2,
      name: "Person 2",
      position: "Company Name",
      image: "/placeholder.jpg",
      message:
        "testamonial 2",
    },
  ]

  return (
    <section id="testimonials" className="testimonials">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Testimonials</h2>
          <div className="section-divider"></div>
          <p className="section-description">Here's what people are saying about my work and collaboration.</p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="quote-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3 21C3 16.0294 7.02944 12 12 12C16.9706 12 21 16.0294 21 21M16.5 6.5C16.5 9.26142 14.2614 11.5 11.5 11.5C8.73858 11.5 6.5 9.26142 6.5 6.5C6.5 3.73858 8.73858 1.5 11.5 1.5C14.2614 1.5 16.5 3.73858 16.5 6.5Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div className="testimonial-content">
                <div className="testimonial-author">
                  <div className="author-image-container">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="author-image"
                    />
                  </div>
                  <div className="author-info">
                    <h4 className="author-name">{testimonial.name}</h4>
                    <p className="author-position">{testimonial.position}</p>
                  </div>
                </div>
                <p className="testimonial-message">"{testimonial.message}"</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Testimonials

