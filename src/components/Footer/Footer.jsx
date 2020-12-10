import React from 'react';

import footerStyles from './Footer.module.css';

const Footer = () => {
    return (
        <>
        <footer className={footerStyles.footer}>
            <div className="container">
                <span className="text-dark"> © Gatsby-Bootstrap Project 2020</span>
            </div>
        </footer>
        </>
    )
}

export default Footer;

