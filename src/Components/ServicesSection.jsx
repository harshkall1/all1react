import React from 'react';

const services = [
  {
    id: 1,
    icon: "fas fa-mobile-alt",
    title: "Mobile Development",
    description: "We create high-performance mobile applications tailored to your business needs. From iOS to Android, our apps ensure seamless user experiences and cutting-edge functionality.",
    link: "#"
  },
  {
    id: 2,
    icon: "fas fa-pencil-ruler",
    title: "UI UX Design",
    description: "Crafting visually stunning and user-friendly designs that enhance engagement and usability. Our design approach ensures intuitive navigation and a flawless digital experience.",
    link: "#"
  },
  {
    id: 3,
    icon: "fas fa-bullhorn",
    title: "Digital Marketing",
    description: "Boost your brand’s online presence with data-driven marketing strategies. We optimize campaigns to reach the right audience and drive conversions.",
    link: "#"
  },
  {
    id: 4,
    icon: "fas fa-code",
    title: "Web Development",
    description: "Building responsive and scalable websites that deliver an exceptional user experience. From eCommerce to enterprise solutions, we create dynamic web applications.",
    link: "#"
  },
  {
    id: 5,
    icon: "far fa-thumbs-up",
    title: "IT Management",
    description: "Ensuring seamless IT operations with proactive monitoring, security, and cloud solutions. Our IT management services help businesses stay ahead in the digital world.",
    link: "#"
  },
  {
    id: 6,
    icon: "fas fa-chart-line",
    title: "Business Security",
    description: "Protecting businesses with advanced security solutions, ensuring data privacy and safeguarding digital assets against cyber threats.",
    link: "#"
  }
];

const ServicesSection = () => {
  return (
    <section className="services-area section-padding-2">
      <div className="container">
        {/* Section Heading */}
        <div className="row">
          <div className="col-lg-12 mb-50 text-center">
            <div className="section-heading">
              <h5>Our Services</h5>
              <h2 className='ctm-acnt-h2'>
                Our IT Solutions & Services for <br />
                Your Business
              </h2>
            </div>
          </div>
        </div>

        {/* Services List */}
        <div className="row">
          {services.map(service => (
            <div key={service.id} className="col-lg-4 col-md-6 mb-30">
              <div className="info-box-1">
                <div className="info-box-1-inner">
                  <div className="icon">
                    <i className={service.icon}></i>
                  </div>
                  <div className="content">
                    <h3><a href={service.link}>{service.title}</a></h3>
                    <p>{service.description}</p>
                    <a href={service.link} className="link">Read Details</a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
