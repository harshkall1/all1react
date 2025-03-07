
import React from 'react';
import Slider from 'react-slick';

const BlogSection = () => {
  const blogs = [
    {
      id: 1,
      img: "https://media.istockphoto.com/id/1409519679/photo/group-of-women-discussing-in-a-co-working-office.jpg?s=612x612&w=0&k=20&c=WkAus-gLpScDN6URRXcI_m-pj1y_JA9nk2MCe7Wdhk0=",
      title: "Solutions for all small and large business",
      date: "December 8, 2020",
      category: "Business",
      link: "#"
    },
    {
      id: 2,
      img: "https://media.istockphoto.com/id/1827291486/photo/a-dedicated-mentor-is-explaining-mentees-importance-of-project-while-sitting-at-the-boardroom.jpg?s=612x612&w=0&k=20&c=whMTmOCyOUfNqoNBe8GPlmcNUM-aCfqD-0whdFPQpO4=",
      title: "Attract and retain quality high customers",
      date: "December 8, 2020",
      category: "Music",
      link: "#"
    },
    {
      id: 3,
      img: "https://media.istockphoto.com/id/941621770/photo/artificial-intelligence-technology.jpg?s=612x612&w=0&k=20&c=BMeIMgK01Q7xlu2RPUOM0-ekBEwFJcpuIIAN4mZO8Mg=",
      title: "Future Technology create Good jobs",
      date: "December 8, 2020",
      category: "Business",
      link: "#"
    },
    {
      id: 4,
      img: "https://media.istockphoto.com/id/1979289147/photo/data-analysis-science-and-big-data-with-ai-technology-analyst-or-scientist-uses-a-computer.jpg?s=612x612&w=0&k=20&c=vmC-jVG6PNPRQtgtBp2y1caApEGYjt-fDrm0VzRgvK8=",
      title: "Money markets rates finding the best",
      date: "December 8, 2020",
      category: "Technology",
      link: "#"
    },
    {
      id: 5,
      img: "https://media.istockphoto.com/id/2149170193/photo/cozy-workspace-at-luxury-lake-house.jpg?s=612x612&w=0&k=20&c=zhR9VFi2Il6uoX4LeSnHH5HZc0-aWqasyoYVrQUTq9w=",
      title: "what you do today can Improve your tomorrow",
      date: "December 8, 2020",
      category: "Lifestyle",
      link: "#"
    },
    {
      id: 6,
      img: "https://media.istockphoto.com/id/2170330376/photo/young-indian-man-working-remotely-and-heaving-a-meeting-on-a-laptop-while-wearing-headset.jpg?s=612x612&w=0&k=20&c=Ywsk0cQdd9OI2L_vVHIfV2eV2GekrK3HwPU-FJSOHSc=",
      title: "A place where start new life with peace",
      date: "December 8, 2020",
      category: "Business",
      link: "#"
    }
  ];

  // Slick slider settings
  const settings = {
    dots: true, // Show navigation dots
    infinite: true, // Infinite loop
    speed: 500, // Speed of transition
    slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll at a time
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="blog-section">
      <h2>Our Blogs</h2>
      <p>The definition of an agency is a group of people that performs some specific task, or that helps others.</p>
      <div style={{ marginTop: '20px' }}>
        <a className="button-1" href="#">News Feed</a>
      </div>

      <div className="blog-container">
        {/* Slick Slider */}
        <Slider {...settings}>
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <img src={blog.img} alt={`Blog ${blog.id}`} />
              <h3>{blog.title}</h3>
              <p>{blog.date} | {blog.category}</p>
              <a href={blog.link} className="read-more-dif">Read More</a>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default BlogSection;
