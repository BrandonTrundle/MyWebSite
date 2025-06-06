import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Bio from "./sections/Bio";
import Projects from "./sections/Projects";
import PrivateProjects from "./sections/PrivateProjects";
import Story from "./pages/Story";

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
      </Routes>
    </Router>
  );
}
