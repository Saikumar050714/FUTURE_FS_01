import { HiDownload, HiMail } from 'react-icons/hi';
import './About.css';

export default function About() {
    return (
        <section className="section" id="about">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-subtitle">Get To Know Me</span>
                    <h2 className="section-title">About <span>Me</span></h2>
                    <p className="section-description">
                        A brief introduction to who I am and what drives my passion for technology.
                    </p>
                </div>

                <div className="about-content">
                    <div className="about-image-container reveal">
                        <div className="about-image-box">
                            <div className="about-image-placeholder">👤</div>
                        </div>
                        <div className="about-exp-badge">
                            <span className="number" style={{ fontSize: '2.2rem' }}>Fresher</span>
                        </div>
                    </div>

                    <div className="about-text reveal reveal-delay-2">
                        <h3>I'm a <span>Passionate Developer</span> based in India</h3>
                        <p>
                            I'm a full-stack developer with a deep love for building intuitive, scalable, and
                            visually stunning web applications. With expertise spanning modern frontend
                            frameworks and robust backend technologies, I deliver end-to-end solutions.
                        </p>
                        <p>
                            When I'm not coding, you'll find me exploring new technologies, contributing to
                            open-source projects, or sharing knowledge through blog posts and mentorship.
                        </p>

                        <div className="about-info-grid">
                            <div className="about-info-item">
                                <span className="label">Name</span>
                                <span className="value">B. Sai Kumar</span>
                            </div>
                            <div className="about-info-item">
                                <span className="label">Email</span>
                                <span className="value">saikumarbatta14@gmail.com</span>
                            </div>
                            <div className="about-info-item">
                                <span className="label">Location</span>
                                <span className="value">India</span>
                            </div>
                            <div className="about-info-item">
                                <span className="label">Availability</span>
                                <span className="value" style={{ color: 'var(--accent-green)' }}>Open to Work</span>
                            </div>
                        </div>

                        <div className="about-actions">
                            <a href="#contact" className="btn btn-primary" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' }); }}>
                                <HiMail /> Contact Me
                            </a>
                            <a href="/MyResume.pdf" className="btn btn-secondary" download>
                                <HiDownload /> Download CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
