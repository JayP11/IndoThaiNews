import React from "react";
import "./NavLatestNews.css";
import { SlEnergy } from "react-icons/sl";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const NavLatestNews = () => {
  var settings = {
    dots: false,
    infinite: true,
    arrows: false,
    autoplay: true,
    // speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 4000,
  };
  return (
    <div className="NavLatestNews_top_div">
      <div className="NavLatestNews_head">
        <SlEnergy
          style={{
            color: "white",
            padding: "0.3rem",
            fontSize:"25px",
            background: "var(--color-dark-indianred)",
          }}
        />
        <p style={{width:"109px"}}>Breaking News</p>
      </div>

      <div className="NavLatestNews_main">
        <Slider {...settings}>
          <div>
            <h3>
              TRAVEL Qantas Has U.S.-to-Australia Flights On Sale Right Now
              Here's When to Book By
            </h3>
          </div>
          <div>
            <h3>Look of the Week: Blackpink headline Coachella in Korean</h3>
          </div>
          <div>
            <h3>
              The seven-member group filmed a music video in the world body’s
              New York headquarters
            </h3>
          </div>
        </Slider>
      </div>
    </div>
  );
};

export default NavLatestNews;
