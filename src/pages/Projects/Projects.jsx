import { useNavigate } from "react-router-dom";
import { Card } from "primereact/card";
import Arquitetura from "../../images/arquitetura.jpg";
import Paisagismo from "../../images/paisagismo.jpg";
import Interiores from "../../images/interiores.jpeg";
import "./Projects.css";

const contentMap = {
  arquitetura: {
    title: "Arquitetura",
    image: Arquitetura,
  },
  interiores: {
    title: "Interiores",
    image: Interiores,
  },
  paisagismo: {
    title: "Paisagismo",
    image: Paisagismo,
  },
};

export default function Projects() {
  const navigate = useNavigate();

  return (
    <div className="projects-container">
      <div className="card-container">
        {Object.entries(contentMap).map(([key, value]) => (
          <Card
            key={key}
            className="project-card"
            onClick={() => navigate(`/projetos/${key}`)}
            style={{ cursor: "pointer", padding: 0, overflow: "hidden" }}
          >
            <div className="card-content-wrapper">
              <div className="image-title-above" style={{ marginBottom: "0.5rem", fontSize: "1rem" }}>
                {value.title}
              </div>
              <div className="image-wrapper">
                <img src={value.image} alt={value.title} className="project-image" />
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
