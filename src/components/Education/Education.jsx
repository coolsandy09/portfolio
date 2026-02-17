import { motion } from "framer-motion";
import { FiBookOpen, FiAward } from "react-icons/fi";
import { CERTIFICATIONS } from "../../data/constants";
import { fadeUp, staggerContainer } from "../../utils/animations";
import Section, { SectionHeader } from "../common/Section";

export default function Education() {
    return (
        <Section id="education">
            <SectionHeader label="Credentials" title="Education & Certifications" />
            <motion.div
                className="education-grid"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
            >
                {/* Degree */}
                <motion.div variants={fadeUp} className="education-card">
                    <div className="education-card__header">
                        <div className="education-card__icon">
                            <FiBookOpen className="w-5 h-5" />
                        </div>
                        <h3 className="education-card__title">Education</h3>
                    </div>

                    <div className="education-card__body">
                        <h4 className="education-card__degree">
                            B.E. in Computer Science
                        </h4>
                        <p className="education-card__school">
                            CMR Institute of Technology
                        </p>
                        <span className="education-card__year">2017 – 2021</span>
                    </div>
                </motion.div>

                {/* Certs */}
                <motion.div variants={fadeUp} custom={1} className="education-card">
                    <div className="education-card__header">
                        <div className="education-card__icon">
                            <FiAward className="w-5 h-5" />
                        </div>
                        <h3 className="education-card__title">Certifications</h3>
                    </div>

                    <div className="certifications-list">
                        {CERTIFICATIONS.map((c) => (
                            <div key={c.name} className="cert-badge">
                                <FiAward className="w-4 h-4 text-accent shrink-0" />
                                <div>
                                    <span className="cert-badge__name">{c.name}</span>
                                    <span className="cert-badge__provider">{c.provider}</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </Section>
    );
}
