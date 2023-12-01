import React from "react";
import images from "../../constants/images";
import "./GalleryPostCategory.css";
const GalleryPostCategory = () => {
  const data = [
    {
      image: require("../../assets/demoimg.webp"),
    },
    {
      image: require("../../assets/travel_img1.webp"),
    },
    {
      image: require("../../assets/travel_img2.webp"),
    },
    {
      image: require("../../assets/business_img1.webp"),
    },
    {
      image: require("../../assets/business_img2.webp"),
    },
    {
      image: require("../../assets/sports_img1.webp"),
    },
  ];
  return (
    <div>
      <div>
        <h2>Gallery</h2>
      </div>
      <div className="PopularPost_line_main">
        <div className="PopularPost_line_inner1"></div>
        <div className="PopularPost_line_inner2"></div>
      </div>
      <div className="GalleryPostCategory_img_main_top">
        {data.map((item) => {
          return (
            <div className="GalleryPostCategory_img_outer">
              <img
                src={item.image}
                alt="business_img1"
                className="GalleryPostCategory_img_inner"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GalleryPostCategory;
