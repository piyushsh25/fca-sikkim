import "./ContactUs.css";
export const ContactUs = () => {
    return <section>
        <h1 className="contact-use-header">Contact FCA Helpline:</h1>
        <div className="contact-cards container">
            <div className="row">
                <div className="col-md-4">
                    <div className="card">
                        <span className="icon">
                            <i className="fa fa-user" aria-hidden="true"></i>
                        </span>
                        <div className="content-wrap">
                            <span className="item-title">
                                Mr Suresh Kumar Lama (President)
                            </span>
                            <p className="text">
                                Phone : 97756-95114
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <span className="icon">
                            <i className="fa fa-map-o"></i>
                        </span>
                        <div className="content-wrap">
                            <span className="item-title">
                                Our Head Office                        </span>
                            <p className="text">
                                Mist Tree Mountain , Hospital Dara
                                Gangtok - Sikkim - India
                                Pin - 737101
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <span className="icon">
                            <i className="fa fa-phone"></i>
                        </span>
                        <div className="content-wrap">
                            <span className="item-title">
                                Call FCA
                            </span>
                            <p className="text">
                                Phone : (+91) 03592 - 295033 <br />
                                Mobile: +386 5555 235 / +386 8754 231
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <span className="icon">
                            <i className="fa fa-envelope-o"></i>
                        </span>
                        <div className="content-wrap">
                            <span className="item-title">
                                Mail FCA
                            </span>
                            <p className="text">
                                <a href="mailto:federationconsumersikkim1997@gmail.com">federationconsumersikkim1997@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
                <h1 className="contact-use-header">Contact State Helpline:</h1>
                <div className="col-md-4">
                    <div className="card">
                        <span className="icon">
                            <i className="fa fa-map-o"></i>
                        </span>
                        <div className="content-wrap">
                            <span className="item-title">
                                State Helpline Number                        </span>
                            <p className="text">
                                Phone : 03592-202675
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card">
                        <span className="icon">
                            <i className="fa fa-map-o"></i>
                        </span>
                        <div className="content-wrap">
                            <span className="item-title">
                                State Complaint Registry                   </span>
                            <p className="text">
                                <a href="https://edaakhil.nic.in">Click to Register Online Complaint</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
};
