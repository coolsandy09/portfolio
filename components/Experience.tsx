"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, ChevronRight, Building2, Globe } from "lucide-react";
import { useState } from "react";

const EXPERIENCE = [
    {
        role: "Data Engineer",
        company: "LTIMindtree",
        client: "Scania CV AB Sweden",
        period: "Sep 2022 – July 2025",
        type: "Full-time",
        highlights: [
            "Architected Azure Data Factory pipelines integrating multi-source data from Dynamics 365, Hive, and SQL Server into Snowflake.",
            "Reduced ETL load times by 90% (from 6h to 2h), processing 5M+ daily records across enterprise data pipelines.",
            "Optimized 25+ Power BI dashboards using SSAS Tabular and advanced DAX, exceeding SLAs for 500+ users and cutting query time by 45%.",
            "Achieved 99.8% pipeline reliability and implemented granular Role-Based Access Control (RBAC) for data governance and security.",
            "Built SQL Agent/Job monitoring with proactive alerting, reducing failure detection by 50% and preventing 95% of SLA breaches.",
            "Created a data validation framework reducing manual verification by 90% and improving accuracy from 94% to 99.7%.",
            "Managed architectures supporting $50M+ revenue operations for Fortune 500 clients.",
        ],
    },
    {
        role: "Graduate Engineering Trainee",
        company: "LTIMindtree",
        period: "May 2022 – Sep 2022",
        type: "Training",
        highlights: [
            "Completed 16-week intensive training in full-stack and data tools: Java, SQL, Python, Azure, and BI.",
            "Delivered capstone project: 'Supermarket Analytics Dashboard' — built on 5 fact tables, 12 dimensions, SCD Type 2 implementation, and 15+ Power BI dashboards.",
            "Gained hands-on expertise in Azure Data Factory, Synapse Analytics, Power BI, and database design.",
        ],
    },
];

export default function Experience() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    return (
        <section id="experience" className="py-24 relative bg-slate-900/20">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="section-heading">
                        Professional <span className="text-cyan-400">Journey</span>
                    </h2>
                    <div className="section-accent-bar" />
                </motion.div>

                <div className="relative border-l-2 border-slate-800 ml-4 md:ml-8 space-y-12">
                    {EXPERIENCE.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="relative pl-8 md:pl-12"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-slate-950 shadow-[0_0_15px_rgba(34,211,238,0.5)]" />

                            {/* Timeline Connector Line */}
                            {index < EXPERIENCE.length - 1 && (
                                <div className="absolute -left-[1px] top-4 w-0.5 h-full bg-gradient-to-b from-cyan-500/30 to-transparent" />
                            )}

                            <div
                                className="glass-card p-6 md:p-8 rounded-2xl relative overflow-hidden group cursor-pointer"
                                onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
                            >
                                {/* Background Icon */}
                                <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                    <Briefcase className="w-32 h-32 text-cyan-400" />
                                </div>

                                {/* Header */}
                                <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4 relative z-10">
                                    <div>
                                        <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                                        <div className="flex flex-wrap items-center gap-2 text-lg">
                                            <Building2 className="w-4 h-4 text-cyan-400" />
                                            <span className="text-cyan-400 font-semibold">{exp.company}</span>
                                            {exp.client && (
                                                <>
                                                    <span className="text-slate-600">•</span>
                                                    <div className="flex items-center gap-1.5 text-indigo-300 font-medium">
                                                        <Globe className="w-3.5 h-3.5" />
                                                        <span className="text-sm">{exp.client}</span>
                                                    </div>
                                                </>
                                            )}
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${exp.type === "Full-time"
                                                ? "bg-green-500/10 text-green-400 border-green-500/20"
                                                : "bg-amber-500/10 text-amber-400 border-amber-500/20"
                                            }`}>
                                            {exp.type}
                                        </span>
                                        <div className="flex items-center gap-2 text-slate-400 font-mono text-sm bg-slate-950/50 px-3 py-1.5 rounded-full border border-slate-800">
                                            <Calendar className="w-3.5 h-3.5" />
                                            {exp.period}
                                        </div>
                                    </div>
                                </div>

                                {/* Highlights */}
                                <motion.ul
                                    initial={false}
                                    animate={{
                                        height: expandedIndex === index ? "auto" : "0",
                                        opacity: expandedIndex === index ? 1 : 0,
                                    }}
                                    transition={{ duration: 0.4, ease: "easeInOut" }}
                                    className="overflow-hidden space-y-3 relative z-10"
                                >
                                    {exp.highlights.map((highlight, i) => (
                                        <motion.li
                                            key={i}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={expandedIndex === index ? { opacity: 1, x: 0 } : {}}
                                            transition={{ delay: i * 0.05 }}
                                            className="flex items-start gap-3 text-slate-300"
                                        >
                                            <ChevronRight className="w-4 h-4 text-indigo-400 shrink-0 mt-1" />
                                            <span className="leading-relaxed text-sm md:text-base">{highlight}</span>
                                        </motion.li>
                                    ))}
                                </motion.ul>

                                {/* Expand indicator */}
                                <div className="flex items-center gap-2 mt-4 text-xs text-slate-500 relative z-10">
                                    <motion.div
                                        animate={{ rotate: expandedIndex === index ? 90 : 0 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <ChevronRight className="w-3.5 h-3.5" />
                                    </motion.div>
                                    {expandedIndex === index ? "Click to collapse" : "Click to expand details"}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
