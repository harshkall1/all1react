import React from 'react';
import banner from '../assets/img/breadcrumb.jpg'
const Breadcrumb = ({ title }) => {
  return (
    <div className="breadcrumb-area" style={{ backgroundImage: `url(${banner})` }}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="breadcrumb-content text-center">
              <h2>{title}</h2> {/* Dynamic title */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumb;
