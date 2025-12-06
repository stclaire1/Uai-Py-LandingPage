import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from "@/contexts";
import { ErrorBoundary } from "@/components/ui/ErrorBoundary";
import { Home } from "./pages/Home";
import { Projects } from "./pages/Projects";

function App() {
    return (
        <BrowserRouter>
            <ThemeProvider>
                <ErrorBoundary>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/projects" element={<Projects />} />
                    </Routes>
                </ErrorBoundary>
            </ThemeProvider>
        </BrowserRouter>
    );
}

export default App;
