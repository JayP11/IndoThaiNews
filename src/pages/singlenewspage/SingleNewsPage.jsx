import React from "react";
import PageHero from "../../component/pagehero/PageHero";
import SingleNews from "../../component/singlenews/SingleNews";
import GalleryPostCategory from "../../component/gallerypostcategory/GalleryPostCategory";
import Tags from "../../component/tags/Tags";
import "./SingleNewsPage.css";
import images from "../../constants/images";

const SingleNewsPage = () => {
  return (
    <>
      <PageHero title="Single news" />
      <div className="SingleNewsPage_main">
        <SingleNews />
        <div className="SingleNewsPage_main_side2">
          <div style={{ height: "400px" }}>
            <img
              src={images.demoimg}
              alt="demoimg"
              style={{ height: "100%", width: "100%" }}
            />
          </div>
          <GalleryPostCategory />
          <Tags />
        </div>
      </div>
    </>
  );
};

export default SingleNewsPage;

