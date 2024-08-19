import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import gsap from "gsap";
import './HeroSlider.scss';

const slides = [
    {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/SKYLINE-SUNRISE_1.png`,
        caption: 'Landscape Photography',
        alt: 'Sunrise from the blue ridge parkway',
        link: '/landscape',
        loading: 'lazy',
        id: 1
    }, 
    {
        src: `${import.meta.env.BASE_URL}/NATURE/BIRD-LATE-JULY_1.png`,
        caption: 'Nature Photography',
        alt: 'songbird on branch of tree',
        link: '/nature',
        loading: 'lazy',
        id: 2
    }, 
    {
        src: `${import.meta.env.BASE_URL}/PETS/APOLLO-SKYLINE-LATE-JULY.png`,
        caption: 'Pets Photography',
        alt: 'small dog standing on trunk of car',
        link: '/pets',
        loading: 'lazy',
        id: 3
    },
    {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_1.png`,
        caption: 'Ruins Photography',
        alt: 'Decaying sign at abandoned hotel against sunset sky',
        link: '/ruins',
        loading: 'lazy',
        id: 4
    },
];

const HeroSlider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slideRefs = useRef([]);
    const sliderRef = useRef(null);

    useEffect(() => {
        const interval = setInterval(() => {
            goToNext();
        }, 10000);

        return () => clearInterval(interval);
    }, [currentSlide]);

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') {
                event.preventDefault();
                goToPrev();
            } else if (event.key === 'ArrowRight') {
                event.preventDefault();
                goToNext();
            }
        };

        window.addEventListener('keydown', handleKeyDown);

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const goToNext = () => {
        setCurrentSlide((prevSlide) => {
            const nextSlide = (prevSlide + 1) % slides.length;
            crossFade(prevSlide, nextSlide);
            return nextSlide;
        });
    };

    const goToPrev = () => {
        setCurrentSlide((prevSlide) => {
            const prevSlideIndex = (prevSlide - 1 + slides.length) % slides.length;
            crossFade(prevSlide, prevSlideIndex);
            return prevSlideIndex;
        });
    };

    const crossFade = (fromIndex, toIndex) => {
        const fromSlide = slideRefs.current[fromIndex];
        const toSlide = slideRefs.current[toIndex];

        gsap.timeline()
            .to(fromSlide, { opacity: 0, duration: 0.75, ease: 'power2.inOut' }, 0)
            .to(toSlide, { opacity: 1, duration: 0.75, ease: 'power2.inOut' }, 0);
    };

    const handleDotClick = (index) => {
        if (index !== currentSlide) {
            crossFade(currentSlide, index);
            setCurrentSlide(index);
        }
    };

    return (
        <div className="hero-slider" ref={sliderRef}>
            <div className="slides">
                {slides.map((slide, index) => (
                    <NavLink 
                        key={slide.id}
                        to={slide.link}
                        ref={el => slideRefs.current[index] = el}
                        className='slide'
                        style={{ backgroundImage: `url(${slide.src})`, opacity: index === currentSlide ? 1 : 0, pointerEvents: index === currentSlide ? 'auto' : 'none' }}
                    >
                        <div className="caption">{slide.caption}</div>
                    </NavLink>
                ))}
            </div>
            <div className="arrows">
                <div className="arrow prev" onClick={goToPrev}>
                    <FontAwesomeIcon icon={faArrowLeft} />
                </div>
                <div className="arrow next" onClick={goToNext}>
                    <FontAwesomeIcon icon={faArrowRight} />
                </div>
            </div>
            <div className="dots">
                {slides.map((_, index) => (
                    <div 
                        key={index}
                        className={`dot ${index === currentSlide ? 'active' : ''}`}
                        onClick={() => handleDotClick(index)}>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroSlider;
