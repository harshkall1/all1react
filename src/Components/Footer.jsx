import React from 'react';
import b1 from '../assets/img/blog/1.jpg'
import b2 from '../assets/img/blog/2.jpg'
import b3 from '../assets/img/blog/3.jpg'


const Footer = () => {
  return (
    <footer className="footer">
      {/* Footer Top */}
      <div className="footer-top pt-70 pb-20">
        <div className="container">
          <div className="row">
            {/* About Company */}
            <div className="col-lg-3 col-md-6 mb-30">
              <div className="footer-widgets-single">
                <h2 className="title">About Company</h2>
                <p>
                  Happen active county. Winding for the morning am shyness evident to poor. Garrets because elderly new.
                </p>
                <div className="footer-call-btn">
                  <div className="icon">
                    <i className="fas fa-phone-volume"></i>
                  </div>
                  <div className="con">
                    <p>Talk To Our Support</p>
                    <span>
                      <a href="tel:+1-843-222-1455" style={{color : "#fff", textDecoration: "none"}}>+1-843-222-1455</a>
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-lg-3 col-md-6 mb-30">
              <div className="footer-widgets-single">
                <h2 className="title">Quick Links</h2>
                <ul>
                  <li><a href="#">Make Appointment</a></li>
                  <li><a href="#">Customer Services</a></li>
                  <li><a href="#">Department</a></li>
                  <li><a href="#">About Company</a></li>
                  <li><a href="#">Our Case Studies</a></li>
                  <li><a href="#">Free Consultation</a></li>
                </ul>
              </div>
            </div>

            {/* Solutions */}
            <div className="col-lg-3 col-md-6 mb-30">
              <div className="footer-widgets-single">
                <h2 className="title">Solutions</h2>
                <ul>
                  <li><a href="#">Our Business Growth</a></li>
                  <li><a href="#">Leadership</a></li>
                  <li><a href="#">Cloud Migration</a></li>
                  <li><a href="#">Software Development</a></li>
                  <li><a href="#">Mobile Development</a></li>
                  <li><a href="#">Digital Solutions</a></li>
                </ul>
              </div>
            </div>

            {/* Latest News */}
            <div className="col-lg-3 col-md-6 mb-30">
              <div className="footer-widgets-single">
                <h2 className="title">Latest News</h2>
                <div className="f-w-l-blog">
                  {/* Single Blog */}
                  <div className="single">
                    <div className="thumbnail">
                      <a href="single.html">
                        <img
                          src={b1}
                          alt="blog"
                        />
                      </a>
                    </div>
                    <div className="cont">
                      <h4><a href="single.html">5 Easy Ways to Improve Your Web Security</a></h4>
                      <span><i className="far fa-calendar-alt"></i> 27 Feb 2025</span>
                    </div>
                  </div>

                  {/* Single Blog */}
                  <div className="single">
                    <div className="thumbnail">
                      <a href="single.html">
                        <img
                          src={b2}
                          alt="blog"
                        />
                      </a>
                    </div>
                    <div className="cont">
                      <h4><a href="single.html">5 Easy Ways to Improve Your Web Security</a></h4>
                      <span><i className="far fa-calendar-alt"></i> 27 Feb 2025</span>
                    </div>
                  </div>

                  {/* Single Blog */}
                  <div className="single">
                    <div className="thumbnail">
                      <a href="single.html">
                        <img
                          src={b3}
                          alt="blog"
                        />
                      </a>
                    </div>
                    <div className="cont">
                      <h4><a href="single.html">5 Easy Ways to Improve Your Web Security</a></h4>
                      <span><i className="far fa-calendar-alt"></i> 27 Feb 2025</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom pt-30 pb-30">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="copy-text">
                <p>Copyright © 2025 <a href="#" style={{textDecoration: "none"}}>ALL 1 DIGITAL</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
