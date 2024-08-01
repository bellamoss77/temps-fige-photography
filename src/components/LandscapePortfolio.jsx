import MasonryGrid from "./MasonryGrid";

const images = [
    {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/SKYLINE-SUNRISE_1.png`,
        alt: 'sunrise from the blue ridge parkway',
        caption: 'Blue Ridge Parkway (Afton Overlook), July 2024',
        loading: 'lazy',
        id: 1
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/SKYLINE-SUNRISE_2.png`,
        alt: 'sunrise from the blue ridge parkway',
        caption: 'Blue Ridge Parkway (Afton Overlook), July 2024',
        loading: 'lazy',
        id: 2
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/SKYLINE-SUNRISE_4.png`,
        alt: 'sunrise from the blue ridge parkway',
        caption: 'Blue Ridge Parkway (Afton Overlook), July 2024',
        loading: 'lazy',
        id: 3
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/SKYLINE-SUNRISE_5.png`,
        alt: 'sunrise from the blue ridge parkway',
        caption: 'Blue Ridge Parkway (Afton Overlook), July 2024',
        loading: 'lazy',
        id: 4
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/SKYLINE-SUNRISE_6.png`,
        alt: 'sunrise from the blue ridge parkway',
        caption: 'Blue Ridge Parkway (Afton Overlook), July 2024',
        loading: 'lazy',
        id: 5
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/SKYLINE-SUNRISE_8.png`,
        alt: 'sunrise from the blue ridge parkway',
        caption: 'Blue Ridge Parkway (Afton Overlook), July 2024',
        loading: 'lazy',
        id: 6
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/SKYLINE-SUNRISE_9.png`,
        alt: 'sunrise from the blue ridge parkway',
        caption: 'Blue Ridge Parkway (Afton Overlook), July 2024',
        loading: 'lazy',
        id: 7
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/SKYLINE-SUNSET_1.png`,
        alt: 'sunset from the blue ridge parkway',
        caption: 'Blue Ridge Parkway (Ravens Roost Overlook), June 2024',
        loading: 'lazy',
        id: 8
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/SKYLINE-SUNSET_2.png`,
        alt: 'sunset from the blue ridge parkway',
        caption: 'Blue Ridge Parkway (Ravens Roost Overlook), June 2024',
        loading: 'lazy',
        id: 9
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/SKYLINE-SUNSET_4.png`,
        alt: 'sunset from the blue ridge parkway',
        caption: 'Blue Ridge Parkway (Ravens Roost Overlook), June 2024',
        loading: 'lazy',
        id: 10
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/SKYLINE-SUNSET_8.png`,
        alt: 'sunset from the blue ridge parkway',
        caption: 'Blue Ridge Parkway (Ravens Roost Overlook), June 2024',
        loading: 'lazy',
        id: 11
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/SKYLINE-SUNSET_9.png`,
        alt: 'sunset from the blue ridge parkway',
        caption: 'Blue Ridge Parkway (Ravens Roost Overlook), June 2024',
        loading: 'lazy',
        id: 12
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/SKYLINE-SUNSET_10.png`,
        alt: 'sunset from the blue ridge parkway',
        caption: 'Blue Ridge Parkway (Ravens Roost Overlook), June 2024',
        loading: 'lazy',
        id: 13
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/SKYLINE-SUNSET_11.png`,
        alt: 'sunset from the blue ridge parkway',
        caption: 'Blue Ridge Parkway (Ravens Roost Overlook), June 2024',
        loading: 'lazy',
        id: 14
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/SKYLINE-SUNSET_14.png`,
        alt: 'sunset from the blue ridge parkway',
        caption: 'Blue Ridge Parkway (Ravens Roost Overlook), June 2024',
        loading: 'lazy',
        id: 15
    }
];

const LandscapePortfolio = () => {
    return (
        <div className="gallery-container">
            <MasonryGrid images={images} />
        </div>
    )
}


export default LandscapePortfolio;