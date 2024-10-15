import React from 'react'
import Quotes from './Quotes'
import CodePreview from './CodePreview'
import Quotes2 from './Quotes2'

export const Testimonials = () => {
  return (
    <div>
      <div className="testimonials">
        <h1>Testimonials</h1>
        <p>A testimonial is an honest endorsement of your product or service that usually comes from a customer, colleague, or peer who has benefited from or experienced success as a result of the work you did for them.
        </p>
      </div>

      <div className="testimonial-cont">
        <Quotes />

      </div>

      <div className="testimonials">
        <h2>Variations</h2>
        <h4>Simple Basic</h4>
      </div>

      <CodePreview />
      <div className="testimonial-cont">
        <Quotes2 />

      </div>
    </div>
  )
}
