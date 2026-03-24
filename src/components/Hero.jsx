import { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiDownload, HiArrowDown } from 'react-icons/hi';
import { BsCodeSlash, BsLightningCharge, BsPalette } from 'react-icons/bs';
import './Hero.css';

const roles = ['Problem Solver', 'Frontend Developer', 'UI/UX Designer'];

export default function Hero() {
    const [currentRole, setCurrentRole] = useState(0);
    const [displayText, setDisplayText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const role = roles[currentRole];
        let timeout;

        if (!isDeleting && displayText === role) {
            timeout = setTimeout(() => setIsDeleting(true), 2000);
        } else if (isDeleting && displayText === '') {
            setIsDeleting(false);
            setCurrentRole((prev) => (prev + 1) % roles.length);
        } else {
            timeout = setTimeout(() => {
                setDisplayText(
                    isDeleting
                        ? role.substring(0, displayText.length - 1)
                        : role.substring(0, displayText.length + 1)
                );
            }, isDeleting ? 40 : 80);
        }

        return () => clearTimeout(timeout);
    }, [displayText, isDeleting, currentRole]);

    const scrollToAbout = () => {
        document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section className="hero section" id="home">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <div className="hero-greeting">Hello, I'm</div>
                        <h1 className="hero-name">
                            Batta <span>Sai Kumar</span>
                        </h1>
                        <div className="hero-role-wrapper">
                            <span className="hero-role-label">I'm a</span>
                            <span className="hero-role">{displayText}</span>
                        </div>
                        <p className="hero-description">
                            Passionate about crafting beautiful, performant web experiences.
                            I turn ideas into elegant, scalable digital solutions that make
                            a real impact.
                        </p>
                        <div className="hero-actions">
                            <a href="#projects" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }); }}>
                                View Projects
                            </a>
                            <a href="#contact" className="btn btn-secondary" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                                <HiDownload /> Contact Me
                            </a>
                        </div>
                        <div className="hero-stats">
                            <div className="hero-stat">
                                <div className="hero-stat-number">0</div>
                                <div className="hero-stat-label">Years Exp</div>
                            </div>
                            <div className="hero-stat">
                                <div className="hero-stat-number">3+</div>
                                <div className="hero-stat-label">Projects</div>
                            </div>
                            <div className="hero-stat">
                                <div className="hero-stat-number">4+</div>
                                <div className="hero-stat-label">Happy Clients</div>
                            </div>
                        </div>
                    </div>

                    <div className="hero-visual">
                        <div className="hero-image-wrapper">
                            <div className="hero-image-ring"></div>
                            <div className="hero-image-ring"></div>
                            <div className="hero-image">
                                <div className="hero-image-placeholder">👨‍💻</div>
                            </div>
                            <div className="hero-floating-badge">
                                <BsCodeSlash className="badge-icon" style={{ color: 'var(--accent-purple-light)' }} />
                                <span>Developer</span>
                            </div>
                            <div className="hero-floating-badge">
                                <BsPalette className="badge-icon" style={{ color: 'var(--accent-teal)' }} />
                                <span>Designer</span>
                            </div>
                            <div className="hero-floating-badge">
                                <BsLightningCharge className="badge-icon" style={{ color: 'var(--accent-gold)' }} />
                                <span>Fast Learner</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button className="hero-scroll-indicator" onClick={scrollToAbout} aria-label="Scroll to about section">
                <div className="scroll-mouse"></div>
                <span>Scroll Down</span>
            </button>
        </section>
    );
}
