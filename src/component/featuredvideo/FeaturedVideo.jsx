import React from "react";
import "./FeaturedVideo.css";
import images from "../../constants/images";
import { TbBrandYoutubeFilled } from "react-icons/tb";

const FeaturedVideo = () => {
  return (
    <>
      <div className="FeaturedVideo_main">
        <div>
          <h2>FEATURED VIDEO</h2>
        </div>
        <div>
          <iframe
            width="100%"
            height="600"
            src="https://www.youtube.com/embed/3SsK-cxlj_w?si=u_RO9QvjI9VQyPwm"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen></iframe>
        </div>
        <div className="FeaturedVideo_card_main_div_outer">
          <div className="FeaturedVideo_card_main_outer">
            <div
              className=""
              style={{
                backgroundImage: `url(${images.demoimg})`,
                backgroundSize: "cover",
                height: "150px",
                padding: "1rem",
              }}>
              <div className="FeaturedVideo_card_main">
                <div>
                  {" "}
                  <TbBrandYoutubeFilled style={{ fontSize: "30px" }} />
                </div>
                <div className="">
                  <p>
                    Qantas Has U.S.-To-Australia Flights On Sale Right Now
                    Here's When To Book By
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h4>
                Massive glaciers, staggering mountains, plains dotted with wild
                animals: We sure live
              </h4>
            </div>
          </div>
          <div className="FeaturedVideo_card_main_outer">
            <div
              className=""
              style={{
                backgroundImage: `url(${images.business_img1})`,
                backgroundSize: "cover",
                height: "150px",
                padding: "1rem",
              }}>
              <div className="FeaturedVideo_card_main">
                <div>
                  <TbBrandYoutubeFilled style={{ fontSize: "30px" }} />
                </div>
                <div className="">
                  <p>
                    Qantas Has U.S.-To-Australia Flights On Sale Right Now
                    Here's When To Book By
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h4>
                Massive glaciers, staggering mountains, plains dotted with wild
                animals: We sure live
              </h4>
            </div>
          </div>
          <div className="FeaturedVideo_card_main_outer">
            <div
              className=""
              style={{
                backgroundImage: `url(${images.business_img2})`,
                backgroundSize: "cover",
                height: "150px",
                padding: "1rem",
              }}>
              <div className="FeaturedVideo_card_main">
                <div>
                  <TbBrandYoutubeFilled style={{ fontSize: "30px" }} />
                </div>
                <div className="">
                  <p>
                    Qantas Has U.S.-To-Australia Flights On Sale Right Now
                    Here's When To Book By
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h4>
                Massive glaciers, staggering mountains, plains dotted with wild
                animals: We sure live
              </h4>
            </div>
          </div>
          <div className="FeaturedVideo_card_main_outer">
            <div
              className=""
              style={{
                backgroundImage: `url(${images.entertainment_img1})`,
                backgroundSize: "cover",
                height: "150px",
                padding: "1rem",
              }}>
              <div className="FeaturedVideo_card_main">
                <div>
                  <TbBrandYoutubeFilled style={{ fontSize: "30px" }} />
                </div>

                <div className="">
                  <p>
                    Qantas Has U.S.-To-Australia Flights On Sale Right Now
                    Here's When To Book By
                  </p>
                </div>
              </div>
            </div>
            <div>
              <h4>
                Massive glaciers, staggering mountains, plains dotted with wild
                animals: We sure live
              </h4>
            </div>
          </div>
        </div>
      </div>

      <div className="TrendingNews_img_banner_main">
        <img
          src={images.demonavimg}
          alt="demonavimg"
          className="TrendingNews_img_banner_inner"
        />
      </div>
    </>
  );
};

export default FeaturedVideo;
