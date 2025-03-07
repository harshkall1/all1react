import React, { useEffect } from 'react'
import AboutSection from '../Components/About'
import CounterSection from '../Components/Countersection'
import WeProvide from '../Components/Weprovide'
import Testimonial from '../Components/Testimonial'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  
  return (
    <>
        <AboutSection/>
        <CounterSection/>
        <WeProvide/>
        <Testimonial/>
    </>
  )
}

export default About