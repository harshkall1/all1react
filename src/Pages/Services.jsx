import React, { useEffect } from 'react'
import ServicesSection from '../Components/ServicesSection'
import Breadcrumb from '../Components/Breadcrumb'

const Services = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
      
    return (
        <>
        <Breadcrumb title={"Our Services"}/>
        <ServicesSection/>
        </>
    )
}

export default Services