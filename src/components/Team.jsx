import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export const Team = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      easing: 'ease-in-out', // Easing function
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <h2 data-aos="fade-up">Meet the Team</h2> {/* AOS animation */}
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> {/* AOS animation */}
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team" data-aos="fade-up"> {/* AOS animation for each team member */}
                  <div className="thumbnail">
                    <img src={d.img} alt={d.name} className="team-img" />
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
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
