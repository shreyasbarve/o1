import React, { useState } from "react";
import axios from "axios";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../../assets/vendor/ionicons/css/ionicons.min.css";
import Fade from "react-reveal/Fade";
import "../../assets/css/blog.css";
import "../../assets/css/style.css";
import Headerimg from "../../assets/img/intro-img.svg";

import Whyus1 from "../../assets/img/why-us1.svg";
import Feature1 from "../../assets/img/features-1.svg";
import Feature2 from "../../assets/img/features-2.svg";
import Team1 from "../../assets/img/team-1.jpg";
import Team2 from "../../assets/img/team-2.jpg";
import Team3 from "../../assets/img/team-3.jpg";
import Team4 from "../../assets/img/team-4.jpg";
import Testimonial1 from "../../assets/img/testimonial-1.jpg";
import Testimonial2 from "../../assets/img/testimonial-2.jpg";
import Testimonial3 from "../../assets/img/testimonial-3.jpg";
import Testimonial4 from "../../assets/img/testimonial-4.jpg";
import { NavLink } from "react-router-dom";

const Home = () => {
  const [studentinfo, setstudentinfo] = useState({
    email: "",
  });

  const [subscribe, setSubscribe] = useState({
    email: "",
    key: "",
  });

  const registerstudent = (e) => {
    e.preventDefault();
    axios
      .post("https://o1codingclub.herokuapp.com/mail/verify/", studentinfo)
      .then((response) => {
        console.log(response);
        alert("A key has been sent to enterd Mail");
      })
      .catch((error) => {
        alert("Email already in use");
        console.log(studentinfo);
        console.log(error);
      });
  };

  const subscribestudent = (e) => {
    e.preventDefault();
    axios
      .post("https://o1codingclub.herokuapp.com/mail/add/", subscribe)
      .then((response) => {
        console.log(response);
        alert("registered Succesfully");
      })
      .catch((error) => {
        alert("Invalid Email or Key");
        console.log(studentinfo);
        console.log(error);
      });
  };

  return (
    <div>
      {/*Modal  */}

      <div
        className="modal fade"
        id="modalLoginForm"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="myModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header text-center">
              <h4 className="modal-title w-100 font-weight-bold">Subscribe</h4>
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body mx-3">
              <div className="md-form mb-5">
                <input
                  type="email"
                  id="defaultForm-email"
                  value={subscribe.email}
                  onChange={(e) =>
                    setSubscribe({ ...subscribe, email: e.target.value })
                  }
                  className="form-control validate"
                  placeholder="Email"
                />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="defaultForm-email"
                >
                  Your email
                </label>
              </div>

              <div className="md-form mb-4">
                <input
                  type="password"
                  id="defaultForm-pass"
                  value={subscribe.key}
                  onChange={(e) =>
                    setSubscribe({ ...subscribe, key: e.target.value })
                  }
                  className="form-control validate"
                  placeholder="Key"
                />
                <label
                  data-error="wrong"
                  data-success="right"
                  htmlFor="defaultForm-pass"
                >
                  Key sent to your registered Mail
                </label>
              </div>
            </div>
            <div className="modal-footer d-flex justify-content-center">
              <button
                className="btn bg-primary btn-send"
                onClick={subscribestudent}
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      <section id="hero" className="clearfix mt-5">
        <div className="container d-flex h-100">
          <div className="row justify-content-center align-self-center">
            <div className="col-md-6 intro-info order-md-first order-last">
              <Fade left>
                <h2>
                  Leverage Your
                  <br /> Journey of <span>Coding</span>
                </h2>
              </Fade>
              <div>
                <a href="#about" className="btn-get-started scrollto">
                  Get Started
                </a>
              </div>
            </div>

            <div className="col-md-6 intro-img order-md-last order-first">
              <img src={Headerimg} className="img-fluid" alt="Header" />
            </div>
          </div>
        </div>
      </section>
      <main id="main">
        {/* About Section */}
        {/* About Section end */}

        {/* Services Section */}
        <section id="services" className="services section-bg">
          <div className="container">
            <header className="section-header">
              <h3>Services</h3>
            </header>

            <div className="row">
              <div className="col-md-6 col-lg-4 wow bounceInUp">
                <div className="box">
                  <div className="icon icon1">
                    <i className="ion-ios-analytics-outline i1"></i>
                  </div>
                  <h4 className="title">
                    <NavLink to="/viewBlog">Daily Blogs</NavLink>
                  </h4>
                  <p className="description">
                    We have blogs on various topics like React, Django,
                    Bootstrap, Compititive Coding and much more.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="box">
                  <div className="icon icon2">
                    <i className="ion-ios-bookmarks-outline i2"></i>
                  </div>
                  <h4 className="title">
                    <a href="#hero">Bunch of Contest</a>
                  </h4>
                  <p className="description">
                    Our Website will give daily update about various ongoing
                    contest from codechef,codeforces and contest build by Tech
                    leader at O(1) Coding Club
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className="box">
                  <div className="icon icon3">
                    <i className="ion-ios-paper-outline i3"></i>
                  </div>
                  <h4 className="title">
                    <a href="#hero">Placement Corner</a>
                  </h4>
                  <p className="description">
                    Get inspired from the students who cracked great offers at
                    big MNC and learn from their stories.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="box">
                  <div className="icon icon4">
                    <i className="ion-ios-paper-outline i4"></i>
                  </div>
                  <h4 className="title">
                    <a href="#hero">RoadMaps</a>
                  </h4>
                  <p className="description">
                    The tech assistant at O(1) Coding Club gives a detail
                    roadmap on various topics like frontend, backend,
                    Compititive Programming and more.{" "}
                  </p>
                </div>
              </div>

              <div className="col-md-6 col-lg-4">
                <div className=" box">
                  <div className="icon icon5">
                    <i className="ion-ios-world-outline i5"></i>
                  </div>
                  <h4 className="title">
                    <a href="#hero">Nemo Enim</a>
                  </h4>
                  <p className="description">
                    At vero eos et accusamus et iusto odio dignissimos ducimus
                    qui blanditiis praesentium voluptatum deleniti atque
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div className="box">
                  <div className="icon icon6">
                    <i className="ion-ios-clock-outline i6"></i>
                  </div>
                  <h4 className="title">
                    <a href="#hero">Eiusmod Tempor</a>
                  </h4>
                  <p className="description">
                    Et harum quidem rerum facilis est et expedita distinctio.
                    Nam libero tempore, cum soluta nobis est eligendi
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Service Section ends */}

        <section id="why-us" className="why-us">
          <div className="container-fluid">
            <header className="section-header">
              <h3>Why choose us?</h3>
              <p>
                Laudem latine persequeris id sed, ex fabulas delectus quo. No
                vel partiendo abhorreant vituperatoribus.
              </p>
            </header>

            <div className="row">
              <div className="col-lg-6">
                <div className="why-us-img">
                  <img src={Whyus1} alt="" className="img-fluid mb-2" />
                </div>
              </div>

              <div className="col-lg-6">
                <div className="why-us-content">
                  <div className="features clearfix">
                    <i className="fa fa-diamond why-us1"></i>
                    <h4>Corporis dolorem</h4>
                    <p>
                      Commodi quia voluptatum. Est cupiditate voluptas quaerat
                      officiis ex alias dignissimos et ipsum. Soluta at enim
                      modi ut incidunt dolor et.
                    </p>
                  </div>

                  <div className="features clearfix">
                    <i className="fa fa-object-group why-us2"></i>
                    <h4>Eum ut aspernatur</h4>
                    <p>
                      Molestias eius rerum iusto voluptas et ab cupiditate aut
                      enim. Assumenda animi occaecati. Quo dolore fuga quasi
                      autem aliquid ipsum odit. Perferendis doloremque iure
                      nulla aut.
                    </p>
                  </div>

                  <div className="features clearfix">
                    <i className="fa fa-language why-us3"></i>
                    <h4>Voluptates dolores</h4>
                    <p>
                      Voluptates nihil et quis omnis et eaque omnis sint aut.
                      Ducimus dolorum aspernatur. Totam dolores ut enim ullam
                      voluptas distinctio aut.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="container">
            <div className="row counters">
              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">300+</span>
                <p>Users</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">20+</span>
                <p>Blogs and RoadsMap</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">24</span>
                <p>Hours Of Support</p>
              </div>

              <div className="col-lg-3 col-6 text-center">
                <span data-toggle="counter-up">18</span>
                <p>Hard Workers</p>
              </div>
            </div>
          </div>
        </section>
        {/* Why-us Section ends */}

        {/* Subscribe Section */}
        <section id="call-to-action" className="call-to-action">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 text-center text-lg-left">
                <h3 className="cta-title">Subscribe Us</h3>
                <p className="cta-text">
                  {" "}
                  Subscribe to get daily updates regarding contest, blogs,
                  different roadmaps and much more to leverage your journey of
                  learning
                </p>
              </div>
              <div className="col-lg-5 cta-btn-container text-center">
                <input
                  className="col-12 cta-btn"
                  type="email"
                  value={studentinfo.email}
                  onChange={(e) =>
                    setstudentinfo({ ...studentinfo, email: e.target.value })
                  }
                  placeholder="Enter Your Email"
                ></input>

                <button
                  type="submit"
                  className="btn sendbtn"
                  onClick={registerstudent}
                >
                  <a
                    href="#hero"
                    className="btn btn-default btn-rounded mb-4"
                    data-toggle="modal"
                    data-target="#modalLoginForm"
                  >
                    Send
                  </a>
                </button>
              </div>
            </div>
          </div>
        </section>
        {/* Subscribe section end */}

        {/* Feature Section */}
        <section id="features" className="features">
          <div className="container">
            <div className="row feature-item">
              <div className="col-lg-6">
                <img src={Feature1} className="img-fluid" alt="" />
              </div>
              <div className="col-lg-6 wow fadeInUp pt-5 pt-lg-0">
                <h4>
                  Voluptatem dignissimos provident quasi corporis voluptates sit
                  assumenda.
                </h4>
                <p>
                  Ipsum in aspernatur ut possimus sint. Quia omnis est occaecati
                  possimus ea. Quas molestiae perspiciatis occaecati qui rerum.
                  Deleniti quod porro sed quisquam saepe. Numquam mollitia
                  recusandae non ad at et a.
                </p>
                <p>
                  Ad vitae recusandae odit possimus. Quaerat cum ipsum corrupti.
                  Odit qui asperiores ea corporis deserunt veritatis quidem
                  expedita perferendis. Qui rerum eligendi ex doloribus quia
                  sit. Porro rerum eum eum.
                </p>
              </div>
            </div>

            <div className="row feature-item mt-5 pt-5">
              <div className="col-lg-6 wow fadeInUp order-1 order-lg-2">
                <img src={Feature2} className="img-fluid" alt="" />
              </div>

              <div className="col-lg-6 wow fadeInUp pt-4 pt-lg-0 order-2 order-lg-1">
                <h4>
                  Neque saepe temporibus repellat ea ipsum et. Id vel et quia
                  tempora facere reprehenderit.
                </h4>
                <p>
                  Delectus alias ut incidunt delectus nam placeat in
                  consequatur. Sed cupiditate quia ea quis. Voluptas nemo qui
                  aut distinctio. Cumque fugit earum est quam officiis numquam.
                  Ducimus corporis autem at blanditiis beatae incidunt sunt.
                </p>
                <p>
                  Voluptas saepe natus quidem blanditiis. Non sunt impedit
                  voluptas mollitia beatae. Qui esse molestias. Laudantium
                  libero nisi vitae debitis. Dolorem cupiditate est perferendis
                  iusto.
                </p>
                <p>
                  Eum quia in. Magni quas ipsum a. Quis ex voluptatem inventore
                  sint quia modi. Numquam est aut fuga mollitia exercitationem
                  nam accusantium provident quia.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* feature section ends */}

        {/* Testimonial section */}

        <section id="testimonials" className="testimonials">
          <div className="container">
            <header className="section-header">
              <h3>Testimonials</h3>
            </header>

            <div className="row justify-content-center">
              <div className="col-lg-8">
                <div className="owl-carousel testimonials-carousel">
                  <div className="testimonial-item">
                    <img
                      src={Testimonial1}
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Saul Goodman</h3>
                    <h4>Ceo &amp; Founder</h4>
                    <p>
                      Proin iaculis purus consequat sem cure digni ssim donec
                      porttitora entum suscipit rhoncus. Accusantium quam,
                      ultricies eget id, aliquam eget nibh et. Maecen aliquam,
                      risus at semper.
                    </p>
                  </div>

                  <div className="testimonial-item">
                    <img
                      src={Testimonial2}
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Sara Wilsson</h3>
                    <h4>Designer</h4>
                    <p>
                      Export tempor illum tamen malis malis eram quae irure esse
                      labore quem cillum quid cillum eram malis quorum velit
                      fore eram velit sunt aliqua noster fugiat irure amet legam
                      anim culpa.
                    </p>
                  </div>

                  <div className="testimonial-item">
                    <img
                      src={Testimonial3}
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Jena Karlis</h3>
                    <h4>Store Owner</h4>
                    <p>
                      Enim nisi quem export duis labore cillum quae magna enim
                      sint quorum nulla quem veniam duis minim tempor labore
                      quem eram duis noster aute amet eram fore quis sint minim.
                    </p>
                  </div>

                  <div className="testimonial-item">
                    <img
                      src={Testimonial4}
                      className="testimonial-img"
                      alt=""
                    />
                    <h3>Matt Brandon</h3>
                    <h4>Freelancer</h4>
                    <p>
                      Fugiat enim eram quae cillum dolore dolor amet nulla culpa
                      multos export minim fugiat minim velit minim dolor enim
                      duis veniam ipsum anim magna sunt elit fore quem dolore
                      labore illum veniam.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonial section ends */}

        {/* Team section */}
        <section id="team" className="team section-bg">
          <div className="container">
            <div className="section-header">
              <h3>Team</h3>
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque
              </p>
            </div>

            <div className="row">
              <div className="col-lg-3 col-md-6">
                <div className="member">
                  <img src={Team1} className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Walter White</h4>
                      <span>Chief Executive Officer</span>
                      <div className="social">
                        <a href="#hero">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#hero">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#hero">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="#hero">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="member">
                  <img src={Team2} className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Sarah Jhonson</h4>
                      <span>Product Manager</span>
                      <div className="social">
                        <a href="#hero">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#hero">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#hero">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="#hero">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="member">
                  <img src={Team3} className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>William Anderson</h4>
                      <span>CTO</span>
                      <div className="social">
                        <a href="#hero">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#hero">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#hero">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="#hero">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="col-lg-3 col-md-6">
                <div className="member">
                  <img src={Team4} className="img-fluid" alt="" />
                  <div className="member-info">
                    <div className="member-info-content">
                      <h4>Amanda Jepson</h4>
                      <span>Accountant</span>
                      <div className="social">
                        <a href="#hero">
                          <i className="fa fa-twitter"></i>
                        </a>
                        <a href="#hero">
                          <i className="fa fa-facebook"></i>
                        </a>
                        <a href="#hero">
                          <i className="fa fa-google-plus"></i>
                        </a>
                        <a href="#hero">
                          <i className="fa fa-linkedin"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* Team section ends */}
      </main>
    </div>
  );
};

export default Home;
