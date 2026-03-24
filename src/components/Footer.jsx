import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaChevronUp } from 'react-icons/fa';
import './Footer.css';

const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Resume', href: '#resume' },
    { label: 'Contact', href: '#contact' },
];

const socialLinks = [
    { icon: <FaGithub />, href: 'https://github.com/Saikumar050714', label: 'GitHub' },
    { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/saikumarbatta/', label: 'LinkedIn' },
];

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const handleNavClick = (e, href) => {
        e.preventDefault();
        const el = document.querySelector(href);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-content">
                    <div className="footer-brand">
                        <a href="#home" className="footer-brand-logo" onClick={(e) => handleNavClick(e, '#home')}>
                            <div className="footer-brand-icon">B</div>
                            <div className="footer-brand-name">Sai<span>Kumar</span></div>
                        </a>
                        <p>
                            Building digital experiences that merge creativity with technology.
                            Let's create something amazing together.
                        </p>
                        <div className="footer-social">
                            {socialLinks.map(link => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="social-link"
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={link.label}
                                >
                                    {link.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="footer-col">
                        <h4>Quick Links</h4>
                        <ul className="footer-links">
                            {quickLinks.map(link => (
                                <li key={link.label}>
                                    <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="footer-col">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>Web Development</a></li>
                            <li><a href="#contact" onClick={(e) => handleNavClick(e, '#contact')}>UI/UX Design</a></li>
                        </ul>
                    </div>
                </div>

                <div className="footer-bottom">
                    <p>© {new Date().getFullYear()} <span>B. Sai Kumar</span>. All rights reserved.</p>
                    <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
                        <FaChevronUp />
                    </button>
                </div>
            </div>
        </footer>
    );
}
