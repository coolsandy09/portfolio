"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Database, BarChart2, Bot, Building, Droplets } from "lucide-react";
import { cn } from "@/lib/utils";

const PROJECTS = [
    {
        title: "Supermarket Analytics Dashboard",
        category: "Data Warehouse & BI",
        description:
            "Capstone project built during LTIMindtree training — designed with Kimball Methodology using 5 fact tables, 12 dimension tables, and SCD Type 2 implementation. Delivered 15+ interactive Power BI dashboards for retail analytics insights.",
        tags: ["Power BI", "Kimball", "SCD Type 2", "Star Schema", "SQL"],
        icon: BarChart2,
        colSpan: "md:col-span-2",
        featured: true,
    },
    {
        title: "Advertisement Reminder System",
        category: "Automation",
        description:
            "Automated advertisement scheduling and reminders for Janakpur Today Media Group using Python. Streamlined workflows saving 20+ hours weekly.",
        tags: ["Python", "Automation", "Scheduling"],
        icon: Bot,
        colSpan: "md:col-span-1",
    },
    {
        title: "Entertainment Tracker",
        category: "Full Stack",
        description:
            "Personal media tracking system for movies, books, and games with advanced filtering and search capabilities.",
        tags: ["React", "Node.js", "MongoDB"],
        icon: Database,
        colSpan: "md:col-span-1",
    },
    {
        title: "Hostel Allocation System",
        category: "Database Engineering",
        description:
            "Streamlined room assignment logic with automated allocation algorithms and constraint-based matching.",
        tags: ["SQL", "Database Design", "Backend"],
        icon: Building,
        colSpan: "md:col-span-1",
    },
    {
        title: "Blood Donation Management",
        category: "Healthcare IT",
        description:
            "Optimized donor tracking and blood availability system for hospitals, improving coordination and response times.",
        tags: ["Database", "Healthcare IT", "CRUD"],
        icon: Droplets,
        colSpan: "md:col-span-1",
    },
];

export default function Projects() {
    return (
        <section id="projects" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="section-heading">
                        Featured <span className="text-cyan-400">Projects</span>
                    </h2>
                    <div className="section-accent-bar" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-6">
                    {/* IEEE Research Hero Card (Bento span-2) */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="md:col-span-2 relative overflow-hidden rounded-3xl group"
                    >
                        <div className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden flex flex-col justify-between min-h-[280px]">
                            {/* Gradient Orb */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-all duration-500 group-hover:bg-indigo-500/20 group-hover:scale-110" />
                            <div className="absolute bottom-0 left-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl -ml-12 -mb-12" />

                            <div className="relative z-10">
                                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300 text-sm font-semibold mb-4 border border-indigo-500/30">
                                    📄 IEEE Research Publication
                                </div>
                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                                    Handwritten Character Recognition
                                </h3>
                                <p className="text-slate-300 text-base md:text-lg max-w-2xl leading-relaxed mb-6">
                                    Developed a CNN model for Tirhuta language digit recognition achieving <span className="text-cyan-400 font-semibold">88–89% accuracy</span>.
                                    Published in IEEE, contributing to the preservation and digitization of low-resource languages.
                                </p>
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {["Python", "CNN", "Deep Learning", "TensorFlow", "Machine Learning"].map(
                                        (tag) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1 rounded-lg bg-slate-950/50 border border-slate-800 text-slate-400 text-sm hover:border-indigo-500/40 hover:text-indigo-300 transition-colors"
                                            >
                                                {tag}
                                            </span>
                                        )
                                    )}
                                </div>
                            </div>

                            <a
                                href="https://ieeexplore.ieee.org"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-cyan-400 font-semibold hover:text-indigo-400 transition-colors w-fit group/link relative z-10"
                            >
                                Read on IEEE Xplore{" "}
                                <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                            </a>
                        </div>
                    </motion.div>

                    {/* Other Projects - Bento Grid */}
                    {PROJECTS.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className={cn(
                                "glass-card p-7 rounded-2xl flex flex-col justify-between group relative overflow-hidden",
                                project.colSpan
                            )}
                        >
                            {/* Hover gradient border glow */}
                            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/5 via-transparent to-indigo-500/5 pointer-events-none" />

                            <div className="relative z-10">
                                <div className="flex justify-between items-start mb-4">
                                    <div className="flex items-center gap-3">
                                        <div className="p-2 rounded-lg bg-slate-800/80 text-slate-400 group-hover:text-cyan-400 transition-colors">
                                            <project.icon className="w-4 h-4" />
                                        </div>
                                        <span className="text-xs font-mono text-indigo-400 uppercase tracking-wider font-semibold">
                                            {project.category}
                                        </span>
                                    </div>
                                    {project.featured && (
                                        <span className="text-xs px-2 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 font-semibold">
                                            Capstone
                                        </span>
                                    )}
                                </div>

                                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                                    {project.title}
                                </h3>
                                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                                    {project.description}
                                </p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-auto relative z-10">
                                {project.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2.5 py-1 rounded-md bg-slate-800/50 text-xs text-slate-400 border border-slate-700/50 hover:border-cyan-400/30 hover:text-cyan-300 transition-colors"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
