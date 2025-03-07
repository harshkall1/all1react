import React, { useState } from "react";
import p1 from '../assets/img/project/1.jpg'
import p2 from '../assets/img/project/2.jpg'
import p3 from '../assets/img/project/3.jpg'
import p4 from '../assets/img/project/4.jpg'
import p5 from '../assets/img/project/5.jpg'
import p6 from '../assets/img/project/6.jpg'
import p7 from '../assets/img/project/7.jpg'
import p8 from '../assets/img/project/8.jpg'
const LatestProjects = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupImage, setPopupImage] = useState("");

  const openPopup = (image) => {
    setPopupImage(image);
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
    setPopupImage("");
  };

  const projects = [
    {
      title: "Mobile Development",
      image: p1,
      link: "project-details.html",
    },
    {
      title: "UI UX Design",
      image:  p2,
      link: "project-details.html",
    },
    {
      title: "Digital Marketing",
      image:  p3,
      link: "project-details.html",
    },
    {
      title: "Web Development",
      image:  p4,
      link: "project-details.html",
    },
    {
      title: "IT Management",
      image:  p5,
      link: "project-details.html",
    },
    {
      title: "Business Security",
      image:  p6,
      link: "project-details.html",
    },
  ];
  

  return (
    <section className="latest-project-area pt-100">
      <div className="">
        <div className="row">
          <div className="col-lg-12 mb-50 text-center">
            <div className="section-heading">
              <h5>
                <strong>Our Latest Projects</strong>
              </h5>
            </div>
          </div>
        </div>
        <div className="row">
          {projects.map((project, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="project-item">
                <div className="thumbnail">
                  <img 
                    src={project.image} 
                    alt="project" 
                  />
                </div>
                <div className="info">
                  <div className="info-item">
                    <div className="left-info">
                      <h4>
                        <a href={project.link}>{project.title}</a>
                      </h4>
                      <a className="cat" href="#">
                        Technology
                      </a>
                    </div>
                    <div className="right-info">
                      <div className="img-gallery-popup">
                        <a
                          href="#!"
                          onClick={() => openPopup(project.image)}
                        >
                          <i className="fas fa-plus"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup Modal */}
      {isPopupOpen && (
        <div className="popup-overlay" onClick={closePopup}>
          <div className="popup-content">
            <img src={popupImage} alt="Popup" />
            <button className="close-popup" onClick={closePopup}>
              X
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default LatestProjects;
