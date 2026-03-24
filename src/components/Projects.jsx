import { useState } from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';
import './Projects.css';

const projects = [
    {
        title: 'Personal Portfolio Website',
        description: 'A responsive digital portfolio built to showcase my skills, projects, and learning journey.',
        image: '🎨',
        tags: ['HTML', 'CSS', 'React'],
        category: 'web',
        live: '#',
        github: '#',
    }
];

const filters = ['All', 'Web', 'Mobile'];

export default function Projects() {
    const [activeFilter, setActiveFilter] = useState('All');

    const filteredProjects = activeFilter === 'All'
        ? projects
        : projects.filter(p => p.category === activeFilter.toLowerCase());

    return (
        <section className="section" id="projects">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-subtitle">My Work</span>
                    <h2 className="section-title">Featured <span>Projects</span></h2>
                    <p className="section-description">
                        Here are some of my recent projects that showcase my skills and experience.
                    </p>
                </div>

                <div className="projects-filter reveal">
                    {filters.map((filter) => (
                        <button
                            key={filter}
                            className={`filter-btn${activeFilter === filter ? ' active' : ''}`}
                            onClick={() => setActiveFilter(filter)}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="projects-grid">
                    {filteredProjects.map((project, i) => (
                        <div
                            className={`project-card reveal reveal-delay-${(i % 3) + 1}`}
                            key={project.title}
                        >
                            <div className="project-image">
                                <div className="project-image-placeholder">{project.image}</div>
                                <div className="project-overlay">
                                    <a href={project.live} className="project-overlay-btn live" title="Live Demo" target="_blank" rel="noreferrer">
                                        <FaExternalLinkAlt />
                                    </a>
                                    <a href={project.github} className="project-overlay-btn github" title="Source Code" target="_blank" rel="noreferrer">
                                        <FaGithub />
                                    </a>
                                </div>
                            </div>
                            <div className="project-info">
                                <div className="project-tags">
                                    {project.tags.map(tag => (
                                        <span className="project-tag" key={tag}>{tag}</span>
                                    ))}
                                </div>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
