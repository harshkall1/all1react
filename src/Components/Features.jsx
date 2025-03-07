import React from 'react'
import dots from '../assets/img/dots-features-left.png'
import chaticon from '../assets/img/free-consult.png'
import { Link } from 'react-router-dom'

const Features = () => {
  return (
    <section className="feature-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-4 align-self-center">
              <div className="feature-area-content">
                <h5>FEATURES</h5>
                <h2>Some Web App Features We Have</h2>
                <Link className="button-1" to="/about">Learn More</Link>
              </div>
            </div>
            <div className="col-lg-8">
              <div className="features-area-left-content">
                <img className="shap-features" src={dots} alt="shap" />
                <div className="row">
                  <div className="col-md-6">
                    <div className="features-item active">
                      <img src={chaticon} alt="features" />
                      <h2>Free Consultation</h2>
                      <p>Get a no-obligation assessment of your IT needs. Our experts provide strategic recommendations remotely, ensuring the best tech solutions for your business. Schedule your free consultation today!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  )
}

export default Features