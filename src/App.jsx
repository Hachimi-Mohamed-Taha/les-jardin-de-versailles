import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";
import ProjectsPage from "./pages/ProjectsPage";
import ContactPage from "./pages/ContactPage";

/* optional but important for UX */
import { Navigate } from "react-router-dom";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/apropos" element={<AboutPage />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/projets" element={<ProjectsPage />} />
      <Route path="/contact" element={<ContactPage />} />

      {/* ✅ 404 fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}