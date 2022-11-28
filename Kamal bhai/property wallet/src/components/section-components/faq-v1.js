import React, { Component } from "react";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

class FaqV1 extends Component {
  render() {
    let publicUrl = process.env.PUBLIC_URL + "/";

    return (
      <div className="ltn__faq-area mb-100">
        <div className="container">
          <div style={{ marginLeft: "5%", marginRight: "5%" }} className="row">
            <div className="col-lg-12">
              <div className="ltn__faq-inner ltn__faq-inner-2">
                <div id="accordion_2">
                  {/* card */}
                  {/* <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-1"
                      aria-expanded="false"
                    >
                      How to buy a product?
                    </h6>
                    <div
                      id="faq-item-2-1"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Scelerisque eleifend donec
                          pretium vulputate sapien nec sagittis. Proin libero
                          nunc consequat interdum. Condimentum lacinia quis vel
                          eros donec ac. Mauris sit amet massa vitae tortor.
                          Quisque id diam vel quam elementum pulvinar. Gravida
                          in fermentum et sollicitudin ac orci phasellus.
                          Facilisis gravida neque convallis a cras semper. Non
                          arcu risus quis varius quam quisque id.
                        </p>
                      </div>
                    </div>
                  </div> */}
                  {/* card */}
                  <div className="card">
                    <h6
                      className="ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-2"
                      aria-expanded="true"
                    >
                      How to use this app?
                    </h6>
                    <div
                      id="faq-item-2-2"
                      className="collapse show"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        {/* <div className="ltn__video-img alignleft">
                          <img
                            src={publicUrl + "assets/img/bg/17.jpg"}
                            alt="video popup bg image"
                          />
                          <a
                            className="ltn__video-icon-2 ltn__video-icon-2-small ltn__video-icon-2-border----"
                            href="https://www.youtube.com/embed/LjCzPp-MK48?autoplay=1&showinfo=0"
                            data-rel="lightcase:myCollection"
                          >
                            <i className="fa fa-play" />
                          </a>
                        </div> */}
                        <p>
                          If you are a beginner and need more instructions on
                          using the Property Wallet app,
                          <a
                            style={{
                              color: "#27A3A3",
                              //   fontSize: "20px",
                              cursor: "pointer",
                              fontWeight: "bold",
                            }}
                          >
                            {" "}
                            click here{" "}
                          </a>{" "}
                          to watch the tutorial.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-3"
                      aria-expanded="false"
                    >
                      Are there any chances of a scam?
                    </h6>
                    <div
                      id="faq-item-2-3"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          You can trust our app with any data and information
                          you provide on our app. Property Wallet guarantees to
                          protect you from scammers and maintain the
                          confidentiality of your data.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-4"
                      aria-expanded="false"
                    >
                      For how long can I enjoy the free services?
                    </h6>
                    <div
                      id="faq-item-2-4"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          The Property Wallet app will be offering services free
                          of cost for as long as it is needed by you.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-5"
                      aria-expanded="false"
                    >
                      Why should we use Property Wallet for Business Management?
                    </h6>
                    <div
                      id="faq-item-2-5"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          Property Wallet offers you the services that you would
                          need to manage your business operations from home.
                          Here, you will be able to overlook your staff, assign
                          them tasks, manage their commissions, calculate their
                          contribution to your sales and much more. Property
                          Wallet is the easiest and most reliable application to
                          use for all your business tasks.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-6"
                      aria-expanded="false"
                    >
                      What steps do I need to take to register on the Property
                      Wallet app and use its services?
                    </h6>
                    <div
                      id="faq-item-2-6"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          You may register to use the services of the Property
                          Wallet app by providing the needed details about you
                          and your business.
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* card */}
                  {/* <div className="card">
                    <h6
                      className="collapsed ltn__card-title"
                      data-bs-toggle="collapse"
                      data-bs-target="#faq-item-2-7"
                      aria-expanded="false"
                    >
                      How do I make payment by my credit card
                    </h6>
                    <div
                      id="faq-item-2-7"
                      className="collapse"
                      data-bs-parent="#accordion_2"
                    >
                      <div className="card-body">
                        <p>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Scelerisque eleifend donec
                          pretium vulputate sapien nec sagittis. Proin libero
                          nunc consequat interdum. Condimentum lacinia quis vel
                          eros donec ac. Mauris sit amet massa vitae tortor.
                          Quisque id diam vel quam elementum pulvinar. Gravida
                          in fermentum et sollicitudin ac orci phasellus.
                          Facilisis gravida neque convallis a cras semper. Non
                          arcu risus quis varius quam quisque id.
                        </p>
                      </div>
                    </div>
                  </div> */}
                </div>
                <div className="need-support text-center mt-70">
                  <h2>
                    Please go through our{" "}
                    <Link
                      style={{
                        color: "#27A3A3",
                        //   fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      Privacy Policy{" "}
                    </Link>{" "}
                    and{" "}
                    <Link
                      style={{
                        color: "#27A3A3",
                        //   fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      Terms of Service{" "}
                    </Link>
                    for more information about the Property Wallet app. You can
                    also{" "}
                    <Link
                      style={{
                        color: "#27A3A3",
                        //   fontSize: "20px",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      contact us{" "}
                    </Link>{" "}
                    for more questions.{" "}
                  </h2>
                  <div className="btn-wrapper mt-5 mb-30 go-top">
                    <Link to="/contact" className="theme-btn-1 btn">
                      Contact Us
                    </Link>
                  </div>
                  <h3>
                    <i className="fas fa-phone" /> 021-111-818-111
                  </h3>
                </div>
              </div>
            </div>

            {/* <div className="col-lg-4">
              <aside className="sidebar-area ltn__right-sidebar">
               
                <div className="widget ltn__search-widget ltn__newsletter-widget">
                  <h6 className="ltn__widget-sub-title">// subscribe</h6>
                  <h4 className="ltn__widget-title">Get Newsletter</h4>
                  <form action="#">
                    <input type="text" name="search" placeholder="Search" />
                    <button type="submit">
                      <i className="fas fa-search" />
                    </button>
                  </form>
                  <div className="ltn__newsletter-bg-icon">
                    <i className="fas fa-envelope-open-text" />
                  </div>
                </div>
                
                <div className="widget ltn__banner-widget go-top">
                  <Link to="shop.html">
                    <img
                      src={publicUrl + "assets/img/banner/banner-3.jpg"}
                      alt="Banner Image"
                    />
                  </Link>
                </div>
              </aside>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default FaqV1;
