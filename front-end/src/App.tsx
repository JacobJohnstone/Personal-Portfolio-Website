import { Analytics } from "@vercel/analytics/react";
import Home from "./components/homePage/NewHome";

function App() {
    return (
        <div>
            <div className="no-scrollbar">
                <Home />
                <Analytics />
            </div>
        </div>
    );
}

export default App;
