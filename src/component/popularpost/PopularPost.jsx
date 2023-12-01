import React from "react";
import "./PopularPost.css";
import { FaClock } from "react-icons/fa";

const PopularPost = () => {
  const data = [
    {
      image: require("../../assets/business_img1.webp"),
      title: "Everything You Wanted To Know About Business",
      date: "01 Nov, 2023",
    },
    {
      image: require("../../assets/business_img1.webp"),
      title: "Everything You Wanted To Know About Business",
      date: "01 Nov, 2023",
    },
    {
      image: require("../../assets/business_img1.webp"),
      title: "Everything You Wanted To Know About Business",
      date: "01 Nov, 2023",
    },
    {
      image: require("../../assets/business_img1.webp"),
      title: "Everything You Wanted To Know About Business",
      date: "01 Nov, 2023",
    },
  ];
  return (
    <div className="PopularPost_main">
      <div>
        <div>
          <h2>Popular Post</h2>
        </div>
        <div className="PopularPost_line_main">
          <div className="PopularPost_line_inner1"></div>
          <div className="PopularPost_line_inner2"></div>
        </div>
      </div>
      <div className="PopularPost_card_main_outer">
        {data.map((item) => {
          return (
            <div className="PopularPost_card_main">
              <div className="PopularPost_card_img_outer">
                <img
                  src={item.image}
                  alt="business_img2"
                  className="PopularPost_card_img_inner"
                />
              </div>
              <div>
                <h4>{item.title}</h4>
              </div>
              <div className="Single_CategoryTime_main">
                <div className="FaClock_icon_main">
                  <FaClock />
                </div>
                <div>
                  <h5 style={{ color: "var(--color-gray", fontWeight: "500" }}>
                    {item.date}
                  </h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PopularPost;
