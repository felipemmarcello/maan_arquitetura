import { useParams, useNavigate } from "react-router-dom";
import { Button } from "primereact/button";
import InterioresImg1 from "../../../../images/interiores.jpeg";
import InterioresImg2 from "../../../../images/teste.jpg"; // exemplo imagem extra
import InterioresImg3 from "../../../../images/interiores.jpeg"; // repetida só pra exemplo

const slugify = (text) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const projetosInteriores = [
  {
    title: "Loft Minimalista",
    description: "Ambiente com decoração clean e funcional.",
    local: "Curitiba, PR",
    dataConclusao: "Outubro de 2022",
    area: "120 m²",
    images: [InterioresImg1, InterioresImg2, InterioresImg3], // múltiplas imagens
  },
];

export default function Interiores() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projetosInteriores.find((p) => slugify(p.title) === slug);

  if (!project) {
    return <div style={{ padding: "2rem" }}>Projeto não encontrado.</div>;
  }

  return (
    <div className="projects-container" style={{ padding: "1rem" }}>
      <Button
        icon="pi pi-chevron-left"
        className="p-button-text"
        aria-label="Voltar"
        onClick={() => navigate("/projetos/interiores")}
        style={{ color: "black", backgroundColor: "transparent" }}
      />
      <h2>{project.title}</h2>

      <div
        style={{
          display: "flex",
          gap: "2rem",
          marginTop: "1rem",
          alignItems: "flex-start",
          flexWrap: "wrap",
        }}
      >
        {/* Ficha técnica à esquerda */}
        <div
          style={{
            flex: "1 1 300px",
            maxWidth: "400px",
            borderRadius: "8px",
            padding: "1rem",
          }}
        >
          <p>
            <strong>Descrição:</strong> {project.description}
          </p>
          <p>
            <strong>Local:</strong> {project.local}
          </p>
          <p>
            <strong>Data de Conclusão:</strong> {project.dataConclusao}
          </p>
          <p>
            <strong>Área:</strong> {project.area}
          </p>
        </div>

        {/* Imagens à direita */}
        <div
          style={{
            flex: "2 1 600px",
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "flex-start",
          }}
        >
          {project.images.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`${project.title} ${index + 1}`}
              style={{
                width: "300px", // largura fixa
                height: "300px", // altura fixa
                objectFit: "cover",
                borderRadius: "0.5rem",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
