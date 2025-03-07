import React, { useEffect } from 'react'
import Servicecard from '../Components/Servicecard';
import { BsCheck } from "react-icons/bs";
import Breadcrumb from '../Components/Breadcrumb';

const services = [
    {
        id: 1,
        title: "SEO Service",
        image: "https://media.istockphoto.com/id/1059569422/photo/search-engine-optimization-growth-chart.jpg?s=612x612&w=0&k=20&c=mnrCUMkLEL-m1Z6ky-OnzIFF9m0cI7eyGKBhHSDAdxI=",
        description: "SEO ensures your website is optimized for search engines and users, improving rankings and traffic.",
        features: ["Higher Search Rankings", "Better User Experience", "Increased Website Traffic"],
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    },
    {
        id: 2,
        title: "Content Marketing Services",
        image: "https://i0.wp.com/plopdo.com/wp-content/uploads/2020/04/Content-Marketing-Strategy.jpeg?resize=1200%2C642&ssl=1",
        description: "Content marketing creates valuable, optimized content to boost brand visibility and audience engagement.",
        features: ["SEO-Optimized Content", "Blog Writing & Web Content", "High-Quality & Plagiarism-Free"],
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    },
    {
        id: 3,
        title: "Influencer Marketing",
        image: "https://media.licdn.com/dms/image/v2/C4E12AQFeNqe6ZiEbNA/article-cover_image-shrink_600_2000/article-cover_image-shrink_600_2000/0/1619546764985?e=2147483647&v=beta&t=L_OpP-JdhnWbl_uv37CKq29Q-zUN0MexlP3-sHQq-nk",
        description: "Leverage influencers to enhance brand credibility, expand reach, and drive more customer engagement.",
        features: ["Authentic Brand Promotion", "Wider Audience Reach", "Higher Engagement"],
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    },
    {
        id: 4,
        title: "Search Engine Marketing (SEM) / PPC Advertising",
        image: "https://localo.com/assets/img/definitions/what-is-ppc.webp",
        description: "PPC ads offer instant visibility, targeting potential customers with higher conversion rates and ROI.",
        features: ["Immediate Traffic Boost", "Targeted Audience Reach", "Higher ROI"],
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    },
    {
        id: 5,
        title: "Google Map Promotion",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyQ4kYkkVII2YaIpjcmnbX7r11mgxY7JX8Cg&s",
        description: "Enhance your business visibility on Google Maps for better local reach and increased foot traffic.",
        features: ["Boosted Google Maps Ranking", "Higher Foot Traffic", "Optimized Business Listing"],
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    },
    {
        id: 6,
        title: "Google Adwords",
        image: "https://www.smarttouch.me/wp-content/uploads/2021/12/google-ads.jpg",
        description: "Google Ads helps businesses reach billions of users with targeted and cost-effective advertising.",
        features: ["Targeted Advertising", "Higher Conversion Rates", "Budget-Friendly Campaigns"],
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    },
    {
        id: 7,
        title: "Facebook Advertising",
        image: "https://kvrwebtech.com/blog/wp-content/uploads/2023/10/facebook-ad.png",
        description: "Facebook ads provide high engagement and targeted marketing for better conversions and ROI.",
        features: ["Laser-Targeted Audience", "High Engagement & Conversions", "Cost-Effective Advertising"],
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    },
    {
        id: 8,
        title: "Social Media Marketing",
        image: "https://res.cloudinary.com/vistaprint/images/f_auto,q_auto/v1712327409/ideas-and-advice-sandbox/blogadmin/Social-media-advertising-and-design-tips/Social-media-advertising-and-design-tips.jpg?_i=AA",
        description: "Boost brand awareness and customer engagement through strategic social media marketing campaigns.",
        features: ["Content Planning & Posting", "Audience Engagement", "Reputation Management"],
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    },
    {
        id: 9,
        title: "WhatsApp Marketing Service",
        image: "https://assets.indiaonline.in/cat-default/450/whatsapp-marketing-services.jpg",
        description: "Engage customers instantly and grow your business with personalized WhatsApp marketing campaigns.",
        features: ["Instant Customer Communication", "Personalized Messaging"],
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    },
    {
        id: 10,
        title: "SMS Marketing Services",
        image: "https://5.imimg.com/data5/SELLER/Default/2024/10/462342589/CO/IB/XL/25127124/sms-marketing-services.jpg",
        description: "Reach your audience instantly with SMS marketing for higher open rates and cost-effective promotion.",
        features: ["Instant Message Delivery", "Higher Open Rates", "Cost-Effective Strategy"],
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    },
    {
        id: 11,
        title: "Email Marketing Services",
        image: "https://media.smallbiztrends.com/2021/02/email-marketing-services.png",
        description: "Target your audience with strategic email marketing campaigns to boost conversions and engagement.",
        features: ["Targeted Email Campaigns", "Higher Open & Click Rates", "Lead Nurturing Strategies"],
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    },
    {
        id: 12,
        title: "YouTube Video Promotion",
        image: "https://media.licdn.com/dms/image/v2/D5612AQFbUvbPh_eofg/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1719691612054?e=2147483647&v=beta&t=nEODpAgvPIaCOBFPv1PraXkSb1C0Ug0BjIfYBz5m2Ss",
        description: "Boost views and engagement with SEO-optimized YouTube video promotion strategies.",
        features: ["Organic & Paid Promotion", "Higher Video Visibility", "SEO-Optimized Videos"],
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    },
    {
        id: 13,
        title: "Video Marketing",
        image: "https://emeritus.org/in/wp-content/uploads/sites/3/2023/01/10-vid.png",
        description: "Use engaging video marketing strategies to enhance brand awareness and drive conversions.",
        features: ["Stronger Brand Awareness", "Higher Engagement Rates", "Boosted Conversions"],
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    },
    {
        id: 14,
        title: "Affiliate Marketing",
        image: "https://assets-au-01.kc-usercontent.com/df4a25df-7d25-0294-ad5c-62528c8f82da/c234e5ea-d77b-4f6c-b74e-f19bbbf11925/Affiliate%20Marketing.jpg",
        description: "Earn passive income by promoting products with an effective affiliate marketing strategy.",
        features: ["Stronger Brand Visibility", "Higher Engagement Rates", "Boosted Conversions"],
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    }
];


const Marketingservices = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>

        <Breadcrumb title={"Digital Marketing Services"} />

            <section className="feature-area bg-color ptb-100">
                <div className="container">
                    <div className="row align-items-center">
                        {/* Left Content */}
                        <div className="col-lg-6">
                            <div className="content">
                                <div className="feature-title">
                                    <h2 style={{ borderBottom: "6px solid rgb(18, 18, 58)" }}>
                                        Boost Your Online Presence with Our Expert Digital Marketing Services
                                    </h2>
                                    <p style={{ marginTop: "20px" }}>
                                        As the world goes digital, having a strong online presence is more crucial than ever.
                                        Our cutting-edge digital marketing solutions ensure that your business gets the visibility it deserves.
                                        With <strong>Our SEO, SMO, SEM, and PPC services</strong>, we help you outrank competitors, drive traffic,
                                        generate leads, and increase sales.
                                    </p>
                                </div>
                                <ul style={{ marginTop: "10px", paddingLeft : 0, display: "flex", flexDirection: "column", gap: "10px"}}>
                                    <li><BsCheck/> Get found & grow online. Real results, seeing is believing.</li>
                                    <li><BsCheck/> We make you visible online using unmatched SEO, SMO, SEM & PPC.</li>
                                    <li><BsCheck/> More Traffic! More Leads! More Business!</li>
                                </ul>
                                {/* Uncomment if you want the button */}
                                {/* <a href="#" className="box-btn">Let's Talk!</a> */}
                            </div>
                        </div>
                        {/* Right Image */}
                        <div className="col-lg-6">
                            <div className="feature-img">
                                <img
                                    src="https://images.pexels.com/photos/7642130/pexels-photo-7642130.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                    alt="feature"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>



            <Servicecard heading={"Digital Marketing Services"} data={services} />
        </>
    )
}

export default Marketingservices