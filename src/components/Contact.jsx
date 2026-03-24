import { useState, useRef } from 'react';
import { HiMail, HiLocationMarker, HiPhone } from 'react-icons/hi';
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram, FaPaperPlane } from 'react-icons/fa';
import './Contact.css';

export default function Contact() {
    const formRef = useRef(null);
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        setStatus(null);

        // Simulate form submission (replace with EmailJS integration)
        // To integrate EmailJS:
        // 1. npm install @emailjs/browser
        // 2. import emailjs from '@emailjs/browser'
        // 3. emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_PUBLIC_KEY')
        try {
            await new Promise(resolve => setTimeout(resolve, 1500));
            setStatus({ type: 'success', message: 'Message sent successfully! I\'ll get back to you soon.' });
            formRef.current.reset();
        } catch {
            setStatus({ type: 'error', message: 'Oops! Something went wrong. Please try again.' });
        }
        setLoading(false);
    };

    return (
        <section className="section" id="contact">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-subtitle">Get In Touch</span>
                    <h2 className="section-title">Contact <span>Me</span></h2>
                    <p className="section-description">
                        Have a project in mind or just want to chat? Feel free to reach out!
                    </p>
                </div>

                <div className="contact-content">
                    <div className="contact-info reveal">
                        <div className="contact-info-text">
                            <h3>Let's work together</h3>
                            <p>
                                I'm always open to discussing new projects, creative ideas, or
                                opportunities to be part of your vision.
                            </p>
                        </div>

                        <div className="contact-cards">
                            <div className="contact-card">
                                <div className="contact-card-icon" style={{ background: 'linear-gradient(135deg, #7c3aed, #a78bfa)' }}>
                                    <HiMail />
                                </div>
                                <div className="contact-card-text">
                                    <span className="value"><a href="mailto:saikumarbatta14@gmail.com">saikumarbatta14@gmail.com</a></span>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="contact-card-icon" style={{ background: 'linear-gradient(135deg, #06b6d4, #0891b2)' }}>
                                    <HiPhone />
                                </div>
                                <div className="contact-card-text">
                                    <span className="value"><a href="tel:+919347537585">+91 93475 37585</a></span>
                                </div>
                            </div>
                            <div className="contact-card">
                                <div className="contact-card-icon" style={{ background: 'linear-gradient(135deg, #f59e0b, #d97706)' }}>
                                    <HiLocationMarker />
                                </div>
                                <div className="contact-card-text">
                                    <span className="value">India</span>
                                </div>
                            </div>
                        </div>

                        <div className="contact-social">
                            <a href="https://github.com/Saikumar050714" className="social-link" target="_blank" rel="noreferrer" aria-label="GitHub">
                                <FaGithub />
                            </a>
                            <a href="https://www.linkedin.com/in/saikumarbatta/" className="social-link" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                        </div>
                    </div>

                    <div className="contact-form-wrapper reveal reveal-delay-2">
                        <form className="contact-form" ref={formRef} onSubmit={handleSubmit}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label htmlFor="name">Your Name</label>
                                    <input type="text" id="name" name="name" placeholder="John Doe" required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Your Email</label>
                                    <input type="email" id="email" name="email" placeholder="john@example.com" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <input type="text" id="subject" name="subject" placeholder="Project Inquiry" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea id="message" name="message" placeholder="Tell me about your project..." required></textarea>
                            </div>
                            {status && (
                                <div className={`form-status ${status.type}`}>
                                    {status.message}
                                </div>
                            )}
                            <div className="form-submit">
                                <button type="submit" className="btn btn-primary" disabled={loading}>
                                    <FaPaperPlane />
                                    {loading ? 'Sending...' : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
