import React from "react";
import "./SingleCategory.css";
import Slider from "react-slick";
import images from "../../constants/images";
import { FaClock } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";

const SingleCategory = () => {
  const data = [
    {
      image: require("../../assets/business_img1.webp"),
      title:
        "Working group on small business approves work program, issues a call for papers",
      desc: "The Informal Working Group on Micro, Small and Medium-sized Enterprises (MSMEs) approved on 13 March the Group’s new work program.",
      reporter: "1",
      date: "01 Nov, 2023",
    },
    {
      image: require("../../assets/business_img2.webp"),
      title:
        "The term stock market refers to several exchanges in which shares",
      desc: "The term stock market refers to several exchanges in which shares of publicly held companies are bought and sold.",
      reporter: "2",
      date: "02 Nov, 2023",
    },
    {
      image: require("../../assets/entertainment_img1.webp"),
      title:
        "A matter of Imfact ou didn t find the perfect wallpaper to beautify your desktop",
      desc: "bmw automotive wallpaper and high resolution images. you didn t find the perfect wallpaper to beautify your desktop or homescreen.",
      reporter: "3",
      date: "03 Nov, 2023",
    },
  ];
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
  };
  return (
    <div className="SingleCategory_main">
      <h2>Business</h2>
      <div className="SingleCategory_line_main">
        <div className="SingleCategory_line_inner1"></div>
        <div className="SingleCategory_line_inner2"></div>
      </div>
      <div>
        <Slider {...settings}>
          <div>
            <div className="SingleCategory_slider_img_outer">
              <img
                src={images.business_img1}
                alt="business_img1"
                className="SingleCategory_slider_img_inner"
              />
            </div>
            <div className="SingleCategory_slider_desc_main">
              <h3>Everything You Wanted To Know About Business</h3>
            </div>
            <div className="SingleCategory_reporter_time_main">
              <div className="SingleCategory_Reporter_main">
                <div className="MdAccountCircle_icon_main">
                 <VscAccount />

                </div>
                <div className="">
                  <h5 style={{ color: "var(--color-gray", fontWeight: "500" }}>Reporter 21</h5>
                </div>
              </div>
              <div className="Single_CategoryTime_main">
                <div className="FaClock_icon_main">
                  <FaClock />
                </div>
                <div>
                  <h5 style={{ color: "var(--color-gray", fontWeight: "500" }}>14 Nov, 2021</h5>
                </div>
              </div>
            </div>
            <hr style={{ marginTop: "0.5rem" }} />
          </div>
          <div>
            <div className="SingleCategory_slider_img_outer">
              <img
                src={images.business_img2}
                alt="business_img2"
                className="SingleCategory_slider_img_inner"
              />
            </div>
            <div className="SingleCategory_slider_desc_main">
              <h3>
                The Term Stock Market Refers To Several Exchanges In Which
                Shares
              </h3>
            </div>
            <div className="SingleCategory_reporter_time_main">
              <div className="SingleCategory_Reporter_main">
                <div className="MdAccountCircle_icon_main">
                 <VscAccount />

                </div>
                <div className="">
                  <h5 style={{ color: "var(--color-gray", fontWeight: "500" }}>Reporter 21</h5>
                </div>
              </div>
              <div className="Single_CategoryTime_main">
                <div className="FaClock_icon_main">
                  <FaClock />
                </div>
                <div>
                  <h5 style={{ color: "var(--color-gray", fontWeight: "500" }}>14 Nov, 2021</h5>
                </div>
              </div>
            </div>
            <hr style={{ marginTop: "0.5rem" }} />
          </div>
          <div>
            <div className="SingleCategory_slider_img_outer">
              <img
                src={images.entertainment_img1}
                alt="business_img1"
                className="SingleCategory_slider_img_inner"
              />
            </div>
            <div className="SingleCategory_slider_desc_main">
              <h3>
                A matter of Imfact ou didn t find the perfect wallpaper to
                beautify your desktop
              </h3>
            </div>
            <div className="SingleCategory_reporter_time_main">
              <div className="SingleCategory_Reporter_main">
                <div className="MdAccountCircle_icon_main">
                 <VscAccount />

                </div>
                <div className="">
                  <h5 style={{ color: "var(--color-gray", fontWeight: "500" }}>
                    Reporter 21
                  </h5>
                </div>
              </div>
              <div className="Single_CategoryTime_main">
                <div className="FaClock_icon_main">
                  <FaClock />
                </div>
                <div>
                  <h5 style={{ color: "var(--color-gray", fontWeight: "500" }}>
                    14 Nov, 2021
                  </h5>
                </div>
              </div>
            </div>
            <hr style={{ marginTop: "0.5rem" }} />
          </div>
        </Slider>
      </div>
      {data.map((item) => {
        return (
          <>
            <div style={{ paddingTop: "3rem" }}>
              <div className="SingleCategory_single_card_img__outer">
                <img
                  src={item.image}
                  alt="business_img1"
                  className="SingleCategory_single_card_img_inner"
                />
              </div>
              <div className="SingleCategory_single_card_title_main">
                <h2>{item.title}</h2>
                {/* <h2>
                  Working group on small business approves work program, issues
                  a call for papers
                </h2> */}
              </div>
              <div className="SingleCategory_single_card_desc_main">
                <p>{item.desc}</p>
                {/* <p>
                  The Informal Working Group on Micro, Small and Medium-sized
                  Enterprises (MSMEs) approved on 13 March the Group’s new work
                  program.
                </p> */}
              </div>
              <div className="SingleCategory_reporter_time_main">
                <div className="SingleCategory_Reporter_main">
                  <div className="MdAccountCircle_icon_main">
                   <VscAccount />

                  </div>
                  <div className="">
                    <h5
                      style={{ color: "var(--color-gray", fontWeight: "500" }}>
                      Reporter &nbsp;{item.reporter}
                    </h5>
                    {/* <p>Reporter 21</p> */}
                  </div>
                </div>
                <div className="Single_CategoryTime_main">
                  <div className="FaClock_icon_main">
                    <FaClock />
                  </div>
                  <div>
                    <h5
                      style={{ color: "var(--color-gray", fontWeight: "500" }}>
                      {item.date}
                    </h5>
                    {/* <p>14 Nov, 2021</p> */}
                  </div>
                </div>
              </div>
              <hr style={{ marginTop: "0.5rem" }} />
            </div>
          </>
        );
      })}
    </div>
  );
};

export default SingleCategory;
