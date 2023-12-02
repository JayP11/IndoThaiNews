import React from "react";
import "./HomePgBanner.css";
import images from "../../constants/images";
import { Link } from "react-router-dom";

const HomePgBanner = () => {
  return (
    <div className="HomePgBanner_main">
      <Link to="/singleNewsPage" style={{textDecoration:"none"}} className="HomePgBanner_bigimg_outer">
        <div
          className="HomePgBanner_card_big_main"
          style={{
            backgroundImage: `url(${images.travel_img1})`,
            backgroundSize: "cover",
            height: "382px",
          }}>
          {/* <Link to="/singleNewsPage"  */}
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
              <p> TRAVEL</p>
            </div>
            <div className="HomePgBanner_card_categorydesc_inner">
              <h1>
                Qantas Has U.S.-To-Australia Flights On Sale Right Now Here's
                When To Book By
              </h1>
            </div>
          </div>
        </div>
      </Link>

      <div className="HomePgBanner_4cardimg_outer">
        <div
          className="HomePgBanner_card_big_main"
          style={{
            backgroundImage: `url(${images.travel_img2})`,
            backgroundSize: "cover",
            height: "180px",
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
              <p style={{ fontWeight: "600" }}>
                Qantas Has U.S.-To-Australia Flights On Sale Right Now Here's
                When To Book By
              </p>
            </div>
          </div>
        </div>
        <div className="HomePgBanner_img_outer">
          <div
            className="HomePgBanner_card_big_main"
            style={{
              backgroundImage: `url(${images.business_img1})`,
              backgroundSize: "cover",
              height: "180px",
            }}>
            <div className="HomePgBanner_card_category_main">
              <h3 style={{ color: "var(--color-indianred)" }}>|</h3>
              <p>BUSINESS</p>
            </div>
            <div className="HomePgBanner_card_categorydesc_inner">
              <h3>
                Qantas Has U.S.-To-Australia Flights On Sale Right Now Here's
                When To Book By
              </h3>
            </div>
            {/* <img
            src={images.business_img1}
            alt="business_img1"
            className="HomePgBanner_img_inner"
          /> */}
          </div>
        </div>
        <div className="HomePgBanner_img_outer">
          <div
            className="HomePgBanner_card_big_main"
            style={{
              backgroundImage: `url(${images.sports_img1})`,
              backgroundSize: "cover",
              height: "180px",
            }}>
            <div className="HomePgBanner_card_category_main">
              <h3 style={{ color: "var(--color-indianred)" }}>|</h3>
              <p>BUSINESS</p>
            </div>
            <div className="HomePgBanner_card_categorydesc_inner">
              <h3>
                Qantas Has U.S.-To-Australia Flights On Sale Right Now Here's
                When To Book By
              </h3>
            </div>
            {/* <img
            src={images.sports_img1}
            alt="sports_img1"
            className="HomePgBanner_img_inner"
          /> */}
          </div>
        </div>
        <div className="HomePgBanner_img_outer">
          <div
            className="HomePgBanner_card_big_main"
            style={{
              backgroundImage: `url(${images.lifestyle_img1})`,
              backgroundSize: "cover",
              height: "180px",
            }}>
            <div className="HomePgBanner_card_category_main">
              <h3 style={{ color: "var(--color-indianred)" }}>|</h3>
              <p>LIFESTYLE</p>
            </div>
            <div className="HomePgBanner_card_categorydesc_inner">
              <h3>
                Qantas Has U.S.-To-Australia Flights On Sale Right Now Here's
                When To Book By
              </h3>
            </div>
            {/* <img
            src={images.lifestyle_img1}
            alt="lifestyle_img1"
            className="HomePgBanner_img_inner"
          /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePgBanner;
