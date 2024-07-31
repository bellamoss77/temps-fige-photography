import { useRef } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';
import './PortfolioDropdown.scss';

const PortfolioDropdown = () => {
    const dropdownRef = useRef(null);
    const iconRef = useRef(null);

    const toggleDropdown = () => {
        const dropdownMenu = dropdownRef.current;
        const icon = iconRef.current;

        if (dropdownMenu.style.display === 'flex') {
            gsap.timeline()
                .to(dropdownMenu, { height: 0, opacity: 0, duration: 0.5, ease: 'power2.inOut', onComplete: () =>dropdownMenu.style.display = 'none' })
                .to(icon, { rotate: 0, duration: 0.5, ease: 'power2.inOut' }, '<');
        } else {
            dropdownMenu.style.display = 'flex';
            gsap.timeline()
                .fromTo(dropdownMenu, { height: 0, opacity: 0 }, { height: 'auto', opacity: 1, duration: 0.5, ease: 'power2.inOut' })
                .to(icon, { rotate: 180, duration: 0.5, ease: 'power2.inOut' }, '<');
        }
    };

    const closeDropdown = () => {
        const dropdownMenu = dropdownRef.current;
        const icon = iconRef.current;

        gsap.timeline()
            .to(dropdownMenu, { height: 0, opacity: 0, duration: 0.5, ease: 'power2.inOut', onComplete: () => dropdownMenu.style.display = 'none' })
            .to(icon, { rotate: 0, duration: 0.5, ease: 'power2.inOut' }, '<');
    }

    return (
        <div className="portfolio-dropdown">
            <button onClick={toggleDropdown} className="portfolio-dropdown-toggle">
                Portfolios
                <FontAwesomeIcon icon={faCaretDown} ref={iconRef} />
            </button>
                <div ref={dropdownRef}                                       className="portfolio-dropdown-menu" 
                style={{ display: 'none', overflow: 'hidden' }}>
                    <NavLink to='/landscape' onClick={closeDropdown}>Landscape</NavLink>
                    <NavLink to='/nature' onClick={closeDropdown}>Nature</NavLink>
                    <NavLink to='/pets' onClick={closeDropdown}>Pets</NavLink>
                    <NavLink to='/ruins' onClick={closeDropdown}>Ruins</NavLink>
                </div>
        </div>
    );
};

export default PortfolioDropdown;