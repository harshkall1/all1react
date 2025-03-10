import React, { useEffect } from 'react'
import Features from '../Components/Features'
import AboutSection from '../Components/About'
import ServicesSection from '../Components/ServicesSection'
import WorksAbout from '../Components/WorksAbout'
import LatestProjects from '../Components/LatestProjects'
import CounterSection from '../Components/Countersection'
import SubscribeSection from '../Components/NewsLetter'
import WeProvide from '../Components/Weprovide'
import Testimonial from '../Components/Testimonial'
import HeroSlider from '../Components/Heroslider'


const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <>
        {/* <Loader/> */}
            <HeroSlider />

            <Features />
            <AboutSection />
            <ServicesSection />
            <WorksAbout />
            <LatestProjects />
            <CounterSection />

            <WeProvide />
            <Testimonial />


        </>
    )
}

export default Home