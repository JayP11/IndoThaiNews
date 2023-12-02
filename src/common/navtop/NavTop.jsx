import React from "react";
import "./NavTop.css";
import images from "../../constants/images";
import { Link } from "react-router-dom";

const NavTop = () => {
  return (
    <div className="NavTop_main">
      <div className="indothai_img_main">
        <Link to="./">
          <img
            src={images.indothai_logo}
            className="indothai_img_inner"
            alt="indothai-logo"
          />
        </Link>
      </div>
      <div>
        <img
          src={images.demonavimg}
          alt="demonavimg"
          style={{ height: "100%", width: "100%" }}
        />
      </div>
    </div>
  );
};

export default NavTop;
