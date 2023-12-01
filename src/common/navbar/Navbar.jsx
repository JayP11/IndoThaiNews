import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";


const Navbar = () => {
  return (
    <div className="Navbar_main_outer">
      <div className="Navbar_main">
        <div className="nav_links_main">
          <Link to="/" className="link_decor_nav">
            <h4>Home</h4>
          </Link>
          <Link to="/Business" className="link_decor_nav">
            <h4>Business</h4>
          </Link>
          <Link to="/Sports" className="link_decor_nav">
            <h4>Sports</h4>
          </Link>
          <Link to="/Lifestyle" className="link_decor_nav">
            <h4>Lifestyle</h4>
          </Link>
          <Link to="/Politics" className="link_decor_nav">
            <h4>Politics</h4>
          </Link>
          <Link to="/Entertainment" className="link_decor_nav">
            <h4>Entertainment</h4>
          </Link>
          <Link to="/Technology" className="link_decor_nav">
            <h4>Technology</h4>
          </Link>
          <Link to="/National" className="link_decor_nav">
            <h4>National</h4>
          </Link>
          <Link to="/World" className="link_decor_nav">
            <h4>World</h4>
          </Link>
          <Link to="/Travel" className="link_decor_nav">
            <h4>Travel</h4>
          </Link>
          <Link to="/Contact" className="link_decor_nav">
            <h4>Contact</h4>
          </Link>
        </div>
        <div className="iconmainnavbar">
          <div className="searchiconnav">
            <CiSearch />
          </div>
          <div className="accounticonnav">
           <VscAccount />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
