import "./ContactUs.css";
export const ContactUs = () => {
    return <section>
        <div class="contact-cards container">
            <div class="row">
                <div class="col-md-4">
                    <div class="card">
                        <span class="icon">
                            <i class="fa fa-phone"></i>
                        </span>
                        <div class="content-wrap">
                            <span class="item-title">
                                Call us anytime
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
                                Our Head Office                        </span>
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
                                Call us anytime
                            </span>
                            <p class="text">
                                Mobile: +386 5555 235 / +386 8754 231
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>
  );
};
