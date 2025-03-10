import React from 'react';
import './Style.css';

const jobOpenings = [
    {
        jobTitle: "HR",
        location: "Mayapuri, New Delhi",
        salary: "Based on experience and interview",
        jobDescription: "We are looking for an HR professional to manage recruitment, employee relations, and general HR operations within the company.",
        responsibilities: [
            "Manage recruitment and hiring processes",
            "Handle employee relations and conflict resolution",
            "Assist in employee development and training programs",
            "Ensure compliance with labor laws and company policies"
        ],
        requirements: [
            "Strong communication and interpersonal skills"
        ],
        jobType: "Full-time"
    },
    {
        jobTitle: "Video Editor",
        location: "Mayapuri, New Delhi",
        salary: "Based on experience and interview",
        jobDescription: "We are seeking a creative video editor to work on content creation, editing promotional videos, and other media projects.",
        responsibilities: [
            "Edit videos for social media, website, and marketing materials",
            "Collaborate with marketing and content teams to create engaging videos",
            "Ensure videos are aligned with brand identity and messaging",
            "Manage video content library"
        ],
        requirements: [
            "Proficiency in video editing software (Adobe Premiere Pro, Final Cut Pro, etc.)",
            "Strong storytelling and editing skills",
            "Experience with motion graphics is a plus"
        ],
        jobType: "Full-time"
    },
    {
        jobTitle: "Content Creator",
        location: "Mayapuri, New Delhi",
        salary: "Based on experience and interview",
        jobDescription: "We are looking for a creative content creator to produce engaging digital content for various platforms.",
        responsibilities: [
            "Develop and create engaging content for social media, blogs, and websites",
            "Collaborate with marketing teams to align content with branding",
            "Research industry trends and create relevant content",
            "Optimize content for SEO and digital marketing"
        ],
        requirements: [
            "Excellent writing and storytelling skills",
            "Proficiency in content creation tools and social media platforms"
        ],
        jobType: "Full-time"
    },
    {
        jobTitle: "Receptionist",
        location: "Mayapuri, New Delhi",
        salary: "Based on experience and interview",
        jobDescription: "We are looking for a friendly and organized receptionist to manage front desk operations, greet clients, and support office administration.",
        responsibilities: [
            "Greet clients and visitors in a professional and friendly manner",
            "Manage incoming calls and emails",
            "Maintain office supplies and handle administrative tasks",
            "Support other departments with clerical work as needed"
        ],
        requirements: [
            "Excellent communication and interpersonal skills",
            "Professional and welcoming demeanor"
        ],
        jobType: "Full-time"
    },
    {
        jobTitle: "Web Developer",
        location: "Mayapuri, New Delhi",
        salary: "Based on experience and interview",
        jobDescription: "We are looking for a skilled web developer to create and maintain websites, improve functionality, and collaborate with teams on tech projects.",
        responsibilities: [
            "Develop and maintain websites and web applications",
            "Optimize web functionality and user experience",
            "Collaborate with the design and marketing teams to create responsive websites",
            "Ensure security and data protection of web platforms"
        ],
        requirements: [
            "Proficiency in HTML, CSS, JavaScript, and modern frameworks",
            "Strong problem-solving and debugging skills"
        ],
        jobType: "Full-time"
    },
    {
        jobTitle: "Sales & Marketing (Female Only)",
        location: "Mayapuri, New Delhi",
        salary: "Based on experience and interview",
        jobDescription: "We are looking for a dedicated female professional to handle sales and marketing, including lead generation, campaign management, and customer relations.",
        responsibilities: [
            "Develop and implement sales and marketing strategies",
            "Generate leads and build customer relationships",
            "Create marketing materials and campaigns",
            "Analyze market trends and adjust strategies accordingly"
        ],
        requirements: [
            "Good personality and dressing sense",
            "Excellent communication and persuasion skills",
            "Ability to build relationships with clients"
        ],
        jobType: "Full-time"
    },
    {
        jobTitle: "Peon",
        location: "Mayapuri, New Delhi",
        salary: "Based on experience and interview",
        jobDescription: "We are looking for a reliable office peon to perform general office cleaning, delivery tasks, and assist with administrative support.",
        responsibilities: [
            "Perform general office cleaning and maintenance",
            "Assist with delivering documents and materials to different departments",
            "Support office administration as needed"
        ],
        requirements: [
            "Basic understanding of office maintenance and cleaning",
            "Reliable and punctual"
        ],
        jobType: "Full-time"
    },
    {
        jobTitle: "Digital Marketer",
        location: "Mayapuri, New Delhi",
        salary: "Based on experience and interview",
        jobDescription: "We are seeking a digital marketing expert to manage online campaigns, increase brand visibility, and improve online customer engagement.",
        responsibilities: [
            "Develop and implement digital marketing strategies",
            "Manage social media campaigns and paid advertising",
            "Analyze marketing data to improve online performance",
            "Collaborate with content and design teams to create effective marketing materials"
        ],
        requirements: [
            "Experience in SEO, PPC, and social media advertising",
            "Strong analytical and marketing skills"
        ],
        jobType: "Full-time"
    },
    {
        jobTitle: "Graphic Designer",
        location: "Mayapuri, New Delhi",
        salary: "Based on experience and interview",
        jobDescription: "We are looking for a creative graphic designer to work on various design projects, including branding, web design, and marketing materials.",
        responsibilities: [
            "Create visual designs for digital and print media",
            "Collaborate with marketing and product teams to understand project requirements",
            "Develop layouts, logos, and other design elements",
            "Ensure designs meet brand guidelines and project specifications"
        ],
        requirements: [
            "Proficiency in graphic design tools such as Adobe Photoshop, Illustrator, etc.",
            "Strong creativity and attention to detail"
        ],
        jobType: "Full-time"
    }
];

const Careersection = () => {
    return (
        <section className='career-section'>
        <div className="container">
            <h5>Careers</h5>
            <h2>Open Job Positions</h2>
            <div className="job-list">
                {jobOpenings.map((job, index) => (
                    <div className="job-card" key={index}>
                        <h3 className="job-title">{job.jobTitle}</h3>
                        <p className="job-info"><strong>Location:</strong> {job.location}</p>
                        <p className="job-info"><strong>Salary:</strong> {job.salary}</p>
                        <p className="job-description">{job.jobDescription}</p>
                        <h4 className="section-heading">Responsibilities:</h4>
                        <ul className="responsibilities-list">
                            {job.responsibilities.map((resp, i) => (
                                <li key={i} className="list-item">{resp}</li>
                            ))}
                        </ul>
                        <h4 className="section-heading">Requirements:</h4>
                        <ul className="requirements-list">
                            {job.requirements.map((req, i) => (
                                <li key={i} className="list-item">{req}</li>
                            ))}
                        </ul>
                        <p className="job-info"><strong>Job Type:</strong> {job.jobType}</p>
                        <button className="button-1">Apply Now</button>
                    </div>
                ))}
            </div>
        </div>
    </section>
    );
};

export default Careersection;
