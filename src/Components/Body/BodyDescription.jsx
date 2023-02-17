import "./BodyDescription.css"
export const BodyDescription = () => {
    const about = [
        {
            title: "Who we are?",
            description: "We are a dedicated group committed to empowering and protecting consumers through advocacy and education."
        },
        {
            title: "What we do?",
            description: "We strive to promote fair and ethical business practices, protect consumer rights, and ensure access to safe and quality products and services."
        },
        {
            title: "Why we do it?",
            description: "We believe in creating a just and equitable society where all individuals have access to fair treatment and the ability to make informed purchasing decisions."
        }
    ]
    return <section className="body-description-container">
        <div className="description-img">
            <img src={require("../assets/fca_img3.jpg")} alt="description fca sikkim" />
        </div>
        <div className="description-content">
            {about.map((item, key) => {
                return <div key={key}>
                    <div className="item-title">{item.title}</div>
                    <div className="item-description">"{`${item.description}`}"</div>
<hr className="line-break"/>
                </div>
            })}
        </div>
    </section>
}