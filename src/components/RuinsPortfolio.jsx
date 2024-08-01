import MasonryGrid from "./MasonryGrid";

const images = [
    {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_1.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 1
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_2.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 2
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_3.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 3
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_4.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 4
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_5.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 5
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_6.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 6
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_7.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 7
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_8.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 8
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_9.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 9
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_10.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 10
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_11.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 11
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_12.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 12
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_13.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 13
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_14.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 14
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_15.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 15
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_16.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 16
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_17.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 17
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_18.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 18
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_19.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 19
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_20.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 20
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_21.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 21
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_22.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: '',
        loading: 'lazy',
        id: 22
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_23.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 23
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_24.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 24
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_25.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 25
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_26.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 26
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_27.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 27
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_28.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 28
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_29.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 29
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_30.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 30
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_31.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 31
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_32.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 32
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_33.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: '',
        loading: 'lazy',
        id: 33
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_34.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: '',
        loading: 'lazy',
        id: 34
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_35.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 35
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_36.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 36
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_49.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 37
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_50.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 38
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_51.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 39
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/AFTON-RUINS_52.png`,
        alt: 'abandoned hotel, motor court and/or Howard Johnson Restaurant on Afton',
        caption: 'Afton Mountain, Virginia - June 2024',
        loading: 'lazy',
        id: 40
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/JRP-RIC-RUINS_H_9.png`,
        alt: 'Abandoned hydro plant on Belle Isle, Richmond',
        caption: 'Belle Isle - Richmond, VA - July 2024',
        loading: 'lazy',
        id: 41
    }, {
        src: `${import.meta.env.BASE_URL}/RUINS/JRP-RIC-RUINS_V_2.png`,
        alt: 'Tagger sprays graffiti on abandoned hydro plant, Belle Isle, Richmond',
        caption: 'Belle Isle - Richmond, VA - July 2024',
        loading: 'lazy',
        id: 42
    }
];

const RuinsPortfolio = () => {
    return (
        <div className="gallery-container">
            <MasonryGrid images={images} />
        </div>
    )
}

export default RuinsPortfolio;