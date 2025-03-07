import React, { useState } from 'react';
import bgimg from '../assets/img/sub.jpg'


const SubscribeSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Subscribed with email:', email);
  };

  return (
    <div
      className="subscribe-area pt-70 pb-70"
      style={{
        backgroundImage: `url(${bgimg})`,
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7">
            <div className="subscribe-content">
              <h2>Subscribe to our newsletter</h2>
              <p>
                Subscribe to our newsletter and be the first to receive the
                latest updates on cutting edge web and mobile solutions, industry
                trends, and tech innovations.
              </p>
            </div>
          </div>
          <div className="col-lg-5 align-self-center">
            <div className="subscribe-form">
              <form onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="sub"
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <button type="submit">
                  <i className="fas fa-paper-plane"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubscribeSection;
