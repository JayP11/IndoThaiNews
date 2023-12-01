import React from "react";
import "./WeeklyReviewHome.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import images from "../../constants/images";

const WeeklyReviewHome = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
  };
  return (
    <div className="WeeklyReviewHome_main_outer">
      <div className="WeeklyReviewHome_main">
        <div>
          <h2>WEEKLY REVIEW SHUKHPATTHO</h2>
        </div>
        <div className="">
          <Slider {...settings}>
            <div className="WeeklyReviewHome_slider_card_main">
              <div className="WeeklyReviewHome_card_imgs_outer">
                <img
                  src={images.business_img2}
                  alt="business_img2"
                  className="WeeklyReviewHome_card_imgs_inner"
                />
              </div>
              <div className="WeeklyReviewHome_dtandtime">
                <div>
                  <h5>29 NOV 23</h5>
                </div>
                <div>
                  <h5 className="">2 MIN TO READ</h5>
                </div>
              </div>
              <div className="WeeklyReviewHome_card_desc_main">
                <h3 style={{ fontWeight: "600" }}>
                  Amazon Has 143 Billion Reasons To Keep Strech Lining Hemline
                  Above Knee Burgundy Glossy Silk Complete Hid Zip Little
                  Catches Rayon
                </h3>
              </div>
            </div>
            <div className="WeeklyReviewHome_slider_card_main">
              <div className="WeeklyReviewHome_card_imgs_outer">
                <img
                  src={images.entertainment_img1}
                  alt="entertainment_img1"
                  className="WeeklyReviewHome_card_imgs_inner"
                />
              </div>
              <div className="WeeklyReviewHome_dtandtime">
                <div>
                  <h5>29 NOV 23</h5>
                </div>
                <div>
                  <h5 className="">2 MIN TO READ</h5>
                </div>
              </div>
              <div className="WeeklyReviewHome_card_desc_main">
                <h3 style={{ fontWeight: "600" }}>
                  Amazon Has 143 Billion Reasons To Keep Strech Lining Hemline
                  Above Knee Burgundy Glossy Silk Complete Hid Zip Little
                  Catches Rayon
                </h3>
              </div>
            </div>
            <div className="WeeklyReviewHome_slider_card_main">
              <div className="WeeklyReviewHome_card_imgs_outer">
                <img
                  src={images.national_img1}
                  alt="national_img1"
                  className="WeeklyReviewHome_card_imgs_inner"
                />
              </div>
              <div className="WeeklyReviewHome_dtandtime">
                <div>
                  <h5>29 NOV 23</h5>
                </div>
                <div>
                  <h5 className="">2 MIN TO READ</h5>
                </div>
              </div>
              <div className="WeeklyReviewHome_card_desc_main">
                <h3 style={{ fontWeight: "600" }}>
                  Amazon Has 143 Billion Reasons To Keep Strech Lining Hemline
                  Above Knee Burgundy Glossy Silk Complete Hid Zip Little
                  Catches Rayon
                </h3>
              </div>
            </div>
            <div className="WeeklyReviewHome_slider_card_main">
              <div className="WeeklyReviewHome_card_imgs_outer">
                <img
                  src={images.lifestyle_img1}
                  alt="lifestyle_img1"
                  className="WeeklyReviewHome_card_imgs_inner"
                />
              </div>
              <div className="WeeklyReviewHome_dtandtime">
                <div>
                  <h5>29 NOV 23</h5>
                </div>
                <div>
                  <h5 className="">2 MIN TO READ</h5>
                </div>
              </div>
              <div className="WeeklyReviewHome_card_desc_main">
                <h3 style={{ fontWeight: "600" }}>
                  Look of the Week: Blackpink headline Coachella in Korean
                  hanboks
                </h3>
              </div>
            </div>
            <div className="WeeklyReviewHome_slider_card_main">
              <div className="WeeklyReviewHome_card_imgs_outer">
                <img
                  src={images.entertainment_img1}
                  alt="entertainment_img1"
                  className="WeeklyReviewHome_card_imgs_inner"
                />
              </div>
              <div className="WeeklyReviewHome_dtandtime">
                <div>
                  <h5>29 NOV 23</h5>
                </div>
                <div>
                  <h5 className="">2 MIN TO READ</h5>
                </div>
              </div>
              <div className="WeeklyReviewHome_card_desc_main">
                <h3 style={{ fontWeight: "600" }}>
                  Amazon Has 143 Billion Reasons To Keep Strech Lining Hemline
                  Above Knee Burgundy Glossy Silk Complete Hid Zip Little
                  Catches Rayon
                </h3>
              </div>
            </div>
            <div className="WeeklyReviewHome_slider_card_main">
              <div className="WeeklyReviewHome_card_imgs_outer">
                <img
                  src={images.business_img2}
                  alt="business_img2"
                  className="WeeklyReviewHome_card_imgs_inner"
                />
              </div>
              <div className="WeeklyReviewHome_dtandtime">
                <div>
                  <h5>29 NOV 23</h5>
                </div>
                <div>
                  <h5 className="">2 MIN TO READ</h5>
                </div>
              </div>
              <div className="WeeklyReviewHome_card_desc_main">
                <h3 style={{ fontWeight: "600" }}>
                  Amazon Has 143 Billion Reasons To Keep Strech Lining Hemline
                  Above Knee Burgundy Glossy Silk Complete Hid Zip Little
                  Catches Rayon
                </h3>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WeeklyReviewHome;
