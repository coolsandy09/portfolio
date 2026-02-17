import { motion } from "framer-motion";
import { FiBookOpen, FiExternalLink } from "react-icons/fi";
import { PROJECTS } from "../../data/constants";
import { fadeUp, staggerContainer } from "../../utils/animations";
import Section, { SectionHeader } from "../common/Section";

export default function Projects() {
    return (
        <Section id="projects" className="bg-bg-secondary">
            <SectionHeader label="Portfolio" title="Featured Projects" />
            <motion.div
                className="projects-grid"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
            >
                {PROJECTS.map((p, pi) => (
                    <motion.div
                        key={p.title}
                        variants={fadeUp}
                        custom={pi}
                        className="project-card"
                    >
                        {/* Tag */}
                        <div className="project-card__top">
                            <span className="project-card__tag">
                                {p.tag}
                            </span>
                            {p.ieeeLink && (
                                <a
                                    href={p.ieeeLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ieee-badge"
                                >
                                    <FiBookOpen className="w-3.5 h-3.5" />
                                    IEEE Published
                                    <FiExternalLink className="w-3 h-3" />
                                </a>
                            )}
                        </div>

                        <h3 className="project-card__title">{p.title}</h3>
                        <p className="project-card__description">{p.description}</p>

                        {/* Tech */}
                        <div className="project-card__tech">
                            {p.techStack.map((t) => (
                                <span key={t} className="tech-tag">
                                    {t}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}
