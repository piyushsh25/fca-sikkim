import { Button } from "react-bootstrap"
import "./BodyIntro.css"
export const BodyIntro = () => {
    return <section className="intro-body-container">
        <div className="intro-section-1">
            <h1 className="intro-header">Federation of Consumer Association Sikkim</h1>
            <div className="intro-description">The organization, established in 1997, is a non-profit, non-governmental, and voluntary association.</div>

            <Button variant="warning" className='navbar-cta-button intro-body-cta-button'>FCAS</Button>
        </div>
        <div className="image-container">
            <div className="intro-img">
                <img src={require("../assets/fca_img1.jpg")} alt="image1" />
            </div>
            <div className="intro-img">
                <img src={require("../assets/fca_img2.jpg")} alt="image1" />
            </div>
            <div className="intro-img">
                <img src={require("../assets/fca_img3.jpg")} alt="image1" />
            </div>
            <div className="intro-img">
                <img src={require("../assets/fca_img4.jpg")} alt="image1" />
            </div>

        </div>
    </section>
}