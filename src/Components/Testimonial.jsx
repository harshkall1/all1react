import React, { useState } from 'react';
import { Carousel } from 'react-bootstrap';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';
import { useSwipeable } from 'react-swipeable';

const testimonials = [
  {
    img: 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=',
    name: 'Rohit Kumar',
    role: 'Java Developer',
    content: 'Often use placeholder text in UI components like JLabel, JTextArea, or within templates for generating reports and documents.',
    rating: 5,
  },
  {
    img: 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=',
    name: 'Amit Aggrawal',
    role: 'Mobile Developer',
    content: 'Use placeholder text in UI/UX design tools and within mobile applications (Android/iOS) to test layouts before fetching actual content from APIs.',
    rating: 5,
  },
  {
    img: 'https://media.istockphoto.com/id/1337144146/vector/default-avatar-profile-icon-vector.jpg?s=612x612&w=0&k=20&c=BIbFwuv7FxTWvh5S3vB6bkT0Qv8Vn8N5Ffseq84ClGI=',
    name: 'Mishka Rathore',
    role: 'Web Developer',
    content: 'Our team of expert web developers is dedicated to building fast, secure, and scalable websites that drive digital success.',
    rating: 5,
  },
];

const Testimonial = () => {
  const [index, setIndex] = useState(0);

  // Track visibility of UI/UX Design Progress Bar
  const { ref: uiuxProgressRef, inView: uiuxInView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  // Track visibility of App Development Progress Bar
  const { ref: progressBarRef, inView: progressInView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  // Track visibility of CountUp
  const { ref: countRef, inView: countInView } = useInView({
    triggerOnce: true,
    threshold: 0.9,
  });

  // Swipeable settings
  const swipeHandlers = useSwipeable({
    onSwipedLeft: () => setIndex((prev) => (prev + 1) % testimonials.length),
    onSwipedRight: () => setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length),
    trackMouse: true,
  });

  return (
    <section className="testimonial-area">
      <div className="container">
        <div className="testimonial-area-full">
          <div className="row">
            <div className="col-lg-6 align-self-center">
              <div className="what-we-do-c">
                <h5>What We Do</h5>
                <h2>We Help You to Grow Your Business Exponentially</h2>
                <div className="ww-do">
                  <div className="progress-bars">
                    <div className="single-progress">
                      <h3>UI/UX Design</h3>
                      <div className="progress">
                        <div ref={uiuxProgressRef} className={uiuxInView ? "progress-bar ctm-w-90" : "progress-bar"}>
                          <span className="percent-counter">
                            {countInView ? <CountUp start={0} end={90} duration={1.5} suffix="%" /> : "0%"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="progress-bars">
                    <div className="single-progress">
                      <h3>App Development</h3>
                      <div className="progress">
                        <div ref={progressBarRef} className={`progress-bar ${progressInView ? "ctm-w-98" : ""}`}>
                          <span ref={countRef} className="percent-counter">
                            {countInView ? <CountUp start={0} end={98} duration={2} suffix="%" /> : "0%"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Testimonial Section */}
            <div className="col-lg-6">
              <div className="testimonial-item-full">
                <div {...swipeHandlers}>
                  <Carousel
                    controls={false}
                    indicators={false}
                    interval={2000}
                    activeIndex={index}
                    onSelect={(selectedIndex) => setIndex(selectedIndex)}
                  >
                    {testimonials.map((testimonial, idx) => (
                      <Carousel.Item key={idx}>
                        <div className="testimonial-item">
                          <div className="thumbnail">
                            <img src={testimonial.img} alt={testimonial.name} />
                          </div>
                          <div className="content">
                            <p>{testimonial.content}</p>
                            <div className="rating">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <span key={i}><i className="fas fa-star"></i></span>
                              ))}
                            </div>
                            <h4>{testimonial.name}</h4>
                            <h5>{testimonial.role}</h5>
                          </div>
                        </div>
                      </Carousel.Item>
                    ))}
                  </Carousel>
                </div>

                {/* Custom Dots */}
                <div className="custom-carousel-indicators">
                  {testimonials.map((_, idx) => (
                    <span key={idx} className={`dot ${index === idx ? 'active' : ''}`} onClick={() => index !== idx && setIndex(idx)}></span>
                  ))}
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
