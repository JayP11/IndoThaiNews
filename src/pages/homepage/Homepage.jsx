import React from "react";
import HomePgBanner from "../../component/homepgbanner/HomePgBanner";
import TrendingNews from "../../component/trendingnews/TrendingNews";
import WeeklyReviewHome from "../../component/weeklyreviewhome/WeeklyReviewHome";
import EditorsPick from "../../component/editorspick/EditorsPick";
import FeaturedVideo from "../../component/featuredvideo/FeaturedVideo";
import AllCategoryHome from "../../component/allcategoryhome/AllCategoryHome";

const Homepage = () => {
  return (
    <div>
      <HomePgBanner />
      <TrendingNews />
      <WeeklyReviewHome />
      <EditorsPick />
      <FeaturedVideo />
      <AllCategoryHome />
    </div>
  );
};

export default Homepage;
