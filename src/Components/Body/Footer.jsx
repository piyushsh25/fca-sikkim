import { Link } from "react-router-dom";
import "./Footer.css";
export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer className="footer">
      <div className="footer-left col-md-4 col-sm-6">
        <p className="about">
          <span> About Us</span> We strive to promote fair and ethical business
          practices, protect consumer rights, and ensure access to safe and
          quality products and services .We believe in creating a just and
          equitable society where all individuals have access to fair treatment
          and the ability to make informed purchasing decisions.
        </p>
        <div className="icons">
          <a href="https://www.facebook.com/fcassikkim/">
            <i className="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i className="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <div className="footer-center col-md-4 col-sm-6">
        <div>
          <i className="fa fa-map-marker"></i>
          <p>
            <span> Hospital Dara, Gangtok.</span> Sikkim, India
          </p>
        </div>
        <div>
          <i className="fa fa-phone"></i>
          <p>(+91) 03592 - 295033</p>
        </div>
        <div>
          <i className="fa fa-envelope"></i>
          <p className="email-footer">
            {" "}
            federationconsumersikkim1997@gmail.com
          </p>
        </div>
      </div>
      <div className="footer-right col-md-4 col-sm-6">
        <img
          alt="header-img"
          className="footer-logo"
          src={require("../assets/logo.png")}
        />
        <p className="menu">
          <a href="#"> Home</a> |<Link to="/about">About Us</Link> |
          <a href="#"> Events</a> |<Link to="/leadership">Leadership</Link> |
          <a href="#"> </a>
          <a href="/contact-us"> Contact Us</a>
        </p>
        <p className="name"> FCA SIKKIM &copy; {year}</p>
      </div>
    </footer>
  );
};
