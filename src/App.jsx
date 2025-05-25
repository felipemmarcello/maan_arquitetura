import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./pages/Home/Home.jsx";
import Sobre from "./pages/About/About.jsx";
import Projects from "./pages/Projects/Projects.jsx";
import ProjectList from "./pages/Projects/ProjectList/ProjectList.jsx";
import Arquitetura from "./pages/Projects/ProjectDetail/Arquitetura/Arquitetura.jsx";
import Interiores from "./pages/Projects/ProjectDetail/Interiores/Interiores.jsx";
import Paisagismo from "./pages/Projects/ProjectDetail/Paisagismo/Paisagismo.jsx";
import Equipe from "./pages/Team/Team.jsx";
import Contato from "./pages/Contact/Contact.jsx";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/sobre" element={<Sobre />} />
            <Route path="/projetos" element={<Projects />} />
              <Route path="/projetos/:categoria" element={<ProjectList />} />
                <Route path="/projetos/arquitetura/:slug" element={<Arquitetura />} />
                <Route path="/projetos/interiores/:slug" element={<Interiores />} />
                <Route path="/projetos/paisagismo/:slug" element={<Paisagismo />} />
            <Route path="/equipe" element={<Equipe />} />
            <Route path="/contato" element={<Contato />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
