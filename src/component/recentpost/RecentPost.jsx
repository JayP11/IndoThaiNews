import React from "react";
import "./RecentPost.css";
import images from "../../constants/images";
import { FaClock } from "react-icons/fa";

const RecentPost = () => {
  const data = [
    {
      image: require("../../assets/travel_img1.webp"),
      title: "Everything You Wanted To Know About Business",
      date: "01 Nov, 2023",
    },
    {
      image: require("../../assets/business_img1.webp"),
      title: "Working group on small business approves work",
      date: "01 Nov, 2023",
    },
    {
      image: require("../../assets/business_img2.webp"),
      title: "The term stock market refers to several",
      date: "01 Nov, 2023",
    },
    {
      image: require("../../assets/sports_img1.webp"),
      title: "A matter of Imfact ou didn t find the perfect",
      date: "01 Nov, 2023",
    },
    {
      image: require("../../assets/demoimg.webp"),
      title: "Stock markets are where individual and institutional",
      date: "01 Nov, 2023",
    },
  ];
  return (
    <div>
      <div>
        <h2>Recent Post</h2>
      </div>
      <div className="PopularPost_line_main">
        <div className="PopularPost_line_inner1"></div>
        <div className="PopularPost_line_inner2"></div>
      </div>
      <div className="RecentPost_card_content_main_top">
        {data.map((item) => {
          return (
            <div className="RecentPost_card_main_top">
              <div className="RecentPost_card_img_outer">
                <img
                  src={item.image}
                  alt="business_img1"
                  className="RecentPost_card_img_inner"
                />
              </div>
              <div className="RecentPost_card_title_time_main">
                <div>
                  <h4>{item.title}</h4>
                </div>
                <div className="Single_CategoryTime_main">
                  <div className="FaClock_icon_main">
                    <FaClock />
                  </div>
                  <div>
                    <h5
                      style={{ color: "var(--color-gray", fontWeight: "500" }}>
                      {item.date}
                    </h5>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RecentPost;
