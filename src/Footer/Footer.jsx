import payment from "../assets/image19.png";
import secureone from "../assets/image20.png";
import securetwo from "../assets/image21.png";
import securethree from "../assets/image22.png";
import insta from "../assets/instagram.png";
import fb from "../assets/fb.png";
import ytube from "../assets/youtube-line.png";
const Footer = () => {
  return (
    <section className="footer" id="footer">
      <footer className="bg-body-tertiary text-center">
        <h5>Join for special offers.</h5>
        <div className="container p-4">
          <div className="row">
            <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
              <h5 className="text-uppercase">Follow on socials</h5>
              <img src={insta} alt="" />
              <img src={fb} alt="" />
              <img src={ytube} alt="" />
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase">Boarding & Day care</h5>

              <ul className="list-unstyled mb-0">
                <li>
                  <a href="#!" className="text-body">
                    XX-XXXXX XXXXX{" "}
                  </a>
                </li>
                <li>
                  <p className="text-body">
                    Lorem ipsum dolor sit amet, consectetur sielit
                  </p>
                </li>
              </ul>
            </div>

            <div className="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 className="text-uppercase mb-0">Health care</h5>

              <ul className="list-unstyled">
                <li>
                  <a href="#!" className="text-body">
                    XX-XXXXX XXXXX
                  </a>
                </li>
                <li>
                  <p className="text-body">
                    Lorem ipsum dolor sit amet, consectetur sielit
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="row payment-box border">
          <div className="col-lg-6 py-3">
            <h5>We accept</h5>
            <img src={payment} alt="" />
          </div>
          <div className="col-lg-6 py-3">
            <h5 className="d-flex justify-start">Secured</h5>
            <div className="d-flex justify-start">
              <img className="me-3" src={secureone} alt="" />
              <img className="me-3" src={securetwo} alt="" />
              <img className="me-3" src={securethree} alt="" />
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row footer-last">
            <div className="col-sm-6">
              <div>@ all rights reserved</div>
            </div>
            <div className="col-sm-6">
              <ul className="d-flex list-menu list-unstyled">
                <li>Our Services</li>
                <li>About Us</li>
                <li>Shipping</li>
                <li>FAQ</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
