import { Image } from "./image";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles

export const Gallery = (props) => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duration of animations
      easing: 'ease-in-out', // Easing function
      once: false, // Whether animation should happen only once
    });
  }, []);

  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2 data-aos="fade-up">Gallery</h2> {/* AOS animation */}
          <p data-aos="fade-up">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit duis sed
            dapibus leonec.
          </p> {/* AOS animation */}
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                  <div
                    key={`${d.title}-${i}`}
                    className="col-sm-6 col-md-4 col-lg-4"
                    data-aos="fade-up" // AOS animation for each image
                  >
                    <Image
                      title={d.title}
                      largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </div>
                ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};
