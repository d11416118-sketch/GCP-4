import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section id="hero" className="hero-section">
            <div className="hero-background">
                <div className="glow-orb orb-1"></div>
                <div className="glow-orb orb-2"></div>
            </div>

            <div className="hero-content">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h2 className="hero-greeting">你好，我是</h2>
                    <h1 className="hero-title">
                        <span className="text-gradient">張富翔</span>
                    </h1>
                    <p className="hero-subtitle">
                        打造融合科技與設計的數位體驗。
                    </p>

                    <div className="hero-cta">
                        <a href="#projects" className="cta-button primary">
                            查看作品
                        </a>
                        <a href="#contact" className="cta-button secondary">
                            聯絡我 <ArrowRight size={16} />
                        </a>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
