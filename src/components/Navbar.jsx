import { useState, useRef, useEffect, useCallback } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import PortfolioDropdown from "./PortfolioDropdown";
import logo from '../assets/logo.svg';
import './Navbar.scss';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);
    const burgerIconRef = useRef(null);

    const toggleMenu = useCallback(() => {
        const menu = menuRef.current;
        const icon = burgerIconRef.current;

        if (isMenuOpen) {
            gsap.timeline()
                .to(menu, { x: '100%', duration: 0.5, ease: 'power2.inOut' })
                .to(icon.children[0], { rotate: 0, y: 0, duration: 0.5, ease: 'power2.inOut' }, '<')
                .to(icon.children[1], { opacity: 1, duration: 0.5, ease: 'power2.inOut' }, '<')
                .to(icon.children[2], { rotate: 0, y: 0, duration: 0.5, ease: 'power2.inOut' }, '<');
        } else {
            gsap.timeline()
                .to(menu, { x: '35%', duration: 0.5, ease: 'power2.inOut' })
                .to(icon.children[0], { rotate: 45, y: 10, duration: 0.5, ease: 'power2.inOut' }, '<')
                .to(icon.children[1], {opacity:0, duration: 0.5, ease: 'power2.inOut' }, '<')
                .to(icon.children[2], { rotate: -45, y: -10, duration: 0.5, ease: 'power2.inOut' }, '<');
        }

        setIsMenuOpen(!isMenuOpen);
    }, [isMenuOpen]);

    useEffect(() => {
        const handleHamburgerClose = (e) => {
            if (e.key === 'Escape' && isMenuOpen) {
                toggleMenu();
            }
        };

        document.addEventListener('keydown', handleHamburgerClose);

        return () => {
            document.removeEventListener('keydown', handleHamburgerClose);
        };
    }, [isMenuOpen, toggleMenu]);

    
    

    return (
        <nav className="navbar">
            <div className="navbar-logo">
                <img src={logo} alt='Logo' />
            </div>
            <div className="navbar-links-container">
                <NavLink to='/' end>Home</NavLink>
                <PortfolioDropdown />
                <NavLink to='/about'>About</NavLink>
                <NavLink to='/contact'>Contact Us</NavLink>
            </div>
            <div className="navbar-hamburger" ref={burgerIconRef} onClick={toggleMenu}>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <div className="navbar-menu" ref={menuRef}>
                <NavLink to='/' end onClick={toggleMenu}>Home</NavLink>
                <NavLink to='/about' onClick={toggleMenu}>About</NavLink>
                <NavLink to='/contact' onClick={toggleMenu}>Contact Us</NavLink>
                <PortfolioDropdown />
            </div>
        </nav>
    );
};

export default Navbar;