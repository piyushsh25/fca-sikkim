import "./ContactUs.css"
export const ContactUs = () => {
    return <section>
    <h1 className="contact-us-header">Contact Us :</h1>
        <div class="contact-cards container">
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <span class="icon">
                            <i class="fa fa-user" aria-hidden="true"></i>

                        </span>
                        <div class="content-wrap">
                            <span class="item-title">
                                Mr Suresh Kumar Lama (President)
                            </span>
                            <p class="text">
                                Phone : (+91) 97756-95144
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <span class="icon">
                            <i class="fa fa-phone"></i>
                        </span>
                        <div class="content-wrap">
                            <span class="item-title">
                                State Consumer Helpline
                            </span>
                            <p class="text">
                                Landline: 03592 - 202675
                                Online complaint : <a href="email">https://edaakhil.nic.in</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <span class="icon">
                            <i class="fa fa-phone"></i>
                        </span>
                        <div class="content-wrap">
                            <span class="item-title">
                                Call FCA
                            </span>
                            <p class="text">
                                Phone : (+91) 03592 - 295033
                            </p>
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                    <div class="card">
                        <span class="icon">
                            <i class="fa fa-map-o"></i>
                        </span>
                        <div class="content-wrap">
                            <span class="item-title">
                                FCA Head Office                        </span>
                            <p class="text">
                                Mist Tree Mountain , Hospital Dara
                                Gangtok - Sikkim - India
                                Pin - 737101
                            </p>
                        </div>
                    </div>
                </div>

                <div class="col-md-4">
                    <div class="card">
                        <span class="icon">
                            <i class="fa fa-envelope-o"></i>
                        </span>
                        <div class="content-wrap">
                            <span class="item-title">
                                Mail FCA Directly
                            </span>
                            <p class="text">
                                <a href="email">federationconsumersikkim1997@gmail.com</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
}