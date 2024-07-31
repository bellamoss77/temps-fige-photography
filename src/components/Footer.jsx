import './Footer.scss'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-content'>
                <p className='address'>
                    Maggie Flinn - Temps Figé Photography <br />
                    123 Main Street,
                    Charlottesville, VA 22902
                </p>
                <p className='copyright'>© 2024 Temps Figé Photography</p>
                <div className='remote-contact'>
                    <p>(434) 409-1234</p>
                    <p>inquiries@tfphotog.com</p>
                </div>
            </div>
        </div>
    )
}

export default Footer;