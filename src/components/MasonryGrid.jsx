import { useState } from "react";
import Masonry from "react-masonry-css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Lightbox from "./Lightbox";
import './MasonryGrid.scss';

const MasonryGrid = ({ images }) => {
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [imageLoaded, setImageLoaded] = useState(false);

    const openLightbox = (index) => {
        setCurrentImageIndex(index);
        setLightboxOpen(true);
    };

    const closeLightbox = () => {
        setLightboxOpen(false);
    };

    const handleImageLoad = (index) => {
        setImageLoaded((prevState) => ({
            ...prevState,
            [index]: true,
        }));
    }

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        400: 1
    };

    return (
        <>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="masonry-grid"
                columnClassName="masonry-column"
            >
                {images.map((image, index) => (
                    <div key={index} className="masonry-item" onClick={() => openLightbox(index)}>
                        <LazyLoadImage
                            src={image.src}
                            alt={image.alt}
                            loading="lazy"
                            effect="blur"
                            style={{ objectFit: 'cover' }}
                            onLoad={() => handleImageLoad(index)}
                        />
                    </div>
                ))}
            </Masonry>
            <Lightbox
                images={images}
                isOpen={lightboxOpen}
                onClose={closeLightbox}
                startIndex={currentImageIndex}
            />
        </>
    );
};

export default MasonryGrid;

