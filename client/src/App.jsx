import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Bio from "./sections/Bio";
import Projects from "./sections/Projects";
import PrivateProjects from "./sections/PrivateProjects";
import Story from "./pages/Story";
import Interests from "./pages/Interests";
import ProjectsPage from "./pages/ProjectsPage";
import ProjectDetail from "./pages/ProjectDetail";

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Bio />
              <Projects />
              <PrivateProjects />
            </>
          }
        />
        <Route path="/story" element={<Story />} />
        <Route path="/interests" element={<Interests />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>
    </Router>
  );
}
