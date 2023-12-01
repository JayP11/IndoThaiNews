import React from "react";
import "./SingleNews.css";
import images from "../../constants/images";
import { VscAccount } from "react-icons/vsc";
import { FaClock, FaFacebookF, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingleNews = () => {
  return (
    <div className="SingleNews_main">
      <div>
        <h2>
          A Matter Of Imfact Ou Didn T Find The Perfect Wallpaper To Beautify
          Your Desktop
        </h2>
      </div>
      <div className="SingleNews_img_outer">
        <img
          src={images.business_img1}
          alt="business_img1"
          className="SingleNews_img_inner"
        />
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
      <div>
        <img
          src={images.demonavimg}
          alt="demonavimg"
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      <hr style={{ margin: "2rem 0" }} />
      <div>
        <p>
          CNBC’s Jim Cramer on Tuesday warned investors against buying
          unprofitable stocks due to unwarranted optimism about the stock
          market.
        </p>
        <br />
        <p>
          “While I appreciate hope as a mindset, I’m not as confident as a lot
          of the buyers who are paying up. ... We are seeing a level of
          enthusiasm here that to me feels unjustified. We shouldn’t be going
          back to a mentality where we like all stocks because so many of them
          will miss their numbers and still others will hit us with negative
          forecasts,” the “Mad Money” host said.
        </p>
        <br />
        <p>
          “Right now, we need to bow down to the Fed and the forces of
          inflation. Anything that brings down inflation, including tough
          statements from [Fed Chair] Jay Powell, will make big institutional
          money managers more likely to buy stocks rather than sell them. For
          the moment, that’s what controls the stock market,” added Cramer, who
          defended Powell against critics on Monday.
        </p>
        <br />
        <p>
          Cramer’s comments come a day after the Fed Chair Jerome Powell vowed
          to take aggressive action against inflation, including possibly
          implementing half-basis point interest increases, a week after
          instituting the first rate hike in over three years.
        </p>
        <br />
        <p>
          Cramer’s comments come a day after the Fed Chair Jerome Powell vowed
          to take aggressive action against inflation, including possibly
          implementing half-basis point interest increases, a week after
          instituting the first rate hike in over three years.
        </p>
        <br />
        <p>
          Cramer, who has touted a strategy of investing in profitable companies
          for months, also advised investors to refrain from picking up
          uninvestable stocks like floundering IPOs and SPACs.
        </p>
        <br />
        <p>
          “Tons of those stocks just aren’t worth much, regardless of whether
          Powell steers us into a soft landing or a hard landing,” he said.
        </p>
      </div>
      <div>
        <img
          src={images.demonavimg}
          alt="demonavimg"
          style={{ height: "100%", width: "100%" }}
        />
      </div>
      <div className="SingleNews_sharenow_main">
        <div>
          <h4>Share Now</h4>
        </div>
        <div className="SingleNews_social_main">
          <div className="singlenews_FaFacebookF_icon">
            <Link to="https://www.facebook.com/indothainewss">
              <FaFacebookF className="" style={{ color: "white" }} />
            </Link>
          </div>
          <div className="singlenews_FaTwitter_icon">
            <Link to="https://twitter.com/indothainewss">
              <FaTwitter className="" style={{ color: "white" }} />
            </Link>
          </div>
          <div className="singlenews_FaWhatsapp_icon">
            <Link to="http://api.whatsapp.com/send?phone=66909752204&text=Let%27s%20Get%20in%20Touch">
              <FaWhatsapp className="" style={{ color: "white" }} />
            </Link>
          </div>
        </div>
      </div>
      <hr style={{ marginBottom: "1rem" }} />
      <div>
        <div>
          <div>
            <h4>Leave a Reply</h4>
          </div>
          <div style={{ marginTop: "1rem" }}>
            <p style={{ color: "gray" }}>
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>
          <div>
            <div style={{ display: "flex", gap: "1rem", marginTop: "1.5rem" }}>
              <div style={{ width: "100%" }}>
                <input type="text" placeholder="Your Name" className="c-txt" />
              </div>
              <div style={{ width: "100%" }}>
                <input type="text" placeholder="Your Email" className="c-txt" />
              </div>
            </div>
            <div style={{ marginTop: "1rem" }}>
              <textarea
                placeholder="Please leave message here..."
                className="c-msg-txt"></textarea>
            </div>
            <div>
              <button className="button">Post Comment</button>
            </div>
          </div>
        </div>
      </div>
      <div className="single_news_feedback_main">
        <div className="accounticonnav">
          <VscAccount />
        </div>
        <div>
          <h4>Prince Mahmud</h4>
          <div>
            <p style={{ color: "var(--color-gray)", paddingTop: "0.4rem" }}>
              wow awesome
            </p>
          </div>
        </div>
      </div>
      <hr />
      <div className="single_news_feedback_main">
        <div className="accounticonnav">
          <VscAccount />
        </div>
        <div>
          <h4>Faysal Ahmed</h4>
          <div>
            <p style={{ color: "var(--color-gray)", paddingTop: "0.4rem" }}>
              Hello
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleNews;
