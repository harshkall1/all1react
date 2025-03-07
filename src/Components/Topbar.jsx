import React from 'react';

const HeaderTop = ({
    address,
    email,
    officeHours,
    socialLinks
}) => {
    return (
        <div className="header-top">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                        <div className="top-info-left">
                            <span><i className="fas fa-map-marker-alt"></i>{address}</span>
                            <span><i className="far fa-envelope"></i>{email}</span>
                        </div>
                    </div>
                    <div className="col-lg-6 align-self-center text-right">
                        <div className="top-info-right">
                            <div className="office-time">
                                <span><i className="far fa-clock"></i> Office Hour : {officeHours}</span>
                            </div>
                            <div className="top-social">
                                <ul>
                                    {socialLinks.map((link, index) => (
                                        <li key={index}>
                                            <a href={link.url}>
                                                <i className={`fab fa-${link.icon}`} />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeaderTop;
