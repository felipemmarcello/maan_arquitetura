import { useParams, useNavigate } from "react-router-dom";
import Arquitetura from "../../../images/arquitetura.jpg";
import Paisagismo from "../../../images/paisagismo.jpg";
import Interiores from "../../../images/interiores.jpeg";

const slugify = (text) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

export default function ProjectDetail() {
  const { categoria, slug } = useParams();
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
          description:
            "Prédio comercial com fachada espelhada e design arrojado.",
          image: Arquitetura,
        },
      ],
    },
    paisagismo: {
      title: "Paisagismo",
      projects: [
        {
          title: "Jardim Tropical",
          description:
            "Espaço com vegetação nativa e integração com a natureza.",
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

  const category = contentMap[categoria];
  const project = category?.projects.find((p) => slugify(p.title) === slug);

  if (!project) {
    return <div style={{ padding: "2rem" }}>Projeto não encontrado.</div>;
  }

  return (
    <div className="projects-container">
      <button onClick={() => navigate(-1)} className="p-button p-button-text">
        Voltar
      </button>
      <h2>{project.title}</h2>
      <img
        src={project.image}
        alt={project.title}
        className="project-image"
        style={{
          maxWidth: "400px",
          maxHeight: "400px",
          objectFit: "cover",
          borderRadius: "0.5rem",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      />
      <p style={{ marginTop: "1rem" }}>{project.description}</p>
    </div>
  );
}
