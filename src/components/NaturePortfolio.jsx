import MasonryGrid from "./MasonryGrid";

const images = [
    {
        src: `${import.meta.env.BASE_URL}/NATURE/BIRD_3.png`,
        alt: 'songbird',
        caption: 'Central Virginia, July 2024',
        loading: 'lazy',
        id: 1
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/BIRD_7.png`,
        alt: 'songbird',
        caption: 'Central Virginia, July 2024',
        loading: 'lazy',
        id: 2
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/BIRD_21.png`,
        alt: 'songbird',
        caption: 'Central Virginia, July 2024',
        loading: 'lazy',
        id: 3
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/BIRD-LATE-JULY_1.png`,
        alt: 'songbird',
        caption: 'Central Virginia, July 2024',
        loading: 'lazy',
        id: 4
    }
];

const NaturePortfolio = () => {
    return (
        <div className="portfolio-container">
            <MasonryGrid images={images} />
        </div>
        
    )
}

export default NaturePortfolio;