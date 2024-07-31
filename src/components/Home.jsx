import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HeroSlider from "./HeroSlider";
import './Home.scss';

gsap.registerPlugin(ScrollTrigger);

const Home = () => {
    const quoteRef = useRef(null);
    const philosophyRef = useRef(null);

    useEffect(() => {
        console.log("quoteRef:", quoteRef.current);
        console.log("philosophyRef:", philosophyRef.current);

        if (quoteRef.current) {
            gsap.fromTo(quoteRef.current, 
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 2, 
                  scrollTrigger: {
                    trigger: quoteRef.current,
                    start: 'top 80%',
                    end: 'bottom 50%',
                    scrub: 1,
                    toggleActions: 'play none none reverse',
                }
            });
        }

        if (philosophyRef.current) {
            gsap.fromTo(philosophyRef.current, 
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 2, 
                  scrollTrigger: {
                    trigger: philosophyRef.current,
                    start: 'top 80%',
                    end: 'bottom 50%',
                    scrub: 1,
                    toggleActions: 'play none none reverse',
                }
            });
        }
    }, []);

    return (
        <div className="homepage-content">
            <HeroSlider /> 
            <h1 className="philosophy-quote" ref={quoteRef}>
                To capture life, spirit and beauty from the magnificent to the mundane.
            </h1>      
            <h2 className="brand-philosophy" ref={philosophyRef}>
                This is our guiding philosophy and approach to our craft. Drawing inspiration from nature, we capture the essence of our subjects in their best light and from unique perspectives - aesthetic frozen in time.
            </h2>    
        </div>
    );
}

export default Home;
