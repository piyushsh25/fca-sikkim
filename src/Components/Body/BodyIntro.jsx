import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./BodyIntro.css";
export const BodyIntro = () => {
  return (
    <section className="intro-body-container">
      <div className="intro-section-1">
        <h1 className="intro-header">
          Federation of Consumer Association Sikkim
        </h1>
        <div className="intro-description">
          The organization, established in 1997, is a non-profit,
          non-governmental, and voluntary association.
        </div>
        <Link to="/contact-us">
          <Button
            variant="warning"
            className="navbar-cta-button intro-body-cta-button"
          >
            CONTACT US
          </Button>
        </Link>
      </div>
      <div className="image-container">
        <div className="intro-img">
          <img src={require("../assets/1.jpg")} alt="image1" />
        </div>
        <div className="intro-img">
          <img src={require("../assets/2.jpg")} alt="image1" />
        </div>
        <div className="intro-img">
          <img src={require("../assets/3.jpg")} alt="image1" />
        </div>
        <div className="intro-img">
          <img src={require("../assets/4.jpg")} alt="image1" />
        </div>
      </div>  
    </section>
  );
};
