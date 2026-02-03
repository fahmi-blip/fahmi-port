import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import ProjectPage from "./pages/Projects";
import AboutPage from "./pages/About";
import ContactPage from "./pages/Contact";
import { Navbar } from "./components/ui/navbar";
import { ParticlesBackground } from "./components/ui/background";

export default function App(){
  return (
    <>
      <Router>
      <ParticlesBackground />
      
      <div className="relative z-10">
        <Navbar />
        <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project" element={<ProjectPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        </main>
        </div>
      </Router>
    </>
  )
}

