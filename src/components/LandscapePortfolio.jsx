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
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/BRP-HR_12.png`,
        alt: 'blue ridge mountains',
        caption: 'Blue Ridge Mountains From Humpback Rock - August 2024',
        loading: 'lazy',
        id: 16
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/BRP-HR_15.png`,
        alt: 'view from humpback rock',
        caption: 'View From Humpback Rock - Shenandoah National Forest - August 2024',
        loading: 'lazy',
        id: 17
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/BRP-HR_17.png`,
        alt: 'view from humpback rock',
        caption: 'View From Humpback Rock - Shenandoah National Forest - August 2024',
        loading: 'lazy',
        id: 18
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/BRP-HR_18.png`,
        alt: 'view from humpback rock',
        caption: 'View From Humpback Rock - Shenandoah National Forest - August 2024',
        loading: 'lazy',
        id: 19
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/BRP-HR_20.png`,
        alt: 'view from humpback rock',
        caption: 'View From Humpback Rock - Shenandoah National Forest - August 2024',
        loading: 'lazy',
        id: 20
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/BRP-HR_21.png`,
        alt: 'view from humpback rock',
        caption: 'View From Humpback Rock - Shenandoah National Forest - August 2024',
        loading: 'lazy',
        id: 21
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/BRP-HR_23.png`,
        alt: 'view from humpback rock',
        caption: 'View From Humpback Rock - Shenandoah National Forest - August 2024',
        loading: 'lazy',
        id: 23
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/BRP-SUNRISE_3.png`,
        alt: 'afton overlook sign with blue ridge mountains in background',
        caption: 'Afton Overlook at Dawn - August 2024',
        loading: 'lazy',
        id: 24
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/BRP-SUNRISE_5.png`,
        alt: 'Sunrise From Afton Overlook - August 2024',
        caption: 'Sunrise From Afton Overlook - August 2024',
        loading: 'lazy',
        id: 25
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/BRP-SUNRISE_6.png`,
        alt: 'Sunrise From Afton Overlook - August 2024',
        caption: 'Sunrise From Afton Overlook - August 2024',
        loading: 'lazy',
        id: 26
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/BRP-SUNRISE_7.png`,
        alt: 'Sunrise From Afton Overlook - August 2024',
        caption: 'Sunrise From Afton Overlook - August 2024',
        loading: 'lazy',
        id: 27
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/BRP-SUNRISE_8.png`,
        alt: 'Sunrise From Afton Overlook - August 2024',
        caption: 'Sunrise From Afton Overlook - August 2024',
        loading: 'lazy',
        id: 28
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/BRP-SUNRISE_9.png`,
        alt: 'Sunrise From Afton Overlook - August 2024',
        caption: 'Sunrise From Afton Overlook - August 2024',
        loading: 'lazy',
        id: 29
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/BRP-SUNRISE_10.png`,
        alt: 'Sunrise From Afton Overlook - August 2024',
        caption: 'Sunrise From Afton Overlook - August 2024',
        loading: 'lazy',
        id: 30
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/BRP-SUNRISE_13.png`,
        alt: 'Sunrise From Afton Overlook - August 2024',
        caption: 'Sunrise From Afton Overlook - August 2024',
        loading: 'lazy',
        id: 31
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/BRP-SUNRISE_14.png`,
        alt: 'Sunrise From Afton Overlook - August 2024',
        caption: 'Sunrise From Afton Overlook - August 2024',
        loading: 'lazy',
        id: 32
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/BRP-SUNRISE_19.png`,
        alt: 'Sunrise From Afton Overlook - August 2024',
        caption: 'Sunrise From Afton Overlook - August 2024',
        loading: 'lazy',
        id: 33
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/JRP-RIC-LANDSCAPE_H_2.png`,
        alt: 'Belle Isle Rock Pools at Dusk #2 - Richmond, VA - July 2024',
        caption: 'Belle Isle Rock Pools at Dusk #2 - Richmond, VA - July 2024',
        loading: 'lazy',
        id: 34
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/JRP-RIC-LANDSCAPE_H_14.png`,
        alt: 'Driftwood on the Rocks Along the James River Off Belle Isle - Richmond, VA - July 2024',
        caption: 'Driftwood on the Rocks Along the James River Off Belle Isle - Richmond, VA - July 2024',
        loading: 'lazy',
        id: 35
    }, {
        src: `${import.meta.env.BASE_URL}/LANDSCAPE/KSP-JULY_2.png`,
        alt: 'Kiptopeke State Park, Cape Charles, VA - July 2024',
        caption: 'Kiptopeke State Park, Cape Charles, VA - July 2024',
        loading: 'lazy',
        id: 36
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