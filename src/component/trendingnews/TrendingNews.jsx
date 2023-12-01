import React from "react";
import "./TrendingNews.css";
import images from "../../constants/images";

const TrendingNews = () => {
  return (
    <>
      <div className="TrendingNews_main">
        <div className="TrendingNews_heading">
          <h2>TRENDING NEWS</h2>
        </div>
        <div className="TrendingNews_card_main_outer">
          <div className="TrendingNews_card_main">
            <div className="TrendingNews_img_outer">
              <img
                src={images.lifestyle_img1}
                alt="lifestyle_img1"
                className="TrendingNews_img_inner"
              />
            </div>
            <div className="TrendingNews_category_main">
              <h5 className="TrendingNews_category_inner">
                <h5 style={{ color: "var(--color-logo-blue)" }}>|</h5>
                LIFESTYLE
              </h5>
              <p className="TrendingNews_time_inner">2 MIN TO READ</p>
            </div>
            <div>
              <h3 style={{ fontWeight: "600" }}>
                Look of the Week: Blackpink headline Coachella in Korean hanboks
              </h3>
            </div>
          </div>
          <div className="TrendingNews_card_main">
            <div className="TrendingNews_img_outer">
              <img
                src={images.national_img1}
                alt="national_img1"
                className="TrendingNews_img_inner"
              />
            </div>
            <div className="TrendingNews_category_main">
              <h5 className="TrendingNews_category_inner">
                <h5 style={{ color: "var(--color-logo-blue)" }}>|</h5>
                NATIONAL
              </h5>
              <p className="TrendingNews_time_inner">2 MIN TO READ</p>
            </div>

            <div>
              <h3 style={{ fontWeight: "600" }}>
                The Seven-Member Group Filmed A Music Video In The World Body’s
                New York Headquarters
              </h3>
            </div>
          </div>
          <div className="TrendingNews_card_main">
            <div className="TrendingNews_img_outer">
              <img
                src={images.entertainment_img1}
                alt="entertainment_img1"
                className="TrendingNews_img_inner"
              />
            </div>
            <div className="TrendingNews_category_main">
              <h5 className="TrendingNews_category_inner">
                <h5 style={{ color: "var(--color-logo-blue)" }}>|</h5>
                ENTERTAINMENT
              </h5>
              <p className="TrendingNews_time_inner">2 MIN TO READ</p>
            </div>

            <div>
              <h3 style={{ fontWeight: "600" }}>
                Reating A Vision For The Future: How Technology Will
                Revolutionise The Business Finance Function
              </h3>
            </div>
          </div>
          <div className="TrendingNews_card_main">
            <div className="TrendingNews_img_outer">
              <img
                src={images.national_img2}
                alt="national_img2"
                className="TrendingNews_img_inner"
              />
            </div>
            <div className="TrendingNews_category_main">
              <h5 className="TrendingNews_category_inner">
                <h5 style={{ color: "var(--color-logo-blue)" }}>|</h5>
                NATIONAL
              </h5>
              <p className="TrendingNews_time_inner">2 MIN TO READ</p>
            </div>
            <div>
              <h3 style={{ fontWeight: "600" }}>
                Look of the Week: Blackpink headline Coachella in Korean hanboks
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="TrendingNews_img_banner_main">
        <img
          src={images.demonavimg}
          alt="demonavimg"
          className="TrendingNews_img_banner_inner"
        />
      </div>
    </>
  );
};

export default TrendingNews;
