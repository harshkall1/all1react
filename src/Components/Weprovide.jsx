import React from 'react';

const WeProvide = () => {
  return (
    <section
      className="web-prodive"
      style={{
        backgroundImage: 'url(https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2)',
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-8 offset-lg-2 text-center">
            <div className="we-provide-content">
              <h2>
                We Provide Outsourced IT Services For Small & Mid-Sized Business
              </h2>
              <p>
                Appropriate for your specific business, making it easy for you to have quality IT services. What We Do
              </p>
              <a className="button-2" href="services.html">
                More Services
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeProvide;
