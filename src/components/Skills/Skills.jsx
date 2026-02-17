import { motion } from "framer-motion";
import { SKILLS } from "../../data/constants";
import { fadeUp, staggerContainer } from "../../utils/animations";
import { getIcon } from "../../utils/iconMap";
import Section, { SectionHeader } from "../common/Section";

export default function Skills() {
    return (
        <Section id="skills" className="bg-bg-secondary">
            <SectionHeader label="Technical Expertise" title="Skills & Technologies" />
            <motion.div
                className="skills-grid"
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
            >
                {SKILLS.map((group, gi) => (
                    <motion.div
                        key={group.category}
                        variants={fadeUp}
                        custom={gi}
                        className="skill-card"
                    >
                        <div className="skill-card__header">
                            <div className="skill-card__icon">
                                {getIcon(group.iconName)}
                            </div>
                            <h3 className="skill-card__title">{group.category}</h3>
                        </div>
                        <div className="skill-card__badges">
                            {group.items.map((skill) => (
                                <span key={skill} className="skill-badge">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </Section>
    );
}
