import React from "react";
import "./Header.scss";

const Header = () => {
  return (
    <div className="main">
      <div className="main-container">
        <nav className="navbar">
          <div className="main-title">
            <div className="healthy">
              Healthy.<span className="how">How</span>
            </div>
            <div className="lines">
              <div className="line1"></div>
              <div className="line1"></div>
              <div className="line1"></div>
            </div>
          </div>
          <div className="menus-buttons">
            <div className="menu">
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/">Our Services</a>
                </li>
                <li>
                  <a href="/">Testimonials</a>
                </li>
                <li>
                  <a href="/">Calculators</a>
                </li>
                <li>
                  <a href="/">Contact</a>
                </li>
              </ul>
            </div>
            <div className="main-button">
              <div className="login-button">
                <button>Login</button>
              </div>
              <div className="signup-button">
                <button>Sign up</button>
              </div>
            </div>
          </div>
        </nav>
        <div className="section-02">
          <div className="content">
            <p className="p1">
              A healthier you<br></br> is just as
              <span className="click-text"> Click</span> away.
            </p>
            <p className="p2">
              Fitmeet services is dedicated to bringing you & your family
              healthy,<br></br> delicious food options whenever you’re at on of
              our location.
            </p>
            <div className="get-started">
              <button>Get Started</button>
            </div>
          </div>
          <div className="image-content">
            <figure>
              <img
                src="https://i.postimg.cc/Zqy5n2qf/623098964-huge-removebg-preview-1-1.png"
                alt=""
              />
            </figure>
          </div>
        </div>
        <div className="section-03">
          <p className="p3">
            <span className="why">Why</span> us?
          </p>
          <p className="fitmeet">
            Fitmeet services is dedicated to bringing you & your family healthy,
            delicious food<br></br> options whenever you’re at on of our
            location.
          </p>
        </div>
        <div className="section-04">
          <div className="container-1">
            <div className="round-1">
              <img src="/image/img3.png" className="Physical-img" alt="" />
            </div>
            <div className="contain-text">
              <p className="physical">Physical health</p>
            </div>
            <div className="side-icon">
              <div className="plus-icon">
                <img src="/image/plus.svg" className="plus-img-1" alt="" />
              </div>
            </div>
          </div>
          <div className="container-1">
            <div className="round-1">
              <img src="/image/img4.png" className="Physical-img" alt="" />
            </div>
            <div className="contain-text">
              <p className="physical">
                Psychological <br />
                wellness
              </p>
            </div>
            <div className="side-icon">
              <div className="plus-icon">
                <img src="/image/equal.svg" className="plus-img-1" alt="" />
              </div>
            </div>
          </div>
          <div className="container-1">
            <div className="round-1">
              <img src="/image/img5.png" className="Physical-img" alt="" />
            </div>
            <div className="contain-text">
              <p className="physical">Healthy lifestyle</p>
            </div>
          </div>
        </div>
        <div className="section-05">
          <h3 className="personalized">
            Get personalized diet plans and required consultation, <br />
            just by answering few short questions...
          </h3>
          <p className="current-health">
            Select your current health condition, choose one or more options
          </p>
        </div>
        <div className="section-06">
          <div className="Weight-Management">
            <img src="/image/imgg8.png" className="image-0001" alt="" />
            <p className="weight-services">Weight Management</p>
          </div>
          <div className="Diabetes">
            <img src="/image/imgg9.png" className="image-0001" alt="" />
            <p className="weight-services">Diabetes</p>
          </div>
          <div className="Depression">
            <img src="/image/imgg10.png" className="image-0001" alt="" />
            <p className="weight-services">Depression</p>
          </div>
        </div>
        <div className="section-07">
          <button className="started">Get Started</button>
        </div>
        <div className="section-08">
          <p className="how-it">
            How it <samp className="work">works ?</samp>
          </p>
        </div>
        <div className="section-09">
          <div className="section-container-01">
            <div>
              <img src="/image/cards-001.png" alt="" />
            </div>
            <div className="contain-step">
              <p className="step">Step</p>
              <p className="step-1-circle">1</p>
            </div>
            <div className="contain-condition">
              Select your condition (physical, or mental)
            </div>
            <div className="contain-more">
              <a className="know-more" href="know-more">
                Know more
              </a>
            </div>
          </div>
          <div className="section-container-01">
            <div>
              <img src="/image/cards-002.png" alt="" />
            </div>
            <div className="contain-step">
              <p className="step">Step</p>
              <p className="step-1-circle">2</p>
            </div>
            <div className="contain-condition">Answer some short questions</div>
            <div className="contain-more">
              <a className="know-more" href="know-more">
                Know more
              </a>
            </div>
          </div>
          <div className="section-container-01">
            <div>
              <img src="/image/cards-003.png" alt="" />
            </div>
            <div className="contain-step">
              <p className="step">Step</p>
              <p className="step-1-circle">3</p>
            </div>
            <div className="contain-condition">
              We provide a personal diet plan suited to your needs
            </div>
            <div className="contain-more">
              <a className="know-more" href="know-more">
                Know more
              </a>
            </div>
          </div>
          <div className="section-container-01">
            <div>
              <img src="/image/cards-004.png" alt="" />
            </div>
            <div className="contain-step">
              <p className="step">Step</p>
              <p className="step-1-circle">4</p>
            </div>
            <div className="contain-condition">
              Apply the plan on your lifestyle
            </div>
            <div className="contain-more">
              <a className="know-more" href="know-more">
                Know more
              </a>
            </div>
          </div>
          <div className="section-container-01">
            <div>
              <img src="/image/cards-005.png" alt="" />
            </div>
            <div className="contain-step">
              <p className="step">Step</p>
              <p className="step-1-circle">5</p>
            </div>
            <div className="contain-condition">See results!</div>
            <div className="contain-more">
              <a className="know-more" href="know-more">
                Know more
              </a>
            </div>
          </div>
        </div>
        <div className="section-10">
          <div>
            <img className="food-image" src="/image/calories001.png" alt="" />
          </div>
          <div>
            <p className="check-calories">
              See, <samp className="how">how</samp> you can check calories...
            </p>
            <p className="quibusdam-text">
              Quibusdam explicabo voluptatem ab. Impedit delectus qui
              voluptatem. Adipisci deleniti necessitatibus sit eum fugiat
              voluptas labore eveniet et.
            </p>
            <button className="more-button">Read more</button>
          </div>
        </div>
        <div className="section-11">
          <div className="section-contain-11">
            <div>
              <img className="Physical-image" src="/image/sss1.png" alt="Physical-image" />
            </div>
            <div>
              <p className="Physical-title">Physical health</p>
              <p className="Physical-paragraph">
                Accusantium vitae enim voluptas dolor iure perferendis rerum
                sit.
              </p>
            </div>
          </div>
          <div className="section-contain-11">
            <div>
              <p className="Physical-title">Psychological</p>
              <p className="Physical-paragraph">
                Accusantium vitae enim voluptas dolor iure perferendis rerum
                sit.
              </p>
            </div>
            <div>
              <img className="Physical-image-02" src="/image/sss3.png" alt="" />
            </div>
          </div>
          <div className="section-contain-11">
            <div>
              <img className="Physical-image" src="/image/sss2.png" alt="" />
            </div>
            <div>
              <p className="Physical-title">Healthy lifestyle</p>
              <p className="Physical-paragraph">
                Accusantium vitae enim voluptas dolor iure perferendis rerum
                sit.
              </p>
            </div>
          </div>
        </div>

        <div className="footer">
          <div className="contact-us">
            <p className="footer-yellow-font">CONTACT US</p>
            <div className="mobile-number">
              <p className="normal-text-footer-toll-free">Toll Free Number</p>
              <p className="normal-text-footer-number">+91 18000 67834</p>
            </div>
            <div className="mobile-number">
              <p className="normal-text-footer-toll-free">Email</p>
              <p className="normal-text-footer-email">
                healthy.how@hotmail.com
              </p>
            </div>
            <div>
              <p className="normal-text-footer-toll-free">Address</p>
              <p className="normal-text-footer-address">
                48 - Blue business hub, Kandivli, South Mumbai, Mumbai - 549654
              </p>
            </div>
          </div>
          <div>
            <p className="footer-yellow-font">USEFUL LINKS</p>
            <div className="mobile-number">
              <p className="normal-text-footer-toll-free">About us</p>
              <p className="normal-text-footer-toll-free">Meet the team</p>
              <p className="normal-text-footer-toll-free">Blog</p>
              <p className="normal-text-footer-toll-free">Pricing</p>
              <p className="normal-text-footer-toll-free">FAQs</p>
            </div>
          </div>
          <div>
            <p className="footer-yellow-font">Follow Us on</p>
            <div className="footer-part-03">
              <div className="social-icon-circle">
                <div>
                  <img
                    src="/image/vector01.png"
                    alt=""
                    className="social-icon"
                  />
                </div>
              </div>
              <div className="social-icon-circle">
                <div>
                  <img
                    src="/image/vector02.png"
                    alt=""
                    className="social-icon"
                  />
                </div>
              </div>
              <div className="social-icon-circle">
                <div>
                  <img
                    src="/image/vector03.png"
                    alt=""
                    className="social-icon"
                  />
                </div>
              </div>
              <div className="social-icon-circle">
                <div>
                  <img
                    src="/image/vector04.png"
                    alt=""
                    className="social-icon"
                  />
                </div>
              </div>
              <div className="social-icon-circle">
                <div>
                  <img
                    src="/image/vector05.png"
                    alt=""
                    className="social-icon"
                  />
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="footer-yellow-font">Healthy.How</p>
          </div>
        </div>
      </div>
      <div className="footer-end">
        <div className="footer-contain">
          <div>
            <p>Healthy.How © 2022 All Rights Reserved</p>
          </div>
          <div className="footer-policy">
            <div>
              <a className="footer-text" href="-">
                Privacy Policy
              </a>
            </div>
            <div>
              <a className="footer-text" href="-">
                Terms of Use
              </a>
            </div>
            <div>
              <a className="footer-text" href="-">
                Refund and Cancellation Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
