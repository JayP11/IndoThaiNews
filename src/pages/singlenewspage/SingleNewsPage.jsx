import React, { useEffect, useState } from "react";
import PageHero from "../../component/pagehero/PageHero";
import SingleNews from "../../component/singlenews/SingleNews";
import GalleryPostCategory from "../../component/gallerypostcategory/GalleryPostCategory";
import Tags from "../../component/tags/Tags";
import "./SingleNewsPage.css";
import images from "../../constants/images";
import { CiSearch } from "react-icons/ci";
import { IoIosArrowForward } from "react-icons/io";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";
import RelatedPosts from "../../component/relatedposts/RelatedPosts";
import axios from "axios";
import { news_categories } from "../../utils/constants";

const SingleNewsPage = () => {
  const [loading, SetLoading] = useState(false);
  const [categoryData, SetcategoryData] = useState([]);
  const CategoriesApi = async () => {
    SetLoading(true);

    axios
      .get(news_categories, {})
      .then((res) => {
        // console.log("categories data", res.data.data);
        if (res.data.success === true) {
          SetLoading(false);
          SetcategoryData(res.data.data.data);
        } else {
          // null;
          SetLoading(false);
        }
      })
      .catch((err) => {
        SetLoading(false);
      });
  };

  useEffect(() => {
    CategoriesApi();
  }, []);

  const data = [
    {
      category: "Business",
    },
    {
      category: "Sports",
    },
    {
      category: "Lifestyle",
    },
    {
      category: "Politics",
    },
    {
      category: "Entertainment",
    },
    {
      category: "Technology",
    },
    {
      category: "National",
    },
    {
      category: "World",
    },
    {
      category: "Travel",
    },
  ];

  const socialicon = [
    {
      category: "Business",
      social_icon: <FaFacebookF />,
    },
    {
      category: "Sports",
      social_icon: <FaTwitter />,
    },
    {
      category: "Lifestyle",
      social_icon: <FaInstagram />,
    },
    {
      category: "Politics",
      social_icon: <FaPinterestP />,
    },
    {
      category: "Entertainment",
      social_icon: <FaYoutube />,
    },
    {
      category: "Technology",
      social_icon: <FaWhatsapp />,
    },
  ];
  return (
    <>
      <PageHero title="Single news" />
      <div className="SingleNewsPage_main">
        <SingleNews />
        <div className="SingleNewsPage_main_side2">
          {/* Search component */}
          <div>
            <div>
              <h2>Search</h2>
            </div>
            <div className="PopularPost_line_main">
              <div className="PopularPost_line_inner1"></div>
              <div className="PopularPost_line_inner2"></div>
            </div>
            <div
              className="singlenewpage_search_main"
              style={{ display: "flex", alignItems: "center" }}>
              <input
                type="text"
                placeholder="Search..."
                style={{ padding: "0.8rem", width: "100%" }}
              />
              <div className="singlenewpage_search_icon">
                <CiSearch />
              </div>
            </div>
          </div>

          {/* Category */}
          <div>
            <div>
              <h2>Category</h2>
            </div>
            <div className="PopularPost_line_main">
              <div className="PopularPost_line_inner1"></div>
              <div className="PopularPost_line_inner2"></div>
            </div>
            <div className="singlenews_category_main">
              {categoryData.map((item) => {
                return (
                  <div className="singlenews_category_inner">
                    <div className="singlenews_IoIosArrowForward_icon">
                      <IoIosArrowForward />
                    </div>
                    <div>
                      <p>{item.name}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* demoimg */}
          <div style={{ height: "400px" }}>
            <img
              src={images.demoimg}
              alt="demoimg"
              style={{ height: "100%", width: "100%" }}
            />
          </div>

          <GalleryPostCategory />
          <Tags />

          {/* Social media */}
          <div>
            <dsiv>
              <h2>Social Media</h2>
            </dsiv>
            <div className="PopularPost_line_main">
              <div className="PopularPost_line_inner1"></div>
              <div className="PopularPost_line_inner2"></div>
            </div>
            <div className="singlenews_social_main">
              {socialicon.map((item) => {
                return (
                  <div className="singlenews_social_inner">
                    {item.social_icon}{" "}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <RelatedPosts />
    </>
  );
};

export default SingleNewsPage;
