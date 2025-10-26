import { Analytics } from "@vercel/analytics/react";
import Hero from "./components/hero/";
import Timeline from "./components/timeline";
import "./App.css";
import Projects from "./components/projects";

function App() {
    return (
        <div className="no-scrollbar root">
            <Hero />
            <Analytics />
            <Timeline />
            <Projects />
        </div>
    );
}

export default App;
