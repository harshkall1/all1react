import React, { useState } from 'react';
import about from '../assets/img/about.jpg'
import { Link } from 'react-router-dom';
const AboutSection = () => {
  const [activeTab, setActiveTab] = useState('aboutus');

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  return (
    <section className="about-area section-padding section-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="about-thumbnail">
              <img src={about} alt="about" />
            </div>
          </div>
          <div className="col-lg-6 align-self-center">
            <div className="about-content">
              <h5>About Our Company</h5>
              <h2>Logik – Expert IT Consulting for Digital Success</h2>
              <div className="about-content-navs-tab">
                <ul  className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'aboutus' ? 'active' : ''}`}
                      onClick={() => handleTabClick('aboutus')}
                      type="button"
                    >
                      About Us
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'mission' ? 'active' : ''}`}
                      onClick={() => handleTabClick('mission')}
                      type="button"
                    >
                      Our Mission
                    </button>
                  </li>
                  <li className="nav-item" role="presentation">
                    <button
                      className={`nav-link ${activeTab === 'vision' ? 'active' : ''}`}
                      onClick={() => handleTabClick('vision')}
                      type="button"
                    >
                      Our Vision
                    </button>
                  </li>
                </ul>
                <div className="tab-content" data-aos="fade-up"
     data-aos-duration="2000" id="myTabContent">
                  <div
                    className={`tab-pane fade ${activeTab === 'aboutus' ? 'show active' : ''}`}
                    id="aboutus"
                    role="tabpanel"
                  >
                    <div className="about-content-navs-tab-content-full">
                      <div className="title">
                        <h2>25</h2>
                        <span>Years of Experience</span>
                      </div>
                      <p>
                        We craft modern web and mobile applications that bridge the gap between people
                        and businesses, delivering seamless, fast, and accessible digital experiences.
                      </p>
                      <ul>
                        <li>
                          <i className="far fa-check-square"></i>UI/UX Design Excellence – Creating intuitive and engaging user experiences.
                        </li>
                        <li>
                          <i className="far fa-check-square"></i>Software Consulting – Providing strategic IT guidance for optimized solutions.
                        </li>
                      </ul>
                      <Link className="button-1" to="/about">
                        View Details
                      </Link>
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade ${activeTab === 'mission' ? 'show active' : ''}`}
                    id="mission"
                    role="tabpanel"
                  >
                    <div className="about-content-navs-tab-content-full">
                      <div className="title">
                        <h2>20</h2>
                        <span>More Than UI/UX</span>
                      </div>
                      <p>
                        Our mission is to develop innovative and contemporary web and mobile applications that connect the world by enabling faster and more efficient services. We strive to leverage cutting-edge technology to create seamless digital experiences that empower businesses and individuals alike.
                      </p>
                      <ul>
                        <li>
                          <i className="far fa-check-square"></i> Holistic Web Solutions
                        </li>
                        <li>
                          <i className="far fa-check-square"></i> Software Consulting
                        </li>
                      </ul>
                      <Link className="button-1" to="/about">

                        View Details
                      </Link>
                    </div>
                  </div>
                  <div
                    className={`tab-pane fade ${activeTab === 'vision' ? 'show active' : ''}`}
                    id="vision"
                    role="tabpanel"
                  >
                    <div className="about-content-navs-tab-content-full">
                      <div className="title">
                        <h2>16</h2>
                        <span>Delivering Consistent Promises</span>
                      </div>
                      <p>
                        Our vision is to be a global leader in innovative web and mobile solutions, transforming the way people and businesses connect. We aspire to create a smarter, more connected world by leveraging emerging technologies, ensuring seamless user experiences, and driving digital transformation.
                      </p>
                      <ul>
                        <li>
                          <i className="far fa-check-square"></i> Holistic Web Solutions
                        </li>
                        <li>
                          <i className="far fa-check-square"></i> Software Consulting
                        </li>
                      </ul>
                      <Link className="button-1" to="/about">

                        View Details
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
