import { useState } from "react";
import { Card } from "primereact/card";
import { useNavigate } from "react-router-dom";
import "./Projects.css";

import Arquitetura from "../../images/arquitetura.jpg";
import Paisagismo from "../../images/paisagismo.jpg";
import Interiores from "../../images/interiores.jpeg";

const slugify = (text) =>
  text.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)+/g, "");

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const navigate = useNavigate();

  const contentMap = {
    arquitetura: {
      title: "Arquitetura",
      projects: [
        {
          title: "Casa Moderna",
          description: "Residência moderna com conceito aberto e linhas retas.",
          image: Arquitetura,
        },
        {
          title: "Edifício Espelhado",
          description: "Prédio comercial com fachada espelhada e design arrojado.",
          image: Arquitetura,
        },
      ],
    },
    paisagismo: {
      title: "Paisagismo",
      projects: [
        {
          title: "Jardim Tropical",
          description: "Espaço com vegetação nativa e integração com a natureza.",
          image: Paisagismo,
        },
      ],
    },
    interiores: {
      title: "Interiores",
      projects: [
        {
          title: "Loft Minimalista",
          description: "Ambiente com decoração clean e funcional.",
          image: Interiores,
        },
      ],
    },
  };

  if (!selectedCategory) {
    return (
      <div className="projects-container">
        <div className="card-container">
          {Object.entries(contentMap).map(([key, value]) => (
            <Card
              key={key}
              className="project-card"
              onClick={() => setSelectedCategory(key)}
              style={{ cursor: "pointer", padding: 0, overflow: "hidden" }}
            >
              <div className="card-content-wrapper">
                <div className="image-title-above" style={{marginBottom: '0.5rem', fontSize: '1rem'}}>{value.title}</div>
                <div className="image-wrapper">
                  <img src={value.projects[0].image} alt={value.title} className="project-image" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }

  const { title, projects } = contentMap[selectedCategory];

  return (
    <div className="projects-container">
      <button
        onClick={() => setSelectedCategory(null)}
        className="p-button p-button-text"
      >
        Voltar
      </button>
      <h2>{title}</h2>
      <div className="project-list">
        {projects.map((proj) => (
          <Card
            key={proj.title}
            className="project-card-detail"
            onClick={() => navigate(`/projetos/${selectedCategory}/${slugify(proj.title)}`)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={proj.image}
              alt={proj.title}
              className="project-image"
              style={{ height: "12rem", objectFit: "cover" }}
            />
            <div style={{ padding: "0.8rem" }}>
              <h3>{proj.title}</h3>
              <p>{proj.description}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
