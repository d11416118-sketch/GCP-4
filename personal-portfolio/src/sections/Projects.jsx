import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import './Projects.css';

const Projects = () => {
    const projects = [
        {
            title: 'Vibe Robot',
            description: '使用Vibe coding製作的比賽作品，曾獲得佳作',
            tags: ['Google Gemini API', 'Tone.js', 'Tailwind CSS + HTML/JavaScript', 'tiiny.host'],
            link: 'https://drive.google.com/file/d/1hueXd8wP_zarxiXe_rbqVNxbd2aEpmNU/view?usp=sharing',
            github: 'https://github.com/d11416118-sketch/2025-Vibe-Robot'
        },
        {
            title: '1959 製茶所(與郭俊騰、林正錡合作共同完成)',
            description: '2026COBOL緯創金融程式營作品',
            tags: ['Python (Flask)', 'COBOL', 'HTML'],
            link: 'https://docs.google.com/presentation/d/1PYRwNhqTD059Azk4jrQI00EoQj7stOo2/edit?usp=sharing&ouid=108149209650167473507&rtpof=true&sd=true',
            github: 'https://github.com/d11416118-sketch/2026-1-17-COBOL'
        }
    ];

    return (
        <section id="projects" className="projects-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title">我的作品</h2>
                    <div className="section-line"></div>
                </motion.div>

                <div className="projects-grid">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="project-card"
                        >
                            <div className="project-content">
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-description">{project.description}</p>

                                <div className="project-tags">
                                    {project.tags.map((tag, i) => (
                                        <span key={i} className="project-tag">{tag}</span>
                                    ))}
                                </div>

                                <div className="project-links">
                                    <a href={project.github} className="icon-link"><Github size={20} /></a>
                                    <a href={project.link} className="icon-link"><ExternalLink size={20} /></a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
