import { Analytics } from "@vercel/analytics/react";
import Hero from "./components/hero/";
import Timeline from "./components/timeline";
import "./App.css";
import Projects from "./components/projects";
import Education from "./components/education";
import Contact from "./components/contact";

function App() {
    return (
        <div className="no-scrollbar root">
            <Hero />
            <Analytics />
            <Timeline />
            <Projects />
            <Education />
            <Contact />
        </div>
    );
}

export default App;
