import { useEffect, useRef } from 'react';
import { FaReact, FaNodeJs, FaDatabase } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiTailwindcss, SiMongodb, SiGit, SiDocker, SiFigma, SiPostman, SiFirebase } from 'react-icons/si';
import './Skills.css';

const skillCategories = [
    {
        title: 'Frontend',
        description: 'Building responsive, interactive user interfaces',
        icon: <FaReact />,
        iconBg: 'linear-gradient(135deg, #7c3aed, #a78bfa)',
        skills: [
            { name: 'React.js', level: 65 },
            { name: 'HTML5 / CSS3', level: 80 },
            { name: 'Tailwind CSS', level: 70 },
        ],
    },
    {
        title: 'Backend',
        description: 'Server-side logic and API development',
        icon: <FaNodeJs />,
        iconBg: 'linear-gradient(135deg, #06b6d4, #0891b2)',
        skills: [
            { name: 'Python', level: 75 },
        ],
    },
    {
        title: 'Database & Tools',
        description: 'Data management and development tools',
        icon: <FaDatabase />,
        iconBg: 'linear-gradient(135deg, #f59e0b, #d97706)',
        skills: [
            { name: 'MongoDB', level: 80 },
            { name: 'MySQL / PostgreSQL', level: 75 },
            { name: 'Git / GitHub', level: 90 },
        ],
    },
];

const extraSkills = [
    'Vite', 'Linux'
];

export default function Skills() {
    const sectionRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const bars = entry.target.querySelectorAll('.skill-bar-fill');
                        bars.forEach((bar) => {
                            bar.style.width = bar.dataset.width;
                            bar.classList.add('animate');
                        });
                    }
                });
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section className="section skills-section" id="skills" ref={sectionRef}>
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-subtitle">What I Know</span>
                    <h2 className="section-title">My <span>Skills</span></h2>
                    <p className="section-description">
                        Technologies and tools I use to bring ideas to life.
                    </p>
                </div>

                <div className="skills-grid">
                    {skillCategories.map((cat, i) => (
                        <div className={`skill-category reveal reveal-delay-${i + 1}`} key={cat.title}>
                            <div className="skill-category-icon" style={{ background: cat.iconBg }}>
                                {cat.icon}
                            </div>
                            <h3 className="skill-category-title">{cat.title}</h3>
                            <p className="skill-category-desc">{cat.description}</p>
                            <div className="skill-list">
                                {cat.skills.map((skill) => (
                                    <div className="skill-item" key={skill.name}>
                                        <div className="skill-item-header">
                                            <span className="skill-item-name">{skill.name}</span>
                                            <span className="skill-item-level">{skill.level}%</span>
                                        </div>
                                        <div className="skill-bar">
                                            <div
                                                className="skill-bar-fill"
                                                data-width={`${skill.level}%`}
                                                style={{ width: 0 }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>

                <div className="skills-extra reveal reveal-delay-4">
                    <h3>Other Technologies I Work With</h3>
                    <div className="skills-tags">
                        {extraSkills.map((skill) => (
                            <span className="skill-tag" key={skill}>{skill}</span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
