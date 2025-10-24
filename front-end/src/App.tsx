import { Analytics } from "@vercel/analytics/react";
import Hero from "./components/hero/";

function App() {
    return (
        <div className="no-scrollbar">
            <Hero />
            <Analytics />
        </div>
    );
}

export default App;
