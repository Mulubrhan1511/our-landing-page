import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export const About = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      easing: 'ease-in-out', // Easing function
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6" data-aos="fade-right">
            <img src="img/about.jpg" className="img-responsive" alt="" />
          </div>
          <div className="col-xs-12 col-md-6" data-aos="fade-left">
            <div className="about-text">
              <h2 data-aos="fade-up">About Us</h2>
              <p data-aos="fade-up">{props.data ? props.data.paragraph : "Loading..."}</p>
              <h3 data-aos="fade-up">Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`} data-aos="fade-up">{d}</li>
                        ))
                      : "Loading..."}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`} data-aos="fade-up">{d}</li>
                        ))
                      : "Loading..."}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
