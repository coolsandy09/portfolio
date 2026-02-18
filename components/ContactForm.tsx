"use client";

import { motion } from "framer-motion";
import { Send, User, Mail, MessageSquare, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
import { useState, FormEvent } from "react";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [status, setStatus] = useState<FormStatus>("idle");
    const [errorMsg, setErrorMsg] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setStatus("sending");
        setErrorMsg("");

        try {
            const res = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, email, message }),
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.error || "Something went wrong");
            }

            setStatus("success");
            setName("");
            setEmail("");
            setMessage("");

            // Reset success state after 5s
            setTimeout(() => setStatus("idle"), 5000);
        } catch (err: any) {
            setStatus("error");
            setErrorMsg(err.message || "Failed to send message. Please try again.");
            setTimeout(() => setStatus("idle"), 5000);
        }
    };

    return (
        <section className="py-24 relative">
            <div className="max-w-3xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-12 text-center"
                >
                    <h2 className="section-heading">
                        Send a <span className="text-cyan-400">Message</span>
                    </h2>
                    <div className="section-accent-bar mx-auto" />
                    <p className="text-slate-400 mt-4 max-w-md mx-auto">
                        Have a project in mind or want to discuss data engineering opportunities? Drop me a message.
                    </p>
                </motion.div>

                <motion.form
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1, duration: 0.6 }}
                    onSubmit={handleSubmit}
                    className="glass-card p-8 md:p-10 rounded-3xl relative overflow-hidden"
                >
                    {/* Background glow */}
                    <div className="absolute top-0 right-0 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl -mr-12 -mt-12 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-40 h-40 bg-indigo-500/5 rounded-full blur-3xl -ml-10 -mb-10 pointer-events-none" />

                    <div className="relative z-10 space-y-6">
                        {/* Name Field */}
                        <div>
                            <label htmlFor="contact-name" className="block text-sm font-semibold text-slate-300 mb-2">
                                Name
                            </label>
                            <div className="relative">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                <input
                                    id="contact-name"
                                    type="text"
                                    required
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Your full name"
                                    className="w-full pl-11 pr-4 py-3.5 bg-slate-950/60 border border-slate-700/50 rounded-xl text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-300 text-sm"
                                />
                            </div>
                        </div>

                        {/* Email Field */}
                        <div>
                            <label htmlFor="contact-email" className="block text-sm font-semibold text-slate-300 mb-2">
                                Email
                            </label>
                            <div className="relative">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                                <input
                                    id="contact-email"
                                    type="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="your@email.com"
                                    className="w-full pl-11 pr-4 py-3.5 bg-slate-950/60 border border-slate-700/50 rounded-xl text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-300 text-sm"
                                />
                            </div>
                        </div>

                        {/* Message Field */}
                        <div>
                            <label htmlFor="contact-message" className="block text-sm font-semibold text-slate-300 mb-2">
                                Message
                            </label>
                            <div className="relative">
                                <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-slate-500" />
                                <textarea
                                    id="contact-message"
                                    required
                                    rows={5}
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    placeholder="Tell me about your project or opportunity..."
                                    className="w-full pl-11 pr-4 py-3.5 bg-slate-950/60 border border-slate-700/50 rounded-xl text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-cyan-400/50 focus:ring-1 focus:ring-cyan-400/20 transition-all duration-300 text-sm resize-none"
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            disabled={status === "sending"}
                            className="w-full py-4 bg-gradient-to-r from-cyan-500 to-indigo-500 hover:from-cyan-400 hover:to-indigo-400 text-white font-bold rounded-xl transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/30 hover:scale-[1.02] disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                        >
                            {status === "sending" ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Sending...
                                </>
                            ) : (
                                <>
                                    <Send className="w-4 h-4" />
                                    Send Message
                                </>
                            )}
                        </button>

                        {/* Status Messages */}
                        {status === "success" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-3 p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400"
                            >
                                <CheckCircle2 className="w-5 h-5 shrink-0" />
                                <span className="text-sm font-medium">Message sent successfully! I&apos;ll get back to you soon.</span>
                            </motion.div>
                        )}

                        {status === "error" && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="flex items-center gap-3 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400"
                            >
                                <AlertCircle className="w-5 h-5 shrink-0" />
                                <span className="text-sm font-medium">{errorMsg}</span>
                            </motion.div>
                        )}
                    </div>
                </motion.form>
            </div>
        </section>
    );
}
