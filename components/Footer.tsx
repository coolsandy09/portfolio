"use client";

import { motion } from "framer-motion";
import { Mail, Linkedin, Phone, MapPin, Heart } from "lucide-react";

const CONTACT_CARDS = [
    {
        label: "Email",
        value: "sandeepsah2201@gmail.com",
        href: "mailto:sandeepsah2201@gmail.com",
        icon: Mail,
        color: "cyan",
    },
    {
        label: "LinkedIn",
        value: "linkedin.com/in/sandeep-sah",
        href: "https://linkedin.com/in/sandeep-sah",
        icon: Linkedin,
        color: "indigo",
        external: true,
    },
    {
        label: "Phone",
        value: "+91-9110414193",
        href: "tel:+919110414193",
        icon: Phone,
        color: "cyan",
    },
    {
        label: "Location",
        value: "Bengaluru, Karnataka, India",
        href: undefined,
        icon: MapPin,
        color: "slate",
    },
];

const LANGUAGES = [
    "Nepali (Native)",
    "Maithili (Native)",
    "English (Fluent)",
    "Hindi (Fluent)",
];

export default function Footer() {
    return (
        <footer
            id="contact"
            className="bg-slate-950 pt-24 pb-12 border-t border-slate-900 relative overflow-hidden"
        >
            {/* Background Glow */}
            <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-500/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6">
                        Let&apos;s <span className="gradient-text">Connect</span>
                    </h2>
                    <p className="text-slate-400 text-lg max-w-2xl mx-auto">
                        Ready to architect scalable data solutions? I&apos;m open to
                        discussing new opportunities and collaborations.
                    </p>
                </motion.div>

                {/* Contact Grid */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-20">
                    {CONTACT_CARDS.map((card, index) => {
                        const Wrapper = card.href ? "a" : "div";
                        const wrapperProps = card.href
                            ? {
                                href: card.href,
                                ...(card.external
                                    ? { target: "_blank", rel: "noopener noreferrer" }
                                    : {}),
                            }
                            : {};

                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <Wrapper
                                    {...wrapperProps}
                                    className="glass-card p-6 rounded-2xl flex flex-col items-center gap-4 transition-all group text-center h-full block"
                                >
                                    <div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300 ${card.color === "cyan"
                                                ? "bg-cyan-500/10 text-cyan-400"
                                                : card.color === "indigo"
                                                    ? "bg-indigo-500/10 text-indigo-400"
                                                    : "bg-slate-700/30 text-slate-300"
                                            }`}
                                    >
                                        <card.icon className="w-5 h-5" />
                                    </div>
                                    <div>
                                        <div className="text-xs text-slate-500 uppercase tracking-wider font-semibold mb-1">
                                            {card.label}
                                        </div>
                                        <div className="text-sm md:text-base font-medium text-white break-all">
                                            {card.value}
                                        </div>
                                    </div>
                                </Wrapper>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-slate-900 gap-4">
                    <div className="text-slate-500 text-sm flex items-center gap-1.5">
                        © {new Date().getFullYear()} Sandeep Sah. Built with{" "}
                        <Heart className="w-3 h-3 text-red-500 inline" /> using Next.js
                    </div>
                    <div className="flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm text-slate-500">
                        {LANGUAGES.map((lang) => (
                            <span key={lang} className="hover:text-slate-300 transition-colors">
                                {lang}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
}
