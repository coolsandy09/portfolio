import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact from "./components/Contact/Contact";

export default function App() {
    return (
        <>
            <Navbar />
            <main>
                <Hero />
                <Skills />
                <Experience />
                <Projects />
                <Education />
            </main>
            <Contact />
        </>
    );
}
