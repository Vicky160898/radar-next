import Image from "next/image";
import Link from "next/link";
import icon from "../../../../../public/assets/logo/icon.png";

const Footer = () => {
  return (
    <>
      <footer class="footer footer-color">
        <section class="py-4 py-md-5 py-xl-8 border-top border-light">
          <div class="container overflow-hidden">
            <div class="row gy-4 gy-lg-0 justify-content-xl-between">
              <div class="col-12 col-md-4 col-lg-4 col-xl-3">
                <div class="widget">
                  <Link href="#!">
                    <Image
                      src={icon}
                      alt="BootstrapBrain Logo"
                      width="175"
                      height="57"
                    />
                  </Link>
                  <ul class="list-unstyled footer-bottom-style">
                    <li class="mb-4">
                      <Link
                        href="#!"
                        class="text-decoration-none footer-sub-title"
                      >
                        info@radarsoft.tech
                      </Link>
                    </li>
                    <li class="mb-4">
                      <Link
                        href="#!"
                        class="text-decoration-none footer-sub-title"
                      >
                        +91 9238488484 +91 9238488484
                      </Link>
                    </li>
                    <li class="">
                      <Link
                        href="#!"
                        class="text-decoration-none footer-sub-title"
                      >
                        B-309, 3rd Floor, Nyati Empress, Viman Nagar, Pune,
                        Maharashtra 411014
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-md-3 col-lg-3 col-xl-2">
                <div class="widget">
                  <h4 class="widget-title title-color mb-4">Quick Links</h4>
                  <ul class="list-unstyled">
                    <li class="mb-3">
                      <Link href="#!" class="text-decoration-none sub-title">
                        Home
                      </Link>
                    </li>
                    <li class="mb-3">
                      <Link href="#!" class="text-decoration-none sub-title">
                        IT Services
                      </Link>
                    </li>
                    <li class="mb-2">
                      <Link href="#!" class="text-decoration-none sub-title">
                        Careers
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-md-3 col-lg-3 col-xl-2">
                <div class="widget">
                  <h4 class="widget-title mb-4 title-color">Company</h4>
                  <ul class="list-unstyled">
                    <li class="mb-3">
                      <Link href="#!" class="text-decoration-none sub-title">
                        About us
                      </Link>
                    </li>
                    <li class="mb-3">
                      <Link href="#!" class="text-decoration-none sub-title">
                        Leadership
                      </Link>
                    </li>
                    <li class="mb-2">
                      <Link href="#!" class="text-decoration-none sub-title">
                        Why choose us
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="col-12 col-md-2 col-lg-2 col-xl-3">
                <div class="widget">
                  <h4 class="widget-title mb-4 title-color">Support</h4>
                  <ul class="list-unstyled">
                    <li class="mb-3">
                      <Link href="#!" class="text-decoration-none sub-title">
                        Contact Us
                      </Link>
                    </li>
                    <li class="mb-3">
                      <Link href="#!" class="text-decoration-none sub-title">
                        FAQs
                      </Link>
                    </li>
                    <li class="mb-2">
                      <Link href="#!" class="text-decoration-none sub-title">
                        Site Map
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- Copyright - Bootstrap Brain Component --> */}
        <div class="">
          <div class="container py-4 py-md-5 py-xl-4 overflow-hidden border-top border-top-color">
            <div class="row gy-4 gy-md-0 align-items-md-center">
              <div class="col-xs-12 col-md-7 order-1 order-md-0 left-footer-padding">
                <div class="copyright text-md-start footer-sub-title">
                  © 2024 RadarSoft Technologies. All Rights Reserved.
                </div>
              </div>

              <div class="col-xs-12 col-md-5 order-0 order-md-1 right-footer-padding">
                <div class="social-media-wrapper">
                  <div class="last-logo">
                    <i class="fa-brands fa-whatsapp"></i>
                    <i class="fa-brands fa-facebook"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin"></i>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
