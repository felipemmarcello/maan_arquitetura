import { useParams, useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import { Button } from "primereact/button";

import ArquiteturaImg from "../../../images/arquitetura.jpg";
import InterioresImg from "../../../images/interiores.jpeg";
import PaisagismoImg from "../../../images/paisagismo.jpg";

const slugify = (text) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const contentMap = {
  arquitetura: {
    title: "Arquitetura",
    projects: [
      {
        title: "Casa Moderna",
        description: "Residência moderna com conceito aberto e linhas retas.",
        image: ArquiteturaImg,
      },
      {
        title: "Edifício Espelhado",
        description:
          "Prédio comercial com fachada espelhada e design arrojado.",
        image: ArquiteturaImg,
      },
    ],
  },
  interiores: {
    title: "Interiores",
    projects: [
      {
        title: "Loft Minimalista",
        description: "Ambiente com decoração clean e funcional.",
        image: InterioresImg,
      },
    ],
  },
  paisagismo: {
    title: "Paisagismo",
    projects: [
      {
        title: "Jardim Tropical",
        description: "Espaço com vegetação nativa e integração com a natureza.",
        image: PaisagismoImg,
      },
    ],
  },
};

export default function ProjectList() {
  const { categoria } = useParams();
  const navigate = useNavigate();

  const category = contentMap[categoria];

  if (!category) {
    return <div style={{ padding: "2rem" }}>Categoria não encontrada.</div>;
  }

  return (
    <div className="projects-container">
      <Button
        icon="pi pi-chevron-left"
        className="p-button-text"
        aria-label="Voltar"
        onClick={() => navigate("/projetos")}
        style={{ color: "black", backgroundColor: "transparent" }}
      />
      <h2>{category.title}</h2>
      <div className="project-list">
        {category.projects.map((proj) => (
          <Card
            key={proj.title}
            className="project-card-detail"
            onClick={() =>
              navigate(`/projetos/${categoria}/${slugify(proj.title)}`)
            }
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
