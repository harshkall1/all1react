import React, { useEffect } from 'react'
import  Breadcrumb  from '../Components/Breadcrumb'
import Portfolio from '../Components/Portfolio'

const Ourprojects = () => {
        useEffect(() => {
            window.scrollTo(0, 0);
          }, []);
          
  return (
    <>

    <Breadcrumb title="Our Projects" />
        <Portfolio/>

    </>
  )
}

export default Ourprojects