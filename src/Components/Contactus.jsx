import React, { useState } from 'react';
import image from '../assets/img/contact.jpg'
const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send the form data to an API or email service.
    alert('Message Sent!');
  };

  return (
    <section className="contact-area section-padding">
      <div className="container">
        <div className="row">
          {/* Contact Form */}
          <div className="col-lg-8 align-self-center">
            <div className="contact-form">
              <h2>Get In Touch</h2>
              <form
                id="contact-form"
                action="https://preetheme.com/html/all 1 digital/mail.php"
                method="POST"
                onSubmit={handleSubmit}
              >
                <div className="row">
                  <div className="col-md-6">
                    <div className="single-input">
                      <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                      <i className="fas fa-user"></i>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-input">
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      <i className="far fa-envelope"></i>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-input">
                      <input
                        type="text"
                        name="phone"
                        placeholder="Your Phone"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                      <i className="fas fa-mobile-alt"></i>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="single-input">
                      <input
                        type="text"
                        name="subject"
                        placeholder="Your Subjects"
                        value={formData.subject}
                        onChange={handleChange}
                      />
                      <i className="fas fa-file-alt"></i>
                    </div>
                  </div>
                  <div className="col-12">
                    <div className="single-input">
                      <textarea
                        name="message"
                        placeholder="Write Message"
                        value={formData.message}
                        onChange={handleChange}
                      />
                      <i className="fas fa-pen"></i>
                    </div>
                  </div>
                  <div className="col-12">
                    <button type="submit" className="button-1">
                      Send Message
                    </button>
                  </div>
                </div>
              </form>
              <p className="ajax-response"></p>
            </div>
          </div>

          {/* Contact Info */}
          <div className="col-lg-4 align-self-center">
            <div className="contact-form-info" style={{ backgroundImage: `url(${image})` }}>
              <h2>Don't hesitate to contact us</h2>
              <div className="contact-info-list">
                <div className="item mb-20">
                  <div className="icon">
                    <i className="fas fa-home"></i>
                  </div>
                  <div className="content">
                    <h4>Locations</h4>
                    <p>2512, New Market, Eliza Road, Sincher 80 CA, Canada, USA</p>
                  </div>
                </div>
                <div className="item mb-20">
                  <div className="icon">
                    <i className="far fa-envelope"></i>
                  </div>
                  <div className="content">
                    <h4>Drop A Mail :</h4>
                    <p>info@ALL1DIGITAL.com</p>
                  </div>
                </div>
                <div className="item">
                  <div className="icon">
                    <i className="fas fa-mobile-alt"></i>
                  </div>
                  <div className="content">
                    <h4>Call Us</h4>
                    <p><a href="tel:+1-843-222-1455">+1-843-222-1455</a></p>
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

export default ContactSection;
