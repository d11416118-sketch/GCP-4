import React from 'react';
import { Github } from 'lucide-react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-logo">
                        Dev<span className="text-gradient">Portfolio</span>
                    </div>

                    <div className="footer-links">
                        <a
                            href="https://github.com/d11416118-sketch"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="footer-social-link"
                        >
                            <Github size={20} />
                        </a>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} 張富翔. 版權所有.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
