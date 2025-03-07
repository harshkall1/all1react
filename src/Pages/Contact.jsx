import React, { useEffect } from 'react'
import Breadcrumb from '../Components/Breadcrumb'
import ContactSection from '../Components/Contactus'
import Portfolio from '../Components/Portfolio'

const Contact = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <>

            <Breadcrumb title="Contact Us" />

            <ContactSection />

        </>
    )
}

export default Contact