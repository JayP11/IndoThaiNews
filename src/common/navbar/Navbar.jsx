import React, { useEffect, useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { IoSearchSharp } from "react-icons/io5";
import { RiCloseFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdLogOut } from "react-icons/io";

import { VscAccount } from "react-icons/vsc";
import ReactModal from "react-modal";

import { useUserContext } from "../../context/user_context";
import { user_login as url } from "../../utils/constants";
import { user_register as urlsignup } from "../../utils/constants";
import axios from "axios";

import { news_categories } from "../../utils/constants";

const Navbar = () => {
  const { isLogin, logoutUser, userid } = useUserContext();
  const [toggleMenu, setToggleMenu] = useState(false);

  const [searchmodalOpen, setsearchmodalOpen] = useState(false);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalIsOpen2, setModalIsOpen2] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [phone, setPhone] = useState("");
  const [signupEmail, setSignupEmail] = useState("");
  const [SignupPassword, setSignupPassword] = useState("");

  const regEx =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regexpMobile = /^[0-9\b]+$/;

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

  const [isNavbarFixed, setIsNavbarFixed] = useState(false);

  const [loading, SetLoading] = useState(false);
  const [categoryData, SetcategoryData] = useState([]);
  const [userData, SetuserData] = useState([]);

  const { setLogin } = useUserContext();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // Set a threshold value for when the navbar should become fixed
      const threshold = 100;

      if (scrollPosition > threshold) {
        setIsNavbarFixed(true);
      } else {
        setIsNavbarFixed(false);
      }
    };
    // Attach the event listener to the scroll event
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const categoriesApi = async () => {
    SetLoading(true);

    axios
      .get(news_categories, {})
      .then((res) => {
        // console.log("categories data", res.data.data);
        if (res.data.success === true) {
          SetLoading(false);
          SetcategoryData(res.data.data.data);
        } else {
          // null;
          SetLoading(false);
        }
      })
      .catch((err) => {
        SetLoading(false);
      });
  };

  useEffect(() => {
    categoriesApi();
  }, []);

  const LogIn = () => {
    if (email === "") {
      Notification("error", "Error!", "Please enter your email ID!");
      return;
    } else if (regEx.test(email) === false) {
      Notification("error", "Error!", "Please enter valid email id!");
      return;
    } else if (password === "") {
      Notification("error", "Error!", "Please enter your password!");
      return;
    }
    var params = {
      email: email,
      password: password,
    };
    setLogin(params, url);
    // setEmail("");
    // setPassword("");
  };

  const mSignUp = () => {
    if (signupEmail === "") {
      Notification("error", "Error!", "Please enter your email ID!");
      return;
    } else if (regEx.test(signupEmail) === false) {
      Notification("error", "Error!", "Please enter valid email id!");
      return;
    } else if (SignupPassword === "") {
      Notification("error", "Error!", "Please enter your password!");
      return;
    } else if (fname === "") {
      Notification("error", "Error!", "Please enter your First name!");
      return;
    } else if (lname === "") {
      Notification("error", "Error!", "Please enter your last name!");
    } else if (phone === "") {
      Notification("error", "Error!", "Please enter your number!");
      return;
    }

    var params = {
      email: signupEmail,
      password: SignupPassword,
      first_name: fname,
      last_name: lname,
      phone: phone,
    };

    setLogin(params, urlsignup);
    // setFname("");
    // setLname("");
    // setPhone("");
    // setSignupEmail("");
    // setSignupPassword("");
  };

  return (
    <div
      className="Navbar_main_outer"
      style={
        isNavbarFixed
          ? { position: "fixed", top: 0, width: "100%", zIndex: 1000 }
          : {}
      }>
      <>
        <div className="Navbar_main">
          <div className="nav_links_main" key={""}>
            <Link to="/" className="link_decor_nav">
              <h3>Home</h3>
            </Link>
            {categoryData.map((item) => {
              return (
                <>
                  <h3 className="link_decor_nav">{item.name}</h3>
                </>
              );
            })}
            <Link to="/Contact" className="link_decor_nav">
              <h3>Contact</h3>
            </Link>
          </div>
          <div className="iconmainnavbar">
            <div className="searchiconnav" onClick={setsearchmodalOpen}>
              <IoSearchSharp />
            </div>

            {isLogin ? null : (
              <div className="accounticonnav" onClick={setModalIsOpen}>
                <VscAccount />
              </div>
            )}
            {isLogin ? (
              <div
                className="logouticonnav"
                onClick={() => {
                  logoutUser();
                }}>
                {/* Hi {item.name} */}
                <IoMdLogOut />
                Logout
              </div>
            ) : null}
          </div>
          {toggleMenu === false ? (
            <GiHamburgerMenu
              className="side_icon"
              onClick={() => setToggleMenu(true)}
            />
          ) : (
            <RiCloseFill
              className="side_icon"
              onClick={() => setToggleMenu(false)}
            />
          )}
        </div>
        {toggleMenu && (
          <div className="sidebar_main_wrapp">
            <div className="sidebar_base_wrapp">
              {categoryData.map((item) => {
                return <h3>{item.name}</h3>;
              })}
            </div>
          </div>
        )}
      </>
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
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
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
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                className="button"
                style={{ width: "100%", margin: "0px" }}
                onClick={() => {
                  LogIn();
                  // setModalIsOpen(" ");
                  setModalIsOpen(false);
                }}>
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
                  onChange={(e) => setFname(e.target.value)}
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
                  onChange={(e) => setLname(e.target.value)}
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
                  onChange={(e) => setPhone(e.target.value)}
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
                  onChange={(e) => setSignupEmail(e.target.value)}
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
                  onChange={(e) => setSignupPassword(e.target.value)}
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
                  onChange={(e) => setSignupPassword(e.target.value)}
                />
              </div>
            </div>
            <div>
              <button
                className="button"
                style={{ width: "100%", margin: "0px" }}
                onClick={() => {
                  mSignUp();
                }}>
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
