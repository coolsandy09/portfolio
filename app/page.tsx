import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Research from "@/components/Research";
import Education from "@/components/Education";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-950 text-slate-200 selection:bg-cyan-500/30 selection:text-cyan-200">
            <Navbar />
            <Hero />
            <Stats />
            <Skills />
            <Experience />
            <Projects />
            <Research />
            <Education />
            <ContactForm />
            <Footer />
        </main>
    );
}
