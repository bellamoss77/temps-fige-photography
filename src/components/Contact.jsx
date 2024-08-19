import React, { useState } from "react";
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSadTear } from "@fortawesome/free-solid-svg-icons";
import './Contact.scss';

const Contact = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        companyName: '',
        email: '',
        message: ''
    });

    const [isSending, setIsSending] = useState(false);
    const [sendStatus, setSendStatus] = useState(null)

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSending(true);
        setSendStatus(null);

        const templateParams = {
            to_name: 'Maggie',
            from_name_first: formData.firstName,
            from_name_last: formData.lastName,
            from_email: formData.email,
            message: formData.message
        };

        emailjs.send('service_zdo7lp8', 'template_o3tqtym', templateParams, 'M6qG3Ohjnk7js250h')
        .then((results) => {
            setIsSending(false);
            setSendStatus('success');
            setFormData({
                firstName: '',
                lastName: '',
                companyName: '',
                email: '',
                message: ''
            });
        }, (error) => {
            setIsSending(false);
            setSendStatus('error');
        });
    };

    return (
        <div className="contact-us-page">
            <div className="directions-text">
                <h1>Interested in Working Together?</h1>
                <p>Please submit any inquiries you may have using the form on this page. This is the first step in our potential collaboration.</p>
            </div>
            <div className="divider"></div>
            <div className="contact-form-container">
                <h2>Contact Us</h2>
                <p>*Required Field</p>
                <form onSubmit={handleSubmit} className="contact-form">
                    <div className="form-group">
                        <label htmlFor="firstName">*First Name</label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="lastName">*Last Name</label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="companyName">Company Name</label>
                        <input
                            type="text"
                            id="companyName"
                            name="companyName"
                            value={formData.companyName}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">*Email</label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">*Message</label>
                        <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className={isSending ? 'sending' : ''} disabled={isSending}>
                        {isSending ? 'Sending...' : 'Submit'}
                    </button>
                </form>
                {sendStatus === 'success' && <p className="success-msg">Message successfully sent!</p>}
                {sendStatus === 'error' && <p className="error-msg">Message failed to send. <FontAwesomeIcon icon={faSadTear} /> Please try again.</p>}
            </div>
        </div>
    );
};

export default Contact;