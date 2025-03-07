import React, { useState } from "react";
import p1 from '../assets/img/project/1.jpg';
import p2 from '../assets/img/project/2.jpg';
import p3 from '../assets/img/project/3.jpg';
import p4 from '../assets/img/project/4.jpg';
import p5 from '../assets/img/project/5.jpg';
import p6 from '../assets/img/project/6.jpg';
import './style.css'
const Portfolio = () => {
  const [filteredCategory, setFilteredCategory] = useState("all");
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
    { id: 1, title: "Mobile Development", category: "design", image: p1 },
    { id: 2, title: "UI UX Design", category: "software", image: p2 },
    { id: 3, title: "Digital Marketing", category: "development", image: p3 },
    { id: 4, title: "Web Development", category: "design", image: p4 },
    { id: 5, title: "IT Management", category: "software", image: p5 },
    { id: 6, title: "Business Security", category: "design", image: p6 }
  ];

  const categories = ["all", "design", "development", "software"];

  const filteredProjects =
    filteredCategory === "all"
      ? projects
      : projects.filter((project) => project.category === filteredCategory);

  return (
    <section className="portfolio-area section-padding">
      <div className="container">
        <div className="text-center mb-5">
          <ul className="portfolio-tab-area">
            {categories.map((category) => (
              <li
                key={category}
                className={`portfolio-tab-btn ${filteredCategory === category ? "active-tab" : "non-active"
                  }`}
                onClick={() => setFilteredCategory(category)}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </li>
            ))}
          </ul>
        </div>
        <div className="row">
          {filteredProjects.map((project) => (
            <div className="col-lg-4 col-md-6" key={project.id}>
              <div className="project-item" style={{ marginBottom: "20px" }}>

                <div className="thumbnail">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-auto"
                  />
                </div>
                <div className="info">
                  <div className="info-item">
                    <div className="left-info">
                      <h4>
                        <a href={project.link || "#"}>{project.title}</a>
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

export default Portfolio;
