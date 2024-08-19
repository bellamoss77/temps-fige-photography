import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import './Contact.scss';

const ContactButton = () => {
    const [isPressed, setIsPressed] = useState(false);

    const handleMouseDown = () => {
        setIsPressed(true);
    };

    const handleMouseUp = () => {
        setIsPressed(false);
    };

    const buttonStyle = {
        transform: isPressed ? 'scale(0.95) translateY(2px)' : 'scale(1)',
        boxShadow: isPressed ? '1px 2px 0px rgba(0,0,0,0.4)' : '2px 4px 0 rgba(0,0,0,0.4)',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        backgroundColor: '#00582A',
        color: '#FAF6DB',
        padding: '1rem',
        borderRadius: '15px',
        cursor: 'pointer',
        fontFamily: "'arboria', 'sans-serif'",
        fontWeight: '900',
        fontSize: '2rem',
    };

    return (
        <div className="contact-button">
            <NavLink 
                to='/contact' 
                className='button-link' 
                style={buttonStyle} 
                onMouseDown={handleMouseDown} 
                onMouseUp={handleMouseUp} 
                onMouseLeave={handleMouseUp}
            >
                Contact Us
            </NavLink>    
        </div>
    );
};

export default ContactButton;
