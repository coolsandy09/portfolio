import { motion } from "framer-motion";
import { FiChevronRight, FiLinkedin, FiMapPin } from "react-icons/fi";
import { METRICS } from "../../data/constants";
import { fadeUp, staggerContainer } from "../../utils/animations";

export default function Hero() {
    return (
        <section
            id="about"
            className="hero"
        >
            {/* Decorative Orbs */}
            <div className="hero-orb hero-orb-1" />
            <div className="hero-orb hero-orb-2" />
            <div className="hero-orb hero-orb-3" />

            <div className="hero__inner">
                <div className="hero__grid">
                    {/* Left - Text */}
                    <motion.div
                        className="hero__content"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        <motion.div variants={fadeUp} custom={0}>
                            <span className="hero__badge">
                                <span className="hero__badge-dot" />
                                Open to Opportunities
                            </span>
                        </motion.div>

                        <motion.h1
                            variants={fadeUp}
                            custom={1}
                            className="hero__title"
                        >
                            Sandeep Sah
                        </motion.h1>

                        <motion.p
                            variants={fadeUp}
                            custom={2}
                            className="hero__subtitle"
                        >
                            Data Engineer{" "}
                            <span className="hero__dot">·</span>{" "}
                            <span className="gradient-text font-semibold">
                                Building Scalable Data Architectures
                            </span>
                        </motion.p>

                        <motion.p
                            variants={fadeUp}
                            custom={3}
                            className="hero__description"
                        >
                            Specializing in Azure, Snowflake, and modern ETL/ELT pipelines.
                            I architect data solutions that process terabytes daily with{" "}
                            <span className="text-accent font-medium">99.8% reliability</span>,
                            driving actionable insights for global enterprises like{" "}
                            <span className="text-text-primary font-medium">Scania CV AB Sweden</span>.
                        </motion.p>

                        <motion.div
                            variants={fadeUp}
                            custom={4}
                            className="hero__actions"
                        >
                            <a href="#contact" className="btn btn--primary">
                                Get In Touch <FiChevronRight className="w-4 h-4" />
                            </a>
                            <a
                                href="https://linkedin.com/in/sandeep-sah"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn--outline"
                            >
                                <FiLinkedin className="w-4 h-4" /> LinkedIn
                            </a>
                        </motion.div>

                        {/* Location */}
                        <motion.div
                            variants={fadeUp}
                            custom={5}
                            className="hero__location"
                        >
                            <FiMapPin className="w-4 h-4" />
                            Bengaluru, India
                        </motion.div>
                    </motion.div>

                    {/* Right - Metrics */}
                    <motion.div
                        className="hero__metrics-wrap"
                        variants={staggerContainer}
                        initial="hidden"
                        animate="visible"
                    >
                        <div className="hero__metrics-grid">
                            {METRICS.map((m, i) => (
                                <motion.div
                                    key={m.label}
                                    variants={fadeUp}
                                    custom={i + 2}
                                    className="metric-card"
                                >
                                    <div className="metric-value">{m.value}</div>
                                    <p className="metric-label">{m.label}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
