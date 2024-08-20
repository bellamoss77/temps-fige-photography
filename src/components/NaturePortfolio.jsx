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
        caption: 'American Goldfinch, Central Virginia, July 2024',
        loading: 'lazy',
        id: 2
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/BIRD_21.png`,
        alt: 'songbird',
        caption: 'American Goldfinch, Central Virginia, July 2024',
        loading: 'lazy',
        id: 3
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/BIRD-LATE-JULY_1.png`,
        alt: 'songbird',
        caption: 'Tufted Titmouse, Central Virginia, July 2024',
        loading: 'lazy',
        id: 4
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/AUG-BIRDS_2.png`,
        alt: 'Chipping Sparrow - Central Virginia - August 2024',
        caption: 'Chipping Sparrow - Central Virginia - August 2024',
        loading: 'lazy',
        id: 5
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/AUG-BIRDS_5.png`,
        alt: 'House Finches - Central Virginia - August 2024',
        caption: 'House Finches - Central Virginia - August 2024',
        loading: 'lazy',
        id: 6
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/AUG-BIRDS_7.png`,
        alt: 'Northern Cardinal - Central Virginia - August 2024',
        caption: 'Northern Cardinal - Central Virginia - August 2024',
        loading: 'lazy',
        id: 7
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/AUG-BIRDS_8.png`,
        alt: 'Northern Cardinal - Central Virginia - August 2024',
        caption: 'Northern Cardinal - Central Virginia - August 2024',
        loading: 'lazy',
        id: 8
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/BIRD_12.png`,
        alt: 'Tufted Titmouse with Seed on Feeder, Central Virginia - July 2024',
        caption: 'Tufted Titmouse with Seed on Feeder, Central Virginia - July 2024',
        loading: 'lazy',
        id: 9
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/BIRDS_1.png`,
        alt: 'Northern Cardinal - Central Virginia - August 2024',
        caption: 'Northern Cardinal - Central Virginia - August 2024',
        loading: 'lazy',
        id: 10
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/BIRDS_2.png`,
        alt: 'House Finch - Central Virginia - August 2024',
        caption: 'House Finch - Central Virginia - August 2024',
        loading: 'lazy',
        id: 11
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/BIRDS_3.png`,
        alt: 'Northern Cardinal - Central Virginia - August 2024',
        caption: 'Northern Cardinal - Central Virginia - August 2024',
        loading: 'lazy',
        id: 12
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/BIRDS_7.png`,
        alt: 'Black-Capped Chickadee - Central Virginia - August 2024',
        caption: 'Black-Capped Chickadee - Central Virginia - August 2024',
        loading: 'lazy',
        id: 13
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/BIRDS_15.png`,
        alt: 'Northern Cardinal and Tufted Titmouse - Central Virginia - August 2024',
        caption: 'Northern Cardinal and Tufted Titmouse - Central Virginia - August 2024',
        loading: 'lazy',
        id: 14
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/BIRDS_17.png`,
        alt: 'Tufted Titmouse - Central Virginia - August 2024',
        caption: 'Tufted Titmouse - Central Virginia - August 2024',
        loading: 'lazy',
        id: 15
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/BIRDS_18.png`,
        alt: 'Northern Cardinal - Central Virginia - August 2024',
        caption: 'Northern Cardinal - Central Virginia - August 2024',
        loading: 'lazy',
        id: 16
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/BIRDS_19.png`,
        alt: 'Northern Cardinal - Central Virginia - August 2024',
        caption: 'Northern Cardinal - Central Virginia - August 2024',
        loading: 'lazy',
        id: 17
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/BIRDS_22.png`,
        alt: 'Northern Cardinal - Central Virginia - August 2024',
        caption: 'Northern Cardinal - Central Virginia - August 2024',
        loading: 'lazy',
        id: 18
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/BIRDS_26.png`,
        alt: 'Northern Cardinal - Central Virginia - August 2024',
        caption: 'Northern Cardinal - Central Virginia - August 2024',
        loading: 'lazy',
        id: 19
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/BIRDS_30.png`,
        alt: 'House Finch - Central Virginia - August 2024',
        caption: 'House Finch - Central Virginia - August 2024',
        loading: 'lazy',
        id: 20
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/BIRDS_39.png`,
        alt: 'Tufted Titmouse - Central Virginia - August 2024',
        caption: 'Tufted Titmouse - Central Virginia - August 2024',
        loading: 'lazy',
        id: 21
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/BIRDS_41.png`,
        alt: 'Northern Cardinals - Central Virginia - August 2024',
        caption: '',
        loading: 'lazy',
        id: 22
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/BIRDS_46.png`,
        alt: 'Mourning Dove - Central Virginia - August 2024',
        caption: 'Mourning Dove - Central Virginia - August 2024',
        loading: 'lazy',
        id: 23
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/BIRDS2_10.png`,
        alt: 'Cardinal in Motion #4, Central Virginia - Late July 2024',
        caption: 'Cardinal in Motion #4, Central Virginia - Late July 2024',
        loading: 'lazy',
        id: 24
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/BRP-HR_1.png`,
        alt: 'Wildflowers - Hike to Humpback - August 2024',
        caption: 'Wildflowers - Hike to Humpback - August 2024',
        loading: 'lazy',
        id: 25
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/BRP-HR_3.png`,
        alt: 'Wildflowers - Hike to Humpback - August 2024',
        caption: 'Wildflowers - Hike to Humpback - August 2024',
        loading: 'lazy',
        id: 26
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/BRP-HR_7.png`,
        alt: 'Bees on Yellow Wildflowers - Hike to Humpback - August 2024',
        caption: 'Bees on Yellow Wildflowers - Hike to Humpback - August 2024',
        loading: 'lazy',
        id: 27
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/SH_11.png`,
        alt: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        caption: 'Great Falls,  Shenandoah National Park near Sugar Hollow, Virginia - July 2024',
        loading: 'lazy',
        id: 28
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/SONGBIRD_18.png`,
        alt: 'House Finch - Central Virginia - July 2024',
        caption: 'House Finch - Central Virginia - July 2024',
        loading: 'lazy',
        id: 29
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/SONGBIRD_25.png`,
        alt: 'Tufted Titmouse - Central Virginia - July 2024',
        caption: 'Tufted Titmouse - Central Virginia - July 2024',
        loading: 'lazy',
        id: 30
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/SONGBIRD_36.png`,
        alt: 'Northern Mockingbird - Central Virginia - July 2024',
        caption: 'Northern Mockingbird - Central Virginia - July 2024',
        loading: 'lazy',
        id: 31
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/SONGBIRD_38.png`,
        alt: 'Northern Mockingbird - Central Virginia - July 2024',
        caption: 'Northern Mockingbird - Central Virginia - July 2024',
        loading: 'lazy',
        id: 32
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/SONGBIRD_48_BW.png`,
        alt: 'Tufted Titmouse (Black and White) - Central Virginia - July 2024',
        caption: 'Tufted Titmouse (Black and White) - Central Virginia - July 2024',
        loading: 'lazy',
        id: 33
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/SONGBIRD_56.png`,
        alt: 'Northern Cardinal - Central Virginia - July 2024',
        caption: 'Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 34
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/SONGBIRD_68.png`,
        alt: 'Black-Capped Chickadee - Central Virginia - July 2024',
        caption: 'Black-Capped Chickadee - Central Virginia - July 2024',
        loading: 'lazy',
        id: 35
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/SONGBIRD_70.png`,
        alt: 'Black-Capped Chickadee - Central Virginia - July 2024',
        caption: 'Black-Capped Chickadee - Central Virginia - July 2024',
        loading: 'lazy',
        id: 36
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/SONGBIRD_71.png`,
        alt: 'Northern Cardinal and House Finch - Central Virginia - July 2024',
        caption: 'Two House Finches - Central Virginia - July 2024',
        loading: 'lazy',
        id: 37
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/SONGBIRD_72.png`,
        alt: 'Northern Cardinal and House Finch - Central Virginia - July 2024',
        caption: 'Two House Finches - Central Virginia - July 2024',
        loading: 'lazy',
        id: 38
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/SONGBIRD_86.png`,
        alt: 'Northern Cardinal - Central Virginia - July 2024',
        caption: 'Northern Cardinal - Central Virginia - July 2024',
        loading: 'lazy',
        id: 39
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/SONGBIRD_92.png`,
        alt: 'Tufted Titmouse - Central Virginia - July 2024',
        caption: 'Tufted Titmouse - Central Virginia - July 2024',
        loading: 'lazy',
        id: 40
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/SONGBIRD_99.png`,
        alt: 'Northern Cardinal - Central Virginia - August 2024',
        caption: 'Northern Cardinal - Central Virginia - August 2024',
        loading: 'lazy',
        id: 41
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/SONGBIRD_102.png`,
        alt: 'Black-Capped Chickadee - Central Virginia - August 2024',
        caption: 'Black-Capped Chickadee - Central Virginia - August 2024',
        loading: 'lazy',
        id: 42
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/SONGBIRD_109.png`,
        alt: 'Tufted Titmouse, Chipping Sparrow and House Finch - Central Virginia - August 2024',
        caption: 'Tufted Titmouse, Chipping Sparrow and House Finch - Central Virginia - August 2024',
        loading: 'lazy',
        id: 43
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/SONGBIRD_110.png`,
        alt: 'Two House Finches and a Chipping Sparrow - Central Virginia - August 2024',
        caption: 'Two House Finches and a Chipping Sparrow - Central Virginia - August 2024',
        loading: 'lazy',
        id: 44
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/SONGBIRD_115.png`,
        alt: 'Two Chippig Sparrows and a House Finch - Central Virginia - August 2024',
        caption: 'Two Chippig Sparrows and a House Finch - Central Virginia - August 2024',
        loading: 'lazy',
        id: 45
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/SONGBIRD_116.png`,
        alt: 'Chipping Sparrow and House Finch - Central Virginia - August 2024',
        caption: 'Chipping Sparrow and House Finch - Central Virginia - August 2024',
        loading: 'lazy',
        id: 46
    }, {
        src: `${import.meta.env.BASE_URL}/NATURE/SONGBIRD_120.png`,
        alt: 'Two House Finches and a Chipping Sparrow - Central Virginia - August 2024',
        caption: 'Northern Cardinal and Tufted Titmouse - Central Virginia - August 2024',
        loading: 'lazy',
        id: 47
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





