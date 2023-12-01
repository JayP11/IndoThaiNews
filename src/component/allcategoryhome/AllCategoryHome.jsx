import React from "react";
import "./AllCategoryHome.css";
// import images from "../../constants/images";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

const AllCategoryHome = () => {
  const data = [
    {
      id: 1,
      category: "ENTERTAINMENT",
      image: require("../../assets/entertainment_img1.webp"),
      desc: "Look of the Week: Blackpink headline Coachella in Korean hanboks",
      list: [
        {
          id: 1,
          list_img: require("../../assets/travel_img1.webp"),
          list_img2: require("../../assets/travel_img2.webp"),
          list_img3: require("../../assets/business_img1.webp"),
          list_desc:
            "Look of the Week: Blackpink headline Coachella in Korean hanboks",
        },
      ],
    },
    {
      id: 2,
      category: "LIFESTYLE",
      image: require("../../assets/lifestyle_img1.webp"),
      desc: "Look of the Week: Blackpink headline Coachella in Korean hanboks",
      list: [
        {
          id: 1,
          list_img: require("../../assets/sports_img1.webp"),
          list_img2: require("../../assets/national_img1.webp"),
          list_img3: require("../../assets/entertainment_img1.webp"),
          list_desc:
            "Look of the Week: Blackpink headline Coachella in Korean hanboks",
        },
      ],
    },
    {
      id: 3,
      category: "POLITICS",
      image: require("../../assets/national_img1.webp"),
      desc: "Look of the Week: Blackpink headline Coachella in Korean hanboks",
      list: [
        {
          id: 1,
          list_img: require("../../assets/lifestyle_img1.webp"),
          list_img2: require("../../assets/national_img2.webp"),
          list_img3: require("../../assets/business_img2.webp"),
          list_desc:
            "Look of the Week: Blackpink headline Coachella in Korean hanboks",
        },
      ],
    },
    {
      id: 4,
      category: "ENTERTAINMENT",
      image: require("../../assets/ballon.webp"),
      desc: "Look of the Week: Blackpink headline Coachella in Korean hanboks",
      list: [
        {
          id: 1,
          list_img: require("../../assets/demoimg.webp"),
          list_img2: require("../../assets/lifestyle_img1.webp"),
          list_img3: require("../../assets/lifestyle_img1.webp"),
          list_desc:
            "Look of the Week: Blackpink headline Coachella in Korean hanboks",
        },
      ],
    },
    {
      id: 5,
      category: "LIFESTYLE",
      image: require("../../assets/lifestyle_img1.webp"),
      desc: "Look of the Week: Blackpink headline Coachella in Korean hanboks",
      list: [
        {
          id: 1,
          list_img: require("../../assets/lifestyle_img1.webp"),
          list_img2: require("../../assets/lifestyle_img1.webp"),
          list_img3: require("../../assets/lifestyle_img1.webp"),
          list_desc:
            "Look of the Week: Blackpink headline Coachella in Korean hanboks",
        },
      ],
    },
    {
      id: 6,
      category: "POLITICS",
      image: require("../../assets/national_img1.webp"),
      desc: "Look of the Week: Blackpink headline Coachella in Korean hanboks",
      list: [
        {
          id: 1,
          list_img: require("../../assets/lifestyle_img1.webp"),
          list_img2: require("../../assets/lifestyle_img1.webp"),
          list_img3: require("../../assets/lifestyle_img1.webp"),
          list_desc:
            "Look of the Week: Blackpink headline Coachella in Korean hanboks",
        },
      ],
    },
    {
      id: 7,
      category: "ENTERTAINMENT",
      image: require("../../assets/entertainment_img1.webp"),
      desc: "Look of the Week: Blackpink headline Coachella in Korean hanboks",
      list: [
        {
          id: 1,
          list_img: require("../../assets/lifestyle_img1.webp"),
          list_img2: require("../../assets/lifestyle_img1.webp"),
          list_img3: require("../../assets/lifestyle_img1.webp"),
          list_desc:
            "Look of the Week: Blackpink headline Coachella in Korean hanboks",
        },
      ],
    },
    {
      id: 8,
      category: "LIFESTYLE",
      image: require("../../assets/lifestyle_img1.webp"),
      desc: "Look of the Week: Blackpink headline Coachella in Korean hanboks",
      list: [
        {
          id: 1,
          list_img: require("../../assets/lifestyle_img1.webp"),
          list_img2: require("../../assets/lifestyle_img1.webp"),
          list_img3: require("../../assets/lifestyle_img1.webp"),
          list_desc:
            "Look of the Week: Blackpink headline Coachella in Korean hanboks",
        },
      ],
    },
    {
      id: 9,
      category: "POLITICS",
      image: require("../../assets/national_img1.webp"),
      desc: "Look of the Week: Blackpink headline Coachella in Korean hanboks",
      list: [
        {
          id: 1,
          list_img: require("../../assets/lifestyle_img1.webp"),
          list_img2: require("../../assets/lifestyle_img1.webp"),
          list_img3: require("../../assets/lifestyle_img1.webp"),
          list_desc:
            "Look of the Week: Blackpink headline Coachella in Korean hanboks",
        },
      ],
    },
  ];
  return (
    <div className="AllCategoryHome_main">
      {/* <div className=""> */}
      {data.map((item) => {
        return (
          <>
            {/* <h2>{item.category}</h2> */}
            <div className="Allcategory_card_content_main">
              <div className="Allcategory_heading_outer_div">
                <div>
                  <h2>{item.category}</h2>
                </div>
                <div className="Allcategory_showall_outer_div">
                  <Link to="/CategoryNewsPage" className="Allcategory_showall_inner_div">
                    <h4>SHOW ALL</h4>
                    <FaArrowRightLong />
                  </Link>
                </div>
              </div>
              {/* <div>
                  <h3>
                    Reating a vision for the future: how technology will
                    revolutionise the business finance function{" "}
                  </h3>
                </div> */}
              <div className="Allcategory_card_img_outer">
                <img
                  src={item.image}
                  alt="lifestyle_img1"
                  className="Allcategory_card_img_inner"
                />
              </div>
              <div className="">
                <h3>{item.desc}</h3>
                <hr style={{ margin: "1rem 0" }} />
              </div>
              {item.list.map((ite) => {
                return (
                  <div className="AllCategory_list_card_main">
                    <div className="AllCategory_list_card_outer">
                      <div className="AllCategory_list_img_outer">
                        <img
                          src={ite.list_img}
                          alt="lifestyle_img1"
                          className="AllCategory_list_img_inner"
                        />
                      </div>
                      <div className="AllCategory_list_desc_inner">
                        <h4>{ite.list_desc}</h4>
                      </div>
                    </div>
                    <hr />
                    <div className="AllCategory_list_card_outer">
                      <div className="AllCategory_list_img_outer">
                        <img
                          src={ite.list_img2}
                          alt="business_img1"
                          className="AllCategory_list_img_inner"
                        />
                      </div>
                      <div className="AllCategory_list_desc_inner">
                        <h4>{ite.list_desc}</h4>
                      </div>
                    </div>
                    <hr />
                    <div className="AllCategory_list_card_outer">
                      <div className="AllCategory_list_img_outer">
                        <img
                          src={ite.list_img3}
                          alt="business_img2"
                          className="AllCategory_list_img_inner"
                        />
                      </div>
                      <div className="AllCategory_list_desc_inner">
                        <h4>{ite.list_desc}</h4>
                      </div>
                    </div>
                    <hr />
                  </div>
                );
              })}
            </div>
          </>
        );
      })}
      {/* </div> */}
    </div>
  );
};

export default AllCategoryHome;
