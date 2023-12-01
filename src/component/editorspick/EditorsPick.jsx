import React from "react";
import "./EditorsPick.css";
import { FaArrowRightLong } from "react-icons/fa6";
import images from "../../constants/images";

const EditorsPick = () => {
  return (
    <div className="EditorsPick_main">
      <div className="EditorsPick_heading_main_div_outer">
        <div className="EditorsPick_heading_main_div">
          <div>
            <h2>EDITOR’S PICKS</h2>
          </div>
          <div className="EditorsPick_heading_inner_div">
            <h4>SHOW ALL</h4>
            <FaArrowRightLong />
          </div>
        </div>
        <div>
          <div
            className="EditorsPick_card_big_main"
            style={{
              backgroundImage: `url(${images.ballon})`,
              backgroundSize: "cover",
              height: "500px",
              width: "100%",
            }}>
            <div className="" style={{ display: "flex", gap: "0.5rem" }}>
              <h5 style={{ color: "var(--color-logo-blue)" }}>|</h5>
              <h5 className="" style={{ textTransform: "uppercase" }}>
                Balloon, large airtight bag filled with hot air
              </h5>
            </div>
            <div>
              <h1 style={{ fontWeight: "600" }}>Super Admin </h1>
            </div>
            {/* <img
            src={images.ballon}
            alt="ballon"
            className="Editors_top_pick_img_inner"
          /> */}
          </div>
        </div>
        <div className="EditorsPick_card_img_outer_main">
          <div className="EditorsPick_card_img_outer">
            <div
              className="EditorsPick_card_img_inner"
              style={{
                backgroundImage: `url(${images.national_img2})`,
                backgroundSize: "cover",
                width: "100%",
              }}>
              <div className="" style={{ display: "flex", gap: "0.5rem" }}>
                <h5 style={{ color: "var(--color-logo-blue)" }}>|</h5>
                <h5 className="" style={{ textTransform: "uppercase" }}>
                  Bond Girls That Can Give 00s A Run For Their Money
                </h5>
              </div>
              <div>
                <h3 style={{ fontWeight: "600" }}>Super Admin </h3>
              </div>
            </div>
            {/* <img
            src={images.national_img2}
            alt="national"
            className="EditorsPick_card_img_inner"
          /> */}
          </div>
          <div className="EditorsPick_card_img_outer">
            <div
              className="EditorsPick_card_img_inner"
              style={{
                backgroundImage: `url(${images.business_img1})`,
                backgroundSize: "cover",
                width: "100%",
              }}>
              <div className="" style={{ display: "flex", gap: "0.5rem" }}>
                <h5 style={{ color: "var(--color-logo-blue)" }}>|</h5>
                <h5 className="" style={{ textTransform: "uppercase" }}>
                  Bondstein Technologies
                </h5>
              </div>
              <div>
                <h3 style={{ fontWeight: "600" }}>Super Admin </h3>
              </div>
            </div>
            {/* <img
            src={images.business_img1}
            alt="national"
            className="EditorsPick_card_img_inner"
          /> */}
          </div>
          <div className="EditorsPick_card_img_outer">
            <div
              className="EditorsPick_card_img_inner"
              style={{
                backgroundImage: `url(${images.lifestyle_img1})`,
                backgroundSize: "cover",
                width: "100%",
              }}>
              <div className="" style={{ display: "flex", gap: "0.5rem" }}>
                <h5 style={{ color: "var(--color-logo-blue)" }}>|</h5>
                <h5 className="" style={{ textTransform: "uppercase" }}>
                  Some Lesser Known Facts About Roman Reigns
                </h5>
              </div>
              <div>
                <h3 style={{ fontWeight: "600" }}>Super Admin </h3>
              </div>
            </div>
            {/* <img
            src={images.lifestyle_img1}
            alt="national"
            className="EditorsPick_card_img_inner"
          /> */}
          </div>
          <div className="EditorsPick_card_img_outer">
            <div
              className="EditorsPick_card_img_inner"
              style={{
                backgroundImage: `url(${images.national_img1})`,
                backgroundSize: "cover",
                width: "100%",
              }}>
              <div className="" style={{ display: "flex", gap: "0.5rem" }}>
                <h5 style={{ color: "var(--color-logo-blue)" }}>|</h5>
                <h5 className="" style={{ textTransform: "uppercase" }}>
                  Craftsmanship Are You Particularly Dealing
                </h5>
              </div>
              <div>
                <h3 style={{ fontWeight: "600" }}>Super Admin </h3>
              </div>
            </div>
            {/* <img
            src={images.national_img1}
            alt="national"
            className="EditorsPick_card_img_inner"
          /> */}
          </div>
        </div>
      </div>
      <div className="EditorsPick_list_main_div_outer">
        <div>
          <h2>FEATURED POSTS</h2>
        </div>
        <div className="EditorsPick_list_card_outer">
          <div className="EditorsPick_list_img_outer">
            <img
              src={images.lifestyle_img1}
              alt="lifestyle_img1"
              className="EditorsPick_list_img_inner"
            />
          </div>
          <div className="EditorsPick_list_desc_inner">
            <h4>
              Look of the Week: Blackpink headline Coachella in Korean hanboks
            </h4>
          </div>
        </div>
        <hr />
        <div className="EditorsPick_list_card_outer">
          <div className="EditorsPick_list_img_outer">
            <img
              src={images.business_img1}
              alt="business_img1"
              className="EditorsPick_list_img_inner"
            />
          </div>
          <div className="EditorsPick_list_desc_inner">
            <h4>
              The seven-member group filmed a music video in the world body’s
              New
            </h4>
          </div>
        </div>
        <hr />
        <div className="EditorsPick_list_card_outer">
          <div className="EditorsPick_list_img_outer">
            <img
              src={images.business_img2}
              alt="business_img2"
              className="EditorsPick_list_img_inner"
            />
          </div>
          <div className="EditorsPick_list_desc_inner">
            <h4>
              The seven-member group filmed a music video in the world body’s
              New
            </h4>
          </div>
        </div>
        <hr />
        <div className="EditorsPick_list_card_outer">
          <div className="EditorsPick_list_img_outer">
            <img
              src={images.entertainment_img1}
              alt="entertainment_img1"
              className="EditorsPick_list_img_inner"
            />
          </div>
          <div className="EditorsPick_list_desc_inner">
            <h4>
              Reating a vision for the future: how technology will revolutionise
            </h4>
          </div>
        </div>
        <hr />
        <div className="EditorsPick_list_card_outer">
          <div className="EditorsPick_list_img_outer">
            <img
              src={images.national_img1}
              alt="national_img1"
              className="EditorsPick_list_img_inner"
            />
          </div>
          <div className="EditorsPick_list_desc_inner">
            <h4>
              The seven-member group filmed a music video in the world body’s
              New
            </h4>
          </div>
        </div>
        <hr />
        <div className="EditorsPick_list_card_outer">
          <div className="EditorsPick_list_img_outer">
            <img
              src={images.national_img2}
              alt="business_img2"
              className="EditorsPick_list_img_inner"
            />
          </div>
          <div className="EditorsPick_list_desc_inner">
            <h4>
              The seven-member group filmed a music video in the world body’s
              New
            </h4>
          </div>
        </div>
        <hr />
        <div className="EditorsPick_list_div_demo_img_outer">
          <img
            src={images.demoimg}
            alt="demoimg"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default EditorsPick;
