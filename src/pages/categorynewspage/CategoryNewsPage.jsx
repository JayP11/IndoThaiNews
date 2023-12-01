import React from "react";
import "./CategoryNewsPage.css";
import PageHero from "../../component/pagehero/PageHero";
import SingleCategory from "../../component/singlecategory/SingleCategory";
import PopularPost from "../../component/popularpost/PopularPost";
import GalleryPostCategory from "../../component/gallerypostcategory/GalleryPostCategory";
import RecentPost from "../../component/recentpost/RecentPost";
import Tags from "../../component/tags/Tags";

const CategoryNewsPage = () => {
  return (
    <>
      <PageHero title="Category News" />
      <div className="CategoryNewsPage_main">
        <SingleCategory />

        <div className="CategoryNewsPage_side2">
          <PopularPost />
          <GalleryPostCategory />
          <RecentPost />
          <Tags/>
        </div>
      </div>
    </>
  );
};

export default CategoryNewsPage;
