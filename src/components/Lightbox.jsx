import { useState, useEffect, useCallback } from "react";
import ReactModal from "react-modal";
import { IoIosCloseCircle } from 'react-icons/io';
import { GrNext, GrPrevious } from 'react-icons/gr';
import { LazyLoadImage } from "react-lazy-load-image-component";
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Lightbox.scss';

ReactModal.setAppElement('#root');

const Lightbox = ({ images, isOpen, onClose, startIndex }) => {
    const [currentIndex, setCurrentIndex] = useState(startIndex);
    const [imageLoaded, setImageLoaded] = useState(false);

    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(startIndex);
        }
    }, [isOpen, startIndex]);

    const goToNext = useCallback(() => {
        setImageLoaded(false);
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, [images.length]);

    const goToPrev = useCallback(() => {
        setImageLoaded(false);
        setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
    }, [images.length]);

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
                    <LazyLoadImage
                        src={currentImage.src}
                        alt={currentImage.alt}
                        loading="lazy"
                        onLoad={() => setImageLoaded(true)}
                    />
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
