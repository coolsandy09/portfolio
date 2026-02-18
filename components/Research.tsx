"use client";

import { motion, useInView } from "framer-motion";
import { BookOpen, CheckCircle2, Brain, FlaskConical, Target, Sparkles } from "lucide-react";
import { useRef, useEffect, useState } from "react";

function AccuracyBar({ isInView }: { isInView: boolean }) {
    const [width, setWidth] = useState(0);

    useEffect(() => {
        if (isInView) {
            const timer = setTimeout(() => setWidth(89), 300);
            return () => clearTimeout(timer);
        }
    }, [isInView]);

    return (
        <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-slate-400">Model Accuracy</span>
                <span className="text-sm font-mono text-cyan-400 font-bold">88–89%</span>
            </div>
            <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
                <motion.div
                    className="h-full bg-gradient-to-r from-cyan-500 to-indigo-500 rounded-full"
                    initial={{ width: "0%" }}
                    animate={{ width: isInView ? `${width}%` : "0%" }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
                />
            </div>
        </div>
    );
}

export default function Research() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section
            id="research"
            ref={ref}
            className="py-24 relative bg-slate-900/30 border-y border-slate-800/50"
        >
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mb-6 font-semibold text-sm">
                            <BookOpen className="w-4 h-4" />
                            <span>IEEE Publication</span>
                        </div>

                        <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            Advancing{" "}
                            <span className="gradient-text">
                                Tirhuta Digit Recognition
                            </span>
                        </h2>

                        <h3 className="text-lg text-slate-300 font-medium leading-relaxed mb-4 border-l-2 border-indigo-500 pl-4 italic">
                            &ldquo;An Empirical Comparison of Handwritten Character
                            Recognition Using Machine Learning&rdquo;
                        </h3>

                        <p className="text-slate-400 leading-relaxed mb-8">
                            Addressed the lack of digital resources for the Tirhuta
                            script by developing a Convolutional Neural Network (CNN)
                            capable of recognizing handwritten digits with high
                            precision. This research contributes to the preservation
                            and digitization of low-resource languages, bridging the
                            gap between ancient scripts and modern technology.
                        </p>

                        <a
                            href="https://ieeexplore.ieee.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group px-8 py-4 bg-gradient-to-r from-slate-100 to-white hover:from-white hover:to-slate-50 text-slate-950 font-bold rounded-xl transition-all inline-flex items-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 duration-300"
                        >
                            <BookOpen className="w-4 h-4" />
                            Read Paper on IEEE Xplore
                            <span className="group-hover:translate-x-1 transition-transform">→</span>
                        </a>
                    </motion.div>

                    {/* Right: Key Achievements Card */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden"
                    >
                        {/* Glow */}
                        <div className="absolute top-0 right-0 w-40 h-40 bg-cyan-500/10 rounded-bl-full blur-3xl" />
                        <div className="absolute bottom-0 left-0 w-32 h-32 bg-indigo-500/5 rounded-tr-full blur-2xl" />

                        <h3 className="text-2xl font-bold mb-8 flex items-center gap-3 relative z-10">
                            <CheckCircle2 className="text-green-500 w-6 h-6" />
                            Key Achievements
                        </h3>

                        <div className="space-y-5 relative z-10">
                            {[
                                { label: "Model Architecture", value: "Custom CNN", icon: Brain },
                                { label: "Accuracy Achieved", value: "88–89%", icon: Target },
                                { label: "Script", value: "Tirhuta (Maithili)", icon: Sparkles },
                                { label: "Impact", value: "Low-resource Language Digitization", icon: FlaskConical },
                            ].map((item, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                                    transition={{ delay: 0.4 + i * 0.1 }}
                                    className="flex items-center justify-between border-b border-slate-800/70 pb-4 last:border-0 last:pb-0"
                                >
                                    <div className="flex items-center gap-3">
                                        <item.icon className="w-4 h-4 text-slate-500" />
                                        <span className="text-slate-400 text-sm">{item.label}</span>
                                    </div>
                                    <span className="text-base font-bold text-white">{item.value}</span>
                                </motion.div>
                            ))}
                        </div>

                        {/* Accuracy Progress Bar */}
                        <AccuracyBar isInView={isInView} />
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
