"use client";

import { motion } from "framer-motion";
import { Database, BarChart2, Code2, GitBranch, Cloud, Layers } from "lucide-react";

const SKILL_GROUPS = [
    {
        title: "Cloud & Data Platforms",
        icon: Cloud,
        color: "cyan",
        skills: [
            "Azure Data Factory",
            "ADLS Gen2",
            "Azure Synapse Analytics",
            "Snowflake",
            "SQL Server",
            "Dynamics 365",
            "Hive",
        ],
    },
    {
        title: "Data Engineering & BI",
        icon: Database,
        color: "indigo",
        skills: [
            "ETL / ELT Pipelines",
            "SSIS",
            "SSAS Tabular",
            "Power BI",
            "DBT",
            "Kimball Methodology",
            "Advanced DAX",
        ],
    },
    {
        title: "Data Modeling",
        icon: Layers,
        color: "cyan",
        skills: [
            "Star Schema",
            "Snowflake Schema",
            "SCD Type 2",
            "Dimensional Modeling",
            "Fact & Dimension Tables",
            "Data Warehousing",
        ],
    },
    {
        title: "Programming & Query",
        icon: Code2,
        color: "indigo",
        skills: [
            "Python (Pandas / NumPy)",
            "T-SQL",
            "SQL",
            "DAX",
            "Java",
            "TensorFlow / CNN",
        ],
    },
    {
        title: "DevOps & Collaboration",
        icon: GitBranch,
        color: "cyan",
        skills: [
            "Azure DevOps (CI/CD)",
            "Git / GitHub",
            "Agile / Scrum",
            "JIRA",
            "RBAC & Governance",
        ],
    },
    {
        title: "Analytics & Reporting",
        icon: BarChart2,
        color: "indigo",
        skills: [
            "Power BI Dashboards",
            "SQL Agent Monitoring",
            "Data Validation Frameworks",
            "SLA Compliance",
            "Proactive Alerting",
        ],
    },
];

export default function Skills() {
    return (
        <section id="skills" className="py-24 relative">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="section-heading">
                        Technical <span className="text-cyan-400">Expertise</span>
                    </h2>
                    <div className="section-accent-bar" />
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {SKILL_GROUPS.map((group, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="glass-card p-7 rounded-2xl group"
                        >
                            <div className="flex items-center gap-4 mb-6">
                                <div
                                    className={`p-3 rounded-xl transition-all duration-300 group-hover:scale-110 ${group.color === "cyan"
                                            ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:bg-cyan-500/20"
                                            : "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 group-hover:bg-indigo-500/20"
                                        }`}
                                >
                                    <group.icon className="w-5 h-5" />
                                </div>
                                <h3 className="text-lg font-bold">{group.title}</h3>
                            </div>

                            <div className="flex flex-wrap gap-2">
                                {group.skills.map((skill) => (
                                    <span key={skill} className="skill-tag">
                                        {skill}
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
