import { motion } from "framer-motion";
import { FiMail, FiPhone, FiLinkedin, FiMapPin } from "react-icons/fi";
import { CONTACT_ITEMS } from "../../data/constants";
import { fadeUp, fadeIn, staggerContainer } from "../../utils/animations";
import Section, { SectionHeader } from "../common/Section";

const ICON_MAP = {
    mail: FiMail,
    phone: FiPhone,
    linkedin: FiLinkedin,
    mappin: FiMapPin,
};

export default function Contact() {
    return (
        <footer id="contact" className="contact-footer">
            <Section className="!py-20">
                <SectionHeader label="Get In Touch" title="Contact" />

                <motion.div
                    className="contact-grid"
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-80px" }}
                >
                    {CONTACT_ITEMS.map((c, ci) => {
                        const Wrapper = c.href ? "a" : "div";
                        const Icon = ICON_MAP[c.iconName];
                        const linkProps = c.href
                            ? {
                                href: c.href,
                                target: c.href.startsWith("http") ? "_blank" : undefined,
                                rel: c.href.startsWith("http")
                                    ? "noopener noreferrer"
                                    : undefined,
                            }
                            : {};
                        return (
                            <motion.div key={c.label} variants={fadeUp} custom={ci}>
                                <Wrapper
                                    {...linkProps}
                                    className="contact-card"
                                >
                                    <div className="contact-card__icon">
                                        {Icon && <Icon className="w-5 h-5" />}
                                    </div>
                                    <div className="contact-card__info">
                                        <p className="contact-card__label">{c.label}</p>
                                        <p className="contact-card__value">{c.value}</p>
                                    </div>
                                </Wrapper>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom bar */}
                <motion.div
                    variants={fadeIn}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="contact-bottom"
                >
                    <p className="contact-bottom__text">
                        Designed & built by{" "}
                        <span className="text-accent font-medium">Sandeep Sah</span> ·{" "}
                        Data Engineer
                    </p>
                </motion.div>
            </Section>
        </footer>
    );
}
