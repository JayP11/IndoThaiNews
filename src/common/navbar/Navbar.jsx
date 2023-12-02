import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { IoSearchOutline } from "react-icons/io5";
import { IoSearchSharp } from "react-icons/io5";
 
import { VscAccount } from "react-icons/vsc";
import ReactModal from "react-modal";

const Navbar = () => {
  const [searchmodalOpen, setsearchmodalOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      padding: "0px",
      backgroundColor: "none",
      border: "none",
      borderRadius: "5px",
    },
    overlay: {
      zIndex: 1000,
      backgroundColor: "rgba(0, 0, 0, 0.3)",
    },
  };

  return (
    <div className="Navbar_main_outer">
      <div className="Navbar_main">
        <div className="nav_links_main">
          <Link to="/" className="link_decor_nav">
            <h3>Home</h3>
          </Link>
          <Link to="/CategoryNewsPage" className="link_decor_nav">
            <h3>Business</h3>
          </Link>
          <Link to="/Sports" className="link_decor_nav">
            <h3 style={{}}>Sports</h3>
          </Link>
          <Link to="/Lifestyle" className="link_decor_nav">
            <h3>Lifestyle</h3>
          </Link>
          <Link to="/Politics" className="link_decor_nav">
            <h3>Politics</h3>
          </Link>
          <Link to="/Entertainment" className="link_decor_nav">
            <h3>Entertainment</h3>
          </Link>
          <Link to="/Technology" className="link_decor_nav">
            <h3>Technology</h3>
          </Link>
          <Link to="/National" className="link_decor_nav">
            <h3>National</h3>
          </Link>
          <Link to="/World" className="link_decor_nav">
            <h3>World</h3>
          </Link>
          <Link to="/Travel" className="link_decor_nav">
            <h3>Travel</h3>
          </Link>
          <Link to="/Contact" className="link_decor_nav">
            <h3>Contact</h3>
          </Link>
        </div>
        <div className="iconmainnavbar">
          <div className="searchiconnav" onClick={setsearchmodalOpen}>
            {/* <CiSearch /> */}
            {/* <IoSearchOutline /> */}
            <IoSearchSharp />
          </div>
          <div
            className="accounticonnav"
            onClick={setModalIsOpen}>
            <VscAccount />
          </div>
        </div>
      </div>

      <ReactModal
        isOpen={searchmodalOpen}
        onRequestClose={() => {
          setsearchmodalOpen(false);
        }}
        style={customStyles}>
        <>
          <div className="model_sizing">
            <div>
              <div>
                <input
                  type="text"
                  placeholder="Search"
                  className="navbar_modal_input_inner"
                />
              </div>
            </div>

            <div>
              <button
                className="button"
                style={{ width: "100%", margin: "0px" }}>
                Search...
              </button>
            </div>
          </div>
        </>
      </ReactModal>
      <ReactModal
        isOpen={modalIsOpen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
        style={customStyles}>
        <>
          <div className="navbar_modal_signin_head">
            <h3>Sign In</h3>
          </div>
          <div className="model_sizing">
            <div>
              <div>
                <label>Email</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Your E-mail"
                  className="navbar_modal_input_inner"
                />
              </div>
            </div>
            <div>
              <div>
                <label>Password</label>
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="navbar_modal_input_inner"
                />
              </div>
            </div>
            <div>
              <button
                className="button"
                style={{ width: "100%", margin: "0px" }}>
                SIGN IN
              </button>
            </div>
            <div className="navbar_modal_signuplink_main">
              <p>Don't have an account?</p>
              <Link
                to=""
                className="navbar_modal_signuplink_inner"
                onClick={() => {
                  setModalIsOpen(false);
                  setModalIsOpen2(true);
                }}>
                Sign up
              </Link>
            </div>
          </div>
        </>
      </ReactModal>
      <ReactModal
        isOpen={modalIsOpen2}
        onRequestClose={() => {
          setModalIsOpen2(false);
        }}
        style={customStyles}>
        <>
          <div className="navbar_modal_signup_head">
            <h3>Create your Account</h3>
          </div>
          <div className="model_sizing">
            <div>
              <div>
                <label>First Name</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="First Name"
                  className="navbar_modal_input_inner"
                />
              </div>
            </div>
            <div>
              <div>
                <label>Last Name</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Last Name"
                  className="navbar_modal_input_inner"
                />
              </div>
            </div>
            <div>
              <div>
                <label>Phone</label>
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Phone"
                  className="navbar_modal_input_inner"
                />
              </div>
            </div>
            <div>
              <div>
                <label>Email</label>
              </div>
              <div>
                <input
                  type="email"
                  placeholder="E-mail"
                  className="navbar_modal_input_inner"
                />
              </div>
            </div>
            <div>
              <div>
                <label>Password</label>
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="navbar_modal_input_inner"
                />
              </div>
            </div>
            <div>
              <div>
                <label>ConfirmPassword</label>
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="navbar_modal_input_inner"
                />
              </div>
            </div>
            <div>
              <button
                className="button"
                style={{ width: "100%", margin: "0px" }}>
                SIGN UP
              </button>
            </div>
            <div className="navbar_modal_signuplink_main">
              <p>Already member?</p>
              <Link
                to=""
                className="navbar_modal_signuplink_inner"
                onClick={() => {
                  setModalIsOpen2(false);
                  setModalIsOpen(true);
                }}>
                Sign in here
              </Link>
            </div>
          </div>
        </>
      </ReactModal>
    </div>
  );
};

export default Navbar;
