import "./ContactUs.css";
export const ContactUs = () => {
  return (
    <section>
      <div class="contact-cards container">
        <div class="row">
          <div class="col-md-4">
            <div class="card">
              <span class="icon">
                <i class="fa fa-phone"></i>
              </span>
              <div class="content-wrap">
                <span class="item-title">Call us anytime</span>
                <p class="text">
                  Phone : (+91) 03592 - 295033 <br></br>
                  Mobile: (+91) 9775695114 <br></br>
                  Mobile: (+91) 9002627682
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
                <span class="item-title">Head Office </span>
                <p class="text">
                  Mist Tree Mountain, Hospital Dara<br></br> Gangtok - Sikkim -
                  India <br></br>Pin - 737101
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
                <span class="item-title"> Email Us</span>
                <p class="text">federationconsumersikkim1997@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
