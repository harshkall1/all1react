import React from 'react';
import { Link } from 'react-router-dom';

const WorksAbout = () => {
  const content = {
    heading: "Works About",
    subheading: "Trusted by 4,500+ Happy Customers",
    description: "It is a well-known fact that a reader's attention may be drawn away by the readable content of a page when analyzing its layout. The purpose of using Lorem Ipsum is to maintain a natural-looking distribution of letters, ensuring a visually balanced design.",
    listItems: [
      "100% Client Satisfaction",
      "World Class Worker"
    ],
    buttonText: "Completed Projects",
    buttonLink: "/projects",
    imageUrl: "https://images.pexels.com/photos/7581126/pexels-photo-7581126.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    videoLink: "https://www.youtube.com/watch?v=sY2bdbsy3rg"
  };

  return (
    <section className="works-about-area section-padding">
      <div className="container">
        <div className="row">
          {/* Content */}
          <div className="col-lg-6 align-self-center">
            <div className="works-about-content">
              <h5>{content.heading}</h5>
              <h2>{content.subheading}</h2>
              <p>{content.description}</p>
              <ul>
                {content.listItems.map((item, index) => (
                  <li key={index}><i className="fas fa-check-circle"></i> {item}</li>
                ))}
              </ul>
              <div className="btn-aa  ctm-btn-aa">
                <Link className="button-2" to={content.buttonLink}>{content.buttonText}</Link>
              </div>
            </div>
          </div>

          {/* Thumbnail */}
          <div className="col-lg-6 align-self-center">
            <div className="works-about-thumbnail">
              <div className="thumbnail">
                <img src={content.imageUrl} alt="img" />
              </div>

              {/* Uncomment if you want to show a video */}
              {/* <div className="works-about-video">
                <div className="video-btn">
                  <a href={content.videoLink}><i className="fas fa-play"></i></a>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksAbout;
