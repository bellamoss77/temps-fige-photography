import { LazyLoadImage } from "react-lazy-load-image-component";
import { NavLink } from "react-router-dom";
import ContactButton from "./ContactButton";
import './About.scss';

const About = () => {

    const aboutImages = [
        {
            src: `${import.meta.env.BASE_URL}/ABOUT-IMGS/brunette-in-mountains.jpg`,
            alt: 'photographer in mountains',
            id: 1
        }, {
            src: `${import.meta.env.BASE_URL}/ABOUT-IMGS/brunette-photos-ruins.jpg`,
            alt: 'photographer photographing ruins',
            id: 2
        }, {
            src: `${import.meta.env.BASE_URL}/ABOUT-IMGS/brunette-with-dogs.jpg`,
            alt: 'photographer with two dogs',
            id: 3
        }, {
            src: `${import.meta.env.BASE_URL}/ABOUT-IMGS/female-photos-buildings.jpg`,
            alt: 'photographer photographs modern architecture',
            id: 4
        }
        
    ]

    return (
        <div className="about-container">
            <div className="about-contents">
                <div className="img-container">
                    {aboutImages.map(image => (
                            <LazyLoadImage
                                src={image.src}
                                alt={image.alt}
                                height="300px"
                                width="300px"
                                loading='lazy'
                                effect="blur"
                            />
                    ))}
                </div>
                <div className="text-content">
                    <h2>Hello! I'm Maggie, photographer and owner of Temps Figé Photography.</h2>
                    <p>
                        <span className="italic">Temps Figé </span>  
                         translates from French to 
                        <span className="italic"> frozen time</span>. 
                        This is the essence of photography - to capture a moment in time. But how to make that moment sparkle for eternity? 
                        <br />
                        <br />
                        I'm a 36 year old photographer based in the Central Virginia region. I approach the world with awe, wonder and an open mind and bring that ethos to my craft. Whether it's memories of your pets, marking the opening of a new building, tempting tourists with the local beauty or exploring the passage of time, I strive to bring unique life, mood and authenticity to all of my subjects.
                        <br />
                        <br />
                        I'd love to work with you to capture your environment, pets or projects in joyful time. Please contact me to collaborate!
                    </p>                    
                        <ContactButton />
                </div>
            </div>
        </div>
    )
}

export default About;