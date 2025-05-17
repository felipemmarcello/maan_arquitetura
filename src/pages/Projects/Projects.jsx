import { useState } from "react";
import { Card } from "primereact/card";
import { CSSTransition } from "primereact/csstransition";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.min.css";
import "./Projects.css"; // Crie esse arquivo para adicionar animações e estilos próprios
import Arquitetura from "../../images/arquitetura.jpg";
import Paisagismo from "../../images/paisagismo.jpg";
import Interiores from "../../images/interiores.jpeg";

export default function Projects() {
  const [selected, setSelected] = useState(null);

  const contentMap = {
    arquitetura:
      "Conteúdo sobre Arquitetura: projetos, conceitos e inspirações.",
    paisagismo:
      "Conteúdo sobre Paisagismo: integração com a natureza e design externo.",
    interiores:
      "Conteúdo sobre Interiores: design, funcionalidade e estética de ambientes.",
  };

  const handleClick = (type) => {
    setSelected(type);
  };

  return (
    <div className="projects-container">
      {!selected ? (
        <div className="card-container">
          {[
            { label: "Arquitetura", key: "arquitetura", img: Arquitetura },
            { label: "Paisagismo", key: "paisagismo", img: Paisagismo },
            { label: "Interiores", key: "interiores", img: Interiores },
          ].map((item) => (
            <Card
              key={item.key}
              className="project-card"
              onClick={() => handleClick(item.key)}
              style={{ cursor: "pointer", padding: 0, overflow: "hidden" }}
            >
              <div className="card-content-wrapper">
                <div className="image-title-above" style={{marginBottom: '0.5rem'}}>{item.label}</div>
                <div className="image-wrapper">
                  <img
                    src={item.img}
                    alt={item.label}
                    className="project-image"
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      ) : (
        <CSSTransition
          in={!!selected}
          timeout={300}
          classNames="fade"
          unmountOnExit
        >
          <div className="selected-content">
            <button
              onClick={() => setSelected(null)}
              className="p-button p-button-text"
            >
              Voltar
            </button>
            <h2>{selected.charAt(0).toUpperCase() + selected.slice(1)}</h2>
            <p>{contentMap[selected]}</p>
          </div>
        </CSSTransition>
      )}
    </div>
  );
}
