import { useParams, useNavigate } from "react-router-dom";
import ArquiteturaImg from "../../../../images/arquitetura.jpg";
import ArquiteturaImg2 from "../../../../images/teste.jpg"; // Exemplo segunda imagem
import ArquiteturaImg3 from "../../../../images/arquitetura.jpg"; // Repetindo para exemplo
import ArquiteturaImg4 from "../../../../images/teste.jpg"; // Outra repetida
import { Button } from "primereact/button";

const slugify = (text) =>
  text
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)+/g, "");

const projetosArquitetura = [
  {
    title: "Casa Moderna",
    description: "Residência moderna com conceito aberto e linhas retas.",
    local: "São Paulo, SP",
    dataConclusao: "Dezembro de 2023",
    area: "350 m²",
    images: [ArquiteturaImg, ArquiteturaImg2, ArquiteturaImg3, ArquiteturaImg4], // Array de imagens
  },
  {
    title: "Edifício Espelhado",
    description: "Prédio comercial com fachada espelhada e design arrojado.",
    local: "Rio de Janeiro, RJ",
    dataConclusao: "Março de 2022",
    area: "1200 m²",
    images: [ArquiteturaImg, ArquiteturaImg2, ArquiteturaImg3, ArquiteturaImg4], // Exemplo com 2 imagens
  },
];

export default function Arquitetura() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const project = projetosArquitetura.find((p) => slugify(p.title) === slug);

  if (!project) {
    return <div style={{ padding: "2rem" }}>Projeto não encontrado.</div>;
  }

  return (
    <div className="projects-container" style={{ padding: "1rem" }}>
      <Button
        icon="pi pi-chevron-left"
        className="p-button-text"
        aria-label="Voltar"
        onClick={() => navigate(-1)}
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
