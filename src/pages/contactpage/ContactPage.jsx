import React, { useState } from "react";
import "./ContactPage.css";
import { Link } from "react-router-dom";
import axios from "axios";
import Notification from "../../utils/Notification";
import { contact_us } from "../../utils/constants";

const ContactPage = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [website, setwebsite] = useState("");
  const [message, setmessage] = useState("");

  const contactApi = async () => {
    const regEx =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const regexpMobile = /^[0-9\b]+$/;

    if (name == "") {
      Notification("error", "Error!", "Please enter your Name!");
      return;
    } else if (email == "") {
      Notification("error", "Error!", "Please enter your Email Address!");
      return;
    } else if (regEx.test(email) == false) {
      Notification("error", "Error!", "Please enter valid email id!");
      return;
    } else if (website == "") {
      Notification("error", "Error!", "Please enter your Website!");
      return;
    } else if (message == "") {
      Notification("error", "Error!", "Please enter some message!");
      return;
    } else {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("website", website);
      formData.append("message", message);
      console.log("formData contact us ", formData);

      const response = await axios
        .post(contact_us, formData, {
          // headers: {
          //   Accept: "application/x.kingskraft.v1+json",
          // },
        })
        .catch((error) => console.error(`Error: ${error}`));
      // console.log("response contact us ", response.data);

      if (response.data.success === true) {
        setname("");
        setemail("");
        setmessage("");
        setwebsite("");

        Notification(
          "success",
          "Success!",
          "form has been successfully submitted"
        );
        return;
      } else {
        Notification("error", "Error!", "please enter valid data!");
        return;
      }
    }
  };
  return (
    <div className="">
      <div className="contactinfomain">
        <div className="contactinfomain_getintouch">
          <div>
            <h2>Get in touch</h2>
          </div>
          <div className="line"></div>
          <div>
            <p>
              Visit our agency or simply send us an email anytime you want. If
              you have any questions, please feel free.
            </p>
          </div>
        </div>
        <div className="contactinfomain_Address">
          <div>
            <h2>Address</h2>
          </div>
          <div className="line"></div>
          <div>
            <p>
              1108, Sukhumvit 101/1, Phra Khanong, Bang Chak, Bangkok, Thailand
              – 10260
            </p>
          </div>
        </div>
        <div
          className="contactinfomain_Phone"
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            minWidth: "270px",
          }}>
          <div>
            <h2>Phone</h2>
          </div>
          <div className="line"></div>
          <div>
            <Link
              to="tel:66909752204"
              style={{ color: "var(--color-black", textDecoration: "none" }}>
              +66 90-975-2204
            </Link>
          </div>
        </div>
        <div className="contactinfomain_Email">
          <div>
            <h2>Email</h2>
          </div>
          <div className="line"></div>
          <div>
            <Link
              to="info@indothainews.com"
              className=""
              style={{ color: "var(--color-black", textDecoration: "none" }}>
              info@indothainews.com
            </Link>
            <br />
            <Link
              to="editor@indothainews.com"
              className=""
              style={{ color: "var(--color-black", textDecoration: "none" }}>
              editor@indothainews.com
            </Link>
          </div>
        </div>
      </div>
      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.553761571036!2d100.62726099999999!3d13.684876699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x311d600763ab04cf%3A0x2982f63e182b4e85!2s1108%20Thanon%20Sukhumvit%20101%2F1%2C%20Khwaeng%20Bang%20Chak%2C%20Khet%20Phra%20Khanong%2C%20Krung%20Thep%20Maha%20Nakhon%2010260%2C%20Thailand!5e0!3m2!1sen!2sin!4v1701365018380!5m2!1sen!2sin"
          width="100%"
          height="600"
          title="indothai"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
      <div className="contactpage_form_main">
        <div className="contactpage_form_inner">
          <input
            type="text"
            placeholder="Name"
            onChange={(e) => {
              setname(e.target.value);
            }}
            className="contactpage_form_text_inner"
          />
          <input
            type="email"
            placeholder="E-mail"
            onChange={(e) => {
              setemail(e.target.value);
            }}
            className="contactpage_form_text_inner"
          />

          <input
            type="text"
            placeholder="Website"
            onChange={(e) => {
              setwebsite(e.target.value);
            }}
            className="contactpage_form_text_inner"
          />
        </div>
        <div className="contactpage_form_textarea_main">
          <textarea
            className="contactpage_form_textarea_inner"
            onChange={(e) => {
              setmessage(e.target.value);
            }}></textarea>
        </div>
        <div>
          <button className="button" onClick={() => contactApi()}>
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
