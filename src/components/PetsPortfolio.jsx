import MasonryGrid from "./MasonryGrid";

const images = [
    {
        src: `${import.meta.env.BASE_URL}/PETS/APOLLO-ATHENA-JULY_1.png`,
        alt: 'dogs',
        caption: 'Kiptopeke State Park - Cape Charles, VA - July 2024',
        loading: 'lazy',
        id: 1
    }, {
        src: `${import.meta.env.BASE_URL}/PETS/APOLLO-JUNE_1.png`,
        alt: 'dog 7',
        caption: 'Shenandoah National Park Near Sugar Hollow Virginia, June 2024',
        loading: 'lazy',
        id: 2
    }, {
        src: `${import.meta.env.BASE_URL}/PETS/ATHENA-JULY_3.png`,
        alt: 'dog 8',
        caption: 'Albemarle County, VA - July 2024',
        loading: 'lazy',
        id: 3
    }, {
        src: `${import.meta.env.BASE_URL}/PETS/APOLLO-SKYLINE-LATE-JULY.png`,
        alt: 'dog 9',
        caption: 'Blue Ridge Parkway (Afton Overlook) - July 2024',
        loading: 'lazy',
        id: 4
    }, {
        src: `${import.meta.env.BASE_URL}/PETS/ATHENA-JULY_5.png`,
        alt: 'dog 10',
        caption: 'Albemarle County, VA - July 2024',
        loading: 'lazy',
        id: 5
    }, {
        src: `${import.meta.env.BASE_URL}/PETS/ATHENA-JUNE_2.png`,
        alt: 'dog 11',
        caption: 'Shenandoah National Park Near Sugar Hollow Virginia, June 2024',
        loading: 'lazy',
        id: 6
    }, {
        src: `${import.meta.env.BASE_URL}/PETS/ATHENA-JUNE_3.png`,
        alt: 'dog 12',
        caption: 'Shenandoah National Park Near Sugar Hollow Virginia, June 2024',
        loading: 'lazy',
        id: 7
    }, {
        src: `${import.meta.env.BASE_URL}/PETS/ATHENA-JUNE_8.png`,
        alt: 'dog 13',
        caption: 'Shenandoah National Park Near Sugar Hollow Virginia, June 2024',
        loading: 'lazy',
        id: 8
    }, {
        src: `${import.meta.env.BASE_URL}/PETS/ATHENA-JUNE_13.png`,
        alt: 'dog 14',
        caption: 'Shenandoah National Park Near Sugar Hollow Virginia, June 2024',
        loading: 'lazy',
        id: 9
    }, {
        src: `${import.meta.env.BASE_URL}/PETS/ATHENA-JUNE_14.png`,
        alt: 'dog 15',
        caption: 'Albemarle County, VA - July 2024',
        loading: 'lazy',
        id: 10
    }, {
        src: `${import.meta.env.BASE_URL}/PETS/JRP-RIC-PETS_H_3.png`,
        alt: 'dog 16',
        caption: 'North Bank Trail, James River Park - Richmond, VA - July 2024',
        loading: 'lazy',
        id: 11
    }, {
        src: `${import.meta.env.BASE_URL}/PETS/JRP-RIC-PETS_H_8.png`,
        alt: 'dog 17',
        caption: 'North Bank Trail, James River Park - Richmond, VA - July 2024',
        loading: 'lazy',
        id: 12
    }, {
        src: `${import.meta.env.BASE_URL}/PETS/NBT_11.png`,
        alt: 'dog 18',
        caption: 'North Bank Trail, James River Park - Richmond, VA - July 2024',
        loading: 'lazy',
        id: 13
    }, {
        src: `${import.meta.env.BASE_URL}/PETS/NBT_32.png`,
        alt: 'dog 19',
        caption: 'North Bank Trail, James River Park - Richmond, VA - July 2024',
        loading: 'lazy',
        id: 14
    }, {
        src: `${import.meta.env.BASE_URL}/PETS/NBT_51.png`,
        alt: 'dog 20',
        caption: 'North Bank Trail, James River Park - Richmond, VA - July 2024',
        loading: 'lazy',
        id: 15
    }, {
        src: `${import.meta.env.BASE_URL}/PETS/NBT_53.png`,
        alt: 'dog 21',
        caption: 'North Bank Trail, James River Park - Richmond, VA - July 2024',
        loading: 'lazy',
        id: 16
    }, {
        src: `${import.meta.env.BASE_URL}/PETS/NBT_64.png`,
        alt: 'dog 22',
        caption: 'North Bank Trail, James River Park - Richmond, VA - July 2024',
        loading: 'lazy',
        id: 17
    }, {
        src: `${import.meta.env.BASE_URL}/PETS/PHP_39.png`,
        alt: 'dog 1',
        caption: 'Near Pump House Park - Richmond, VA - July 2024',
        loading: 'lazy',
        id: 18
    }, {
        src: `${import.meta.env.BASE_URL}/PETS/PHP_40_BW.png`,
        alt: 'dog 2',
        caption: 'Near Pump House Park - Richmond, VA - July 2024',
        loading: 'lazy',
        id: 19
    }, {
        src: `${import.meta.env.BASE_URL}/PETS/PHP_43.png`,
        alt: 'dog 3',
        caption: 'Near Pump House Park - Richmond, VA - July 2024',
        loading: 'lazy',
        id: 20
    }, {
        src: `${import.meta.env.BASE_URL}/PETS/PHP_53.png`,
        alt: 'dog 4',
        caption: 'Near Pump House Park - Richmond, VA - July 2024',
        loading: 'lazy',
        id: 21
    }, {
        src: `${import.meta.env.BASE_URL}/PETS/PHP_54_BW.png`,
        alt: 'dog 5',
        caption: 'Near Pump House Park - Richmond, VA - July 2024',
        loading: 'lazy',
        id: 22
    }, {
        src: `${import.meta.env.BASE_URL}/PETS/PHP_55.png`,
        alt: 'dog 6',
        caption: 'Near Pump House Park - Richmond, VA - July 2024',
        loading: 'lazy',
        id: 23
    }, {
        src: `${import.meta.env.BASE_URL}/PETS/SH-ATHENA_1.png`,
        alt: 'dog',
        caption: 'Shenandoah National Park Near Sugar Hollow Virginia, June 2024',
        loading: 'lazy',
        id: 24
    }, {
        src: `${import.meta.env.BASE_URL}/PETS/SH-ATHENA_5.png`,
        alt: 'dog',
        caption: 'Shenandoah National Park Near Sugar Hollow Virginia, June 2024',
        loading: 'lazy',
        id: 25
    }, {
        src: `${import.meta.env.BASE_URL}/PETS/SH-ATHENA_6.png`,
        alt: 'dog',
        caption: 'Shenandoah National Park Near Sugar Hollow Virginia, June 2024',
        loading: 'lazy',
        id: 26
    }
]

const PetsPortfolio = () => {
    return (
        <div className="portfolio-container">
            <MasonryGrid images={images} />
        </div>
    )
}

export default PetsPortfolio;