import React from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Send } from 'lucide-react';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        alert('Thank you for your message! (Demo only)');
    };

    return (
        <section id="contact" className="contact-section">
            <div className="container">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="section-header"
                >
                    <h2 className="section-title">聯絡資訊</h2>
                    <div className="section-line"></div>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="contact-info"
                    >
                        <h3>聯絡我</h3>
                        <p>
                            我隨時歡迎討論新專案、創意點子或是任何合作機會。
                        </p>

                        <div className="contact-details">
                            <div className="contact-item">
                                <Mail className="contact-icon" />
                                <span>fschang288@gmail.com</span>
                            </div>
                            <div className="contact-item">
                                <MapPin className="contact-icon" />
                                <span>台北，台灣</span>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="contact-form-container"
                    >
                        <form className="contact-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <input type="text" placeholder="您的姓名" required />
                            </div>
                            <div className="form-group">
                                <input type="email" placeholder="您的 Email" required />
                            </div>
                            <div className="form-group">
                                <textarea placeholder="您的訊息" rows="5" required></textarea>
                            </div>
                            <button type="submit" className="submit-btn">
                                發送訊息 <Send size={18} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
