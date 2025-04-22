
import React from 'react'

export default function FooterOne() {
  return (
    <>
      <section className="footer">
        <div className="container">

          <div className="row footer-bottom">
            <div className="col-xl-4 col-lg-4 col-12 wow fadeIn">
              <div className="single-footer">
                <div className="about-footer">
                  <div className="footer-logo">
                    <a href="#"><img src="assets/img/footer-logo.svg" alt="Edumon" /></a>
                  </div>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit varius congue Morbi
                  </p>

                  <div className="fot-social">
                    <span>Follow Us On :</span>
                    <ul>
                      <li>
                        <a href="#"><i className="bx bxl-facebook"></i></a>
                      </li>

                      <li>
                        <a href="#"><i className="bx bxl-twitter"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="bx bxl-linkedin"></i></a>
                      </li>
                      <li>
                        <a href="#"><i className="bx bxl-youtube"></i></a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-xl-4 col-lg-4 col-12 wow fadeIn">
              <div className="single-footer">
                <h3 className="footer-title">Useful Links</h3>
                <ul>
                  <li><a href="/">Home</a></li>
                  <li><a href="/about">About Us</a></li>
                </ul>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 col-12 wow fadeIn">
              <div className="single-footer">
                <h3 className="footer-title">Contact Us</h3>
                <div className="contact-info">
                  <p>
                    <i className='bx bx-map' ></i>
                    <span>15 Rose StreetHarvey, IL <br />
                      60426 USA</span>
                  </p>
                  <p>
                    <i className='bx bx-phone' ></i>
                    <span>
                      708-210-9101</span>
                  </p>

                  <p>
                    <i className='bx bx-envelope'></i>
                    <span>
                      example@education.com</span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright text-center wow fadeIn">
          <p>Copyright © 2024 <a href="#">Edumon</a>. All rights reserved.</p>
        </div>
      </section>
    </>
  )
}
