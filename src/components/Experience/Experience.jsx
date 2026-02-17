import { motion } from "framer-motion";
import { FiBriefcase, FiCalendar, FiChevronRight, FiDatabase } from "react-icons/fi";
import { EXPERIENCE } from "../../data/constants";
import { fadeUp, staggerContainer } from "../../utils/animations";
import Section, { SectionHeader } from "../common/Section";

export default function Experience() {
    return (
        <Section id="experience">
            <SectionHeader label="Career Journey" title="Professional Experience" />
            <div className="timeline">
                <div className="timeline-line" />
                <motion.div
                    className="timeline__entries"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {EXPERIENCE.map((exp, ei) => (
                        <motion.div key={ei} variants={fadeUp} custom={ei} className="timeline__entry">
                            <div className="timeline-dot" style={{ top: "1.75rem" }} />
                            <div className="experience-card">
                                {/* Header */}
                                <div className="experience-card__header">
                                    <div>
                                        <h3 className="experience-card__role">{exp.role}</h3>
                                        <div className="experience-card__company">
                                            <FiBriefcase className="w-4 h-4 text-accent" />
                                            <span className="experience-card__company-name">
                                                {exp.company}
                                            </span>
                                            {exp.client && (
                                                <>
                                                    <span className="text-text-muted">·</span>
                                                    <span className="experience-card__client">
                                                        Client: {exp.client}
                                                    </span>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <span className="experience-card__period">
                                        <FiCalendar className="w-3.5 h-3.5" />
                                        {exp.period}
                                    </span>
                                </div>

                                {/* Client Tag */}
                                {exp.client && (
                                    <div className="experience-card__client-tag">
                                        <FiDatabase className="w-3.5 h-3.5 text-accent" />
                                        <span>
                                            Enterprise Data Engineering for{" "}
                                            <span className="text-accent font-semibold">{exp.client}</span>
                                        </span>
                                    </div>
                                )}

                                {/* Highlights */}
                                <ul className="experience-card__highlights">
                                    {exp.highlights.map((h, hi) => (
                                        <li key={hi} className="experience-card__highlight">
                                            <FiChevronRight className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                                            <span
                                                dangerouslySetInnerHTML={{
                                                    __html: h
                                                        .replace(
                                                            /(\d+%|\d+\+|[$]\d+M\+|\d+\.\d+%)/g,
                                                            '<span class="text-accent font-semibold">$1</span>'
                                                        )
                                                        .replace(
                                                            /(Scania CV AB Sweden)/g,
                                                            '<span class="text-text-primary font-semibold">$1</span>'
                                                        ),
                                                }}
                                            />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </Section>
    );
}
