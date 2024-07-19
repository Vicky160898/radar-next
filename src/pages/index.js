import Head from "next/head";
import Image from "next/image";
import fill from "../../public/assets/img/fill.png";
import merkle from "../../public/assets/img/Merkle_black.svg.png";
import sliceBlack from "../../public/assets/img/Slice_black.svg.png";
import bevi from "../../public/assets/img/bevi-2.svg fill.png";
import ey from "../../public/assets/img/ey_eVyZsxY.svg fill.png";
import coca from "../../public/assets/img/coca_cola-2.svg fill.png";
import RD_Process from "../../public/assets/gif/RapidDesign.gif";
import rapid_dev from "../../public/assets/gif/RapidDevelopment.gif";
import continious_iteration from "../../public/assets/gif/itrations.gif";
import service1 from "../../public/assets/img/service-1.png";
import service2 from "../../public/assets/img/service-2.png";
import service3 from "../../public/assets/img/service-3.png";
import service4 from "../../public/assets/img/service-4.png";
import vector1 from "../../public/assets/img/Vector.png";
import vector2 from "../../public/assets/img/Vector (1).png";
import realmock8 from "../../public/assets/img/Real Mocks 8.png";
import realmock9 from "../../public/assets/img/Real Mocks 9.png";
import rectangle54 from "../../public/assets/img/Rectangle 54.png";
import workLogo from "../../public/assets/img/work-logo.png";
import user_pic1 from "../../public/assets/img/user_pic1.png";
import workLogo2 from "../../public/assets/img/work-logo2.png";
import workLogo3 from "../../public/assets/img/work-logo3.png";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [activeAccordion, setActiveAccordion] = useState(1);
  const [backgroundClass, setBackgroundClass] = useState("unique-area-1");

  const handleAccordionClick = (accordionNumber) => {
    setTimeout(() => {
      setActiveAccordion(accordionNumber);
      switch (accordionNumber) {
        case 2:
          setBackgroundClass("unique-area-2");
          break;
        case 3:
          setBackgroundClass("unique-area-3");
          break;
        default:
          setBackgroundClass("unique-area-1");
          break;
      }
    }, 400);
  };

  return (
    <>
      <Head>
        <title>RadarSoft Technologies</title>
        <meta name="description" content="RadarSoft Technology" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={`main`}>
        {/* <!--banner area started--> */}
        <section class="banner-area">
          <div class="container">
            <div class="row">
              <div class="col-lg-6">
                <div class="banner-left-side-area">
                  <h1 class="banner-heading">
                    Crafting Digital Dreams Design, Develop, Deliver
                  </h1>
                  <p class="banner-paragraph">
                    All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined chunks as necessary, making this the first
                    true generator on the Internet. It uses a dictionary of over
                    200 Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                    Handful of model sentence structures, to generate Lorem
                    Ipsum which looks reasonable. The generated Lorem Ipsum is
                    therefore always free.
                  </p>
                  <button class="banner-button">Contact us</button>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="banner-right-side-area">
                  <div class="banner-right-side-box">
                    <h3 class="banner-right-side-h3">Book an Appointment</h3>
                    <form>
                      <input type="text" placeholder="Full Name*" required />
                      <input type="text" placeholder="Email Id*" required />
                      <input type="number" placeholder="Phone No*" required />
                      <button class="banner-right-side-button">
                        Enquire Now
                      </button>
                    </form>
                    <p class="banner-right-side-paragraph">
                      ⚡ Available for 24 Hours⚡
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--banner area finished--> */}

        {/* <!--logo promtion --> */}
        <section class="logo-promtion">
          <div class="container">
            <div class="row">
              <div class="col-lg-12">
                <h1 class="logo-promotion-heading">
                  Companies we have worked with
                </h1>
                <div class="logo-promotion-images">
                  <Image src={fill} alt="" />
                  <Image src={merkle} alt="" />
                  <Image src={sliceBlack} alt="" />
                  <Image src={bevi} alt="" />
                  <Image src={ey} alt="" />
                  <Image src={coca} alt="" />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--logo promtion finished--> */}

        {/* <!--unique area--> */}
        <section class={`unique-area col-md-12 ${backgroundClass}`}>
          <div class="container">
            <div class="row">
              <div class="unique-area-label">
                <h1
                  class={`unique-area-heading col-lg-8 col-12 m-0 ${
                    activeAccordion === 3 && "text-style"
                  }`}
                >
                  Radarsoft’s RD&D <br />
                  process that makes us unique
                </h1>
                <div class="col-lg-4 mt-lg-0 mt-4 col-12">
                  <button
                    class={`${
                      activeAccordion === 3 ? "btn-style" : "unique-area-button"
                    }`}
                  >
                    Discover how we work
                  </button>
                </div>
              </div>
              <hr
                style={
                  activeAccordion === 3
                    ? { border: "1px solid #ffffff", opacity: "1" }
                    : {}
                }
              />
              <div class="unique-area-details">
                <div class="row">
                  <div class="unique-area-left-side col-lg-6 col-12 px-lg-5">
                    {activeAccordion === 1 && (
                      <Image
                        id="img-rapid-design"
                        className="unique-area-img unique-area-img-1 img-fluid active"
                        src={RD_Process}
                        alt="Rapid Design"
                      />
                    )}
                    {activeAccordion === 2 && (
                      <Image
                        id="img-rapid-development"
                        className="unique-area-img unique-area-img-1 img-fluid active"
                        src={rapid_dev}
                        alt="Rapid Development"
                      />
                    )}
                    {activeAccordion === 3 && (
                      <Image
                        id="img-continuous-iterations"
                        className="unique-area-img unique-area-img-1 img-fluid active"
                        src={continious_iteration}
                        alt="Continuous Iterations"
                      />
                    )}
                  </div>
                  <div
                    class="unique-area-accordion accordion col-lg-6 col-12 px-lg-5"
                    id="accordionExample"
                  >
                    <div class="accordion-item">
                      <h2
                        class={`accordion-header ${
                          activeAccordion === 3 && "border-style"
                        }`}
                        id="headingOne"
                      >
                        <button
                          type="button"
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseOne"
                          aria-controls="collapseOne"
                          className={`accordion-button ${
                            activeAccordion === 3 && "text-style"
                          } ${activeAccordion === 1 ? "" : "collapsed"}`}
                          onClick={() => handleAccordionClick(1)}
                          aria-expanded={activeAccordion === 1}
                        >
                          Rapid Design
                        </button>
                      </h2>
                      <div
                        className={`accordion-collapse collapse ${
                          activeAccordion === 1 ? "show" : ""
                        }`}
                        id="collapseOne"
                        // class="accordion-collapse collapse show"
                        aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample"
                      >
                        <div
                          class={`accordion-body ${
                            activeAccordion === 3 && "text-style"
                          }`}
                        >
                          Sed et orci volutpat, pharetra nunc eu, ultrices urna.
                          Etiam sed sapien vitae ipsum mollis condimentum a non
                          dui. Praesent ut tellus et justo euismod euismod.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2
                        class={`accordion-header ${
                          activeAccordion === 3 && "border-style"
                        }`}
                        id="headingTwo"
                      >
                        <button
                          className={`accordion-button 
                            ${activeAccordion === 3 && "text-style"}
                            ${activeAccordion === 2 ? "" : "collapsed"}`}
                          type="button"
                          onClick={() => handleAccordionClick(2)}
                          aria-expanded={activeAccordion === 2}
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseTwo"
                          aria-controls="collapseTwo"
                        >
                          Rapid Development
                        </button>
                      </h2>
                      <div
                        className={`accordion-collapse collapse ${
                          activeAccordion === 2 ? "show" : ""
                        }`}
                        id="collapseTwo"
                        aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample"
                      >
                        <div
                          class={`accordion-body ${
                            activeAccordion === 3 && "text-style"
                          }`}
                        >
                          <strong>
                            This is the second item's accordion body.
                          </strong>
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                    <div class="accordion-item">
                      <h2
                        class={`accordion-header ${
                          activeAccordion === 3 && "border-style"
                        }`}
                        id="headingThree"
                      >
                        <button
                          className={`accordion-button 
                                ${activeAccordion === 3 && "text-style"}
                            ${activeAccordion === 3 ? "" : "collapsed"}`}
                          type="button"
                          onClick={() => handleAccordionClick(3)}
                          aria-expanded={activeAccordion === 3}
                          data-bs-toggle="collapse"
                          data-bs-target="#collapseThree"
                          aria-controls="collapseThree"
                        >
                          Continuous Iterations
                        </button>
                      </h2>
                      <div
                        className={`accordion-collapse collapse ${
                          activeAccordion === 3 ? "show" : ""
                        }`}
                        id="collapseThree"
                        // class="accordion-collapse collapse"
                        aria-labelledby="headingThree"
                        data-bs-parent="#accordionExample"
                      >
                        <div
                          class={`accordion-body ${
                            activeAccordion === 3 && "text-style"
                          }`}
                        >
                          <strong>
                            This is the third item's accordion body.
                          </strong>
                          It is hidden by default, until the collapse plugin
                          adds the appropriate classes that we use to style each
                          element. These classes control the overall appearance,
                          as well as the showing and hiding via CSS transitions.
                          You can modify any of this with custom CSS or
                          overriding our default variables. It's also worth
                          noting that just about any HTML can go within the{" "}
                          <code>.accordion-body</code>, though the transition
                          does limit overflow.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--unique area finished--> */}

        {/* <!--our service area started--> */}
        <section class="service-area col-md-12">
          <div class="container">
            <div class="row">
              <div class="mb-md-5 mb-3">
                <h1 class="service-area-upper-side-heading m-0">
                  Our Services
                </h1>
                <p class="service-area-upper-side-paragraph mt-3 mb-0">
                  Sed et orci volutpat, pharetra nunc eu, ultrices urna.
                </p>
              </div>
              <div class="col-lg-3 col-md-6 my-lg-0 my-3">
                <div class="service-boxe-1">
                  <Image class="service img-fluid" src={service1} alt="ewf" />
                  <h6>IT Software Design</h6>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 my-lg-0 my-3">
                <div class="service-boxe-2">
                  <Image class="service img-fluid" src={service2} alt="ewf" />
                  <h6>Mobile app development</h6>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 my-lg-0 my-3">
                <div class="service-boxe-3">
                  <Image class="service img-fluid" src={service3} alt="ewf" />
                  <h6>Digital marketing</h6>
                </div>
              </div>
              <div class="col-lg-3 col-md-6 my-lg-0 my-3">
                <div class="service-boxe-4">
                  <Image class="service img-fluid" src={service4} alt="ewf" />
                  <h6>Brand strategy</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--our service area closed--> */}

        {/* <!--our work area started--> */}
        <section class="work-area col-md-12">
          <div class="container">
            <div class="row">
              <div class="mb-md-5 mb-3">
                <h1 class="work-area-upper-heading m-0">Our Work</h1>
                <span class="work-para mt-3">
                  <p class="work-area-upper-paragraph m-0">
                    Case studies Sed et orci volutpat, pharetra nunc eu,
                    ultrices urna.
                  </p>
                  <p class="work-area-upper-paragraph m-0">
                    <u> Read our all case studies</u>
                  </p>
                </span>
              </div>

              <div class="work-area-lower-side">
                <div class="work-lower-left col-md-6">
                  <div class="work-area-logo">
                    <Image class="work-logo" src={vector1} alt="1" />
                    <Image class="work-logo" src={vector2} alt="2" />
                  </div>
                  <h1 class="work-area-lower-heading">
                    Hub for students & <br />
                    professionals to learn new skills
                  </h1>
                  <p class="work-area-lower-paragraph">
                    All the Lorem Ipsum generators on the Internet tend to
                    repeat predefined chunks as necessary, making this the first
                    true generator on the Internet. It uses a dictionary of over
                    200 Latin words, combined with a handful of model sentence
                    structures, to generate Lorem Ipsum which looks reasonable.
                  </p>
                  <div class="work-area-log">
                    <button class="work-area-lower-button">
                      Read full case study <i class="bi bi-arrow-right"></i>
                    </button>
                    <Link class="work-area-lower-anchor" href="#">
                      Read our all case studies
                    </Link>
                  </div>
                </div>
                <div class="work-lower-right col-md-6">
                  <Image
                    class="work-picture-1 img-fluid"
                    src={realmock8}
                    alt="3"
                  />
                  <Image
                    class="work-picture-2 img-fluid"
                    src={realmock9}
                    alt="3"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--our work area closed--> */}

        {/* <!--experience area started--> */}
        <section class="experience-area col-md-12">
          <div class="container">
            <div class="row">
              <div class="mb-md-5 mb-3">
                <h1 class="experience-area-heading">
                  Over 7+ years of hands-on experience, we bring a wealth of
                  knowledge and expertise to every project.
                </h1>
                <p class="experience-area-paragraph m-0">
                  All the Lorem Ipsum generators on the Internet tend to repeat
                  predefined chunks as necessary, making this the first true
                  generator on the Internet.
                </p>
              </div>
            </div>
          </div>
          <div class="experience-lower">
            <div class="container">
              <div class="row">
                <div class="key-status col-lg-5 col-12">
                  <h2 class="experience-low-left-heading">Key Stats</h2>
                  <hr />
                  <p class="experience-low-left-paragraph">
                    Sed et orci volutpat, pharetra nunc eu, ultrices urna. Etiam
                    sed sapien vitae ipsum mollis condimentum a non
                    dui. Praesent ut tellus et justo euismod euismod.
                  </p>
                </div>
                <div class="col-lg-7 col-12">
                  <div class="exp-right-upper">
                    <span class="exp-span">
                      <h1 class="exp-low-heading">200+</h1>
                      <p class="exp-low-para">Sed et orci volu</p>
                    </span>
                    <span class="exp-span">
                      <h1 class="exp-low-heading">20+</h1>
                      <p class="exp-low-para">Sed et orci volu</p>
                    </span>
                  </div>
                  <hr class="exp-2" />
                  <div class="exp-right-low">
                    <span class="exp-span">
                      <h1 class="exp-low-heading">36</h1>
                      <p class="exp-low-para">Sed et orci volu</p>
                    </span>
                    <span class="exp-span">
                      <h1 class="exp-low-heading">120</h1>
                      <p class="exp-low-para">Sed et orci volu</p>
                    </span>
                    <span class="exp-span">
                      <h1 class="exp-low-heading">6+</h1>
                      <p class="exp-low-para">Sed et orci volu</p>
                    </span>
                    <span class="exp-span">
                      <h1 class="exp-low-heading">3k</h1>
                      <p class="exp-low-para">Sed et orci volu</p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--experience area closed--> */}

        {/* <!--about us started--> */}
        <section class="about-us-area col-md-12">
          <div class="container">
            <div class="row justify-content-between">
              <div class="about-us-left-side col-lg-5 col-12">
                <h1 class="about-us-left-heading">About Us</h1>
                <p class="about-us-left-paragraph m-0">
                  Sed et orci volutpat, pharetra nunc eu, ultrices urna. Etiam
                  sed sapien vitae ipsum mollis condimentum a non dui. Praesent
                  ut tellus et justo euismod euismod. <br />
                  <br />
                  pharetra nunc eu, ultrices urna. Etiam sed sapien vitae ipsum
                  mollis condimentum a non dui. Praesent ut tellus et justo
                  euismod euismod. <br />
                  Etiam sed sapien vitae ipsum mollis condimentum a non
                  dui. Praesent ut tellus et jusf. Etiam sed sapien vitae ipsum
                  mollis condimentum a non dui. Praesent ut tellus
                </p>
                <button class="about-us-left-button">
                  View in detail <i class="bi bi-arrow-right"></i>
                </button>
              </div>
              <div class="about-us-right-side col-lg-6 col-12">
                <Image
                  class="about-image img-fluid"
                  src={rectangle54}
                  alt="frr"
                />
                <div class="about-box">
                  <span class="mb-4">
                    <h6>Join our team</h6>
                    <p class="about-box-paragraph m-0">
                      Etiam sed sapien vitae ipsum mollis
                    </p>
                  </span>
                  <div class="text-end about-box-button">
                    <button type="button" class="btn btn-primary">
                      Apply now
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--about us closed--> */}

        {/* <!--stats area started--> */}
        <section class="stats-area col-md-12">
          <div class="container">
            <div class="row">
              <div class="text-center mb-lg-5 mb-0">
                <h1 class="stats-area-heading">Our Work Stats</h1>
                <p class="stats-area-paragraph">
                  Pharetra nunc eu, ultrices urna. Etiam sed sapien vitae ipsum
                  mollis condimentum a non dui. Praesent ut tellus et justo
                  euismod euismod. Etiam sed sapien vitae ipsum mollis
                  condimentum a non dui. Praesent ut tellus et jusf. Etiam sed
                  sapien vitae ipsum mollis condimentum a non dui. Praesent ut
                  tellus
                </p>
              </div>

              <div class="stats-images">
                <div class="row">
                  <div class="col-lg-4 col-12 my-lg-0 my-3">
                    <div class="worklife-express">
                      <div class="work-logo">
                        <Image class="img-fluid" src={workLogo} />
                      </div>
                      <p>
                        Working with RadarSoft was great! Their professionalism
                        and expertise shone through, delivering results beyond
                        our expectations. Highly recommended!
                      </p>
                      <user>
                        <Image class="img-fluid" src={user_pic1} />
                        <span>
                          <h6>Tim David</h6>
                          <p>Vice President Abhyan</p>
                        </span>
                      </user>
                    </div>
                  </div>

                  <div class="col-lg-4 col-12 my-lg-0 my-3">
                    <div class="worklife-express">
                      <div class="work-logo">
                        <Image class="img-fluid" src={workLogo2} />
                      </div>
                      <p>
                        Working with RadarSoft was great! Their professionalism
                        and expertise shone through, delivering results beyond
                        our expectations. Highly recommended!
                      </p>
                      <user>
                        <Image class="img-fluid" src={user_pic1} />
                        <span>
                          <h6>Tim David</h6>
                          <p>Vice President Abhyan</p>
                        </span>
                      </user>
                    </div>
                  </div>

                  <div class="col-lg-4 col-12 my-lg-0 my-3">
                    <div class="worklife-express">
                      <div class="work-logo">
                        <Image class="img-fluid" src={workLogo3} />
                      </div>
                      <p>
                        Working with RadarSoft was great! Their professionalism
                        and expertise shone through, delivering results beyond
                        our expectations. Highly recommended!
                      </p>
                      <user>
                        <Image class="img-fluid" src={user_pic1} />
                        <span>
                          <h6>Tim David</h6>
                          <p>Vice President Abhyan</p>
                        </span>
                      </user>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* <!--stats area finished--> */}
      </main>
    </>
  );
}
