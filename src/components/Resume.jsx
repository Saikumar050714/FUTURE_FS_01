import { HiDownload, HiEye } from 'react-icons/hi';
import './Resume.css';

export default function Resume() {
    return (
        <section className="section resume-section" id="resume">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-subtitle">More About Me</span>
                    <h2 className="section-title">My <span>Resume</span></h2>
                    <p className="section-description">
                        Check out my resume to learn more about my skills and qualifications.
                    </p>
                </div>

                <div className="resume-actions reveal" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginTop: '40px' }}>
                    <a 
                        href={`${import.meta.env.BASE_URL}MyResume.pdf`} 
                        target="_blank" 
                        rel="noreferrer" 
                        className="btn btn-primary"
                    >
                        <HiEye style={{ marginRight: '8px' }} /> View Resume
                    </a>
                    <a 
                        href={`${import.meta.env.BASE_URL}MyResume.pdf`} 
                        download 
                        className="btn btn-secondary"
                    >
                        <HiDownload style={{ marginRight: '8px' }} /> Download Resume
                    </a>
                </div>
            </div>
        </section>
    );
}
