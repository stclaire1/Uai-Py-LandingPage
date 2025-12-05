import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@/contexts";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                </Routes>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
