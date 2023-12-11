import React, { useEffect, useState } from "react";
import "./HomePgBanner.css";
import { Link } from "react-router-dom";
import { latest_news } from "../../utils/constants";
import axios from "axios";
import images from "../../constants/images";

// homepagebanner --> latest_news

const HomePgBanner = () => {
  const [readMore, setReadMore] = useState(false);
  const [loading, SetLoading] = useState(false);
  const [latestnews, Setlatestnews] = useState([]);

  const getWishlist = async () => {
    SetLoading(true);

    axios
      .get(latest_news, {})
      .then((res) => {
        // console.log("latest_news data", res.data);
        if (res.data.success === true) {
          SetLoading(false);
          Setlatestnews(res.data.data.data);
          // console.log("wishlist data is", wishlistdata);
        } else {
          // null;
          SetLoading(false);
        }
      })
      .catch((err) => {
        console.log("err", err);
        SetLoading(false);
      });
  };

  useEffect(() => {
    getWishlist();
  }, []);
  return (
    <div className="HomePgBanner_main" key={""}>
      {latestnews.slice(0, 1).map((item) => {
        return (
          <Link
            to="/singleNewsPage"
            style={{ textDecoration: "none" }}
            className="HomePgBanner_bigimg_outer">
            <div
              className="HomePgBanner_card_big_main"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
                height: "382px",
              }}>
              <div
                className=""
                style={{
                  backgroundColor: "rgba(0,0,0,.503)",
                  color: "var(--color-white)",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "1.3rem",
                }}>
                <div className="HomePgBanner_card_category_main">
                  <h3 style={{ color: "var(--color-indianred)" }}>|</h3>
                  <p>{item.news_category}</p>
                </div>
                <div className="HomePgBanner_card_categorydesc_inner">
                  <h2>
                    {/* {item.title} */}
                    {readMore
                      ? item.title
                      : `${item.title.substring(0, 130)}...`}
                  </h2>
                </div>
              </div>
            </div>
          </Link>
        );
      })}

      <div className="HomePgBanner_4cardimg_outer" key={""}>
        {latestnews.slice(1, 5).map((item) => {
          return (
            <div
              className="HomePgBanner_img_outer"
              style={{
                backgroundImage: `url(${item.image})`,
                backgroundSize: "cover",
              }}>
              <div
                className=""
                style={{
                  backgroundColor: "rgba(0,0,0,.503)",
                  color: "var(--color-white)",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "flex-start",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  padding: "1rem",
                }}>
                <div className="HomePgBanner_card_category_main">
                  <h3 style={{ color: "var(--color-indianred)" }}>|</h3>
                  <p>{item.news_category}</p>
                </div>
                <div className="HomePgBanner_card_categorydesc_inner">
                  <p className="HomePgBanner_card_categorydesc_p_inner">
                    {readMore
                      ? item.title
                      : `${item.title.substring(0, 40)}...`}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
        {/* <div
          className="HomePgBanner_img_outer"
          style={{
            backgroundImage: `url(${images.travel_img2})`,
            backgroundSize: "cover",
          }}>
          <div
            className=""
            style={{
              backgroundColor: "rgba(0,0,0,.503)",
              color: "var(--color-white)",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "1rem",
            }}>
            <div className="HomePgBanner_card_category_main">
              <h3 style={{ color: "var(--color-indianred)" }}>|</h3>
              <p> TRAVEL</p>
            </div>
            <div className="HomePgBanner_card_categorydesc_inner">
              <p className="HomePgBanner_card_categorydesc_p_inner">
                Qantas Has U.S.-To-Australia Flights On Sale Right Now Here's
                When To Book By
              </p>
            </div>
          </div>
        </div>
        <div
          className="HomePgBanner_img_outer"
          style={{
            backgroundImage: `url(${images.business_img1})`,
            backgroundSize: "cover",
          }}>
          <div
            className=""
            style={{
              backgroundColor: "rgba(0,0,0,.503)",
              color: "var(--color-white)",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "1rem",
            }}>
            <div className="HomePgBanner_card_category_main">
              <h3 style={{ color: "var(--color-indianred)" }}>|</h3>
              <p>BUSINESS</p>
            </div>
            <div className="HomePgBanner_card_categorydesc_inner">
              <p className="HomePgBanner_card_categorydesc_p_inner">
                Qantas Has U.S.-To-Australia Flights On Sale Right Now Here's
                When To Book By
              </p>
            </div>
          </div>
        </div>
        <div
          className="HomePgBanner_img_outer"
          style={{
            backgroundImage: `url(${images.lifestyle_img1})`,
            backgroundSize: "cover",
          }}>
          <div
            className=""
            style={{
              backgroundColor: "rgba(0,0,0,.503)",
              color: "var(--color-white)",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "1rem",
            }}>
            <div className="HomePgBanner_card_category_main">
              <h3 style={{ color: "var(--color-indianred)" }}>|</h3>
              <p>LIFESTYLE</p>
            </div>
            <div className="HomePgBanner_card_categorydesc_inner">
              <p className="HomePgBanner_card_categorydesc_p_inner">
                Qantas Has U.S.-To-Australia Flights On Sale Right Now Here's
                When To Book By
              </p>
            </div>
          </div>
        </div>
        <div
          className="HomePgBanner_img_outer"
          style={{
            backgroundImage: `url(${images.sports_img1})`,
            backgroundSize: "cover",
          }}>
          <div
            className=""
            style={{
              backgroundColor: "rgba(0,0,0,.503)",
              color: "var(--color-white)",
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "flex-start",
              flexDirection: "column",
              justifyContent: "flex-end",
              padding: "1rem",
            }}>
            <div className="HomePgBanner_card_category_main">
              <h3 style={{ color: "var(--color-indianred)" }}>|</h3>
              <p>SPORTS</p>
            </div>
            <div className="HomePgBanner_card_categorydesc_inner">
              <p className="HomePgBanner_card_categorydesc_p_inner">
                Qantas Has U.S.-To-Australia Flights On Sale Right Now Here's
                When To Book By
              </p>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
};

export default HomePgBanner;
