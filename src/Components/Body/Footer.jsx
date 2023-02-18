import { Link } from "react-router-dom";
import "./Footer.css";
export const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <footer class="footer">
      <div class="footer-left col-md-4 col-sm-6">
        <p class="about">
          <span> About Us</span> We strive to promote fair and ethical business
          practices, protect consumer rights, and ensure access to safe and
          quality products and services .We believe in creating a just and
          equitable society where all individuals have access to fair treatment
          and the ability to make informed purchasing decisions.
        </p>
        <div class="icons">
          <a href="#">
            <i class="fa fa-facebook"></i>
          </a>
          <a href="#">
            <i class="fa fa-twitter"></i>
          </a>
          <a href="#">
            <i class="fa fa-linkedin"></i>
          </a>
          <a href="#">
            <i class="fa fa-instagram"></i>
          </a>
        </div>
      </div>
      <div class="footer-center col-md-4 col-sm-6">
        <div>
          <i class="fa fa-map-marker"></i>
          <p>
            <span> Deorali, Gangtok.</span> Sikkim, India
          </p>
        </div>
        <div>
          <i class="fa fa-phone"></i>
          <p> (+91) 6294324463</p>
        </div>
        <div>
          <i class="fa fa-envelope"></i>
          <p> office@fca.com</p>
        </div>
      </div>
      <div class="footer-right col-md-4 col-sm-6">
        <img
          alt="header-img"
          className="footer-logo"
          src={require("../assets/logo192.jpg")}
        />
        <p class="menu">
          <a href="#"> Home</a> |<Link to="/about">About</Link> |
          <a href="#"> Services</a> |<a href="#"> Portfolio</a> |
          <a href="#"> News</a> |<a href="#"> Contact</a>
        </p>
        <p class="name"> FCA SIKKIM &copy; {year}</p>
      </div>
    </footer>
  );
};
