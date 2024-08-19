import { useState, useEffect, useCallback, useRef } from "react";
import ReactModal from "react-modal";
import { IoIosCloseCircle } from 'react-icons/io';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { LazyLoadImage } from "react-lazy-load-image-component";
import gsap from "gsap";
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Lightbox.scss';

ReactModal.setAppElement('#root');

const Lightbox = ({ images, isOpen, onClose, startIndex }) => {
    const [currentIndex, setCurrentIndex] = useState(startIndex);
    const [imageLoaded, setImageLoaded] = useState(false);
    const slideRefs = useRef([]);

    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(startIndex);
        }
    }, [isOpen, startIndex]);

    const crossFade = (fromIndex, toIndex) => {
        const fromSlide = slideRefs.current[fromIndex];
        const toSlide = slideRefs.current[toIndex];

        gsap.timeline()
            .to(fromSlide, { opacity: 0, duration: 0.2, ease: 'power2.inOut' }, 0)
            .to(toSlide, { opacity: 1, duration: 0.2, ease: 'power2.inOut' }, '<')
    };

    const goToNext = useCallback(() => {
       const nextIndex = (currentIndex + 1) % images.length;
       crossFade(currentIndex, nextIndex);
       setImageLoaded(false);
       setCurrentIndex(nextIndex);
    }, [currentIndex, images.length]);

    const goToPrev = useCallback(() => {
        const prevIndex = (currentIndex - 1 + images.length) % images.length;
        crossFade(currentIndex, prevIndex);
        setImageLoaded(false);
        setCurrentIndex(prevIndex);
    }, [currentIndex, images.length]);

    useEffect(() => {
        const handleKeyDown = (e) => {
            e.stopPropagation();
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                goToNext();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                goToPrev();
            } else if (e.key === 'Escape') {
                e.preventDefault();
                onClose();
            } else if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
                e.preventDefault();
            }
        };

        if (isOpen) {
            window.addEventListener('keydown', handleKeyDown);
        } else {
            window.removeEventListener('keydown', handleKeyDown);
        }

        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [isOpen, goToNext, goToPrev, onClose]);

    if (!isOpen) {
        return null;
    };

    const currentImage = images[currentIndex];

    return (
        <ReactModal
            isOpen={isOpen}
            onRequestClose={onClose}
            contentLabel="Lightbox"
            className="lightbox"
            overlayClassName="lightbox-overlay"
        >
            <div className="lightbox-content">
                <div className="lightbox-img">
                    {images.map((image, index) => (
                        <LazyLoadImage
                            key={index}
                            src={image.src}
                            alt={image.alt}
                            loading="lazy"
                            effect='blur'
                            onLoad={() => setImageLoaded(true)}
                            ref={el => (slideRefs.current[index] = el)}
                            style={{
                                position: index === currentIndex ? 'static' : 'absolute',
                                top: 0,
                                left: 0,
                                opacity: index === currentIndex ? 1 : 0,
                                transition: 'opacity 0.2s ease-in-out',
                                width: '100%',
                                height: '100%',
                            }}
                        />
                    ))}
                    <div className="lightbox-caption">
                        {currentImage.caption}
                    </div>
                </div>
                <button className="lightbox-close" onClick={onClose}>
                    <IoIosCloseCircle />
                </button>
                <button className="lightbox-prev" onClick={goToPrev}>
                    <GrPrevious />
                </button> 
                <button className="lightbox-next" onClick={goToNext}>
                    <GrNext />
                </button>
            </div>
        </ReactModal>
    );
};

export default Lightbox;
