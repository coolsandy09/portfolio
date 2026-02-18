"use client";

import { motion, useInView, useMotionValue, useTransform, animate } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Database, TrendingDown, Shield, Zap } from "lucide-react";

interface StatItem {
    numericValue: number;
    suffix: string;
    prefix: string;
    label: string;
    sublabel: string;
    icon: React.ElementType;
    color: string;
}

const STATS: StatItem[] = [
    {
        numericValue: 5,
        suffix: "TB+",
        prefix: "",
        label: "Data Processed Daily",
        sublabel: "Enterprise-scale pipelines",
        icon: Database,
        color: "cyan",
    },
    {
        numericValue: 90,
        suffix: "%",
        prefix: "",
        label: "Load Time Reduction",
        sublabel: "ETL optimized from 6h to 2h",
        icon: TrendingDown,
        color: "indigo",
    },
    {
        numericValue: 99.8,
        suffix: "%",
        prefix: "",
        label: "Pipeline Reliability",
        sublabel: "With RBAC governance",
        icon: Shield,
        color: "cyan",
    },
    {
        numericValue: 45,
        suffix: "%",
        prefix: "",
        label: "Query Time Cut",
        sublabel: "SSAS Tabular + DAX tuning",
        icon: Zap,
        color: "indigo",
    },
];

function AnimatedCounter({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) {
    const [display, setDisplay] = useState("0");

    useEffect(() => {
        if (!isInView) return;

        const isDecimal = value % 1 !== 0;
        const duration = 2000;
        const startTime = Date.now();

        const tick = () => {
            const elapsed = Date.now() - startTime;
            const progress = Math.min(elapsed / duration, 1);
            // Ease out cubic
            const eased = 1 - Math.pow(1 - progress, 3);
            const current = eased * value;

            if (isDecimal) {
                setDisplay(current.toFixed(1));
            } else {
                setDisplay(Math.floor(current).toString());
            }

            if (progress < 1) {
                requestAnimationFrame(tick);
            }
        };

        requestAnimationFrame(tick);
    }, [isInView, value]);

    return (
        <span>
            {display}{suffix}
        </span>
    );
}

export default function Stats() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section ref={ref} className="py-20 relative z-10 border-y border-slate-800/50 bg-slate-900/30">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {STATS.map((stat, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: index * 0.15 }}
                            className="text-center group"
                        >
                            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl mb-4 transition-all duration-300 group-hover:scale-110 ${stat.color === "cyan"
                                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/20"
                                    : "bg-indigo-500/10 text-indigo-400 border border-indigo-500/20"
                                }`}>
                                <stat.icon className="w-5 h-5" />
                            </div>
                            <div className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-cyan-400 to-indigo-500 mb-2 font-mono">
                                <AnimatedCounter value={stat.numericValue} suffix={stat.suffix} isInView={isInView} />
                            </div>
                            <div className="text-sm md:text-base text-slate-300 font-semibold tracking-wide uppercase mb-1">
                                {stat.label}
                            </div>
                            <div className="text-xs text-slate-500 font-medium">
                                {stat.sublabel}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
