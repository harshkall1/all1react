import React from "react";
import { BsCheck } from "react-icons/bs";

const ServiceCard = ({ data, heading }) => {
    return (
        <section className="servicecard-area">
            <h2 className="ctm-acnt-h2" style={{textAlign: "center", marginBottom : "30px"}}>{heading}</h2>
            <div className="container servicecard-grid">

                {data.length !== 0 ? (
                    data.map((service) => (
                        <div key={service.id} className="custom-service-card">
                            <div className="service-image">
                                <img src={service.image} alt={service.title} />
                            </div>
                            <div className="service-content">
                                <h3>{service.title}</h3>
                                <p>{service.description}</p>

                                {service.features && (
                                    <ul>
                                        {service.features.map((feature, index) => (
                                            <li key={index}><BsCheck /> {feature}</li>
                                        ))}
                                    </ul>
                                )}

                                <div className="service-buttons">
                                    <a href={service.readMoreLink} className="button-2">
                                        Read More
                                    </a>
                                    <a
                                        href={service.enquiryLink}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="cstm-btn-1"
                                    >
                                        Enquiry Now
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>No services available</p>
                )}
            </div>
        </section>
    );
};

export default ServiceCard;
