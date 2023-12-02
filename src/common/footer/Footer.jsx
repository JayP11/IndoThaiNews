import React from "react";
import "./Footer.css";
import images from "../../constants/images";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterestP,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="Footer_main_outer">
      <div className="Footer_main">
        <div className="Footer_img_outer_logo">
          <img
            src={images.indothai_logo}
            alt="indothai_logo"
            className="Footer_img_inner_logo"
          />
        </div>
        <hr style={{ width: "100%" }} />
        <div className="Footer_main_social">
          <Link to="https://www.facebook.com/indothainewss">
            <FaFacebookF className="Footer_main_facebook_social" />
          </Link>
          <Link to="https://twitter.com/indothainewss">
            <FaTwitter className="Footer_main_twitter_social" />
          </Link>
          <Link to="https://www.instagram.com/indothainewss">
            <FaInstagram className="Footer_main_insta_social" />
          </Link>
          <Link to="https://in.pinterest.com/IndoThaiLifestyle/">
            <FaPinterestP className="Footer_main_pinterest_social" />
          </Link>
          <Link to="https://www.youtube.com/channel/UCoThqpGj-T7DoAb9WAE_w1A">
            <FaYoutube className="Footer_main_youtube_social" />
          </Link>
          <Link to="http://api.whatsapp.com/send?phone=66909752204&text=Let%27s%20Get%20in%20Touch">
            <FaWhatsapp className="Footer_main_whatsapp_social" />
          </Link>
        </div>
        <hr style={{ width: "100%" }} />

        <div className="Footer_main_copyright">
          <p>© Copyright 2023 All rights reserved.</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
