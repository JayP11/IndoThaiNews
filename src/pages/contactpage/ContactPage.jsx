import React from "react";
import "./ContactPage.css";
import { Link } from "react-router-dom";

const ContactPage = () => {
  return (
    <div className="">
      <div
        className="contactinfomain"
        style={{
          margin: "0 auto",
          maxWidth: "1140px",
          display: "flex",
          //   flexDirection: "column",
          justifyContent: "space-between",
          gap: "0.5rem",
          paddingBottom: "3rem",
        }}>
        <div
          className=""
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            maxWidth: "300px",
          }}>
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

        <div
          className=""
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            maxWidth: "250px",
          }}>
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
          className=""
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            maxWidth: "300px",
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
        <div
          className=""
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.5rem",
            maxWidth: "300px",
          }}>
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
    </div>
  );
};

export default ContactPage;
