"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, BadgeCheck, BookOpen, School } from "lucide-react";

const EDUCATION = [
    {
        degree: "B.E. in Computer Science",
        institution: "CMR Institute of Technology, Bengaluru",
        period: "2018 – 2022",
        description:
            "Focused on Data Structures, Algorithms, Database Management Systems, and Software Engineering. Published IEEE research paper on Tirhuta character recognition. Graduated with First Class Distinction.",
        icon: GraduationCap,
    },
    {
        degree: "+2 / Intermediate (Science)",
        institution: "Nepal",
        period: "2016 – 2018",
        description:
            "Completed higher secondary education with focus on Science and Mathematics, building the foundation for engineering studies.",
        icon: BookOpen,
    },
    {
        degree: "SLC (Secondary Level Certificate)",
        institution: "Nepal",
        period: "Completed 2016",
        description:
            "Successfully completed the nationally recognized School Leaving Certificate examination, marking the beginning of the academic journey.",
        icon: School,
    },
];

const CERTIFICATIONS = [
    { name: "Azure Data Engineer Associate (DP-203)", tier: "professional" },
    { name: "SnowPro Core Associate", tier: "professional" },
    { name: "Azure Data Fundamentals (DP-900)", tier: "foundational" },
    { name: "Microsoft Azure Fundamentals (AZ-900)", tier: "foundational" },
    { name: "SQL Server Development", tier: "professional" },
    { name: "Generative AI Fundamentals", tier: "foundational" },
];

export default function Education() {
    return (
        <section id="education" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="section-heading">
                        Education & <span className="text-cyan-400">Certifications</span>
                    </h2>
                    <div className="section-accent-bar" />
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Education Timeline */}
                    <div>
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <GraduationCap className="text-cyan-400 w-7 h-7" />
                            Academic Journey
                        </h3>

                        <div className="relative border-l-2 border-slate-800 ml-3 space-y-8">
                            {EDUCATION.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.15, duration: 0.5 }}
                                    className="relative pl-8"
                                >
                                    {/* Timeline dot */}
                                    <div className={`absolute -left-[9px] top-1 w-4 h-4 rounded-full border-4 border-slate-950 ${index === 0
                                            ? "bg-cyan-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                                            : "bg-slate-600"
                                        }`} />

                                    <div className="glass-card p-6 rounded-2xl group">
                                        <div className="flex items-start gap-3 mb-3">
                                            <edu.icon className={`w-5 h-5 shrink-0 mt-0.5 ${index === 0 ? "text-cyan-400" : "text-slate-500"
                                                }`} />
                                            <div>
                                                <h4 className="text-lg font-bold text-white">
                                                    {edu.degree}
                                                </h4>
                                                <p className="text-cyan-400 text-sm font-medium">
                                                    {edu.institution}
                                                </p>
                                            </div>
                                        </div>
                                        <div className="ml-8">
                                            <span className="text-xs font-mono text-slate-500 mb-2 block">
                                                {edu.period}
                                            </span>
                                            <p className="text-slate-400 text-sm leading-relaxed">
                                                {edu.description}
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Certifications */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
                            <Award className="text-indigo-400 w-7 h-7" />
                            Certifications
                        </h3>

                        <div className="space-y-3">
                            {CERTIFICATIONS.map((cert, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.08, duration: 0.4 }}
                                    className="glass-card p-4 rounded-xl flex items-center gap-4 group"
                                >
                                    <BadgeCheck className={`w-5 h-5 shrink-0 transition-colors ${cert.tier === "professional"
                                            ? "text-indigo-500 group-hover:text-cyan-400"
                                            : "text-slate-500 group-hover:text-indigo-400"
                                        }`} />
                                    <div className="flex-1">
                                        <span className="font-medium text-slate-200 text-sm">
                                            {cert.name}
                                        </span>
                                    </div>
                                    <span className={`text-[10px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded-full ${cert.tier === "professional"
                                            ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                                            : "bg-slate-800 text-slate-500 border border-slate-700"
                                        }`}>
                                        {cert.tier}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
