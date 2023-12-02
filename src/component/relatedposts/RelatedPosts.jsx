import React from "react";
import "./RelatedPosts.css";
import images from "../../constants/images";
import { MdAccountCircle } from "react-icons/md";
import { FaClock } from "react-icons/fa";

const RelatedPosts = () => {
  const data = [
    {
      image: require("../../assets/business_img1.webp"),
      title:
        "Holland America Is Offering 25% Off Cruises Including This Epic Solar",
    },
    {
      image: require("../../assets/business_img2.webp"),
      title:
        "Holland America Is Offering 25% Off Cruises Including This Epic Solar",
    },
    {
      image: require("../../assets/lifestyle_img1.webp"),
      title:
        "Holland America Is Offering 25% Off Cruises Including This Epic Solar",
    },
  ];
  return (
    <div className="RelatedPosts_main">
      <div>
        <h2>Related Posts</h2>
      </div>
      <div className="PopularPost_line_main">
        <div className="PopularPost_line_inner1"></div>
        <div className="PopularPost_line_inner2"></div>
      </div>
      <div className="RelatedPosts_card_content_main">
        {data.map((item) => {
          return (
            <div className="RelatedPosts_card_content_main_inner">
              <div className="RelatedPosts_img_outer">
                <img
                  src={item.image}
                  alt=""
                  className="RelatedPosts_img_inner"
                />
              </div>
              <div className="RelatedPosts_title_main">
                <h3>
                  Holland America Is Offering 25% Off Cruises Including This
                  Epic Solar
                </h3>
              </div>
              <div className="SingleCategory_reporter_time_main">
                <div className="SingleCategory_Reporter_main">
                  <div className="MdAccountCircle_icon_main">
                    <MdAccountCircle />
                  </div>
                  <div className="">
                    <h5
                      style={{
                        color: "var(--color-gray",
                        fontWeight: "500",
                      }}>
                      Reporter 21
                    </h5>
                  </div>
                </div>
                <div className="Single_CategoryTime_main">
                  <div className="FaClock_icon_main">
                    <FaClock />
                  </div>
                  <div>
                    <h5
                      style={{
                        color: "var(--color-gray",
                        fontWeight: "500",
                      }}>
                      14 Nov, 2021
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

export default RelatedPosts;
