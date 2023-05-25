import React from "react";
import Slider from "react-slick";

import "./home.css";

export default function Home() {
  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    speed: 500,
    autoplaySpeed: 2000,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <section className="home">
      <div className="slider-container">
        <Slider {...settings} className="slider">
          <div>
            <img src="./img/1.png" alt="" />
          </div>
          <div>
            <img src="./img/2.png" alt="" />
          </div>
          <div>
            <img src="./img/3.png" alt="" />
          </div>
          <div>
            <img src="./img/4.png" alt="" />
          </div>
          <div>
            <img src="./img/5.png" alt="" />
          </div>
        </Slider>
      </div>
    </section>
  );
}
