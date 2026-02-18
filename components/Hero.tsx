"use client";

import { motion } from "framer-motion";
import { ChevronRight, Linkedin, Mail, MapPin } from "lucide-react";
import { useEffect, useState } from "react";

const ROLES = [
    "Enterprise Data Engineer",
    "Azure & Snowflake Solutions ", // 'Solutions' implies you build things, not just design them
    "Data Analytics & BI Consultant",         // 'Consultant' replaces 'Specialist' for a more senior feel
    "Python & Data Automation ",               // 'Researcher' is more active and grounded than 'Scholar'
];

export default function Hero() {
    const [roleIndex, setRoleIndex] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const currentRole = ROLES[roleIndex];
        const typeSpeed = isDeleting ? 50 : 100;

        const timer = setTimeout(() => {
            if (!isDeleting && text === currentRole) {
                setTimeout(() => setIsDeleting(true), 1500);
            } else if (isDeleting && text === "") {
                setIsDeleting(false);
                setRoleIndex((prev) => (prev + 1) % ROLES.length);
            } else {
                setText(
                    currentRole.substring(0, text.length + (isDeleting ? -1 : 1))
                );
            }
        }, typeSpeed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, roleIndex]);

    return (
        <section
            id="hero"
            className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
        >
            {/* Background Grid */}
            <div className="absolute inset-0 bg-grid-white [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] pointer-events-none" />

            {/* Glow Effects */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-cyan-500/15 rounded-full blur-[120px] pointer-events-none animate-float" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/15 rounded-full blur-[120px] pointer-events-none animate-float-slow" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-cyan-500/5 to-transparent rounded-full pointer-events-none" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 text-center">
                {/* Status Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-900/50 border border-slate-700/50 mb-8 backdrop-blur-md">
                        <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                        <span className="text-xs text-slate-300 font-medium tracking-wide uppercase">
                            Open to Opportunities
                        </span>
                    </div>
                </motion.div>

                {/* Name */}
                <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-4"
                >
                    Sandeep <span className="gradient-text">Sah</span>
                </motion.h1>

                {/* Typewriter */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="text-xl md:text-2xl lg:text-3xl text-slate-400 h-10 mb-6 font-mono flex items-center justify-center gap-1"
                >
                    <span className="text-slate-500">&gt;</span> {text}
                    <span className="animate-blink text-cyan-400 font-light">|</span>
                </motion.div>

                {/* Location */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.25 }}
                    className="flex items-center justify-center gap-2 mb-6 text-slate-500"
                >
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm font-medium">Bengaluru, Karnataka, India</span>
                </motion.div>

                {/* Description */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="max-w-2xl mx-auto text-slate-400 text-base md:text-lg mb-10 leading-relaxed"
                >
                    Architecting enterprise data platforms processing{" "}
                    <span className="text-cyan-400 font-semibold">5TB+ daily</span> for
                    Fortune 500 clients. Specializing in Azure, Snowflake, and modern
                    ETL/ELT pipelines with{" "}
                    <span className="text-indigo-400 font-semibold">
                        99.8% reliability
                    </span>{" "}
                    and{" "}
                    <span className="text-cyan-400 font-semibold">
                        90% ETL time reduction
                    </span>
                    .
                </motion.p>

                {/* CTA Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="flex flex-wrap items-center justify-center gap-4"
                >
                    <a
                        href="#projects"
                        className="group px-7 py-3.5 bg-gradient-to-r from-cyan-500 to-cyan-400 hover:from-cyan-400 hover:to-cyan-300 text-slate-950 font-semibold rounded-xl transition-all flex items-center gap-2 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40 hover:scale-105 duration-300"
                    >
                        View My Work
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                    <a
                        href="https://linkedin.com/in/sandeep-sah"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-7 py-3.5 bg-slate-900/80 border border-slate-700 hover:border-cyan-400/50 text-slate-300 hover:text-cyan-400 font-medium rounded-xl transition-all flex items-center gap-2 hover:scale-105 duration-300 backdrop-blur-sm"
                    >
                        <Linkedin className="w-4 h-4" /> LinkedIn
                    </a>
                    <a
                        href="mailto:sandeepsah2201@gmail.com"
                        className="px-7 py-3.5 bg-slate-900/80 border border-slate-700 hover:border-indigo-400/50 text-slate-300 hover:text-indigo-400 font-medium rounded-xl transition-all flex items-center gap-2 hover:scale-105 duration-300 backdrop-blur-sm"
                    >
                        <Mail className="w-4 h-4" /> Contact
                    </a>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1 }}
                    className="absolute bottom-8 left-1/2 -translate-x-1/2"
                >
                    <div className="w-6 h-10 rounded-full border-2 border-slate-700 flex items-start justify-center p-1.5">
                        <motion.div
                            animate={{ y: [0, 12, 0] }}
                            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                            className="w-1.5 h-1.5 rounded-full bg-cyan-400"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
