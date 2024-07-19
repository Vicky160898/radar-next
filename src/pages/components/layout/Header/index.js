import Image from "next/image";
import navIcon from "../../../../../public/assets/logo/nav-icon.png";
import Link from "next/link";

const Header = () => {



    
  return (
    <>
      <header>
        <nav class="navbar navbar-expand-lg navbar-light nav-bg py-3">
          <div class="container d-flex justify-content-between align-items-center">
            <Link href="#!" class="navbar-brand">
              <Image
                src={navIcon}
                alt="BootstrapBrain Logo"
                width="175"
                height="57"
              />
            </Link>
            <button
              type="button"
              class="navbar-toggler"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarCollapse">
              <div class="navbar-nav nav-center-width d-flex justify-content-between">
                <Link href="#" class="nav-item nav-link list-style">
                  Home
                </Link>
                {/* <!-- mobile view --> */}
                <div
                  class="nav-mobile-accordion-area accordion accordion-flush d-lg-none"
                  id="accordionFlushExample"
                >
                  <div class="accordion-item">
                    <h2 class="accordion-header" id="flush-headingOne">
                      <button
                        class="accordion-button nav-item nav-link collapsed"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#flush-collapseOne"
                        aria-expanded="false"
                        aria-controls="flush-collapseOne"
                      >
                        Services
                      </button>
                    </h2>
                    <div
                      id="flush-collapseOne"
                      class="accordion-collapse collapse"
                      aria-labelledby="flush-headingOne"
                      data-bs-parent="#accordionFlushExample"
                    >
                      <div class="accordion-body">
                        {/* <!-- Nested Accordion --> */}
                        <div class="accordion" id="nestedAccordion">
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="nested-headingOne">
                              <button
                                class="accordion-button nav-item nav-link collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#nested-collapseOne"
                                aria-expanded="false"
                                aria-controls="nested-collapseOne"
                              >
                                Design & Development Services
                              </button>
                            </h2>
                            <div
                              id="nested-collapseOne"
                              class="accordion-collapse collapse"
                              aria-labelledby="nested-headingOne"
                              data-bs-parent="#nestedAccordion"
                            >
                              <div class="accordion-body">
                                <ul class="list-unstyled mobile-custom-list px-2">
                                  <li class="">
                                    <Link
                                      href="#"
                                      class="text-decoration-none nav-right-sub-heading"
                                    >
                                      Custom Web Development
                                    </Link>
                                  </li>
                                  <li class="">
                                    <Link
                                      href="#"
                                      class="text-decoration-none nav-right-sub-heading"
                                    >
                                      Web Development
                                    </Link>
                                  </li>
                                  <li class="">
                                    <Link
                                      href="#"
                                      class="text-decoration-none nav-right-sub-heading"
                                    >
                                      eCommerce Development
                                    </Link>
                                  </li>
                                  <li class="">
                                    <Link
                                      href="#"
                                      class="text-decoration-none nav-right-sub-heading"
                                    >
                                      Mobile App Development
                                    </Link>
                                  </li>
                                  <li class="">
                                    <Link
                                      href="#"
                                      class="text-decoration-none nav-right-sub-heading"
                                    >
                                      Dedicated Development Team
                                    </Link>
                                  </li>
                                  <li class="">
                                    <Link
                                      href="#"
                                      class="text-decoration-none nav-right-sub-heading"
                                    >
                                      API Development
                                    </Link>
                                  </li>
                                  <li class="">
                                    <Link
                                      href="#"
                                      class="text-decoration-none nav-right-sub-heading"
                                    >
                                      Web Design
                                    </Link>
                                  </li>
                                  <li class="">
                                    <Link
                                      href="#"
                                      class="text-decoration-none nav-right-sub-heading"
                                    >
                                      UI/UX Design
                                    </Link>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                          <div class="accordion-item">
                            <h2 class="accordion-header" id="nested-headingTwo">
                              <button
                                class="accordion-button nav-item nav-link collapsed"
                                type="button"
                                data-bs-toggle="collapse"
                                data-bs-target="#nested-collapseTwo"
                                aria-expanded="false"
                                aria-controls="nested-collapseTwo"
                              >
                                Expertise in Technologies
                              </button>
                            </h2>
                            <div
                              id="nested-collapseTwo"
                              class="accordion-collapse collapse"
                              aria-labelledby="nested-headingTwo"
                              data-bs-parent="#nestedAccordion"
                            >
                              <div class="accordion-body">
                                {/* <!-- Second Level Nested Accordion --> */}
                                <div
                                  class="accordion"
                                  id="secondLevelNestedAccordion"
                                >
                                  <div class="accordion-item">
                                    <h2
                                      class="accordion-header"
                                      id="second-level-headingOne"
                                    >
                                      <button
                                        class="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#second-level-collapseOne"
                                        aria-expanded="false"
                                        aria-controls="second-level-collapseOne"
                                      >
                                        CMS
                                      </button>
                                    </h2>
                                    <div
                                      id="second-level-collapseOne"
                                      class="accordion-collapse collapse"
                                      aria-labelledby="second-level-headingOne"
                                      data-bs-parent="#secondLevelNestedAccordion"
                                    >
                                      <div class="accordion-body">
                                        <ul class="list-unstyled mobile-custom-list px-3">
                                          <li>
                                            <Link
                                              href="#"
                                              class="text-decoration-none nav-right-sub-heading"
                                            >
                                              WordPress
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="#"
                                              class="text-decoration-none nav-right-sub-heading"
                                            >
                                              Joomla
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="#"
                                              class="text-decoration-none nav-right-sub-heading"
                                            >
                                              Webflow
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="accordion-item">
                                    <h2
                                      class="accordion-header"
                                      id="second-level-headingTwo"
                                    >
                                      <button
                                        class="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#second-level-collapseTwo"
                                        aria-expanded="false"
                                        aria-controls="second-level-collapseTwo"
                                      >
                                        eCommerce
                                      </button>
                                    </h2>
                                    <div
                                      id="second-level-collapseTwo"
                                      class="accordion-collapse collapse"
                                      aria-labelledby="second-level-headingTwo"
                                      data-bs-parent="#secondLevelNestedAccordion"
                                    >
                                      <div class="accordion-body">
                                        <ul class="list-unstyled mobile-custom-list px-3">
                                          <li>
                                            <Link
                                              href="#"
                                              class="text-decoration-none nav-right-heading nav-right-sub-heading"
                                            >
                                              WooCommerce
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="#"
                                              class="text-decoration-none nav-right-sub-heading"
                                            >
                                              Shopify
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="#"
                                              class="text-decoration-none nav-right-sub-heading"
                                            >
                                              Magento
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  <div class="accordion-item">
                                    <h2
                                      class="accordion-header"
                                      id="third-level-headingOne"
                                    >
                                      <button
                                        class="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#third-level-collapseOne"
                                        aria-expanded="false"
                                        aria-controls="third-level-collapseOne"
                                      >
                                        Backend
                                      </button>
                                    </h2>
                                    <div
                                      id="third-level-collapseOne"
                                      class="accordion-collapse collapse"
                                      aria-labelledby="third-level-headingOne"
                                      data-bs-parent="#secondLevelNestedAccordion"
                                    >
                                      <div class="accordion-body">
                                        <ul class="list-unstyled mobile-custom-list px-3">
                                          <li>
                                            <Link
                                              href="#"
                                              class="text-decoration-none nav-right-sub-heading"
                                            >
                                              PHP
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="#"
                                              class="text-decoration-none nav-right-sub-heading"
                                            >
                                              Laravel
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="#"
                                              class="text-decoration-none nav-right-sub-heading"
                                            >
                                              Node.js
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="#"
                                              class="text-decoration-none nav-right-sub-heading"
                                            >
                                              CodeIgniter
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="#"
                                              class="text-decoration-none nav-right-sub-heading"
                                            >
                                              Symfony
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="#"
                                              class="text-decoration-none nav-right-sub-heading"
                                            >
                                              Python
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="accordion-item">
                                    <h2
                                      class="accordion-header"
                                      id="fourth-level-headingOne"
                                    >
                                      <button
                                        class="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#fourth-level-collapseOne"
                                        aria-expanded="false"
                                        aria-controls="fourth-level-collapseOne"
                                      >
                                        Frontend
                                      </button>
                                    </h2>
                                    <div
                                      id="fourth-level-collapseOne"
                                      class="accordion-collapse collapse"
                                      aria-labelledby="fourth-level-headingOne"
                                      data-bs-parent="#secondLevelNestedAccordion"
                                    >
                                      <div class="accordion-body">
                                        <ul class="list-unstyled mobile-custom-list px-3">
                                          <li>
                                            <Link
                                              href="#"
                                              class="text-decoration-none nav-right-sub-heading"
                                            >
                                              HTML
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="#"
                                              class="text-decoration-none nav-right-sub-heading"
                                            >
                                              CSS3
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="#"
                                              class="text-decoration-none nav-right-sub-heading"
                                            >
                                              JavaScript
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="#"
                                              class="text-decoration-none nav-right-sub-heading"
                                            >
                                              React
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="#"
                                              class="text-decoration-none nav-right-sub-heading"
                                            >
                                              Vue.js
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="#"
                                              class="text-decoration-none nav-right-sub-heading"
                                            >
                                              Angular
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="accordion-item">
                                    <h2
                                      class="accordion-header"
                                      id="fifth-level-headingOne"
                                    >
                                      <button
                                        class="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#fifth-level-collapseOne"
                                        aria-expanded="false"
                                        aria-controls="fifth-level-collapseOne"
                                      >
                                        Mobile App
                                      </button>
                                    </h2>
                                    <div
                                      id="fifth-level-collapseOne"
                                      class="accordion-collapse collapse"
                                      aria-labelledby="fifth-level-headingOne"
                                      data-bs-parent="#secondLevelNestedAccordion"
                                    >
                                      <div class="accordion-body">
                                        <ul class="list-unstyled mobile-custom-list px-3">
                                          <li>
                                            <Link
                                              href="#"
                                              class="text-decoration-none nav-right-sub-heading"
                                            >
                                              Android
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="#"
                                              class="text-decoration-none nav-right-sub-heading"
                                            >
                                              iOS
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="#"
                                              class="text-decoration-none nav-right-sub-heading"
                                            >
                                              React Native
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="#"
                                              class="text-decoration-none nav-right-sub-heading"
                                            >
                                              Flutter
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>

                                  <div class="accordion-item">
                                    <h2
                                      class="accordion-header"
                                      id="sixth-level-headingOne"
                                    >
                                      <button
                                        class="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#sixth-level-collapseOne"
                                        aria-expanded="false"
                                        aria-controls="sixth-level-collapseOne"
                                      >
                                        Other
                                      </button>
                                    </h2>
                                    <div
                                      id="sixth-level-collapseOne"
                                      class="accordion-collapse collapse"
                                      aria-labelledby="sixth-level-headingOne"
                                      data-bs-parent="#secondLevelNestedAccordion"
                                    >
                                      <div class="accordion-body">
                                        <ul class="list-unstyled mobile-custom-list px-3">
                                          <li>
                                            <Link
                                              href="#"
                                              class="text-decoration-none nav-right-sub-heading"
                                            >
                                              Database
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="#"
                                              class="text-decoration-none nav-right-sub-heading"
                                            >
                                              Cloud & AWS
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="#"
                                              class="text-decoration-none nav-right-sub-heading"
                                            >
                                              Testing QA
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="#"
                                              class="text-decoration-none nav-right-sub-heading"
                                            >
                                              Website Maintenance
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="#"
                                              class="text-decoration-none nav-right-sub-heading"
                                            >
                                              Digital Marketing
                                            </Link>
                                          </li>
                                          <li>
                                            <Link
                                              href="#"
                                              class="text-decoration-none nav-right-sub-heading"
                                            >
                                              PPC
                                            </Link>
                                          </li>
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                  {/* <!-- End Second Level Nested Accordion --> */}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- desktop view --> */}
                <div class="nav-item dropdown d-lg-block">
                  <Link
                    href="#"
                    class="nav-link dropdown-toggle list-style"
                    data-bs-toggle="dropdown"
                  >
                    Services
                  </Link>

                  <div class="dropdown-menu px-2">
                    <div class="row justify-content-xl-between px-2">
                      <div class="col-lg-3 col-xl-3 border-bottom nav-title-first">
                        <Link href="#" class="text-decoration-none main-title">
                          Design & Development Services
                        </Link>
                      </div>
                      <div class="col-lg-9 col-xl-9 border-bottom nav-title-second">
                        <Link href="#" class="text-decoration-none main-title">
                          Expertise in Technologies
                        </Link>
                      </div>
                    </div>
                    <div class="row justify-content-xl-between px-2">
                      <div class="col-lg-3 col-xl-3 nav-list-left">
                        <ul class="list-unstyled mt-3 px-2">
                          <li class="mb-3">
                            <Link
                              href="#"
                              class="mb-2 mt-3 text-decoration-none nav-right-sub-heading"
                            >
                              Custom Web Development
                            </Link>
                          </li>
                          <li class="mb-3">
                            <Link
                              href="#"
                              class="mb-2 text-decoration-none nav-right-sub-heading"
                            >
                              Web Development
                            </Link>
                          </li>
                          <li class="mb-3">
                            <Link
                              href="#"
                              class="mb-2 text-decoration-none nav-right-sub-heading"
                            >
                              eCommerce Development
                            </Link>
                          </li>
                          <li class="mb-3">
                            <Link
                              href="#"
                              class="mb-2 text-decoration-none nav-right-sub-heading"
                            >
                              Mobile App Development
                            </Link>
                          </li>
                          <li class="mb-3">
                            <Link
                              href="#"
                              class="mb-2 text-decoration-none nav-right-sub-heading"
                            >
                              Dedicated Development Team
                            </Link>
                          </li>
                          <li class="mb-3">
                            <Link
                              href="#"
                              class="mb-2 text-decoration-none nav-right-sub-heading"
                            >
                              API Development
                            </Link>
                          </li>
                          <li class="mb-3">
                            <Link
                              href="#"
                              class="mb-2 text-decoration-none nav-right-sub-heading"
                            >
                              Web Design
                            </Link>
                          </li>
                          <li class="mb-3">
                            <Link
                              href="#"
                              class="mb-4 text-decoration-none nav-right-sub-heading"
                            >
                              UI/UX Design
                            </Link>
                          </li>
                        </ul>
                      </div>

                      <div class="col-lg-9 col-xl-9 nav-list-right">
                        <div class="row">
                          <div class="col-lg-2 col-xl-2 nav-list-col-1">
                            <ul class="list-unstyled custom-list mt-3">
                              <li class="mb-2">
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-heading"
                                >
                                  CMS
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-sub-heading"
                                >
                                  WordPress
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-sub-heading"
                                >
                                  Joomla
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-sub-heading"
                                >
                                  Webflow
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div class="col-lg-2 col-xl-2 nav-list-col-2">
                            <ul class="list-unstyled custom-list mt-3">
                              <li class="mb-2">
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-heading"
                                >
                                  eCommerce
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-heading nav-right-sub-heading"
                                >
                                  WooCommerce
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-sub-heading"
                                >
                                  Shopify
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-sub-heading"
                                >
                                  Magento
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div class="col-lg-2 col-xl-2 nav-list-col-3">
                            <ul class="list-unstyled custom-list mt-3">
                              <li class="mb-2">
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-heading"
                                >
                                  Backend
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-sub-heading"
                                >
                                  PHP
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-sub-heading"
                                >
                                  Laravel
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-sub-heading"
                                >
                                  Node.js
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-sub-heading"
                                >
                                  CodeIgniter
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-sub-heading"
                                >
                                  Symfony
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-sub-heading"
                                >
                                  Python
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div class="col-lg-2 col-xl-2 nav-list-col-4">
                            <ul class="list-unstyled custom-list mt-3">
                              <li class="mb-2">
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-heading"
                                >
                                  Frontend
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-sub-heading"
                                >
                                  HTML
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-sub-heading"
                                >
                                  CSS3
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-sub-heading"
                                >
                                  JavaScript
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-sub-heading"
                                >
                                  React
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-sub-heading"
                                >
                                  Vue.js
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-sub-heading"
                                >
                                  Angular
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div class="col-lg-2 col-xl-2 nav-list-col-5">
                            <ul class="list-unstyled custom-list mt-3">
                              <li class="mb-2">
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-heading"
                                >
                                  Mobile App
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-sub-heading"
                                >
                                  Android
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-sub-heading"
                                >
                                  iOS
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-sub-heading"
                                >
                                  React Native
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-sub-heading"
                                >
                                  Flutter
                                </Link>
                              </li>
                            </ul>
                          </div>
                          <div class="col-lg-2 col-xl-2 nav-list-col-6">
                            <ul class="list-unstyled custom-list mt-3">
                              <li class="mb-2">
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-heading"
                                >
                                  Other
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-sub-heading"
                                >
                                  Database
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-sub-heading"
                                >
                                  Cloud & AWS
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-sub-heading"
                                >
                                  Testing QA
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-sub-heading"
                                >
                                  Website Maintenance
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-sub-heading"
                                >
                                  Digital Marketing
                                </Link>
                              </li>
                              <li>
                                <Link
                                  href="#"
                                  class="text-decoration-none nav-right-sub-heading"
                                >
                                  PPC
                                </Link>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <Link href="#" class="nav-item nav-link list-style">
                  Case studies
                </Link>
                <Link
                  href="#"
                  class="nav-item nav-link list-style"
                  tabindex="-1"
                >
                  About us
                </Link>
                <Link
                  href="#"
                  class="nav-item nav-link list-style"
                  tabindex="-1"
                >
                  Careers
                </Link>
              </div>
              <div class="navbar-nav">
                <button type="button" class="btn btn-color py-2 px-4">
                  Book an appointment
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
