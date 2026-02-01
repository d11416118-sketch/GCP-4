import React from 'react';
import { motion } from 'framer-motion';
import { Code, Layout, Database, Terminal } from 'lucide-react';
import './About.css';

const About = () => {
    const skills = [
        { name: 'React', icon: <Code size={20} /> },
        { name: 'JavaScript', icon: <Terminal size={20} /> },
        { name: 'UI/UX Design', icon: <Layout size={20} /> },
        { name: 'Node.js', icon: <Database size={20} /> },
        { name: 'TypeScript', icon: <Code size={20} /> },
        { name: 'CSS / Tailwind', icon: <Layout size={20} /> },
    ];

    return (
        <section id="about" className="about-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="section-header"
                >
                    <h2 className="section-title">關於我</h2>
                    <div className="section-line"></div>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="about-text"
                    >
                        <p>
                            我是一位擁抱新舊技術的全端工程師，掌握C#並具備獨特的 COBOL 開發實力。
                            熱衷於將 AI 工具與雲端架構融入開發，致力於以嚴謹邏輯打造高效、創新的軟體解決方案。
                        </p>
                        <p>
                            我的目標是熟練掌握C#、python、java、javascript、html、css、sql、node.js。
                        </p>

                        <div className="future-goals" style={{ marginTop: '2rem' }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: '#fff' }}>未來目標與興趣</h3>
                            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                                <li style={{ background: 'rgba(0, 240, 255, 0.1)', color: '#00f0ff', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>
                                    🚁 無人機 (UAV)
                                </li>
                                <li style={{ background: 'rgba(112, 0, 255, 0.1)', color: '#7000ff', padding: '0.5rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>
                                    🚑 EMT-1 證照
                                </li>
                            </ul>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="skills-grid"
                    >
                        {skills.map((skill, index) => (
                            <div key={index} className="skill-card">
                                <div className="skill-icon">{skill.icon}</div>
                                <span className="skill-name">{skill.name}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
