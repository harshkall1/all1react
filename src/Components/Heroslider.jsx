import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useSwipeable } from 'react-swipeable';

const slides = [
    {
        img: 'https://images.pexels.com/photos/6803551/pexels-photo-6803551.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Empower your business',
        subtitle: 'Innovative IT Solutions to Elevate Your Business',
    },
    {
        img: 'https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Boost Your Business',
        subtitle: 'Cutting-Edge IT Solutions for Unstoppable Growth',
    },
    {
        img: 'https://images.pexels.com/photos/3183183/pexels-photo-3183183.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
        title: 'Transform Your Business',
        subtitle: 'Reliable IT Services for Ultimate Success',
    },
];

const HeroSlider = () => {
    const [index, setIndex] = useState(0);

    // Auto-slide with reset on manual interaction
    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % slides.length);
        }, 7000); // Change every 9 seconds

        return () => clearInterval(interval);
    }, [index]); // Reset timer on index change

    // Swipe handlers
    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => setIndex((prev) => (prev + 1) % slides.length),
        onSwipedRight: () => setIndex((prev) => (prev - 1 + slides.length) % slides.length),
        trackMouse: true,
    });

    return (
        <section className="hero-area">
            <div {...swipeHandlers}>
                <Carousel
                    controls={false}
                    indicators={false}
                    interval={9000} // Keeps automatic slide interval
                    activeIndex={index}
                    onSelect={(selectedIndex) => setIndex(selectedIndex)}
                    slide={true} // Ensures smooth sliding effect
                >
                    {slides.map((slide, idx) => (
                        <Carousel.Item key={idx}>
                            <div
                                className="hero-slider-item"
                                style={{
                                    backgroundImage: `url(${slide.img})`,
                                    height: '100vh',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center',
                                    transition: 'opacity 1s ease-in-out', // Smooth fade
                                }}
                            >
                                <div className="container">
                                    <div className="row">
                                        <div className="col-lg-8">
                                            <div className="hero-slider-caption">
                                                <h4>{slide.title}</h4>
                                                <h2>{slide.subtitle}</h2>
                                                <Link className="button-1" to="/contact">Get Started</Link>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Carousel.Item>
                    ))}
                </Carousel>
            </div>

            {/* Custom Indicators (Dots) */}
            <div className="custom-carousel-indicators-2">
                {slides.map((_, idx) => (
                    <span
                        key={idx}
                        className={`dot ${index === idx ? 'active' : ''}`}
                        onClick={() => setIndex(idx)}
                    ></span>
                ))}
            </div>
        </section>
    );
};

export default HeroSlider;
