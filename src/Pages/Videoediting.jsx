import React, { useEffect } from 'react'
import ServiceCard from '../Components/Servicecard';
import Breadcrumb from '../Components/Breadcrumb';




const services = [
    {
        id: 1,
        title: "Content Writing",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoq8prTBdO5JrY4nk3bH9c77NC5Gl1sGIlaA&s", 
        description: "Professional content writing services to create engaging, SEO-optimized, and high-quality content for your brand.",
        features: [
            "Blog Posts & Articles",
            "Website Copy & Landing Pages",
            "SEO-Optimized Content",
            "Proofreading & Editing",
            "Plagiarism-Free Content"
        ],
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    },
    {
        id: 2,
        title: "Video Editing",
        image: "https://cdn.mos.cms.futurecdn.net/qn56H3SqmdGE7E8KhdawbS-1200-80.jpg", 
        description: "Transform your raw footage into polished, professional videos that captivate your audience.",
        features: [
            "High-Quality Video Editing",
            "Color Correction & Grading",
            "Motion Graphics & Animations",
            "Audio Editing & Sound Design",
            "Fast Turnaround Times"
        ],
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    },
    {
        id: 3,
        title: "Social Media Content Writing",
        image: "https://boost-like.store/wp-content/uploads/2022/02/WhatsApp-Image-2021-04-22-at-04.04.38-3.jpeg", 
        description: "Engage your audience with compelling and creative content tailored for social media platforms.",
        features: [
            "Social Media Posts & Captions",
            "Hashtag Research & Optimization",
            "Short-Form Content (Reels, TikTok)",
            "Content Calendar Planning",
            "Brand-Centric Messaging"
        ],
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    },
    {
        id: 4,
        title: "Scriptwriting",
        image: "https://s3-cdn.cmlabs.co/page/2024/07/01/scriptwriting-cmlabs-1719816410.webp", 
        description: "Craft compelling scripts for videos, podcasts, or presentations that tell your story effectively.",
        features: [
            "Video Scriptwriting",
            "Podcast Scriptwriting",
            "Speech & Presentation Scripts",
            "Storyboarding & Concept Development",
            "Editing & Revisions"
        ],
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    },
    {
        id: 5,
        title: "YouTube Video Editing",
        image: "https://i.ytimg.com/vi/-pXV8mgpMRE/maxresdefault.jpg", 
        description: "Create professional YouTube videos with engaging edits, thumbnails, and SEO-optimized titles.",
        features: [
            "Video Editing for YouTube",
            "Thumbnail Design",
            "SEO-Optimized Titles & Descriptions",
            "Audience Engagement Strategies",
            "Analytics & Performance Reports"
        ],
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    },
    {
        id: 6,
        title: "Corporate Video Editing",
        image: "https://www.skillmanvideogroup.com/wp-content/uploads/2024/03/professional-video-editor-1024x574.png", 
        description: "Produce professional corporate videos for training, presentations, and marketing purposes.",
        features: [
            "Corporate Video Editing",
            "Branding & Logo Integration",
            "Testimonial & Interview Videos",
            "Explainer Videos & Animations",
            "High-Quality Deliverables"
        ],
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    },
    {
        id: 7,
        title: "E-Book Writing",
        image: "https://cdn.prod.website-files.com/60e5f2de011b865a06c30ddd/63dee5c36f6edd6bb9631119_ebook%20creator%20tool.jpg", 
        description: "Create informative and engaging e-books to establish authority and generate leads.",
        features: [
            "E-Book Writing & Formatting",
            "Research & Content Development",
            "SEO-Optimized Content",
            "Professional Editing & Proofreading",
            "Plagiarism-Free Writing"
        ],
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    },
    {
        id: 8,
        title: "Product Description Writing",
        image: "https://cdn.prod.website-files.com/6367a3719488545b00394a17/63f845ad3da633406fc88ed7_Feb9_ProdDesc5-1.jpg", 
        description: "Write persuasive product descriptions that drive sales and improve customer engagement.",
        features: [
            "SEO-Optimized Product Descriptions",
            "Compelling & Persuasive Writing",
            "Highlight Key Features & Benefits",
            "Plagiarism-Free Content",
            "Fast Turnaround Times"
        ],
        readMoreLink: "#",
        enquiryLink: "https://wa.me/+917840094448"
    }
];

const Videoediting = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <>

            <Breadcrumb title={"video Editing Services"} />

            


            <ServiceCard data={services} />

        </>
    )
}

export default Videoediting