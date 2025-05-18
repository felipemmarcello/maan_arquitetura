import { Sidebar } from "primereact/sidebar";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Divider } from "primereact/divider";
import Maann from "../images/maann.png";
import { Menu } from "lucide-react";
import { useEffect, useRef } from "react";

export default function Navbar() {
  const [visible, setVisible] = useState(false);
  const navigate = useNavigate();

  const [showNavbar, setShowNavbar] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY.current) {
        setShowNavbar(false); // Rolando para baixo
      } else {
        setShowNavbar(true); // Rolando para cima
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const navigateTo = (path) => {
    navigate(path);
    setVisible(false);
  };

  return (
    <>
      {/* Top navbar com logo à esquerda e menu à direita */}
      <div
        className="p-shadow-2"
        style={{
          position: "fixed",
          top: showNavbar ? "0" : "-80px",
          width: "100%",
          backgroundColor: "white",
          zIndex: 1000,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "0.5rem 3rem",
          transition: "top 0.3s ease-in-out",
        }}
      >
        <span
          onClick={() => navigateTo("/")}
          style={{
            position: "relative",
            cursor: "pointer",
            overflow: "hidden",
          }}
        >
          <div>
            <img src={Maann} style={{ marginTop: "5px", height: "35px" }} />
          </div>
        </span>

        <span
          onClick={() => setVisible(true)}
          style={{
            cursor: "pointer",
            fontSize: "2rem",
            color: "#000000",
            fontWeight: "500",
            transition: "color 0.3s ease",
          }}
        >
          <div>
            <Menu size={23} color="black" strokeWidth={2} />
          </div>
        </span>
      </div>

      {/* Sidebar do lado direito */}
      <div className="card flex justify-content-center">
        <Sidebar
          visible={visible}
          position="right"
          onHide={() => setVisible(false)}
          style={{
            width: "14rem",
            padding: "2rem 1rem",
            backgroundColor: "#e8e4d8",
            clipPath: "polygon(-458px 0px, 100% 0px, 100% 65%)",
            transition: "transform 0.3s ease-in-out",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "-1.5rem",
              marginTop: "-0.8rem",
            }}
          >
            <p style={{ color: "#000000", fontSize: "1.7rem" }}>Navegação</p>
          </div>

          <div
            style={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "-1.7rem",
            }}
          >
            <p style={{ color: "#000000" }}>______________________</p>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: "1.5rem",
              marginTop: "3.2rem",
            }}
          >
            {[
              { label: "SOBRE", path: "/sobre" },
              { label: "PROJETOS", path: "/projetos" },
              { label: "EQUIPE", path: "/equipe" },
              { label: "CONTATO", path: "/contato" },
            ].map((item, index) => (
              <span
                key={index}
                onClick={() => navigateTo(item.path)}
                style={{
                  position: "relative",
                  cursor: "pointer",
                  fontSize: "1rem",
                  color: "#000000",
                  fontWeight: "500",
                  transition: "color 0.3s ease-in-out",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = "#6b5b47";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = "#000000";
                }}
              >
                {item.label}
              </span>
            ))}
          </div>
        </Sidebar>
      </div>
    </>
  );
}
