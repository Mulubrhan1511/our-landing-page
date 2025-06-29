import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export const Testimonials = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      easing: 'ease-in-out', // Easing function
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div id="testimonials">
      <div className="container">
        <div className="section-title text-center">
          <h2 data-aos="fade-up">What our clients say</h2> {/* AOS animation */}
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4" data-aos="fade-up"> {/* AOS animation for each testimonial */}
                  <div className="testimonial">
                    <div className="testimonial-image">
                      <img src={d.img} alt="" />
                    </div>
                    <div className="testimonial-content">
                      <p>"{d.text}"</p>
                      <div className="testimonial-meta"> - {d.name} </div>
                    </div>
                  </div>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
