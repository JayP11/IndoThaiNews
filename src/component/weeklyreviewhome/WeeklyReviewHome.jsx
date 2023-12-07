import React, { useEffect, useState } from "react";
import "./WeeklyReviewHome.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { popular_news_all } from "../../utils/constants";
import axios from "axios";

// weekly ---> Popular news

const WeeklyReviewHome = () => {
  const [readMore, setReadMore] = useState(false);

  const [loading, SetLoading] = useState(false);
  const [popularNewsData, SetpopularNewsData] = useState([]);

  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1140,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 510,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const popularNewsApi = async () => {
    SetLoading(true);

    axios
      .get(popular_news_all, {})
      .then((res) => {
        // console.log("popular news data", res.data);
        if (res.data.success === true) {
          SetLoading(false);
          SetpopularNewsData(res.data.data.data);
        } else {
          // null;
          SetLoading(false);
        }
      })
      .catch((err) => {
        // console.log("err", err);
        SetLoading(false);
      });
  };

  useEffect(() => {
    popularNewsApi();
  }, []);

  return (
    <div className="WeeklyReviewHome_main_outer">
      <div className="WeeklyReviewHome_main">
        <div>
          <h2>POPULAR NEWS</h2>
        </div>
        <div>
          <Slider {...settings}>
            {popularNewsData.map((item) => {
              return (
                <div className="center">
                  <div className="WeeklyReviewHome_slider_card_main">
                    <div className="WeeklyReviewHome_card_imgs_outer">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="WeeklyReviewHome_card_imgs_inner"
                      />
                    </div>
                    <div className="WeeklyReviewHome_dtandtime">
                      <div>
                        <h5>{item.date}</h5>
                      </div>
                      <div>
                        {/* <h5 className="">2 MIN TO READ</h5> */}
                        <h5 className="">{item.news_category}</h5>
                      </div>
                    </div>
                    <div className="WeeklyReviewHome_card_desc_main">
                      <h3>
                        {/* {item.title} */}
                        {readMore
                          ? item.title
                          : `${item.title.substring(0, 40)}...`}
                      </h3>
                    </div>
                  </div>
                </div>
              );
            })}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WeeklyReviewHome;
