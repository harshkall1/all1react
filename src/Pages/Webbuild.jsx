import React, { useEffect } from 'react'
import ServiceCard from '../Components/Servicecard'
import Breadcrumb from '../Components/Breadcrumb';


const webDesignServices = [
    {
        id: 1,
        title: "Corporate Website",
        image: "https://www.netventure.in/wp-content/uploads/2022/02/image-45.png",
        description: "A corporate website is the digital face of a business, showcasing its values, services, and achievements. It helps build credibility, attract clients, and enhance brand visibility.",
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    },
    {
        id: 2,
        title: "eCommerce Website",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScTD-lhfdwkvvCtjbctmxKwBbsjWiclJf-wQ&s",
        description: "An e-commerce website enables businesses to sell products and services online, providing customers with a seamless shopping experience with secure payments and mobile responsiveness.",
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    },
    {
        id: 3,
        title: "Landing Page Designing",
        image: "https://www.feedough.com/wp-content/uploads/2022/11/landing-page-2.webp",
        description: "A well-crafted landing page is designed to capture leads and drive conversions through compelling visuals and persuasive content, ensuring visitors take desired actions.",
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    },
    {
        id: 4,
        title: "PSD to HTML Conversion",
        image: "https://5.imimg.com/data5/AC/XK/MY-57798827/psd-to-html-conversion.jpg",
        description: "PSD to HTML conversion transforms static design files into fully functional, responsive web pages with pixel-perfect accuracy and cross-browser compatibility.",
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    },
    {
        id: 5,
        title: "Responsive Web Designing",
        image: "https://passionates.com/wp-content/uploads/2023/02/Responsive-Web-Design_-Everything-You-Need-to-Know-About-it-1.jpg",
        description: "Responsive web design ensures that websites adapt seamlessly to different screen sizes, providing an optimal user experience on desktops, tablets, and mobile devices.",
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    },
    {
        id: 6,
        title: "Custom Web Designing",
        image: "https://www.webindiamaster.com/public/uploads/custom-design.webp?tr=w-425",
        description: "Custom web designing offers tailored solutions to meet unique business needs, creating visually stunning and highly functional websites for enhanced brand identity.",
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    },
    {
        id: 7,
        title: "Multi-Vendor eCommerce Marketplace",
        image: "https://www.yo-kart.com/blog/wp-content/uploads/2023/07/Top-Multi-vendor-eCommerce-Marketplace-Platforms-to-Start-Online-Business-in-2023-1.png",
        description: "A multi-vendor eCommerce marketplace allows multiple sellers to list and sell products on a single platform with secure transactions and seamless vendor management.",
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    }
];



const Webbuild = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>

            <Breadcrumb title='Web Build' /> 
            <ServiceCard  data={webDesignServices} />

        </>
    )
}

export default Webbuild