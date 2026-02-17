import { motion } from "framer-motion";
import { fadeUp } from "../../utils/animations";

export default function Section({ id, children, className = "" }) {
    return (
        <section id={id} className={`section-wrapper ${className}`}>
            <div className="section-container">{children}</div>
        </section>
    );
}

export function SectionHeader({ label, title }) {
    return (
        <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-80px" }}
            className="section-header"
        >
            <p className="section-label">{label}</p>
            <h2 className="section-title">{title}</h2>
            <div className="section-divider" />
        </motion.div>
    );
}
