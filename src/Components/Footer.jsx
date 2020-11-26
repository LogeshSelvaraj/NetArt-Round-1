import React from 'react'
import LanguageIcon from '@material-ui/icons/Language';
import PhoneIcon from '@material-ui/icons/Phone';
import FacebookIcon from '@material-ui/icons/Facebook';


const Footer = () => {
    return (
        <div className="footer">
            <span className="contact-1"><span className="contact-icons"><PhoneIcon/></span>1800 200 1234</span>
            <a className="contact-2" href="https://www.facebook.com" target="blank"><span className="contact-icons" ><FacebookIcon/></span>www.facebook.com/crsigrups</a>
            <a href="https://www.crigroups.com" target="blank" className="contact-3"><span className="contact-icons"><LanguageIcon/></span>www.crigroups.com</a>
        </div>
    )
}

export default Footer
