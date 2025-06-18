import React from "react";
import "../css/Footer.css";

export const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>© 2025 Oshani Hewawitharana | Crafted using React, styled with care.<br/>
                    Reach out via LinkedIn, GitHub, or Email</p>
                <div className="footer-links">
                    <a href="https://www.linkedin.com/in/oshewawitharana/" target="_blank"
                       rel="noopener noreferrer">LinkedIn</a>
                    <a href="https://github.com/OSHewawitharana" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="mailto:oshanihewawitharana@email.com">Email</a>
                </div>
            </div>
        </footer>
    );
};
